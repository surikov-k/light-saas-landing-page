import { twMerge } from "tailwind-merge";

import CheckIcon from "@/assets/check.svg";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading-container text-center">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center lg:px-4">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              features,
              popular,
              inverse,
            }) => (
              <article
                key={title}
                className={twMerge(
                  "card",
                  inverse && "bg-black text-white outline-black"
                )}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <span className="inline-flex rounded-xl px-4 py-1.5 text-sm outline outline-1 -outline-offset-1 outline-white/20">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-clip-text font-medium text-transparent">
                        Most Popular
                      </span>
                    </span>
                  )}
                </div>
                <p className="mt-[30px] flex items-baseline gap-1">
                  <span className="text-4xl font-bold leading-none tracking-tighter">
                    ${monthlyPrice}
                  </span>
                  <span className="font-bold leading-none tracking-tight text-[#888888]">
                    /month
                  </span>
                </p>
                <button
                  className={twMerge(
                    "btn btn-primary mt-[30px] w-full",
                    inverse && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="mt-8 flex flex-col gap-5">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-4 text-sm"
                    >
                      <CheckIcon className="size-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};
