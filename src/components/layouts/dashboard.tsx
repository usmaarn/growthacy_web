import {ReactNode} from "react";


export default function DashboardLayout({children, title}: {
    children: ReactNode;
    title: string;
}) {
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-5">{title}</h3>
            <div className="">
                {children}
            </div>
        </div>
    )
}