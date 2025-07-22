import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import specialLike from '../../../../Images/special-icon-like.svg'
import specialSearch from '../../../../Images/special-icon-search.svg'
import specialPaid from '../../../../Images/special-icon-paid.svg'
import specialFunnl from '../../../../Images/special-icon-funnel.svg'
import specialNetwork from '../../../../Images/special-icon-network.svg'
import specialMarket from '../../../../Images/special-icon-big-marketing.svg'
import check1 from '../../../../Images/check-icon-1.svg'
import check2 from '../../../../Images/check-icon-2.svg'
import check3 from '../../../../Images/check-icon-3.svg'
import check4 from '../../../../Images/check-icon-4.svg'
import check5 from '../../../../Images/check-icon-5.svg'
import check6 from '../../../../Images/check-icon-6.svg'

export const ServicesOfferedSection = (): JSX.Element => {
  // Service card data
  const serviceCards = [
    {
      icon: specialLike,
      title: "High-Impact Landing Pages",
      description:
        'Mobile-first pages optimized for "near me" searches with click-to-call and booking widgets that drive both online bookings & store visits.',
        featureIcon:check1,
        features: [
        "Local SEO & map ranking",
        "One-tap call & book widgets",
        "A/B testing & analytics",
      ],
    },
    {
      icon: specialSearch,
      title: "Branded Mobile Apps",
      description:
        "Native & PWA apps with branded install prompts, geo-push notifications, and loyalty programs that boost engagement and repeat visits.",
        featureIcon:check2,
        features: [
        "Branded install prompts",
        "Geofenced push notifications",
        "Digital loyalty rewards",
      ],
    },
    {
      icon: specialPaid,
      title: "Lead-Gen Funnels",
      description:
        "Turn ad spend into qualified leads with Facebook & Google funnels, conversion-focused pages, and automated email/SMS sequences.",
        featureIcon:check3,
        features: [
        "Dynamic ad campaigns",
        "Conversion-optimized pages",
        "Automated email & SMS",
      ],
    },
    {
      icon: specialFunnl,
      title: "CRM & Online Booking",
      description:
        "Unified CRM capturing every contact, appointment, payment, and message—with real-time calendars and streamlined invoicing for easy follow-up.",
        featureIcon:check4,
        features: [
        "Customer profiles & history",
        "Live calendar sync",
        "One-click invoicing links",
      ],
    },
    {
      icon: specialNetwork,
      title: "AI Chatbots & 24/7 Support",
      description:
        "AI-powered chatbots on your site and Messenger/WhatsApp that qualify leads, answer FAQs, schedule appointments, and escalate to you when needed.",
        featureIcon:check5,
        features: [
        "Natural-language chat flows",
        "Instant appointment booking",
        "Seamless agent handover",
      ],
    },
    {
      icon: specialMarket,
      iconHeight: "103.04px",
      title: "Social Media Automation",
      description:
        "Schedule posts, run geo-targeted ads, and auto-respond to comments/DMs on Facebook, Instagram & TikTok—keeping your brand active and engaging 24/7.",
        featureIcon: check6,     
         features: [
        "Visual post calendar",
        "Geo-targeted ad campaigns",
        "Auto-DM & comment replies",
      ],
    },
  ];

  return (
    <section className=" w-full py-[100px] px-[115.5px] flex justify-center max-[1300px]:px-[80px] max-[1100px]:py[60px] max-[1100px]:px-[40px] max-[1000px]:px-[20px] max-[1000px]:py-[40px] ">
      <div className="flex flex-col items-center gap-10 ">
        {/* Section Header */}
        <div className="flex flex-col w-full max-w-[620px] items-center gap-4">
          <div className="inline-flex items-center flex-col gap-2">
            <div className="relative w-full [font-family:'Plus_Jakarta_Display-Regular',Helvetica] font-normal text-[#f4263E] text-[18px] text-center tracking-[0] leading-[18px] whitespace-nowrap max-[680px]:text-[16px]">
              Our Services
            </div>

            <h2 className="w-full max-w-[617.71px] [text-shadow:0px_2px_4px_#de294a0d] font-bold text-[#1f2559] text-[38px] text-center tracking-[-0.76px] leading-[48px] [font-family:'Plus_Jakarta_Display-Bold',Helvetica] shadow-other-text max-[1000px]:text-[36px]">
              All the Tools to Win Locally  Online
            </h2>
          </div>

          <p className="text-center [font-family:'Plus_Jakarta_Display-Regular',Helvetica] font-normal text-[#62668A] text-base tracking-[-0.16px] leading-[27px]">
            One integrated suite-landing pages, apps, CRM, chatbots &amp; social
            automation—designed to attract, engage, and convert customers both
            on the web and in your store.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12  max-[680px]:gap-[20px]">
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-[1100px]:gap-[15px]">
            {serviceCards.map((service, index) => (
              <div
                key={`service-card-${index}`}
                className="w-full h-auto rounded-[36px] border border-solid border-[#e7e8f1] shadow-[0px_3px_10px_#15229e0a] p-[30px] max-[1300px]:p-[15px] "
              >
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-start gap-8 max-[680px]:gap-5">
                    {/* Card Icon */}
                    {service.customIcon ? (
                      <div className="relative w-[94px] h-[94px]">
                        <div className="relative h-[94px] rounded-[26px]">
                          <div className="absolute w-[94px] h-[94px] top-0 left-0 bg-[#ff951a] rounded-[26px] opacity-[0.08]" />
                          <div className="absolute w-3.5 h-[26px] top-[49px] left-[19px] bg-[#ffcd1c] rounded-[39.4px] shadow-[0px_3.25px_9.25px_#ffcd1c63]" />
                          <div className="absolute w-3.5 h-[57px] top-[19px] left-[61px] bg-[#ff951a] rounded-[39.4px] shadow-[0px_3.69px_10.25px_#ff951a61]" />
                          <div className="absolute w-3.5 h-[42px] top-[33px] left-10 bg-primary-colorsaccent rounded-[39.4px] shadow-[0px_2.25px_6.25px_#f4253d2e]" />
                        </div>
                      </div>
                    ) : (
                      <img
                        className={`relative w-[94px] ${service.iconHeight ? `h-[${service.iconHeight}]` : "h-[94px]"}`}
                        alt={`Icon for ${service.title}`}
                        src={service.icon}
                      />
                    )}

                    {/* Card Content */}
                    <div className="flex flex-col items-start gap-6 max-[680px]:gap-4">
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="w-full max-w-[316px] text-2xl tracking-[-0.48px] leading-[33px] [font-family:'Plus_Jakarta_Display-Bold',Helvetica] font-bold text-[1f2559] max-[1100px]:text-[22px] whitespace-nowrap max-[340px]:whitespace-normal">
                          {service.title}
                        </h3>
                        <p className="w-full max-w-[316px] text-base tracking-[-0.16px] leading-[27px] [font-family:'Plus_Jakarta_Display-Regular',Helvetica] font-normal text-[#62668A]">
                          {service.description}
                        </p>
                      </div>

                      {/* Feature List */}
                      <div className="flex flex-col items-start gap-4 w-full">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={`feature-${index}-${featureIndex}`}
                            className="flex items-center gap-3 w-full"
                          >
                            <img
                              className="w-[26px] h-[26px]"
                              alt="Checkmark icon"
                              src={service.featureIcon}
                            />
                            <span className="text-base tracking-[-0.16px] leading-[27px] whitespace-nowrap [font-family:'Plus_Jakarta_Display-Regular',Helvetica] font-normal text-[#62668A]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 max-[680px]:gap-4">
            <Button className="h-[62px] px-8 py-[22px] bg-primary-colorsaccent rounded-[10px] text-neutral-colors100 shadow-general-shadows-shadow-04 font-text-single-200-medium">
              👋 Book Your Free Strategy Call
            </Button>

            <Button
              variant="outline"
              className="h-[62px] px-8 py-[22px] bg-neutral-colors100 rounded-[10px] border-[0.5px] border-solid border-[#bdbecc] shadow-[0px_3px_10px_#15229e0a] text-neutral-colors600 font-text-single-200-regular"
            >
              📋 View Packages &amp; Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
