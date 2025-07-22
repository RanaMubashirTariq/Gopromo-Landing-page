import React from "react";
import { Button } from "../../../../components/ui/button";
import dashboard from "../../../../Images/dashboard.svg";
import element from "../../../../Images/element-3.svg";
import icon from "../../../../Images/icon.svg";
import logo1 from "../../../../Images/logo-1.svg";
import block from "../../../../Images/block-logo.svg";
import group1 from "../../../../Images/group-1707486641-2.png";
import group2 from "../../../../Images/group-1707486641-1-1.png";
import sharputs from "../../../../Images/sharpcuts-1-1.png";

export const HeroBannerSection = (): JSX.Element => {
  // Partner logos data for mapping
  const partnerLogos = [
    {
      type: "image",
      src: icon,
      width: "130px",
      height: "32px",
      alt: "Group",
      className: "object-cover",
    },
    {
      type: "image",
      src: logo1,
      width: "66px",
      height: "30px",
      alt: "Logo",
      className: "bg-cover bg-[50%_50%]",
    },
    {
      type: "image",
      src: group1,
      width: "130px",
      height: "32px",
      alt: "Group",
      className: "object-cover",
    },
    {
      type: "image",
      src: group2,
      width: "160px",
      height: "32px",
      alt: "Group",
      className: "object-cover",
    },
    {
      type: "image",
      src: sharputs,
      width: "105px",
      height: "32px",
      alt: "Sharpcuts",
      className: "object-cover",
    },
    {
      type: "image",
      src: block,
      width: "105px",
      height: "32px",
      alt: "Sharpcuts",
      className: "object-cover",
    },
  ];

  return (
    <section className="flex w-full items-start justify-center relative">
      <img
        className="absolute w-[1624px] h-[690px] top-[80px] left-1/2 -translate-x-1/2 max-[1300px]:top-[110px] max-[1100px]:top-[180px] max-[1000px]:top-[40px] max-[560px]:top-[40px] max-[500px]:top-[60px] max-[413px]:top-[150px] max-[395px]:top-[195px] max-[365px]:top-[220px] max-[340px]:top-[270px]"
        alt="Background element"
        src={element}
      />
      <div className="flex flex-col w-full pt-16 pb-12 px-[115px] max-[1300px]:px-[80px] max-[1100px]:px-[40px] max-[1000px]:py-[40px]  max-[1000px]:px-[20px]  items-center gap-14 relative">
        <div className="flex-col items-center gap-20 self-stretch w-full flex relative max-[680px]:gap-[50px]">
          {/* Background element */}

          <div className="flex-col w-full max-w-[1027px] items-center gap-8 max-[680px]:gap-4 flex relative z-10">
            <div className="inline-flex flex-col items-center gap-4 max-[1000px]:gap-2 relative">
              <div className="inline-flex items-center flex-col gap-2 relative ">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Display-Regular',Helvetica] font-normal text-primary-colorsaccent text-lg text-center tracking-[0] leading-[18px] whitespace-nowrap max-[500px]:text-[16px]">
                  Automation + Marketing Agency
                </div>

                <h1 className="w-full  [text-shadow:0px_2px_4px_#de294a0d] font-normal text-[56px] text-center leading-[68px] relative [font-family:'Plus_Jakarta_Display-Bold',Helvetica] shadow-other-text max-[1000px]:text-[36px] max-[1000px]:leading-[44px]">
                  <span className="font-bold text-[#1e2459] tracking-[-0.63px] max-[1000px]:leading-[44px]">
                    Never Miss a Lead -{" "}
                  </span>
                  <span className="font-bold text-[#007aff] tracking-[-0.63px] max-[1000px]:leading-[44px]">
                    Ever
                    <br className="max-[680px]:hidden" />
                  </span>
                  <span className="font-bold text-[#1e2459] tracking-[-0.63px] max-[1000px]:leading-[44px]">
                    {" "}
                    AI-Powered 24/7 Lead-Driving Machine
                  </span>
                </h1>
              </div>

              <p className="w-full max-w-[570px] text-base text-center tracking-[-0.16px] leading-[27px] relative [font-family:'Plus_Jakarta_Display-Regular',Helvetica] font-normal text-[#62668a]">
                Custom landing pages, mobile apps, AI chatbots &amp; CRM that
                capture, engage and convert every local lead—24/7, fully
                automated.
              </p>
            </div>

            <div className="flex flex-wrap items-start justify-center gap-6 relative">
              <Button className="h-[62px] px-8 py-[22px] bg-primary-colorsaccent rounded-[10px] shadow-general-shadows-shadow-04 text-neutral-colors100 font-text-single-200-medium text-base max-[500px]:text-sm max-[500px]:px-4 max-[500px]:py-[10px]">
                👋 Book Your Free Strategy Call
              </Button>

              <Button
                variant="outline"
                className="h-[62px] px-8 py-[22px] bg-neutral-colors100 rounded-[10px] border-[0.5px] border-solid border-[#bdbecc] shadow-[0px_3px_10px_#15229e0a] text-neutral-colors600 font-text-single-200-regular text-base max-[500px]:text-sm max-[500px]:px-4 max-[500px]:py-[10px]"
              >
                Our Services
              </Button>
            </div>
          </div>

          <img
            className="relative w-full max-w-[1094.99px] h-auto z-10"
            alt="Dashboard"
            src={dashboard}
          />
        </div>

           
                <div className="overflow-hidden w-full">
          <div className="animate-marquee whitespace-nowrap flex gap-8 md:gap-[72px] relative">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex items-center">
                {logo.type === "text" && (
                  <div className="inline-flex items-center gap-[6.95px]">
                    <img
                      className={`w-[${logo.iconWidth}] h-[${logo.iconHeight}] object-contain`}
                      alt="Icon"
                      src={logo.icon}
                    />
                    {logo.text}
                  </div>
                )}
                {logo.type === "image" && (
                  <div
                    className={`relative flex items-center justify-center object-contain`}
                    style={{ width: logo.width, height: logo.height }}
                    
                  >
                    <img
                    className="w-full h-full object-contain"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  </div>
                )}
              </div>
            ))}

               
               {/* Prt 2 */}
                  

          </div>

              
        </div>


      </div>
    </section>
  );
};
