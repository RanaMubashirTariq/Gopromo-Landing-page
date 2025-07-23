import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import  specialIcon from '../../../../Images/special-icon-big-content.svg'
import specialIcon2 from '../../../../Images/special-icon-big-marketing.svg'
import specialIcon3 from '../../../../Images/special-icon-big-video.svg'

export const MainContentSection = (): JSX.Element => {
  // Feature card data for mapping
  const featureCards = [
    {
      icon: specialIcon,
      iconSize: "w-40 h-40",
      title: "Boost Foot Traffic",
      description:
        'SEO-rich landing pages built for "near me" searches, with click-to-call/book buttons that convert clicks into online bookings and in-store visits.',
    },
    {
      icon: specialIcon2,
      iconSize: "w-40 h-[163.51px]",
      title: "Automate Leads",
      description:
        "24/7 multi-channel follow-up—email, SMS, Messenger/WhatsApp—plus AI chatbots that capture, qualify, and schedule leads so no opportunity slips through.",
    },
    {
      icon: specialIcon3,
      iconSize: "w-[160.88px] h-[163.54px]",
      title: "Socials on Autopilot",
      description:
        "Schedule posts, run pinpoint-targeted ads, and enable auto-replies on Facebook, Instagram, and TikTok—keeping your brand active and engaging around the clock.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[41px] w-full relative py-[100px] px-[115.5px] max-[1300px]:px[80px] max-[1100px]:px-[40px] max-[1100px]:py-[60px]  max-[1000px]:py-[40px] max-[1000px]:px-[20px]">
      <div className="flex flex-col w-full max-w-[960px] items-center gap-4 relative">
        <div className="flex items-center self-stretch w-full flex-col gap-2 relative">
          <h2 className="w-full [text-shadow:0px_2px_4px_0px_#DE2A4A0D] font-bold text-[#1f2559] text-[38px] text-center tracking-[-0.32px] leading-[48px] relative [font-family:Helvetica]  max-[1000px]:text-[36px] max-[1000px]:leading-[44px] max-[680px]:text-[28px] max-[680px]:leading-[36px]">
            <span className="text-[#1e2459] tracking-[-0.29px]">
              You&apos;re Missing Calls, Juggling Spreadsheets &amp;{"  "}
            </span>

            <span className="text-[#ff2d55] tracking-[-0.32px]">
              Losing Customers to Competitors
            </span>

            <span className="text-[#1e2459] tracking-[-0.32px]"> - </span>

            <span className="text-[#007AFF] tracking-[-0.32px]">Until Now</span>

            <span className="text-[#1e2459] tracking-[-0.32px]">.</span>
          </h2>
        </div>
      </div>

      <div className="flex  w-full  items-start justify-between gap-[30px] relative max-[1020px]:flex-wrap max-[1020px]:justify-center max-[850px]:gap-[10px] max-[680px]:gap-[20px]"> 
        {featureCards.map((card, index) => (
          <Card
            key={`feature-card-${index}`}
            className="flex-col items-start px-6 py-10 bg-neutral-colors100 rounded-[36px] overflow-hidden shadow-[0px_3px_10px_#15229e0a] border-none max-[1000px]:px-2 max-[1000px]:py-2 max-[340px]:w-[280px]"
          >
            <CardContent className="flex flex-col items-center gap-8 p-0 max-[680px]:gap-4"> 
              <img
                className={`relative ${card.iconSize}`}
                alt="Special icon"
                src={card.icon}
              />

              <div className="flex flex-col items-center gap-2">
                <h3 className="w-[316px] [font-family:Helvetica] font-bold text-[#1f2559] text-2xl text-center tracking-[-2%] leading-[33px] max-[340px]:w-[100%] ">
                  {card.title}
                </h3>

                <p className="w-[316px] [font-family:Helvetica] font-normal text-[#62668a] text-base text-center tracking-[-0.16px] leading-[27px] max-[340px]:text-[16px] max-[340px]:leading-[20px] max-[340px]:w-[100%]">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="h-[62px] px-8 py-[22px] bg-[#F4263E] rounded-[10px] shadow-[0px_2px_6px_0px_#f4253d29] [font-family:Helvetica] font-[number:var(--text-single-200-medium-font-weight)] text-neutral-colors100 text-[length:var(--text-single-200-medium-font-size)] tracking-[var(--text-single-200-medium-letter-spacing)] leading-[var(--text-single-200-medium-line-height)] max-[680px]:px-[10px] max-[680px]:py-[16px]">
        👋 Book Your Free Strategy Call
      </Button>
    </section>
  );
};
