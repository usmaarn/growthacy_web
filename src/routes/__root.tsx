/** @format */

import {createRootRouteWithContext, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import {CookiesProvider} from "react-cookie";
import {User} from "@/lib/types";

type RouterContext = {
    auth: {user: null| User}
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootApp,
});

function RootApp() {

  return (
    <CookiesProvider defaultSetOptions={{path: '/', sameSite: 'strict'}}>
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
    </CookiesProvider>
  );
}
