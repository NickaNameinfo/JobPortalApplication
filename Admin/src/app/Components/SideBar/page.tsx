import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export const SideNavbar = () => {
  return (
    <>
      <div className="navBarStyle">
        <Link
          href="#"
          className="flex items-center justify-center border-b-2 border-b-white text-gray-900 dark:text-white group logoCls"
        >
          <span className="">
            <Image src={"/img/logo.png"} alt="logo" width={80} height={80} />
          </span>
        </Link>
        <aside id="default-sidebar" className="h-[80vh]" aria-label="Sidebar">
          <div className="h-full px-3 pb-4 pt-0 overflow-y-auto custom-scrollbar">
            <div className="scroll-content h-fit left-0 top-0 transition-transform z-40">
              <ul role="list" className="space-y-2 font-medium list-disc">
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <Link
                    href="/"
                    className="mt-7 p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Job List</p>
                    </div>
                  </Link>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <Link
                    href="/"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Company List</p>
                    </div>
                  </Link>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <Link
                    href="/"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>User List</p>
                    </div>
                  </Link>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <Link
                    href="/"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Applied List</p>
                    </div>
                  </Link>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <Link
                    href="/"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Settings</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
