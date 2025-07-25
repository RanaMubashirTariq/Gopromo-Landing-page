import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import illustrationCase from '../../../../Images/illustration-case-01-1.svg'
import illustrationWrapper from '../../../../Images/illustrations-wrapper.svg'

export const CaseStudiesSection = (): JSX.Element => {
  // Case studies data for mapping
  const caseStudies = [
    {
      category: "Real Estate",
      title:
        "How we helped Fine Move boost qualified buyer leads by 68% in under 30 days.",
      description:
        'Fine Move faced low local traffic and sporadic inquiries. We launched geo-targeted "near me" pages, CRM email drips and SMS follow-ups—turning clicks into showings.',
      image: illustrationCase,
      metrics: [
        { value: "68%", description: "Increase in\n Buyer Leads" },
        { value: "45%", description: "Uptick in\nShowing Bookings" },
      ],
    },
    {
      category: "Car Rental",
      title:
        "How we helped All Drive Rentals triple same-day bookings in under 60 days.",
      description:
        "All Drive Rentals struggled with inconsistent reservations. We deployed a mobile-first funnel, AI chatbots and real-time calendar sync—tripling same-day rentals.",
      image: null, // Special case with background color
      bgColor: "#1a75ff",
      illustrationWrapper: illustrationWrapper,
      metrics: [
        { value: "2x", description: "Increase in\nSame-Day Rentals" },
        { value: "50%", description: "Fewer Abandoned\nReservations" },
      ],
    },
    {
      category: "Barbers",
      title:
        "How we helped SharpCuts boost weekly bookings by 150% in under 30 days.",
      description:
        "SharpCuts Barber Co. battled no-shows and manual scheduling. We added online booking with auto-reminders and calendar sync—driving a 150% booking surge.",
      image: illustrationCase,
      metrics: [
        { value: "150%", description: "Increase in\nWeekly Bookings" },
        { value: "30%", description: "Reduction\nin No-Shows" },
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center py-[100px] px-[115.5px] w-full max-[1300px]:px-[80px] max-[1100px]:px-[40px] max-[1100px]:py[60px] max-[1000px]:py-[40px] max-[1000px]:px-[20px]">
      <div className="flex flex-col items-start gap-10 max-w-[1209px] w-full">
        <div className="flex items-end justify-between w-full max-[760px]:flex-col max-[760px]:items-center gap-6">
          <div className="flex flex-col gap-2  max-[760px]:items-center">
            <span className="[font-family:Plus_Jakarta_Display] font-normal text-[#DE2A4A] text-lg leading-[18px] max-[680px]:text-[16px] max-[680px]:leading-[16px]">
              Case Studies
            </span>
            <h2 className="[font-family:Plus_Jakarta_Display] font-bold text-[#1f2559] text-[38px] tracking-[-0.76px] leading-[48px] w-full  max-[1000px]:text-[36px] max-[1000px]:leading-[44px] max-[680px]:text-[28px] max-[680px]:leading-[36px]">
              The results speak for themselves
            </h2>
          </div>

          <Button
            variant="outline"
            className="h-[62px] px-8 py-[22px] text-[16px] leading-[22px] tracking-[-1%] font-normal bg-neutral-colors100 rounded-[10px] border-[0.5px] border-[#bdbecc] shadow-[0px_3px_10px_#15229e0a] [font-family:Plus_Jakarta_Display] text-[#15239E] max-[680px]:px[15px] max-[680px]:py-[12px] max-[680px]:h-[40px]"
          >
            View All
          </Button>
        </div>

        <div className="grid sm:grid-cols-1  md:grid-cols-2 md:mx-auto lg:grid-cols-3 gap-[33px] w-full max-[1100px]:gap-[20px]">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className={`rounded-[19.33px] overflow-hidden shadow-[0px_7.09px_7.73px_#0000000a] border-none
                ${index === 2 ? "max-[1020px]:col-span-2 max-[1020px]:mx-auto max-[760px]:col-span-1" : ""}`}
            >
              {study.image ? (
                <img
                  className="w-full h-[205.55px] object-cover"
                  alt={`Illustration for ${study.category} case study`}
                  src={study.image}
                />
              ) : (
                <div
                  className="relative w-full h-[205.55px]"
                  style={{ backgroundColor: study.bgColor }}
                >
                  <img
                    className="absolute w-[259px] h-[206px] top-0 left-[59px] max-[1000px]:h-[170px]"
                    alt="Illustrations"
                    src={study.illustrationWrapper}
                  />
                </div>
              )}

              <CardContent className="p-[20.62px] flex flex-col gap-[20.62px] max-[1100px]:p-[10px]">
                <div className="flex flex-col gap-[10.31px]">
                  <span className="[font-family:Plus_Jakarta_Display] font-normal text-primary-colorsaccent text-[11.6px] leading-[11.6px]">
                    {study.category}
                  </span>
                  <h3 className="[font-family:Plus_Jakarta_Display] font-bold text-[#1f2559] text-[15.46px] tracking-[-0.32px] leading-[21.3px]">
                    {study.title}
                  </h3>
                  <p className="[font-family:Plus_Jakarta_Display] font-normal text-[#62668A] text-[10.31px] tracking-[-0.16px] leading-[17.4px] ">
                    {study.description}
                  </p>
                </div>

                <Separator className="h-px w-full" />

                <div className="flex items-start justify-between w-full">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-[10.31px]">
                      <span className="[font-family:Plus_Jakarta_Display] font-bold text-primary-colorsaccent text-[23.2px] tracking-[-0.32px] leading-[24.5px]">
                        {metric.value}
                      </span>
                      <span className="[font-family:Plus_Jakarta_Display] font-normal text-[#62668a] text-[11.6px] tracking-[-0.16px] leading-[15.5px] whitespace-pre-line">
                        {metric.description}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
