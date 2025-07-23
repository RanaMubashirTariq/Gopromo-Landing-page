import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import illustrationCta1 from '../../../../Images/illustration-cta-02.svg'
import illustrationCta2 from '../../../../Images/illustration-cta-01.svg'


export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center py-[140px] w-full max-[1300px]:py-[100px] max-[1100px]:py-[60px] max-[1000px]:py-[40px] max-[1000px]:px-[20px] ">
      <div className="flex flex-col items-center gap-12 w-full">
        <div className="flex flex-col items-center gap-4">
          <h2 className="w-[492px] [font-family:Helvetica]  text-center font-bold text-[#1f2559] text-[38px] tracking-[-0.76px] leading-[48px] w-full  max-[1000px]:text-[36px] max-[1000px]:leading-[44px] max-[680px]:text-[28px] max-[680px]:leading-[36px]">
            Need help with a project?
          </h2>

          <p className="w-[488px] [font-family:Helvetica] font-[number:var(--paragraph-default-font-weight)] text-neutral-colors500 text-[length:var(--paragraph-default-font-size)] text-center tracking-[var(--paragraph-default-letter-spacing)] leading-[var(--paragraph-default-line-height)] [font-style:var(--paragraph-default-font-style)] max-[680px]:w-full">
            Ready to elevate your project? Let&apos;s connect and turn your
            vision into reality together!
          </p>
        </div>

        <div className="relative w-full max-w-[837px] h-[471px] max-[900px]:h-[850px] max-[680px]:max-w-full">
          {/* Primary Card - Get in touch */}
          <Card className="absolute top-0 left-0 max-[900px]:left-[20%] max-[680px]:left-[0%] max-[680px]:w-full flex flex-col items-center gap-4 px-8 py-12 max-[680px]:p-[20px] bg-white rounded-[36px] border-[3px] border-solid border-[#f4263e] shadow-general-shadows-shadow-05 z-10">
            <CardContent className="p-0 flex flex-col items-center">
              <img
                className="w-[220px] h-[173.75px] mt-[-14.58px]"
                alt="Illustration CTA"
                src={illustrationCta1}
              />

              <div className="flex flex-col w-[372px] items-center gap-8 mt-4 max-[680px]:w-full">
                <div className="flex items-center self-stretch w-full flex-col gap-2">
                  <h4 className="self-stretch  font-headings-heading-h4 font-bold text-[#1e2459] text-[24px] text-center tracking-[-2%] leading-[33px] [font-family:Helvetica] ">
                    Get in touch today!
                  </h4>

                  <p className="self-stretch text-center font-paragraph-default font-normal text-[#62668A] text-base tracking-[-1%] leading-[27px] [font-family:Helvetica] ">
                    Discuss your project needs. We&apos;re ready to help you
                    achieve your goals with expert strategies and tailored
                    solutions. Let&apos;s make it happen!
                  </p>
                </div>

                <Button className="h-[50px] px-[22px] py-4 bg-[#f4263e] rounded-[10px] shadow-[0px_2px_6px_#f4253d29] [font-family:'Plus_Jakarta_Display-Medium',Helvetica] font-medium text-white text-base tracking-[-0.16px] leading-[22px]">
                  Contact us
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Card - Browse Packages */}
          <Card className="inline-flex flex-col items-center gap-4 p-10 max-[680px]:p-[15px] absolute top-[46px] left-[412px] max-[900px]:top-[470px] max-[900px]:left-[20%] max-[680px]:left-[0%] max-[680px]:w-full bg-white rounded-3xl border border-solid border-[#bdbecc] shadow-general-shadows-shadow-02">
            <CardContent className="p-0 flex flex-col items-center">
              <img
                className="w-[148px] h-[129px] mt-[-12.00px]"
                alt="Illustration CTA"
                src={illustrationCta2}
              />

              <div className="flex flex-col w-[345px] items-center gap-8 mt-4 max-[680px]:w-full">
                <div className="inline-flex items-center flex-col gap-2">
                  <h4 className="self-stretch  font-headings-heading-h4 font-bold text-[#1e2459] text-[24px] text-center tracking-[-2%] leading-[33px] [font-family:Helvetica]">
                    Browse our Packages
                  </h4>

                  <p className="w-[345px] self-stretch text-center font-paragraph-default font-normal text-[#62668A] text-base tracking-[-1%] leading-[27px] [font-family:Helvetica]  max-[680px]:w-full">
                    Explore packages tailored to your needs and budget. Find the
                    perfect fit today!
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="h-[50px] px-[22px] py-4 bg-white rounded-[10px] border-[0.5px] border-solid border-[#bdbecc] shadow-general-shadows-shadow-02 [font-family:Helvetica] font-normal text-[#1e2459] text-base tracking-[-0.16px] leading-[22px]"
                >
                  Browse Packages
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
