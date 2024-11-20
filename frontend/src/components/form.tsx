/** @format */

import { Button, Form, FormRule, Input } from "antd";

export type FormFieldProps = {
  error?: string;
  label: string;
  value?: string;
  type?: "input" | "password" | "textarea";
  name: string;
  rules?: FormRule[];
  placeholder?: string;
  defaultValue?: string | number;
  dependencies?: string[];
};

export function FormInput(props: FormFieldProps) {
  const formDisplay = () => {
    if (props.type === "textarea") {
      return (
        <Input.TextArea
          rows={6}
          size="large"
          className="w-full"
          placeholder={props.placeholder ?? props.label}
        />
      );
    } else if (props.type === "password") {
      return (
        <Input.Password
          className="w-full"
          size="large"
          placeholder={props.placeholder ?? props.label}
        />
      );
    }
    return (
      <Input
        size="large"
        className="w-full"
        placeholder={props.placeholder ?? props.label}
      />
    );
  };

  return (
    <Form.Item
      name={props.name}
      label={props.label}
      rules={props.rules}
      initialValue={props.defaultValue}
      validateStatus={props.error ? "error" : ""}
      help={props.error}
    >
      {formDisplay()}
    </Form.Item>
  );
}

export function SubmitButton() {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit" size="large">
        Submit
      </Button>
    </Form.Item>
  );
}
