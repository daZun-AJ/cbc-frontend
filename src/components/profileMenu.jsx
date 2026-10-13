import { useEffect, useRef, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";

export function Avatar({ user, size = 36 }) {
    const [failed, setFailed] = useState(false);
    const initials = `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase();

    if (!user.image || failed) {
        return (
            <div
                style={{ width: size, height: size }}
                className="rounded-full bg-green-400 text-black font-bold flex items-center justify-center text-[14px] shrink-0"
            >
                {initials || "U"}
            </div>
        );
    }

    return (
        <img
            src={user.image}
            alt="profile"
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            style={{ width: size, height: size }}
            className="rounded-full object-cover shrink-0"
        />
    );
}

export default function ProfileMenu({ user, onLogout }) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    // close the popup when clicking outside or pressing Esc
    useEffect(() => {
        function handleClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        function handleEsc(e) {
            if (e.key === "Escape") setOpen(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div ref={wrapperRef} className="relative">
            <button
                onClick={() => setOpen((o) => !o)}
                className="pl-[6px] pr-[18px] py-[5px] border-[2px] border-green-400 rounded-full flex items-center gap-[10px] text-white hover:bg-green-400/20 duration-300 cursor-pointer"
            >
                <Avatar user={user} size={30} />
                <span className="text-[14px] max-w-[90px] truncate">{user.firstName}</span>
            </button>

            {open && (
                <div className="absolute right-0 top-[calc(100%+14px)] w-[280px] bg-white text-black rounded-2xl shadow-2xl border border-gray-200 p-[16px] flex flex-col gap-[14px] z-50">
                    {/* Profile details */}
                    <div className="flex items-center gap-[12px]">
                        <Avatar user={user} size={52} />
                        <div className="min-w-0">
                            <p className="font-semibold text-[15px] truncate">
                                {user.firstName} {user.lastName}
                            </p>
                            <p className="text-[12px] text-gray-500 truncate">{user.email}</p>
                            <span className="inline-block mt-[4px] px-[8px] py-[1px] rounded-full bg-green-400/20 text-green-700 text-[11px] font-semibold capitalize">
                                {user.role}
                            </span>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    {user.role === "admin" && (
                        <Link
                            to="/admin"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-[10px] px-[12px] py-[8px] rounded-lg text-[14px] hover:bg-gray-100 duration-200"
                        >
                            <MdOutlineAdminPanelSettings className="text-[18px]" />
                            Admin Panel
                        </Link>
                    )}

                    <button
                        onClick={() => {
                            setOpen(false);
                            onLogout();
                        }}
                        className="flex items-center justify-center gap-[10px] px-[12px] py-[8px] rounded-lg text-[14px] font-semibold text-red-500 border border-red-200 hover:bg-red-50 duration-200 cursor-pointer"
                    >
                        <FiLogOut />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
