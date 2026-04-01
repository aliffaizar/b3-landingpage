"use client"

import type { ComponentProps } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const menuItems = [
  { label: "Beranda", href: "#hero" },
  { label: "Layanan", href: "#services" },
  { label: "Tentang Kami", href: "#about" },
]

export const NavMenu = ({
  orientation,
  className,
  ...props
}: ComponentProps<typeof NavigationMenu> & {
  orientation?: "horizontal" | "vertical"
}) => (
  <NavigationMenu
    orientation={orientation}
    className={cn(
      orientation === "vertical" && "w-full max-w-full flex-col items-start",
      className
    )}
    {...props}
  >
    <NavigationMenuList
      className={cn(
        orientation === "vertical" &&
          "-ms-2 w-full flex-col items-start justify-start gap-2"
      )}
    >
      {menuItems.map((item) => (
        <NavigationMenuItem
          key={item.href}
          className={cn(orientation === "vertical" && "w-full")}
        >
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              orientation === "vertical" && "w-full justify-start"
            )}
            render={<a href={item.href} />}
          >
            {item.label}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
)
