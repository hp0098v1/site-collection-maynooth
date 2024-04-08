import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DROPDOWN_MENU_ITEMS } from "@/constants";

const Header = () => {
  return (
    <header className="flex justify-between items-center container py-4">
      {/* Dropdown Menu - Mobile */}
      <DropdownMenu>
        <DropdownMenuTrigger className="sm:hidden">
          <img loading="lazy" src="/assets/icons/menu.svg" alt="menu" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative top-2 sm:hidden" align="end">
          {DROPDOWN_MENU_ITEMS.map((item) => (
            <DropdownMenuItem key={`menu-item-${item.id}`}>
              <Link className="w-full text-right" to={item.path}>
                {item.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Logo */}
      <Link to={"/"}>
        <img loading="lazy" src="/logo.png" alt="logo" />
      </Link>

      {/* Menu - Desktop */}
      <div className="max-sm:hidden flex items-center gap-4">
        {DROPDOWN_MENU_ITEMS.map((item) => (
          <Link
            className="body cursor-pointer hover:text-primary hover:border-b hover:border-primary transition"
            key={`menu-item-desktop-${item.id}`}
            to={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className="flex justify-center items-center gap-3">
        <img
          className="cursor-pointer"
          loading="lazy"
          src="/assets/icons/user.svg"
          alt="user"
        />
        <img
          className="cursor-pointer"
          loading="lazy"
          src="/assets/icons/cart.svg"
          alt="cart"
        />
        <img
          className="cursor-pointer max-sm:hidden"
          loading="lazy"
          src="/assets/icons/search.svg"
          alt="search"
        />
      </div>
    </header>
  );
};

export default Header;
