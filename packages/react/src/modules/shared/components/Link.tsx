import { ReactNode } from "react";
import { Link as WLink } from "wouter";

import { cx } from "@/modules/shared/utils/classnames";

import { ReactComponent as ChevronLeftIcon } from "@/modules/ui/icons/chevron-left.svg";

interface LinkProps {
  children: ReactNode;
  href: string;
}

export function Link({ children, href }: LinkProps) {
  return (
    <WLink href={href}>
      <a
        className={cx(
          "inline-flex items-center py-4",
          "border border-transparent",
          "font-semibold text-green-700",
          "transition-colors",
          "group hover:cursor-pointer",
          "hover:text-green-500 focus:border-teal-500",
        )}
      >
        {children}
        <div
          className={cx(
            "ml-2 w-4",
            "flex items-center",
            "transition-transform",
            "transform translate-x-0 rotate-180",
            "group-hover:translate-x-1",
          )}
        >
          <ChevronLeftIcon />
        </div>
      </a>
    </WLink>
  );
}
