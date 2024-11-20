import {createFileRoute, Outlet, redirect} from '@tanstack/react-router'
import AccountStatusBanner from "@/components/AccountStatusBanner";

export const Route = createFileRoute('/_dashboard_layout')({
  component: DashboardLayout,
  loader: async ({context: {auth: {user}}}) => {
    if (!user) throw redirect({to: "/login"})
  },
})

function DashboardLayout() {
  return (
    <div>
        <AccountStatusBanner />
      {/*<SidebarProvider>*/}
      {/*    <DashboardSidebar />*/}
          <main className="w-full">
              <nav className="border-b w-full h-12 flex items-center px-3">

              </nav>
              <div className="p-3">
                  <Outlet />
              </div>
          </main>
      {/*</SidebarProvider>*/}
    </div>
  )
}