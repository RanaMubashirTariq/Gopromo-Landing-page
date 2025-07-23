import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import logo from '../../../../Images/logo.svg'
import facebook from '../../../../Images/facebook.svg'
import twitter from '../../../../Images/Twitter.svg'
import instagram from '../../../../Images/Instagram.svg'
import linkedIn from '../../../../Images/LinkedIn.svg'

export const FooterSection = (): JSX.Element => {
  // Company navigation links
  const companyLinks = [
    { title: "Home", href: "#" },
    { title: "Packages", href: "#" },
    { title: "Case Studies", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contact", href: "#" },
  ];

  // Service categories with their links
  const serviceCategories = [
    {
      title: "Services",
      links: [
        "Social Media Marketing",
        "Content Creation+",
        "Paid Advertising",
        "Influencer & Growth",
      ],
    },
    {
      title: "Services",
      links: [
        "Airdrops & Rewards",
        "Community Management",
        "Growth Hacking",
        "SEO",
      ],
    },
    {
      title: "Services",
      links: [
        "Token Sale / IDO Support",
        "Email & Drip Campaigns",
        "PR & Media Relations",
        "Brand Strategy & Guidelines",
      ],
    },
  ];

  // Social media icons
  const socialIcons = [
    { src: facebook, alt: "Facebook" },
    { src: twitter, alt: "Twitter" },
    {
      src: instagram,
      alt: "Instagram",
    
    },
    { src: linkedIn , alt: "LinkedIn" },
  ];

  return (
    <footer className="flex flex-col items-center  pt-[100px] pb-[56px] px-[115.5px] max-[1300px]:px-[80px] max-[1100px]:px-[40px] max-[1100px]:pt-[60px] max-[1000px]:pt-[40px] max-[1000px]:px-[20px] max-[680px]:pb-[20px]  bg-white w-full">

      <div className="flex flex-col items-center gap-14 w-full max-[680px]:gap-6 ">


        <div className="flex items-center justify-between w-full gap-[72px] max-[1300px]:gap-[20px] max-[1100px]:flex-col max-[1100px]:items-start">
          {/* Left column - Logo, description and subscription */}
          <div className="flex flex-col items-start gap-8">
            {/* Logo and description */}
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2.5 overflow-hidden">
                  <img src={logo} alt="" />
              </div>

              <p className="w-[350px] [font-family:Helvetica] text-neutral-colors500">
                Boost your brand the smart way. Gopromo makes digital promotions
                simple, effective, and tailored to your goals.
              </p>
            </div>

            {/* Subscription form */}
            <div className="flex flex-col items-start gap-[18px]">
              <div className="flex w-[350px] items-center justify-between pl-4 pr-2 py-2 bg-white rounded-[10px]  border border-solid border-[#faf9fb] shadow-other-input  max-[400px]:w-[335px] max-[360px]:w-[320px] max-[345px]:w-[300px] max-[322px]:w-[280px]  ">
                <Input
                  className=" border-0 shadow-none [font-family:Helvetica] p-0 h-auto text-base leading-[27px] tracking-[-1%] font-normal text-[#62668A] placeholder:text-[#62668A] focus-visible:ring-0 w-full"
                  type="email"
                  placeholder="Enter your email"
                />
                <div className="w-[204px] h-12 flex items-center justify-end max-[450px]:w-full" />
              </div>

              <Button className="h-[62px] px-8 py-[22px] bg-[#f4263e] rounded-[10px] [font-family:'Plus_Jakarta_Display-Medium',Helvetica] font-medium text-white text-base tracking-[-0.16px] leading-[22px] shadow-[0px_2px_6px_#f4253d29] hover:bg-[#d61e35]">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Right columns - Navigation links */}
          <div className="flex items-start w-full justify-between gap-14 max-[1000px]:flex-wrap max-[450px]:gap-10">
            <div className="flex items-start gap-12 max-[1300px]:gap-10 max-[1000px]:flex-wrap max-[450px]:gap-6">
              {/* Company links column */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-4">
                  <h3 className="[font-family:Helvetica] font-normal text-[#f4263e] text-base text-right tracking-[-0.16px] leading-[22px] whitespace-nowrap">
                    Company
                  </h3>

                  {companyLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="[font-family:Helvetica] font-normal text-neutral-colors500 text-base text-right tracking-[-0.16px] leading-[22px] whitespace-nowrap"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Service category columns */}
              {serviceCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="flex flex-col items-start gap-4"
                >
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="[font-family:Helvetica] font-normal text-[#f4263e] text-base text-right tracking-[-0.16px] leading-[22px] whitespace-nowrap">
                      {category.title}
                    </h3>

                    {category.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className="[font-family:Helvetica]  font-normal text-neutral-colors500 text-base text-right tracking-[-0.16px] leading-[22px] whitespace-nowrap"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section with social icons and copyright */}
        <div className="flex items-center justify-between pt-10 pb-0 px-0 w-full border-t border-[#e7e8f1] max-[450px]:flex-col max-[450px]:items-center max-[450px]:gap-4 max-[450px]:pt-4">
          {/* Social media icons */}
          <div className="flex items-center gap-8 justify-center h-[30px] max-[480px]:gap-5">
          {socialIcons.map((icon, index) => (
              <img
                key={index}
                className={`object-cover ${icon.alt === "Instagram" ? "w-[57px] h-[56px] mt-[25px] " : "w-6 h-6"}`}
                alt={`Social media icon - ${icon.alt}`}
                src={icon.src}
              />
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-end">
            <p className="w-[250px] text-right [font-family:Helvetica] text-neutral-colors500 max-[480px]:w-full ">
              Copyright © GoPromo 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
