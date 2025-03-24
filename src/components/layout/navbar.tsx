import Logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Icons } from "../icons";
import { AlignJustify, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { to: "/", label: "Home" },
    {
      isDropdown: true,
      label: "Features",
      to: "",
      items: [
        { to: "/features", label: "Features" },
        { to: "/about", label: "About" },
        { to: "/integration", label: "Integration" },
        { to: "/case-studies", label: "Case Studies" },
        { to: "/blogs", label: "Blog" },
        { to: "/changelog", label: "Changelog" },
        { to: "/faq", label: "FAQ" },
        { to: "/career", label: "Careers" },
      ],
    },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  const renderMenu = () => (
    <nav className="flex flex-col md:flex-row gap-3 md:gap-7">
      {menuItems.map((item, index) =>
        item.isDropdown ? (
          <React.Fragment key={index}>
            {isMobile ? (
              <DropdownMenu key={index} modal={false}>
                <DropdownMenuTrigger className="text-lg font-medium flex items-center gap-2 focus-visible:outline-none">
                  {item.label} <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-44 divide-y p-0">
                  {item.items.map((dropdownItem, dindex) => (
                    <Link
                      key={dindex}
                      to={dropdownItem.to}
                      className="text-lg font-medium px-4 py-2 block hover:text-primary"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <HoverCard key={index} openDelay={300} closeDelay={300}>
                <HoverCardTrigger className="text-lg font-medium flex items-center gap-2 focus-visible:outline-none">
                  {item.label} <ChevronDown className="h-4 w-4" />
                </HoverCardTrigger>
                <HoverCardContent className="w-44 divide-y p-0">
                  {item.items.map((dropdownItem, dindex) => (
                    <Link
                      key={dindex}
                      to={dropdownItem.to}
                      className="text-lg font-medium px-4 py-2 block hover:text-primary"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </HoverCardContent>
              </HoverCard>
            )}
          </React.Fragment>
        ) : (
          <Link key={index} to={item?.to || ""} className="text-lg font-medium">
            {item.label}
          </Link>
        )
      )}
    </nav>
  );

  return (
    <header
      className={`fixed left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Clarity Logo" className="h-8 sm:h-10 w-auto" />
        </Link>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded border size-10"
              >
                <AlignJustify />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-5">
              <VisuallyHidden>
                <SheetTitle>Menu</SheetTitle>
              </VisuallyHidden>
              <div className="space-y-7">
                <Link to="/" className="flex items-center gap-2">
                  <img src={Logo} alt="Clarity Logo" className="h-10 w-auto" />
                </Link>
                {renderMenu()}
                <Button className="bg-foreground hover:bg-foreground/90 text-white">
                  Get Started
                  <Icons.rightArrow3 />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            {renderMenu()}
            <Button className="bg-foreground hover:bg-foreground/90 text-white">
              Get Started
              <Icons.rightArrow3 />
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
