/** @format */

import { Button, Form } from "antd";
import { useState } from "react";
import { NewUserSchema } from "@/lib/types";
import { client } from "@/lib/request";
import { FormInput } from "@/components/form";
import { useCookies } from "react-cookie";
import { storeToken } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {UserType} from "@/lib/enums";

export default function AmbassadorRegister() {
  const [form] = Form.useForm();
  const [errors, setErrors] = useState<Partial<NewUserSchema>>({});
  const {} = useCookies();

  const onFinish = async (values: any) => {
    client
      .post("/auth/register", { data: { ...values, type:  UserType.AMBASSADOR} })
      .then((res) => {
        storeToken(res.accessToken, res.expiresAt);
      })
      .catch((err) => {
        console.log(err)
        // setErrors(err.data.errors);
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
            error={errors.email}
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
