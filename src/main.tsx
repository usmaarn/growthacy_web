/** @format */

import {createRouter, RouterProvider} from "@tanstack/react-router";
import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import the generated route tree
import {routeTree} from "./routeTree.gen";
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import {getUser} from "@/lib/actions/auth";
import {User} from "@/lib/types";
import AntDesignProvider from "@/providers/ant-design";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    auth: {user: null}
  }
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
    const {data, isPending} = useQuery({
        queryFn: getUser,
        queryKey: ["user"]
    });

    if (isPending) return <div>Loading...</div>;

    return <RouterProvider router={router} context={{auth: {user: data as User}}} />;
}

const queryClient = new QueryClient();

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AntDesignProvider>
                <App />
            </AntDesignProvider>
        </QueryClientProvider>
    </StrictMode>
  );
}1