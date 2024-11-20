/** @format */

import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import ApplicationLogo from "@/components/application-logo";

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
  loader: ({ context: { auth } }) => {
    if (auth.user) return redirect({ to: "/dashboard" });
  },
});

function AuthLayout() {
  return (
    <main className="h-screen overflow-hidden">
      <div className="absolute top-5 left-5 md:top-10 md:left-10 z-50">
        <ApplicationLogo />
      </div>

      <div className="dark:bg-secondary-dark h-full overflow-y-auto flex items-center justify-center px-5 md:px-8 py-20">
        <Outlet />
      </div>
    </main>
  );
}
