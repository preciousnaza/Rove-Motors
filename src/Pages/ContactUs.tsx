import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  LockKeyhole,
} from "lucide-react";
import showroom from "../assets/about/showroom.png"

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#0B1F33]">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="px-6 py-10 md:px-10 md:py-7 lg:px-16 lg:py-10">

        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">

          {/* Hero text */}
          <div>

            <div className="flex items-center gap-4">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A227] md:text-sm">
                CONTACT US
              </p>

              <div className="h-px w-8 bg-[#C9A227]" />
            </div>

            <h1 className="mt-3 font-[Manrope] text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl lg:text-6xl">
              Let’s Get You
              <br />
              <span className="text-[#0B1F33]">
                Moving.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-[#667085] md:text-base md:leading-7">
              Have a question, need assistance, or want to schedule a test
              drive? Our team at Rove Motors is here to help. Reach out to us
              — we’d love to hear from you.
            </p>

          </div>


          {/* Hero image */}
          <div className="overflow-hidden rounded-2xl">

            <img
              src={showroom}
              alt="Rove Motors showroom"
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[400px]"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          GET IN TOUCH + CONTACT FORM
      ====================================================== */}
      <section className="bg-white px-6 py-12 md:px-10 md:py-16 lg:px-16">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-20">

          {/* ================= CONTACT INFORMATION ================= */}
          <div>

            <div className="flex items-center gap-4">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A227] md:text-sm">
                GET IN TOUCH
              </p>

              <div className="h-px w-8 bg-[#C9A227]" />
            </div>

            <h2 className="mt-3 font-[Manrope] text-2xl font-bold text-[#0B1F33] md:text-3xl">
              We’re Here to Help
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#667085] md:text-base md:leading-7">
              Whether you're looking for more information, need support, or
              want to book a test drive, get in touch with our team. We'll get
              back to you as soon as possible.
            </p>


            {/* Phone */}
            <div className="mt-8 flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/10">
                <Phone
                  size={20}
                  className="text-[#C9A227]"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#0B1F33]">
                  Phone
                </h3>

                <p className="mt-1 text-sm font-medium text-[#0B1F33]">
                  +234 812 345 6789
                </p>

                <p className="mt-1 text-xs text-[#667085]">
                  Mon – Sat, 8:00 AM – 6:00 PM
                </p>
              </div>

            </div>


            {/* Email */}
            <div className="mt-6 flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/10">
                <Mail
                  size={20}
                  className="text-[#C9A227]"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#0B1F33]">
                  Email
                </h3>

                <p className="mt-1 text-sm font-medium text-[#0B1F33]">
                  hello@rovemotors.com
                </p>

                <p className="mt-1 text-xs text-[#667085]">
                  We reply within 24 hours
                </p>
              </div>

            </div>


            {/* Location */}
            <div className="mt-6 flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/10">
                <MapPin
                  size={20}
                  className="text-[#C9A227]"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#0B1F33]">
                  Showroom Location
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#667085]">
                  Plot 12, Awka – Onitsha Express Road,
                  <br />
                  Awka, Anambra State, Nigeria
                </p>

                <button className="mt-2 flex items-center gap-1 text-sm font-medium text-[#C9A227]">
                  Get Directions
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>


            {/* Business hours */}
            <div className="mt-6 flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/10">
                <Clock3
                  size={20}
                  className="text-[#C9A227]"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#0B1F33]">
                  Business Hours
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#667085]">
                  Mon – Sat: 8:00 AM – 6:00 PM
                  <br />
                  Sun: 10:00 AM – 4:00 PM
                </p>
              </div>

            </div>

          </div>


          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 lg:p-10">

            <h2 className="font-[Manrope] text-2xl font-bold text-[#0B1F33]">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm text-[#667085]">
              Fill out the form below and we’ll get back to you shortly.
            </p>


            <form className="mt-7">

              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="text-sm font-medium text-[#0B1F33]">
                    Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-2 h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-[#C9A227]"
                  />
                </div>


                <div>
                  <label className="text-sm font-medium text-[#0B1F33]">
                    Email *
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-[#C9A227]"
                  />
                </div>

              </div>


              {/* Phone + Subject */}
              <div className="mt-5 grid gap-5 md:grid-cols-2">

                <div>
                  <label className="text-sm font-medium text-[#0B1F33]">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    placeholder="+234 801 234 5678"
                    className="mt-2 h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-[#C9A227]"
                  />
                </div>


                <div>
                  <label className="text-sm font-medium text-[#0B1F33]">
                    Subject / Reason *
                  </label>

                  <select
                    defaultValue=""
                    className="mt-2 h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm text-[#98A2B3] outline-none transition focus:border-[#C9A227]"
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>

                    <option value="general">
                      General Enquiry
                    </option>

                    <option value="test-drive">
                      Test Drive
                    </option>

                    <option value="vehicle">
                      Vehicle Enquiry
                    </option>

                    <option value="financing">
                      Financing
                    </option>

                    <option value="trade-in">
                      Trade-In
                    </option>
                  </select>
                </div>

              </div>


              {/* Message */}
              <div className="mt-5">

                <label className="text-sm font-medium text-[#0B1F33]">
                  Message *
                </label>

                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C9A227]"
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#C9A227] text-sm font-semibold text-[#0B1F33] transition hover:opacity-90"
              >
                Submit Message
                <Send size={16} />
              </button>


              {/* Security */}
              <div className="mt-4 flex items-center gap-2 text-xs text-[#98A2B3]">
                <LockKeyhole size={14} />
                Your information is safe with us.
              </div>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          SHOWROOM / LOCATION
      ====================================================== */}
      <section className="bg-white px-6 pb-12 md:px-10 md:pb-16 lg:px-16">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-stretch">

          {/* Map */}
          <div className="min-h-[260px] overflow-hidden rounded-2xl bg-[#E8ECEF] md:min-h-[330px]">

            {/* Replace this with your real map later */}
            <div className="flex h-full min-h-[260px] items-center justify-center bg-[#E8ECEF]">
              <div className="text-center">

                <MapPin
                  size={42}
                  className="mx-auto text-[#0B1F33]"
                />

                <p className="mt-3 font-semibold text-[#0B1F33]">
                  Rove Motors
                </p>

                <p className="mt-1 text-sm text-[#667085]">
                  Awka, Anambra State
                </p>

              </div>
            </div>

          </div>


          {/* Location text */}
          <div className="flex flex-col justify-center rounded-2xl bg-[#F7F6F2] p-7 md:p-8 lg:p-10">

            <div className="flex items-center gap-4">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A227] md:text-sm">
                OUR LOCATION
              </p>

              <div className="h-px w-8 bg-[#C9A227]" />
            </div>

            <h2 className="mt-3 font-[Manrope] text-2xl font-bold text-[#0B1F33] md:text-3xl">
              Visit Our Showroom
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#667085] md:text-base">
              See our latest models, take a test drive, and experience the
              Rove Motors difference in person.
            </p>

            <button className="mt-6 flex w-fit items-center gap-2 rounded-full border border-[#C9A227] px-5 py-3 text-sm font-medium text-[#C9A227] transition hover:bg-[#C9A227] hover:text-white">
              <MapPin size={17} />
              Get Directions
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bg-[#EEF3F6] px-6 py-12 md:px-10 md:py-16 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="md:grid md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-20">

            {/* FAQ intro */}
            <div>

              <div className="flex items-center gap-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A227] md:text-sm">
                  HELP & SUPPORT
                </p>

                <div className="h-px w-8 bg-[#C9A227]" />
              </div>

              <h2 className="mt-3 font-[Manrope] text-2xl font-bold text-[#0B1F33] md:text-3xl">
                Frequently Asked Questions
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#667085] md:text-base md:leading-7">
                Find quick answers to common questions about our vehicles,
                financing, services, and more.
              </p>

              <button className="mt-5 flex items-center gap-2 text-sm font-medium text-[#C9A227]">
                View All FAQs
                <ArrowRight size={16} />
              </button>

            </div>


            {/* Questions */}
            <div className="mt-7 divide-y divide-gray-300 border-y border-gray-300 md:mt-0">

              <button className="flex w-full items-center justify-between gap-5 py-5 text-left">

                <span className="text-sm font-medium text-[#0B1F33] md:text-base">
                  Do you offer financing options?
                </span>

                <ChevronRight
                  size={18}
                  className="shrink-0 text-[#0B1F33]"
                />

              </button>


              <button className="flex w-full items-center justify-between gap-5 py-5 text-left">

                <span className="text-sm font-medium text-[#0B1F33] md:text-base">
                  Can I schedule a test drive online?
                </span>

                <ChevronRight
                  size={18}
                  className="shrink-0 text-[#0B1F33]"
                />

              </button>


              <button className="flex w-full items-center justify-between gap-5 py-5 text-left">

                <span className="text-sm font-medium text-[#0B1F33] md:text-base">
                  What documents are required for purchase?
                </span>

                <ChevronRight
                  size={18}
                  className="shrink-0 text-[#0B1F33]"
                />

              </button>


              <button className="flex w-full items-center justify-between gap-5 py-5 text-left">

                <span className="text-sm font-medium text-[#0B1F33] md:text-base">
                  Do you accept trade-ins?
                </span>

                <ChevronRight
                  size={18}
                  className="shrink-0 text-[#0B1F33]"
                />

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ContactUs;