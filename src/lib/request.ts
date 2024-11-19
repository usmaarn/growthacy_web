


import {extend} from "umi-request";
import cookies from "js-cookie";
import {config} from "@/lib/config";

const request = extend({
    prefix: config.backendUrl,
    timeout: 3000,
    credentials: "include",
    headers: {
        "Authorization": "Bearer " + cookies.get("accessToken")
    }
})

request.use(async (ctx, next) => {
    await next();
});

export const client = request;