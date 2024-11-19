/** @format */

import {FormInput} from "@/components/form";
import {client} from "@/lib/request";
import {Button, Form, theme} from "antd";
import {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {UserType} from "@/lib/enums";
import {NewUserSchema} from "@/lib/types";

export default function CompanyRegister() {
  const { token } = theme.useToken();
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
    <Card className="">
      <CardHeader>
        <CardTitle>Business Registration</CardTitle>
      </CardHeader>

      <CardContent>
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
      </CardContent>
    </Card>
  );
}
