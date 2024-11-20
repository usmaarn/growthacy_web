/** @format */

import {FormInput} from "@/components/form";
import {client} from "@/lib/request";
import {Button, Form} from "antd";
import {useState} from "react";
import {UserType} from "@/lib/enums";
import {NewUserSchema} from "@/lib/types";

export default function CompanyRegister() {
  const [form] = Form.useForm();
  const [errors, setErrors] = useState<Partial<NewUserSchema>>({});

  const onFinish = async (values: any) => {
    client
      .post("/auth/register", { data: { ...values, type: UserType.COMPANY } })
      .then((res) => {})
      .catch((err) => {
        setErrors(err.data.errors);
      });
  };

  return (
      <Form form={form} onFinish={onFinish} layout="vertical" className="">
        <FormInput
          error={errors.name}
          label="Business Name"
          name="name"
          rules={[{ required: true }]}
        />
        <FormInput
          error={errors.email}
          label="Business Email"
          name="email"
          rules={[{ required: true }]}
        />
        <FormInput
          type="password"
          error={errors.password}
          label="Password"
          name="password"
          rules={[{ required: true }]}
        />
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
  );
}
