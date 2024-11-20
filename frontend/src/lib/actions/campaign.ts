import {client} from "@/lib/request";
import {Campaign} from "@/lib/types";


export async function getCampaigns(): Promise<Campaign[]>{
    const data = await client.get('/campaigns')
    return data ?? [];
}