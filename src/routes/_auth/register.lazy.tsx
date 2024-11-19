/** @format */

import AmbassadorRegister from "@/components/register/ambassador";
import CompanyRegister from "@/components/register/company";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Card } from "antd";

export const Route = createLazyFileRoute("/_auth/register")({
  component: Register,
});

function Register() {
  return (
    <section className="w-full space-y-8">
      <h3 className="text-4xl text-center font-semibold">Sign Up</h3>

      <Tabs defaultValue="business" className="w-full max-w-[400px] mx-auto">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="ambassador">Ambassador</TabsTrigger>
        </TabsList>
        <TabsContent value="business">
          <CompanyRegister />
        </TabsContent>
        <TabsContent value="ambassador">
          <AmbassadorRegister />
        </TabsContent>
      </Tabs>

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
