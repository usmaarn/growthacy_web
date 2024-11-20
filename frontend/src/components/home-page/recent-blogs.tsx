import {Icon} from "@iconify/react";
import {Avatar, Button, Card} from "antd";
import {Link} from "@tanstack/react-router";
import dayjs from "dayjs";

const blogs = [
    {
        id: 1,
        category: "Design",
        title: "UX review presentations",
        image: "/assets/blogs/1.jpg",
        excerpt: "Join the thousands of satisfied users and take your business to the next level today and the power of streamlined business operations.",
        date: new Date(),
        author: {
            "name": "David"
        },
    },
    {
        id: 2,
        category: "Business",
        title: "Migrating to Linear 101",
        image: "/assets/blogs/2.jpg",
        excerpt: "Help you keep track of leads, contacts, and deals, making it easier to nurture and convert prospects into loyal customers.",
        date: new Date(),
        author: {
            "name": "Kevin"
        },
    },
    {
        id: 3,
        category: "Product",
        title: "Building your API stack",
        image: "/assets/blogs/3.jpg",
        excerpt: "You can personalize it to display the most relevant information and metrics for your business, giving you performance.",
        date: new Date(),
        author: {
            "name": "Sarah"
        },
    }
]

export default function RecentBlogs(){
    return(
        <section className="py-20 bg-secondary dark:bg-secondary-dark px-5 max-w-screen-2xl mx-auto">
            <div className="max-w-screen-xl mx-auto">
                <div className="">
                    <h6 className="font-medium mb-5 text-primary dark:text-primary-dark">Our Insights</h6>
                    <div className="flex items-center justify-between">
                        <h3 className="text-5xl font-semibold">Latest posts and updates</h3>
                        <Button type="primary" size="large">View All Blogs</Button>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
                    {blogs.map(blog => (
                        <Card key={blog.id} title={blog.title}>
                            <div className="">
                                <img src={blog.image} alt={blog.title}/>
                            </div>
                            <div className="p-5 items-start gap-2">
                                <h6 className="text-sm text-primary font-semibold dark:text-primary-dark">
                                    {blog.category}
                                </h6>
                                <h3 className="text-2xl font-semibold w-full">
                                    <Link href="#" className="group dark:text-light transition-colors hover:text-primary dark:hover:text-primary-dark w-full flex justify-between items-center">
                                        <span>{blog.title}</span>
                                        <Icon icon="mdi:arrow-right" className="text-3xl -rotate-45 group-hover:rotate-0 transition-transform"/>
                                    </Link>
                                </h3>
                                <p className="text-gray-500">{blog.excerpt}</p>
                                <div className="mt-3 flex items-center gap-2">
                                    <Avatar size="large" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                                    <div className="">
                                        <h5 className="font-bold">{blog.author.name}</h5>
                                        <p className="text-xs">{dayjs(blog.date).toDate().toDateString()}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}