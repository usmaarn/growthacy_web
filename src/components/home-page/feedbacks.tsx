import {Link} from "@tanstack/react-router";

export default function Feedbacks(){
    return (
        <section className="max-w-screen-lg mx-auto mb-20">
            <div className="grid grid-cols-3 rounded-3xl overflow-hidden ">
                <div className="p-10 bg-secondary dark:bg-secondary-dark col-span-2">
                    <img src="/companies/gigbanc.png" alt="Gigbanc" className="bg-white mb-10"/>
                    <blockquote className="text-2xl text-dark dark:text-light">
                        “We are based in Europe and the latest Data Protection Regulation forces us to look for
                        service
                        suppliers than comply with this regulation and as we look to create our website and
                        this builder just outstanding!”
                    </blockquote>
                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold">Habeeb Ajijola</h3>
                        <p>Founder / CEO</p>
                    </div>
                </div>
                <div className="">
                    <img src="/assets/image.jpg" alt="" width={300} height={500} className="w-full h-full object-cover"/>
                </div>
            </div>
            <div className="text-center py-10">
                <Link href="#" className="text-primary dark:text-primary-dark hover:underline font-semibold">
                    See All Feedbacks &rarr;
                </Link>
            </div>
        </section>
    )
}