/** @format */

import {Icon} from "@iconify/react";
import {Link} from "@tanstack/react-router";
import {Button, Dropdown, MenuProps} from "antd";
import {useState} from "react";
import ApplicationLogo from "@/components/application-logo";
import {useStore} from "@/lib/store";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useStore(state => state.user);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/">Blogs</Link>,
    },
    {
      key: "2",
      label: <Link href="/">About</Link>,
    },
    {
      key: "3",
      label: <Link href="/">Contact</Link>,
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto flex items-center gap-5 justify-between h-[80px] px-5">
      <div>
        <Icon icon="" className="sm:hidden" />
        <ApplicationLogo />
      </div>

      <ul className="hidden sm:flex gap-10">
        <li>
          <Link color="foreground" href="#" className="text-lg">
            Products
          </Link>
        </li>
        <li>
          <Dropdown menu={{ items }}>
            <a className="cursor-pointer">Resources</a>
          </Dropdown>
        </li>
        <li>
          <Link color="foreground" href="#" className="text-lg">
            Pricing
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-5">
        {user ? (
          <Link to="/dashboard" type="primary">Dashboard</Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">
              <Button type="primary">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
