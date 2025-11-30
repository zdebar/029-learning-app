"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderButtonProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  href: string;
}

export default function HeaderButton({
  children,
  disabled = false,
  className = "",
  href,
  ...props
}: HeaderButtonProps) {
  const pathname = usePathname();
  const isSelected = pathname === href;

  if (disabled) {
    return (
      <span
        className={`shape-button-header color-button-header-disabled flex items-center justify-center ${className}`}
        aria-disabled="true"
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`shape-button-header color-button-header flex items-center justify-center ${
        isSelected ? "color-selected" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
