import {Button} from "antd";

export default function CallToActionOne(){
    return (
        <section className="max-w-screen-xl mx-auto bg-secondary dark:bg-secondary-dark p-20 rounded-3xl my-20 text-center">
            <h1 className="mb-5 text-4xl font-semibold">
                Start your 30-day free trial.
            </h1>
            <p className="text-xl text-dark dark:text-light mb-8">
                Join over 2,500+ startups already growing with Lexend.
            </p>
            <div className="space-x-5">
                <Button size="large">View Demo</Button>
                <Button type="primary" size="large" variant="filled">Start free trial</Button>
            </div>
        </section>
    )
}