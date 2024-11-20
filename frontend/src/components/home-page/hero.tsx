import {Button, Form, Input} from "antd";
import {Link} from "@tanstack/react-router";

export default function Hero(){
    return (
        <section className="bg-secondary dark:bg-secondary-dark pb-10">
            <div className="grid grid-cols-2 gap-8 max-w-screen-xl mx-auto mt-10 items-center p-5">
                <div className="space-y-5 px-5 md:px-0">
                    <h1 className="md:text-5xl font-semibold">
                        Tools that cover <span className="text-primary">all aspects</span> of your growing business.
                    </h1>
                    <p className="text-dark dark:text-light md:text-lg">
                        Say goodbye to the hassle of managing multiple software and tools for different tasks.
                        Lexend offers a comprehensive suite of tools that cover all aspects of your business.
                    </p>
                    <Form className="flex items-center gap-1">
                        <Input placeholder="Your email address..."/>
                        <Button color="primary" className="px-10" size="large">Subscribe</Button>
                    </Form>
                    <p className="text-sm">
                        We care about your data in our {' '}
                        <Link className="underline text-primary hover:bg-primary hover:text-white" href="#">
                            privacy policy
                        </Link>.
                    </p>
                </div>
                <div className="">
                    <img src='/dashboard.png' alt="Dashboard"/>
                </div>
            </div>
        </section>
    )
}