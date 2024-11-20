import {Icon} from "@iconify/react";
import {Button} from "antd";


const plans = [
    {
        id: 1,
        title: "Starter",
        description: "For small teams and individuals",
        price: "$23",
        buttonText: "Book a demo",
        buttonLink: "#",
        features: [
            "Up to 10 individual users",
            "Basic reporting and analytics",
            "Project Management",
            "20GB individual data each user",
            "Basic chat and email support"
        ]
    },
    {
        id: 2,
        title: "Business plan",
        description: "For small teams and individuals",
        price: "$61",
        subscribers: 0,
        buttonText: "Get started",
        buttonLink: "#",
        features: [
            "Up to 10 individual users",
            "Basic reporting and analytics",
            "Project Management",
            "20GB individual data each user",
            "Basic chat and email support"
        ]
    },
    {
        id: 3,
        title: "Enterprise plan",
        description: "For small teams and individuals",
        price: "$99",
        buttonText: "Start a free trial",
        buttonLink: "#",
        features: [
            "Up to 10 individual users",
            "Basic reporting and analytics",
            "Project Management",
            "20GB individual data each user",
            "Basic chat and email support"
        ]
    }
];

export default function Pricing(){
    return (
        <section className="bg-primary dark:bg-secondary-dark p-20 rounded-3xl my-20">
            <div className="text-secondary dark:text-background text-center space-y-3 mb-10">
                <h6 className="font-semibold">Pricing</h6>
                <h2 className="text-5xl font-semibold text-white">Simple, scalable pricing.</h2>
                <p className="text-lg text-dark dark:text-light">No extra charges. No hidden fees.</p>
            </div>
            <div className="grid grid-cols-3 gap-10 max-w-screen-xl mx-auto">
                {plans.map(plan => (
                    <div key={plan.id} className="rounded-xl bg-secondary dark:bg-foreground">
                        <div className="p-8 border-b border-b-primary/20 text-center space-y-5">
                            <div className="">
                                <div className="text-center mb-5">
                                    <div
                                        className="size-12 rounded-full bg-white dark:bg-dark shadow mx-auto flex items-center justify-center">
                                        <Icon icon="tabler:stack" className="text-2xl text-primary dark:text-light"/>
                                    </div>
                                    <h3 className="text-2xl mt-3 text-primary dark:text-primary-dark font-semibold">{plan.title}</h3>
                                </div>
                                <h1 className="">
                                    <span className="text-6xl font-bold">{plan.price}/</span>
                                    <span className="text-4xl font-semibold">mo</span>
                                </h1>
                                <p className="mt-4 text-gray-500">Billed annually</p>
                            </div>
                            <ul className="mt-5 space-y-5 text-dark">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <div
                                            className="size-6 bg-primary/15 dark:bg-primary-dark/15 rounded-full flex items-center justify-center">
                                            <Icon icon="iconamoon:check-bold" className="text-primary dark:text-primary-dark"/>
                                        </div>
                                        <span className="text-dark dark:text-light">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8">
                            <Button color="primary" className="w-full">Get Started</Button>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center text-gray-300 mt-10">
                Prices exclude any applicable taxes.
            </p>
        </section>
    )
}