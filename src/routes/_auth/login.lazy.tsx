import {createLazyFileRoute, Link, useNavigate} from '@tanstack/react-router'
import {FormInput} from '@/components/form'
import {Button, Form, message} from 'antd'
import {useMutation} from "@tanstack/react-query";
import {login} from "@/lib/actions/auth";
import {useState} from "react";

export const Route = createLazyFileRoute('/_auth/login')({
  component: Login,
})

function Login() {
  const [form] = Form.useForm()
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [errors, setErrors] = useState<{message?: string; email?: string; password?: string}>({});

  const {mutate, isPending} = useMutation({
    mutationFn: async (values: any) => {
      const errors = await login(values);
      if (errors) setErrors(errors);
      messageApi.open({type: "error", content: errors?.message ?? errors?.email ?? errors?.password});
      throw new Error(errors?.message)
    },
    onSuccess: () => navigate({to: "/dashboard"})
  })

  return (
    <section className="w-full max-w-[350px] mx-auto space-y-8">
      {contextHolder}
      <h3 className="text-4xl text-center font-semibold">Sign In</h3>
      <div className="">
        <Form form={form} onFinish={mutate} layout="vertical">
          <FormInput error={errors?.email ?? errors.message} label="Email Address" name="email" rules={[{ required: true, type: 'email' }]}/>
          <FormInput error={errors?.password} label="Password" name="password" type="password" rules={[{ required: true }]}/>
          <Form.Item>
            <Button className="w-full" type="primary" size="large" htmlType="submit" loading={isPending}>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="mt-5 text-right w-full">
        <p>
          {"Don't"} have an account yet?{' '}
          <Link to="/register" className="hover:underline text-primary">
            Register
          </Link>
        </p>
        <p>
          Forgot your password?{' '}
          <Link href="/forgot-password" className="hover:underline text-primary">Reset Password</Link>
        </p>
      </div>
    </section>
  )
}
