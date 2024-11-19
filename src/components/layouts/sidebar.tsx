import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import ApplicationLogo from "@/components/application-logo";
import {Button, Dropdown, Select, Tooltip} from "antd";
import {Link, useNavigate} from "@tanstack/react-router";
import {ChevronUp} from "lucide-react";
import {Icon} from "@iconify/react";
import {logout} from "@/lib/actions/auth";
import {useQuery} from "@tanstack/react-query";
import {getCampaigns} from "@/lib/actions/campaign";
import {useStore} from "@/lib/store";


export default function DashboardSidebar(){
    const user = useStore(state => state.user);

    return(
        <Sidebar>
            <SidebarHeader>
                <div className="px-2 py-3">
                    <ApplicationLogo />
                </div>
                <CompanySection hide={user?.type !== "company"} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                <Dropdown
                    trigger={["click"]}
                    menu={{
                        items: [
                            {key: '1', label: 'Profile',},
                            {key: '3', label: <Link to="/settings">Settings</Link>},
                            {key: '2', label: <button className="w-full text-left" onClick={logout}>Logout</button>,},
                        ],
                    }}
                    className="text-left"
                >
                    <a
                        onClick={e => e.preventDefault()}
                        className="text-left flex cursor-pointer items-center justify-between px-3 py-1 rounded-lg border bg-white text-sm"
                    >
                        <span>Account</span>
                        <ChevronUp className="size-4" />
                    </a>
                </Dropdown>
            </SidebarFooter>
        </Sidebar>
    )
}

function CompanySection({hide}: {hide?: boolean}) {
    if (hide) return null;

    const navigate = useNavigate();

    const onChange = async (value: string) => {
        await navigate({to: `/campaigns/${value}`})
    }

    const {data, isPending, isError} = useQuery({
        queryFn: getCampaigns,
        queryKey: ["campaigns"]
    })

    if (isPending) return <div>Loading...</div>;

    if (data) console.log(data)

    const options = data ? data.map(campaign => ({value: campaign.id, label: campaign.name})): [];

    return (
        <SidebarMenu>
            <SidebarMenuItem className="flex gap-1">
                <Select
                    onChange={onChange}
                    className="w-full col-span-4"
                    placeholder="Select a campaign"
                    options={isError ? [] : options}
                />
                <Tooltip title="New Campaign">
                    <Link to="/campaigns/new">
                        <Button icon={<Icon icon="ic:baseline-plus" />}/>
                    </Link>
                </Tooltip>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}