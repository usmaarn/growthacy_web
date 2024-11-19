/** @format */

import { createFileRoute, Outlet } from "@tanstack/react-router";
import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";

export const Route = createFileRoute("/_public")({
  component: PublicLayout,
});

function PublicLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
