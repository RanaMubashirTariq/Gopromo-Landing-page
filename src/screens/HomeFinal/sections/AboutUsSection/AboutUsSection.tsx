import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import element from '../../../../Images/element.svg'
import aboutImge from '../../../../Images/about.jpg'

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center  relative bg-[#faf9fb] w-full pt-[116px] pb-[150px] px-[115.5px] max-[1300px]:px-[80px] max-[1100px]:px-[40px]  max-[1100px]:pt-[70px] max-[1100px]:pb-[100px] max-[1000px]:px-[20px] max-[1000px]:pt-[40px] max-[1000px]:pb-[60px]">
      <div className="flex items-center gap-[26px] w-full  relative max-[1100px]:items-start max-[900px]:flex-col">
        <div className="flex flex-col w-full max-w-[488px] items-start gap-10 relative max-[900px]:max-w-[100%]">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
              <div className="inline-flex items-center gap-3.5 relative">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Display-Regular',Helvetica] font-normal text-[#F4263E] text-lg tracking-[0] leading-[18px] whitespace-nowrap max-[1000px]:text-[16px]">
                  About Us
                </span>
              </div>

              <h2 className="w-full [text-shadow:0px_2px_4px_#de294a0d] font-bold text-[#1f2559] text-[38px] tracking-[-0.76px] leading-[48px] relative [font-family:'Plus_Jakarta_Display-Bold',Helvetica] shadow-other-text max-[1000px]:text-[36px]">
                Meet the Experts Powering Your Growth
              </h2>
            </div>

            <p className="self-stretch text-base tracking-[-0.16px] leading-[27px] relative [font-family:'Plus_Jakarta_Display-Regular',Helvetica] font-normal text-[#62668A]">
              We&apos;re a dedicated team of marketing strategists, AI
              engineers, and success specialists—relentlessly focused on turning
              every local search into a loyal customer. From geo‑targeted pages
              to 24/7 automated booking, we&apos;ve got your growth covered.
            </p>
          </div>

          <Button className="h-[62px] px-8 py-[22px] bg-[#F4263E] rounded-[10px] shadow-general-shadows-shadow-04 text-neutral-colors100 font-text-single-200-medium text-[length:var(--text-single-200-medium-font-size)] tracking-[var(--text-single-200-medium-letter-spacing)] leading-[var(--text-single-200-medium-line-height)] [font-style:var(--text-single-200-medium-font-style)]">
            Book A Growth Call
          </Button>
        </div>

        <div className="relative w-full max-w-[694px] h-[526px] max-[900px]:max-w-[100%] max-[1100px]:h-[450px] max-[900px]:h-[526px] max-[580px]:h-[470px] max-[430px]:h-[370px]">
          <div className="relative w-[757px] h-[526px] -left-8 max-[1300px]:w-[657px] max-[1100px]:w-[500px]  max-[900px]:w-[100%]">
            <img
              className="absolute w-[757px] h-[450px] top-10 left-0 max-[1300px]:w-[657px] max-[1100px]:w-[600px] max-[900px]:w-[100%] max-[900px]:left-8 max-[480px]:h-[350px] "
              alt="Element"
              src={element}
            />
            <div className="absolute w-[612px] h-[526px] max-[1300px]:w-[512px]  max-[1100px]:w-[380px] max-[1100px]:h-[450px] max-[900px]:w-[80%] max-[420px]:w-[85%] max-[900px]:h-[526px] max-[580px]:h-[470px] max-[480px]:h-[390px] max-[395px]:h-[360px]  top-0 left-[76px] max-[420px]:left-[50px] rounded-[40px] shadow-general-shadows-shadow-07 bg-[url(/image.png)] bg-cover bg-[50%_50%] border-0">
                <img src={aboutImge} alt=""  className="w-full h-full object-conver rounded-[40px] max-[680px]:rounded-[20px]"/>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
