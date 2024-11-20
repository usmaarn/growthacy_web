import {Alert, Button} from "antd";
import {Link} from "@tanstack/react-router";
import {useStore} from "@/lib/store";


export default function AccountStatusBanner() {
    const user = useStore(state => state.user);

    if (user?.status === "banned") {
        return (
            <div className="fixed z-50 top-0 left-0 w-screen bg-white flex items-center justify-center h-screen">
                <Alert
                    message="Account Banned"
                    showIcon
                    description={
                        <div>
                            <p>Your account has been banned. Please contact us to appeal.</p>
                            <Link to="/" className="text-green-700 underline">Learn More</Link>
                        </div>
                    }
                    type="error"
                    action={
                        <Button size="small" danger>Appeal</Button>
                    }
                />
            </div>
        )
    }
}