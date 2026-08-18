import { Link, NavLink } from "react-router-dom";
import {
    MdOutlineDashboard,
    MdOutlineInventory2,
    MdOutlineShoppingBag,
    MdOutlineLogout,
} from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";

const links = [
    {
        to: "/admin",
        label: "Dashboard",
        icon: <MdOutlineDashboard />,
        end: true,
    },
    {
        to: "/admin/products",
        label: "Products",
        icon: <MdOutlineInventory2 />,
        end: true,
    },
    {
        to: "/admin/users",
        label: "Users",
        icon: <HiOutlineUsers />,
        end: true,
    },
    {
        to: "/admin/orders",
        label: "Orders",
        icon: <MdOutlineShoppingBag />,
    },
];

export default function AdminSidebar() {
    return (
        <aside
            className="
                w-full
                bg-black
                text-white
                font-raleway

                lg:w-[260px]
                lg:h-screen
                lg:sticky
                lg:top-0
                lg:flex
                lg:flex-col
                lg:p-[20px]
            "
        >
            {/* Logo */}
            <div
                className="
                    text-[20px]
                    px-[15px]
                    py-[15px]
                    border-b
                    border-white/10

                    lg:text-[24px]
                    lg:mb-[40px]
                    lg:px-[10px]
                    lg:py-0
                    lg:border-0
                "
            >
                CBC{" "}
                <span className="text-primary text-[12px] font-normal lg:text-[14px]">
                    Admin
                </span>
            </div>

            {/* Navigation */}
            <nav
                className="
                    flex
                    items-center
                    gap-[8px]
                    p-[10px]
                    overflow-x-auto
                    scrollbar-hide

                    lg:flex-col
                    lg:items-stretch
                    lg:p-0
                    lg:flex-1
                "
            >
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.end}
                        className={({ isActive }) =>
                            `
                            flex
                            items-center
                            justify-center
                            gap-[8px]
                            px-[14px]
                            py-[10px]
                            rounded-full
                            text-[13px]
                            whitespace-nowrap
                            duration-300
                            border-[2px]

                            lg:justify-start
                            lg:gap-[12px]
                            lg:px-[15px]
                            lg:py-[12px]
                            lg:text-[14px]

                            ${
                                isActive
                                    ? "bg-primary/20 text-primary border-primary"
                                    : "text-gray-300 border-transparent hover:bg-white/5"
                            }
                            `
                        }
                    >
                        <span className="text-[18px]">
                            {link.icon}
                        </span>

                        {link.label}
                    </NavLink>
                ))}
            </nav>

            {/* Logout */}
            <Link
                to="/logout"
                className="
                    hidden

                    lg:flex
                    items-center
                    gap-[12px]
                    px-[15px]
                    py-[12px]
                    rounded-full
                    text-[14px]
                    text-red-400
                    border-[2px]
                    border-transparent
                    hover:bg-red-400/10
                    duration-300
                    cursor-pointer
                "
            >
                <MdOutlineLogout className="text-[18px]" />
                Logout
            </Link>
        </aside>
    );
}