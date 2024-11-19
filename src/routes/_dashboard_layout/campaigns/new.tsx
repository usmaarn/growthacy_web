import {createFileRoute, useNavigate} from '@tanstack/react-router'
import DashboardLayout from "@/components/layouts/dashboard";
import {Button, Form} from "antd";
import {FormInput} from "@/components/form";
import {useMutation} from "@tanstack/react-query";
import {useState} from "react";

export const Route = createFileRoute('/_dashboard_layout/campaigns/new')({
  component: NewCampaign,
})

function NewCampaign() {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const {mutate, isPending, error} = useMutation({
        mutationFn: async (values: any) => {
            console.log(values)
        },
        onSuccess: () => {

        }
    })

  return (
    <DashboardLayout title="New Campaign">
      <Form
          name="basic"
          autoComplete="off"
          layout="vertical"

      >
        <FormInput
            label="Campaign Name"
            name="name"
            rules={[{required: true}]}
        />
        <FormInput
            label="Description"
            type="textarea"
            name="description"
            rules={[{required: true}]}
        />
        <Form.Item>
          <Button loading={isPending} size="large" type="primary" htmlType="submit">Create</Button>
        </Form.Item>
      </Form>
    </DashboardLayout>
  )
}