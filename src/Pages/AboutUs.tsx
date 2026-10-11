
import { useState } from "react";
import showroom from "../assets/about/showroom.png";
import team from "../assets/about/team.png";
import {
  ShieldCheck,
  Star,
  UsersRound,
  Route,
  Target,
  ArrowUpRight,
  Plus,
} from "lucide-react";

const AboutUs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you offer financing options?",
      answer:
        "Yes. We offer flexible financing options to make your vehicle purchase easier. Our team can guide you through the available options and requirements.",
    },
    {
      question: "Can I schedule a test drive online?",
      answer:
        "Yes. You can select a vehicle from our inventory and request a test drive directly from the vehicle details page.",
    },
    {
      question: "What documents are required for purchase?",
      answer:
        "The required documents may vary depending on the vehicle and purchase method. Our team will provide you with the exact requirements before completing your purchase.",
    },
    {
      question: "Do you accept trade-ins?",
      answer:
        "Yes. We accept trade-ins and can help you understand the value of your current vehicle when you're looking to upgrade.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* =========================
          ABOUT HERO
      ========================== */}
      <section className="bg-[#F7F6F2] text-[#0B1F33]">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-10 lg:px-16">

          <div className="grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr]">

            <div className="max-w-xl">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.25em] text-[#C9A227]">
                ABOUT ROVE MOTORS
              </p>

              <h1 className="font-[Manrope] text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                More than a place to buy a car.
              </h1>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#667085] md:text-base">
                We are building a better way to discover, compare, and choose
                the car that fits your next journey.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A227]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#667085]">
                  Built around trust
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={showroom}
                  alt="Rove Motors showroom"
                  className="h-[250px] w-full object-cover sm:h-[300px] md:h-[350px]"
                />
              </div>

              <div className="absolute bottom-0 left-0 bg-[#C9A227] px-4 py-3 text-[#0B1F33]">
                <p className="text-xl font-bold">01</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                  Our story
                </p>
              </div>
            </div>

          </div>

          {/* Compact stats */}
          <div className="mt-7 grid grid-cols-2 border-t border-[#0B1F33]/10 pt-5 md:grid-cols-4">

            <div className="border-r border-[#0B1F33]/10 px-3 first:pl-0">
              <p className="font-[Manrope] text-xl font-bold md:text-2xl">
                Multi
              </p>
              <p className="mt-0.5 text-[11px] text-[#667085]">
                Brand dealership
              </p>
            </div>

            <div className="border-r border-[#0B1F33]/10 px-3">
              <p className="font-[Manrope] text-xl font-bold md:text-2xl">
                100%
              </p>
              <p className="mt-0.5 text-[11px] text-[#667085]">
                Customer focused
              </p>
            </div>

            <div className="border-r border-[#0B1F33]/10 px-3 pt-4 md:pt-0">
              <p className="font-[Manrope] text-xl font-bold md:text-2xl">
                Quality
              </p>
              <p className="mt-0.5 text-[11px] text-[#667085]">
                Carefully selected
              </p>
            </div>

            <div className="px-3 pt-4 md:pt-0">
              <p className="font-[Manrope] text-xl font-bold md:text-2xl">
                Rove
              </p>
              <p className="mt-0.5 text-[11px] text-[#667085]">
                Your next journey
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          OUR STORY
      ========================== */}
      <section className="px-5 py-10 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

            <div className="relative">
              <img
                src={showroom}
                alt="Rove Motors showroom"
                className="h-[320px] w-full object-cover md:h-[390px]"
              />

              <div className="absolute -bottom-3 -right-3 hidden w-36 bg-[#0B1F33] p-4 text-white md:block">
                <p className="text-2xl font-bold">01</p>
                <p className="mt-1 text-[10px] leading-4 text-white/60">
                  A dealership built around a better buying experience.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#C9A227]">
                OUR STORY
              </p>

              <h2 className="mt-2 font-[Manrope] text-3xl font-bold leading-tight text-[#0B1F33] md:text-4xl">
                How it all started.
              </h2>

              <div className="mt-4 space-y-3 text-sm leading-6 text-[#667085] md:text-[15px]">
                <p>
                  At Rove Motors, we believe finding the right car should be
                  more than just a purchase — it should be the beginning of
                  your next journey.
                </p>

                <p>
                  We are a modern multi-brand dealership built to make car
                  buying simpler, more transparent, and more enjoyable.
                  From everyday vehicles to premium models, we bring together
                  a carefully selected collection of quality cars.
                </p>

                <p>
                  With a focus on trust, quality, and exceptional customer
                  service, our team is here to help you find a vehicle you can
                  feel confident driving.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#0B1F33]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C9A227]/10">
                  <ArrowUpRight size={14} className="text-[#C9A227]" />
                </span>

                Driven by a better experience
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          VALUES
      ========================== */}
      <section className="bg-[#F7F6F2] px-5 py-10 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#C9A227]">
                WHAT DRIVES US
              </p>

              <h2 className="mt-2 font-[Manrope] text-2xl font-bold text-[#0B1F33] md:text-3xl">
                The values behind Rove.
              </h2>
            </div>

            <p className="max-w-md text-xs leading-5 text-[#667085]">
              Buying a car should feel clear, trustworthy, and genuinely
              enjoyable.
            </p>
          </div>

          <div className="mt-7 grid gap-px overflow-hidden border border-gray-200 bg-gray-200 md:grid-cols-2 lg:grid-cols-4">

            <div className="bg-[#F7F6F2] p-5">
              <ShieldCheck
                size={22}
                strokeWidth={1.5}
                className="text-[#C9A227]"
              />

              <h3 className="mt-5 font-[Manrope] text-base font-bold text-[#0B1F33]">
                Integrity
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#667085]">
                We build lasting relationships through honesty and
                transparency.
              </p>
            </div>

            <div className="bg-[#F7F6F2] p-5">
              <Star
                size={22}
                strokeWidth={1.5}
                className="text-[#C9A227]"
              />

              <h3 className="mt-5 font-[Manrope] text-base font-bold text-[#0B1F33]">
                Quality
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#667085]">
                We offer carefully selected vehicles that meet our standards.
              </p>
            </div>

            <div className="bg-[#F7F6F2] p-5">
              <UsersRound
                size={22}
                strokeWidth={1.5}
                className="text-[#C9A227]"
              />

              <h3 className="mt-5 font-[Manrope] text-base font-bold text-[#0B1F33]">
                Customer First
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#667085]">
                Your needs come first, from the first click to the final
                decision.
              </p>
            </div>

            <div className="bg-[#F7F6F2] p-5">
              <Route
                size={22}
                strokeWidth={1.5}
                className="text-[#C9A227]"
              />

              <h3 className="mt-5 font-[Manrope] text-base font-bold text-[#0B1F33]">
                Innovation
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#667085]">
                We keep improving the experience through smarter digital
                solutions.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          TEAM
      ========================== */}
      <section className="bg-[#0B1F33] px-5 py-10 text-white md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

            <div className="max-w-xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#C9A227]">
                OUR TEAM
              </p>

              <h2 className="mt-2 font-[Manrope] text-3xl font-bold leading-tight md:text-4xl">
                People who make it happen.
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/60">
                Behind Rove Motors is a team of passionate professionals who
                believe buying a car should feel simple, personal, and
                trustworthy.
              </p>

              <p className="mt-3 text-sm leading-6 text-white/60">
                From helping you explore our collection to guiding you through
                the buying process, our team is committed to making every step
                smooth and stress-free.
              </p>

              <button className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#C9A227] transition hover:gap-3">
                Meet our team
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="relative">
              <img
                src={team}
                alt="Rove Motors team"
                className="max-h-[360px] w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 bg-[#C9A227] px-4 py-3 text-[#0B1F33]">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em]">
                  Together
                </p>

                <p className="mt-0.5 text-xs">
                  Building better journeys.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          MISSION + VISION
      ========================== */}
      <section className="px-5 py-10 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">

            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#C9A227]">
                OUR MISSION
              </p>

              <h2 className="mt-2 font-[Manrope] text-3xl font-bold leading-tight text-[#0B1F33] md:text-4xl">
                More than just cars.
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#667085]">
                We aim to deliver exceptional vehicles, excellent service, and
                a smooth buying experience — because your journey matters to
                us.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-5">

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/10">
                  <Target
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#C9A227]"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-[#C9A227]">
                    OUR VISION
                  </p>

                  <h3 className="mt-1 font-[Manrope] text-xl font-bold text-[#0B1F33]">
                    A dealership people can trust.
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#667085]">
                    To be the most trusted and preferred car dealership, known
                    for quality, service, and innovation.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================
          FAQ
      ========================== */}
      <section id="faq" className="bg-[#F7F6F2] px-5 py-10 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">

            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#C9A227]">
                HELP & SUPPORT
              </p>

              <h2 className="mt-2 font-[Manrope] text-2xl font-bold leading-tight text-[#0B1F33] md:text-3xl">
                Frequently Asked Questions
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-[#667085]">
                Everything you need to know before making your next move.
              </p>
            </div>

            <div className="border-t border-gray-300">

              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-gray-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-5 py-4 text-left"
                    >
                      <span className="font-[Manrope] text-sm font-semibold text-[#0B1F33]">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-300 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <Plus
                          size={15}
                          className="text-[#C9A227]"
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] pb-4 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pr-8 text-xs leading-6 text-[#667085]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
