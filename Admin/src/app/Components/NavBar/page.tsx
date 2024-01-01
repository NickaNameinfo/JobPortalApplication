import {
  Avatar,
  Button,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import * as React from "react";
import "../style.scss";
import { IconHome, IconInfo, IconProfile } from "../Icons";
import { SideNavbar } from "../SideBar/page";
import { Login } from "../Login/Login";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const NavBar = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("companyName");
  return (
    <>
      <div className="grid grid-cols-12 justify-between navBarStyle gap-4 items-center p-3">
        <div className="grid grid-cols-12 gap-2 col-span-4 items-center">
          <div className="col-span-2 text-center">
            <Button
              isIconOnly
              color="primary"
              className="bg-white"
              aria-label="Take a photo"
            >
              <IconHome height="16px" width="16px" />
            </Button>
          </div>
          <div className="col-span-10"></div>
        </div>
        <div className="col-span-8 flex justify-end">
          <div>{search ? <Avatar name={search} /> : <Login />}</div>
        </div>
      </div>
    </>
  );
};
