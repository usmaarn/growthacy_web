import {Icon} from "@iconify/react";
import {Link} from "@tanstack/react-router";

const features = [
    {
        id: 1,
        title: "Ensuring timely delivery and maximum efficiency",
        description: "We offers advanced project management features such as Gantt charts, task dependencies, and resource allocation",
        icon: "hugeicons:cloud-download",
        banner: "/assets/banner.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "Ensuring timely delivery and maximum efficiency",
        description: "We offers advanced project management features such as Gantt charts, task dependencies, and resource allocation",
        icon: "hugeicons:cloud-download",
        banner: "/assets/banner.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Ensuring timely delivery and maximum efficiency",
        description: "We offers advanced project management features such as Gantt charts, task dependencies, and resource allocation",
        icon: "hugeicons:cloud-download",
        banner: "/assets/banner.jpg",
        link: "#",
    }
];

export default function Features(){
    return (
        <section className="space-y-12 max-w-screen-xl mx-auto px-5">
            <div className="mt-20">
                <div className="space-y-5 text-center max-w-screen-sm mx-auto">
                    <h5 className="text-center font-semibold text-primary dark:text-primary-dark">Main features</h5>
                    <h1 className="text-5xl font-semibold">
                        A CRM tools help you keep track of leads
                    </h1>
                    <p className="md:text-xl text-dark dark:text-light">
                        Join the thousands of satisfied users and take your business to the next level.
                        Trusted by over 2,500 startups.
                    </p>
                </div>
                <div className="space-y-20 mt-20">
                    {features.map(feature => (
                        <div key={feature.id} className="flex even:flex-row-reverse gap-20 items-center mt-5">
                            <div className="basis-1/2">
                                <img src={feature.banner} alt="Banner" className="rounded-2xl"/>
                            </div>

                            <div className="basis-1/2">
                                <div
                                    className="size-12 rounded-md flex items-center justify-center bg-primary dark:bg-primary-dark dark:text-secondary-dark text-secondary mb-10">
                                    <Icon icon={feature.icon} className="text-3xl"/>
                                </div>
                                <h2 className="mb-4 text-4xl font-semibold">{feature.title}</h2>
                                <p className="mb-10 text-xl text-dark dark:text-light">{feature.description}</p>
                                <Link href={feature.link}>
                                    {`Let's find out`} &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}