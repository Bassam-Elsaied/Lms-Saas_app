'"use client"';
import { cn } from "@/lib/utils";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Links = [
  { label: "Home", path: "/" },
  { label: "Companions", path: "/companians" },
  { label: "My Profile", path: "/my-profile" },
];

function NavItems() {
  const pathName = usePathname();

  return (
    <div className="flex items-center gap-4 cursor-pointer">
      {Links.map((link) => (
        <Link
          key={link.label}
          href={link.path}
          className={cn(
            pathName === link.path ? "font-bold text-primary" : "font-semibold"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default NavItems;
