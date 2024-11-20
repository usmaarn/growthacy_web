
import {Icon} from "@iconify/react";
import {Collapse} from "antd";
import {Link} from "@tanstack/react-router";

const faqs = [
    {
        id: 1,
        question: "Do I need to know about how to code?",
        answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
    },
    {
        id: 2,
        question: "Can I use it for commercial projects?",
        answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
    },
    {
        id: 3,
        question: "Can I use it for multiple projects?",
        answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
    },
    {
        id: 4,
        question: "Can I use this to create and sell a product?",
        answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
    },
    {
        id: 5,
        question: "What is your refund policy?",
        answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
    }
]

export default function FAQs(){
    return (
        <section className="max-w-2xl mx-auto">
            <h2 className="text-4xl my-10 font-semibold text-center">
                Frequently asked questions:
            </h2>

            <Collapse defaultActiveKey={[]}>
                {faqs.map(faq => (
                    <Collapse.Panel key={faq.id} header={faq.question}>
                        <div dangerouslySetInnerHTML={{__html: faq.answer}} />
                    </Collapse.Panel>
                ))}
            </Collapse>

            <div className="text-center py-10">
                <Link href="#" className="text-primary hover:underline font-semibold">
                    Still have a question? &rarr;
                </Link>
            </div>
        </section>
    )
}