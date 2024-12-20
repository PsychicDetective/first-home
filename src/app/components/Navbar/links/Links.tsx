"use client"
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLinks/NavLink";

export interface LinkProps {
	title: string;
	path: string;
}

function Links() {
	const [open, setOpen] = useState(false)
	const links: LinkProps[] = [
		{
			title: "Home",
			path: "/",
		},
		{
			title: "About",
			path: "/about",
		},
		{
			title: "Blog",
			path: "/blog",
		},
    ];

	return ( 
        <div className="flex items-center gap-2.5">
            {links.map(link => <Link href={link.path} key={link.title}>{link.title}</Link> )}
			<Image className='block cursor-pointer md:hidden' src="/menu.png" alt="menu" width={30} height={30} onClick={() => setOpen((prev) => !prev)}/>
			{open && (
                <div className="absolute top-[100px] right-0 w-[50%] h-[calc(100vh-100px)] bg-bg flex flex-col items-center justify-center gap-2.5 md:hidden">
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Links;
