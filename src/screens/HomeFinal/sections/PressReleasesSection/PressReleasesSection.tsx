import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import groupf from '../../../../Images/group-1707486641-2.png'
import groupT from '../../../../Images/sharpcuts-1-1.png'
import groups from '../../../../Images/group-2.svg'

export const PressReleasesSection = (): JSX.Element => {
  const testimonials = [
    {
      title: '"Effortless Onboarding"',
      description:
        "Onboarding was a quick, GoPromos Growth team handled setup in under a week, and we were live with bookings before we knew it.",
      logoSrc: groupf,
      logoAlt: "Group",
      logoWidth: "w-[130px]",
      logoHeight: "h-8",
    },
    {
      title: '"Seamless Communication"',
      description:
        "Communication is top‑notch. I get weekly check‑ins, clear reports, and their support channel means someone's always on hand.",
      logoSrc: groups,
      logoAlt: "Group",
      logoWidth: "w-40",
      logoHeight: "h-8",
    },
    {
      title: '"Exceptional Service Quality"',
      description:
        "The quality of service is unmatched. Their team turned my barber shop's chaos into a smooth, automated system.",
      logoSrc: groupT,
      logoAlt: "Sharpcuts",
      logoWidth: "w-[105px]",
      logoHeight: "h-8",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center pt-[54px] pb-[150px] px-[115.5px] max-[1300px]:px-[80px] max-[1100px]:px-[40px] max-[1100px]:pb-[100px] max-[1000px]:px-[20px] max-[1000px]:pb-[50px] max-[1000px]:pt-[40px] relative bg-neutral-colors200">
      <div className="flex flex-col items-center gap-8 relative">
        <div className="flex flex-col w-full max-w-[620px] items-center gap-4 relative">
          <div className="flex items-center flex-col gap-2 relative">
            <div className="relative w-full  font-headings-heading-h7 font-[number:var(--headings-heading-h7-font-weight)] text-[#f4263e] text-[length:var(--headings-heading-h7-font-size)] text-center tracking-[var(--headings-heading-h7-letter-spacing)] leading-[var(--headings-heading-h7-line-height)] whitespace-nowrap [font-style:var(--headings-heading-h7-font-style)]">
              Testimonials
            </div>

            <h2 className="w-full max-w-[492px] [text-shadow:0px_2px_4px_0px_#de294a0d] font-bold text-[#1f2559] text-[38px] text-center tracking-[-2%] leading-[48px] relative font-headings-heading-2 [font-family:'Plus_Jakarta_Display-Bold',Helvetica] max-[1000px]:text-[36px] max-[1000px]:leading-[44px] max-[680px]:text-[28px] max-[680px]:leading-[36px]">
              Don&apos;t take our word for it—hear from our clients!
            </h2>
          </div>

          <p className="w-full max-w-[488px] text-[length:var(--paragraph-default-font-size)] text-center tracking-[var(--paragraph-default-letter-spacing)] leading-[var(--paragraph-default-line-height)] relative font-paragraph-default font-[number:var(--paragraph-default-font-weight)] text-neutral-colors500 [font-style:var(--paragraph-default-font-style)]">
            Real business owners share how Growth transformed their operations
            and revenue.
          </p>
        </div>

        <div className="flex w-full max-[1030px]:flex-wrap  items-start justify-between relative  gap-4 max-[1150px]:justify-center">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-col items-start gap-6 px-8 py-12 relative bg-white rounded-3xl border border-solid border-[#e7e8f1] shadow-general-shadows-shadow-01 max-[800px]:px-4 max-[800px]:py-6"
            >
              <CardContent className="p-0">
                <div className="flex items-start flex-col gap-2 relative">
                  <h3 className="w-[316px]  font-bold text-[#1e2459] text-[22px] tracking-[-0.32px] leading-[33px] relative [font-family:'Plus_Jakarta_Display-Bold',Helvetica] max-[380px]:w-full">
                    {testimonial.title}
                  </h3>

                  <p className="w-[321px] relative font-paragraph-default font-[number:var(--paragraph-default-font-weight)] text-[#62668A] text-[length:var(--paragraph-default-font-size)] tracking-[var(--paragraph-default-letter-spacing)] leading-[var(--paragraph-default-line-height)] [font-style:var(--paragraph-default-font-style)] max-[380px]:w-full">
                    {testimonial.description}
                  </p>
                </div>

                <img
                  className={`relative ${testimonial.logoWidth} ${testimonial.logoHeight} object-cover mt-6 max-[380px]:mt-4`}
                  alt={testimonial.logoAlt}
                  src={testimonial.logoSrc}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
