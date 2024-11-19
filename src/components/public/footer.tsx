import ApplicationLogo from "@/components/application-logo";
import {Button, Input} from "antd";
import {Link} from "@tanstack/react-router";

const footer_menu = [
  {
    id: 1,
    label: "Menu 1",
    links: [
      {id: 1, label: "Link 1", link: "#"},
      {id: 2, label: "Link 2", link: "#"},
      {id: 3, label: "Link 3", link: "#"},
      {id: 4, label: "Link 4", link: "#"},
      {id: 5, label: "Link 5", link: "#"},
    ]
  },
  {
    id: 2,
    label: "Menu 2",
    links: [
      {id: 1, label: "Link 1", link: "#"},
      {id: 2, label: "Link 2", link: "#"},
      {id: 3, label: "Link 3", link: "#"},
      {id: 4, label: "Link 4", link: "#"},
      {id: 5, label: "Link 5", link: "#"},
    ]
  },
  {
    id: 3,
    label: "Menu 3",
    links: [
      {id: 1, label: "Link 1", link: "#"},
      {id: 2, label: "Link 2", link: "#"},
      {id: 3, label: "Link 3", link: "#"},
      {id: 4, label: "Link 4", link: "#"},
      {id: 5, label: "Link 5", link: "#"},
    ]
  }
];

export default function Footer(){
  return(
      <footer className="space-y-10 bg-gray-900 px-5 py-10 text-gray-400 max-w-screen-xl mx-auto">
        <section className="flex flex-col md:flex-row gap-5 items-center justify-between bg-secondary">
          <ApplicationLogo/>
          <div className="">
            <h5 className="text-lg font-semibold mb-1">Subscribe for updates</h5>
            <div className="flex items-center gap-1">
              <Input placeholder="Enter email address..."/>
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-10 mb-10 border-b">
          {footer_menu.map(menu => (
              <ul key={menu.id}>
                <li>{menu.label}</li>
                {menu.links.map(link => (
                    <li key={link.id}>
                      <Link href={link.link}>{link.label}</Link>
                    </li>
                ))}
              </ul>
          ))}
        </section>
        <section className="flex flex-col items-center justify-between gap-5">
          <div className="flex text-center flex-nowrap gap-5">
            <p>Growthacy &copy; {new Date().getFullYear()}, All Rights Reserved. </p>
            <Link href="#">Privacy Notice</Link>
            <Link href="#">Legal</Link>
            <Link href="#">Cookie Settings</Link>
          </div>
          <div className="">

          </div>
        </section>
      </footer>
  )
}