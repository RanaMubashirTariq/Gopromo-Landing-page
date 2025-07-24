import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import illustrationProcess1 from '../../../../Images/illustration-process-03.svg'
import illustrationProcess2 from '../../../../Images/illustration-process-01.svg'
import illustrationProcess3 from '../../../../Images/illustration-process-02.svg'

export const OurProcessSection = (): JSX.Element => {
  const processSteps = [
    {
      number: "1",
      title: "Plan & Blueprint",
      description:
        "We map out your custom lead‑generation funnel, landing pages, chatbots, CRM, based on your goals and local market.",
      image: illustrationProcess1,
      imageClasses: "mt-[-9.00px] ml-[-24.00px] mr-[-24.00px]",
    },
    {
      number: "2",
      title: "Build & Launch",
      description:
        "Our dev and design teams bring your plan to life—coding, integrating and QA‑testing your pages, apps and automations.",
      image: illustrationProcess2,
      imageClasses: "mt-[-14.00px] ml-[-24.00px] mr-[-24.00px]",
    },
    {
      number: "3",
      title: "Optimize & Scale",
      description:
        "We monitor performance, run A/B tests, and refine every element, so your funnel continuously drives high‑quality leads.",
      image: illustrationProcess3,
      imageClasses: "mt-[-14.00px] ml-[-24.00px] mr-[-24.00px]",
    },
  ];

  return (
    <section className="flex flex-col items-center pt-16 pb-[150px] px-[115.5px]  max-[1300px]:px-[80px] max-[1100px]:px-[40px] max-[1000px]:px-[20px] max-[1100px]:pb-[100px] max-[1000px]:pt-[40px] max-[1000px]:pb-[50px] relative">
      <div className="flex flex-col items-center gap-10 max-w-6xl w-full">
        <div className="w-[496px] flex flex-col items-center gap-4 text-center max-[500px]:w-full">
          <div className="flex flex-col items-center gap-2 max-w-lg">
            <span className="relative w-full [font-family:Plus_Jakarta_Display] font-normal text-[#F4263E] text-lg text-center tracking-[0] leading-[18px] max-[680px]:text-[16px] max-[680px]:leading-[16px]">
              Our Process
            </span>

            <h2 className="[text-shadow:0px_2px_4px_0px_#de294a0d] font-bold text-[#1f2559] text-[38px] text-center tracking-[-0.32px] leading-[48px] [font-family:Plus_Jakarta_Display] max-[1000px]:text-[36px] max-[1000px]:leading-[44px] max-[680px]:text-[28px] max-[680px]:leading-[36px]">
              A simple, yet powerful path to predictable growth
            </h2>
          </div>

          <p className=" text-center [font-family:Plus_Jakarta_Display] font-normal text-[#62668A] text-base tracking-[-0.16px] leading-[27px] max-w-3xl ">
            From strategy to scale, we handle every step so you can focus on
            serving your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className={`border-none shadow-none bg-transparent ${
                index === 2 ? 'max-[1020px]:col-span-2 max-[1020px]:mx-auto max-[760px]:col-span-1 ' : ''
              }`}
            >
              <CardContent className="flex flex-col items-center gap-6 p-0 max-[400px]:gap-4">
                <img
                  className={`relative w-full max-w-[309px] h-auto ${step.imageClasses} max-[400px]:max-w-[300px] max-[390px]:h-[200px]`}
                  alt={`Illustration process ${step.number}`}
                  src={step.image}
                />

                <div className="flex flex-col items-center gap-2">
                  <h3 className="w-[309px] text-2xl text-center tracking-[-0.48px] leading-[33px] [font-family:Plus_Jakarta_Display] font-bold text-[#1F2559] max-[350px]:w-full">
                    {step.number}. {step.title}
                  </h3>

                  <p className="w-[309px] text-base text-center tracking-[-0.16px] leading-[27px] [font-family:Plus_Jakarta_Display] font-normal text-[#62668A] max-[350px]:w-full">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
