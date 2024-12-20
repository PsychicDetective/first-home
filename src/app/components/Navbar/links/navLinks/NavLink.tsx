"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkProps } from "../Links";

interface NavLinkProps {
    item: LinkProps
}

function NavLink({item}: NavLinkProps){
    const pathName = usePathname();
    const {path, title} = item

    return (
        <Link
            href={path}
            className={`min-w-[100px] px-4 py-2 rounded-full font-medium text-center ${pathName === path ? 'bg-text text-bg' : ''}`}
        >
            {title}
        </Link>
    );
};

export default NavLink;