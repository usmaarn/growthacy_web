import {client} from "@/lib/request";
import {User} from "@/lib/types";
import {store} from "@/lib/store";
import cookies from "js-cookie";
import {redirect} from "@tanstack/react-router";

//Fetch Authenticated User Data
export async function getUser(): Promise<User|null>{
    const user = store.getState().user;
    if (user) return user;
    const data = await client.get('/auth/user')
        .catch(err => console.log(err.data));
    store.getState().set({user: data})
    return data ||null;
}


// Logout
export async function logout(){
    await client.post('/auth/logout')
    store.getState().set({user: null})
    cookies.remove("accessToken")
    throw redirect({to: "/login"})
}


//Login Props
export type LoginError = {
    message?: string; email?: string; password?: string
}

//Login
export async function login(credentials: { email: string; password: string }): Promise<void|LoginError> {
    try {
        const data = await client.post('/auth/login', {data: credentials})
        cookies.set("accessToken", data.accessToken)
        await getUser();
    }catch (err: any) {
        return err?.data ? {...err?.data, ...err?.data?.errors} : {message: err?.message};
    }
}