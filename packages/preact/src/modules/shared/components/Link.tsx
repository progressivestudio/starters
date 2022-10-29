import { ComponentChildren } from "preact";

import { cx } from "@/modules/shared/utils/classnames";

import { ReactComponent as ChevronLeftIcon } from "@/modules/ui/icons/chevron-left.svg";

interface LinkProps {
  children: ComponentChildren;
  href: string;
}

export function Link({ children, href }: LinkProps) {
  return (
    <a
      class={cx(
        "inline-flex items-center py-4",
        "border border-transparent",
        "font-semibold text-green-700",
        "transition-colors",
        "group hover:cursor-pointer",
        "hover:text-green-500 focus:border-teal-500",
      )}
      href={href}
    >
      {children}
      <div
        class={cx(
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
  );
}
