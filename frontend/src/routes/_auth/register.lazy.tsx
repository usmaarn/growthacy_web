/** @format */

import AmbassadorRegister from "@/components/register/ambassador";
import CompanyRegister from "@/components/register/company";
import {createLazyFileRoute, Link} from "@tanstack/react-router";
import {useState} from "react";
import {Card, Segmented, Typography} from "antd";

export const Route = createLazyFileRoute("/_auth/register")({
  component: Register,
});

function Register() {
    const [form, setForm] = useState<"business"|"ambassador"|string>("ambassador")

  return (
    <section className="w-full space-y-8 max-w-lg">
        <Typography.Title>Sign Up</Typography.Title>

        <Segmented
            block
            size="large"
            className="capitalize"
            options={["ambassador", "business"]}
            onChange={option => setForm(option as string)}
        />

        <Card>
            <Typography.Title level={3}>
                {form === "business" ? "Business" : "Ambassador"} Registration Form
            </Typography.Title>

            <div className="">
                {form === "ambassador" && <AmbassadorRegister />}
                {form === "business" && <CompanyRegister />}
            </div>

        </Card>

      <div className="text-right w-full">
        <p>
          Already have an account?{" "}
          <Link href="/login" className="hover:underline text-primary">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
