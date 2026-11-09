"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** The header persists across client navigations, so close the <details> mobile menu when the route changes. */
export function CloseMenuOnNavigate({ id }: { id: string }) {
  const pathname = usePathname();
  useEffect(() => {
    const menu = document.getElementById(id);
    if (menu instanceof HTMLDetailsElement) menu.open = false;
  }, [pathname, id]);
  return null;
}
