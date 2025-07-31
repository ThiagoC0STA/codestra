"use client";

import React from "react";

import { init_classic_menu_resize } from "@/utils/menuToggle";
import { scrollToElement } from "@/utils/scrollToElement";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Nav2({ links }: any) {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      scrollToElement();
    }, 1000);
    init_classic_menu_resize();

    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, []);

  return (
    <>
      {links.map((item: any, index: any) => (
        <li key={index}>
          <Link
            href={item.href || "#"}
            className={
              pathname.split("/")[1] === (item.href || "").split("/")[1]
                ? "active"
                : ""
            }
          >
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
}
