import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import logo from "../../../../Images/logo.svg";

export const NavigationHeaderSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero"); // Track the active link

  // Navigation menu items data
  const menuItems = [
    { label: "Home", target: "hero" },
    { label: "Services", target: "services" },
    { label: "Case Studies", target: "case-studies" },
    { label: "About", target: "about" },
  ];

  return (
    <header className="fixed top-0 lef-0 z-50 shadow-md w-full bg-white pt-[32px] max-[680px]:pt-[20px] max-[680px]:pb-[20px] pl-[116px] pb-[34px] pr-[115px] max-[1300px]:pl-[80px] max-[1300px]:pr-[80px] max-[1100px]:pl-[40px] max-[1100px]:pr-[40px] max-[1000px]:pl-[20px] max-[1000px]:pr-[20px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative">
            <div className="relative w-[150.31px] h-[29.25px] flex items-center gap-[10px]">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>

        {/* Hamburger Menu Icon - only visible at 1000px and below */}
        <button
          className="hidden max-[1000px]:block focus:outline-none"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Navigation Menu - visible above 1000px */}
        <nav className="flex-1 flex items-center justify-center min-[1001px]:flex max-[1000px]:hidden">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex gap-8">
              {menuItems.map((item) => (
                <ScrollLink
                  key={item.target}
                  to={item.target}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  spy={true}
                  onClick={() => {
                    setActiveLink(item.target); // Set the active link
                    setIsMenuOpen(false); // Close menu on click
                  }}
                  className="cursor-pointer"
                >
                  <NavigationMenuLink
                    className={`inline-flex items-center justify-center gap-1.5 ${
                      activeLink === item.target
                        ? "[font-family:'Plus_Jakarta_Display-Medium',Helvetica] font-medium text-[#f4263e]"
                        : "[font-family:'Plus_Jakarta_Display-Regular',Helvetica] font-normal text-[#1f2559]"
                    } text-base tracking-[-0.16px] leading-[22px]`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </ScrollLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA Button - visible above 1000px */}
        <div className="min-[1001px]:block max-[1000px]:hidden">
          <Button className="h-12 px-[22px] py-4 bg-[#f4263e] rounded-[10px] text-neutral-colors100 shadow-[0px_2px_6px_#f4253d29] font-text-single-200-medium text-[length:var(--text-single-200-medium-font-size)] tracking-[var(--text-single-200-medium-letter-spacing)] leading-[var(--text-single-200-medium-line-height)]">
            👋 Book Your Free Strategy Call
          </Button>
        </div>
      </div>

      {/* Mobile Menu - visible at 1000px and below */}
      {isMenuOpen && (
        <div className="max-[1000px]:block min-[1001px]:hidden mt-4">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-4 items-center">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.target}>
                  <ScrollLink
                    to={item.target}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    spy={true}
                    onClick={() => {
                      setActiveLink(item.target); // Set the active link
                      setIsMenuOpen(false); // Close menu when link is clicked
                    }}
                    className="cursor-pointer w-full text-center"
                  >
                    <NavigationMenuLink
                      className={`inline-flex items-center justify-center gap-1.5 ${
                        activeLink === item.target
                          ? "[font-family:'Plus_Jakarta_Display-Medium',Helvetica] font-medium text-[#f4263e]"
                          : "[font-family:'Plus_Jakarta_Display-Regular',Helvetica] font-normal text-[#1f2559]"
                      } text-base tracking-[-0.16px] leading-[22px] w-full`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </ScrollLink>
                </NavigationMenuItem>
              ))}
              <Button className="mt-4 h-12 px-[22px] py-4 bg-[#f4263e] rounded-[10px] text-neutral-colors100 shadow-[0px_2px_6px_#f4253d29] font-text-single-200-medium text-[length:var(--text-single-200-medium-font-size)] tracking-[var(--text-single-200-medium-letter-spacing)] leading-[var(--text-single-200-medium-line-height)]">
                👋 Book Your Free Strategy Call
              </Button>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
};
