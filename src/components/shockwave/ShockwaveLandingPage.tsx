"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BookingButton from "@/components/BookingButton";
import {
  shockwaveFaqs,
  type ShockwaveLandingPageData,
} from "@/data/shockwaveLandingPages";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stageNames = ["ASSESS", "REGION", "TARGET", "RECOVERY", "SYSTEM", "REBUILD"];

const conditionPages = [
  { label: "Tendon Pain", href: "/shockwave-tendon-pain-nyc", note: "Achilles · elbow · patellar · selected shoulder" },
  { label: "Plantar + Heel", href: "/shockwave-plantar-fasciitis-nyc", note: "Plantar region · heel · calf · foot loading" },
  { label: "Selected Low Back", href: "/shockwave-low-back-pain-nyc", note: "Muscular and soft-tissue contributors" },
  { label: "Neck + Shoulder", href: "/shockwave-neck-shoulder-pain-nyc", note: "Selected posterior shoulder and muscular targets" },
];

function ImagePlaceholder({ label, index }: { label: string; index: number }) {
  return (
    <div
      className="relative flex aspect-video min-h-[220px] items-end overflow-hidden border border-black/10 bg-[#e9edf2] p-6 sm:min-h-[320px]"
      role="img"
      aria-label={`Future treatment photograph: ${label}`}
    >
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <div className="absolute -right-[8%] -top-[20%] h-[80%] w-[60%] rounded-full border border-[#176bff]/20" />
        <div className="absolute right-[7%] top-[10%] h-[55%] w-[42%] rounded-full border border-[#176bff]/15" />
        <div className="absolute bottom-0 left-[14%] h-px w-[72%] bg-black/10" />
        <div className="absolute bottom-[18%] left-0 h-px w-full bg-black/5" />
      </div>
      <span className="absolute right-5 top-4 font-mono text-[clamp(3rem,9vw,7rem)] font-medium leading-none tracking-[-0.08em] text-black/[0.055]">
        0{index + 1}
      </span>
      <div className="relative z-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#176bff]">
          Treatment image placeholder
        </p>
        <p className="mt-2 max-w-md font-display text-xl font-bold tracking-[-0.03em] text-[#101114] sm:text-2xl">
          {label}
        </p>
        <p className="mt-2 text-sm text-[#61666e]">16:9 · Final clinical photography will replace this panel.</p>
      </div>
    </div>
  );
}

function TreatmentImage({
  image,
  label,
  index,
}: {
  image: NonNullable<ShockwaveLandingPageData["steps"][number]["image"]>;
  label: string;
  index: number;
}) {
  return (
    <figure className="group relative aspect-[4/3] min-h-[260px] overflow-hidden bg-[#101114] sm:min-h-[360px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent px-6 pb-6 pt-20 text-white">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/70">
          YW Physical Therapy · Step 0{index + 1}
        </p>
        <figcaption className="mt-2 font-display text-xl font-bold tracking-[-0.03em] sm:text-2xl">
          {label}
        </figcaption>
      </div>
    </figure>
  );
}

export default function ShockwaveLandingPage({ page }: { page: ShockwaveLandingPageData }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const treatmentImages = page.steps.flatMap((step) =>
    step.image ? [{ ...step.image, label: step.label, number: step.number }] : []
  );

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-hero-reveal]", {
          opacity: 0,
          y: 30,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
        });

        gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]").forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 34,
            duration: 0.72,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          });
        });
      });

      return () => media.revert();
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="overflow-clip bg-white text-[#101114]">
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden border-b border-black/10 bg-white pt-28 sm:pt-32">
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block" aria-hidden="true">
          {treatmentImages.length >= 3 ? (
            <div className="grid h-full grid-cols-[1.15fr_0.85fr] grid-rows-2 gap-1 bg-white">
              <div className="relative row-span-2 overflow-hidden">
                <Image
                  src={treatmentImages[0].src}
                  alt=""
                  fill
                  priority
                  sizes="28vw"
                  className="object-cover"
                />
              </div>
              {treatmentImages.slice(1, 3).map((image, index) => (
                <div key={image.src} className="relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    priority={index === 0}
                    sizes="18vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <Image
              src="/assets/focused-shockwave-hero-bg.jpg"
              alt=""
              fill
              priority
              sizes="46vw"
              className="object-cover object-center grayscale-[15%]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl items-center px-6 pb-20">
          <div className="max-w-4xl lg:max-w-[57%]">
            <p data-hero-reveal className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#176bff] sm:text-xs">
              {page.eyebrow}
            </p>
            <h1
              data-hero-reveal
              className="mt-6 max-w-[12ch] text-balance font-display text-[clamp(3.2rem,7vw,7rem)] font-bold leading-[0.92] tracking-[-0.065em]"
            >
              {page.h1}
            </h1>
            <p data-hero-reveal className="mt-7 font-display text-xl font-bold tracking-[-0.03em] text-[#176bff] sm:text-2xl">
              More Than Just Shockwave.
            </p>
            <p data-hero-reveal className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[#61666e] sm:text-lg sm:leading-8">
              {page.heroDescription}
            </p>
            <div data-hero-reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookingButton
                label="Book a Shockwave Evaluation"
                className="w-full justify-center !bg-[#176bff] !px-7 !py-3.5 !text-white hover:!bg-[#0d54cf] sm:w-auto"
              />
              <a
                href="#approach"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/20 px-7 py-3 font-body text-sm font-medium transition-colors hover:border-black/50"
              >
                See If Shockwave May Fit
              </a>
            </div>
            <div data-hero-reveal className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#61666e]">
              <span>Midtown Manhattan</span>
              <span>Near Penn Station</span>
              <span>PT-led care</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f4f6f8] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div data-scroll-reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#176bff]">Explore by concern</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.045em] sm:text-4xl">A page matched to what you searched.</h2>
            </div>
            {page.key !== "general" && (
              <Link href="/shockwave-therapy-nyc" className="text-sm font-medium text-[#176bff] hover:underline">
                View the general shockwave guide →
              </Link>
            )}
          </div>
          <div className="mt-9 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {conditionPages.map((condition) => {
              const active = page.path === condition.href;
              return (
                <Link
                  key={condition.href}
                  href={condition.href}
                  aria-current={active ? "page" : undefined}
                  className={`group min-h-36 p-5 transition-colors ${active ? "bg-[#176bff] text-white" : "bg-white hover:bg-[#edf3ff]"}`}
                >
                  <span className={`font-mono text-[9px] uppercase tracking-[0.16em] ${active ? "text-white/65" : "text-[#176bff]"}`}>
                    {active ? "Current page" : "Explore"}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-[-0.035em]">{condition.label}</h3>
                  <p className={`mt-2 text-sm leading-5 ${active ? "text-white/70" : "text-[#61666e]"}`}>{condition.note}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#101114] py-10 text-white" aria-label="Treatment philosophy">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">The treatment journey</p>
          <div className="grid grid-cols-3 gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-6">
            {stageNames.map((stage, index) => (
              <div key={stage} className="bg-[#101114] px-3 py-4 sm:px-4">
                <span className="block font-mono text-[9px] text-[#5b9bff]">0{index + 1}</span>
                <span className="mt-1 block font-mono text-[10px] tracking-[0.12em] sm:text-xs">{stage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {treatmentImages.length > 0 && (
        <section className="border-b border-white/10 bg-[#101114] py-8 text-white sm:py-10" aria-label="Treatment sequence preview">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-5 flex items-end justify-between gap-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6ba6ff]">Real care · Real clinic</p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.04em] sm:text-3xl">See the full care sequence.</h2>
              </div>
              <a href="#approach" className="hidden text-sm font-medium text-white/70 hover:text-white sm:block">
                Explore each step ↓
              </a>
            </div>
            <div className="-mx-6 flex snap-x gap-1 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-6">
              {treatmentImages.map((image) => (
                <figure key={image.src} className="group relative aspect-[4/3] min-w-[72vw] snap-center overflow-hidden bg-black sm:min-w-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 33vw, 17vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4">
                    <span className="font-mono text-[9px] tracking-[0.16em] text-white/60">{image.number}</span>
                    <span className="ml-2 font-display text-sm font-bold uppercase tracking-[0.08em]">{image.label}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="approach" className="scroll-mt-24 border-b border-black/10 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div data-scroll-reveal className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#176bff]">{page.concernLabel}</p>
              <h2 className="mt-5 text-balance font-display text-[clamp(2.7rem,5.5vw,5.8rem)] font-bold leading-[0.92] tracking-[-0.065em]">
                {page.conditionHeading}
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-[#61666e]">{page.conditionIntro}</p>
              <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {page.assessmentPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 border-t border-black/10 pt-3 text-sm text-[#61666e]">
                    <span className="mt-1 text-[#176bff]" aria-hidden="true">↗</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 space-y-16 sm:space-y-24">
            {page.steps.map((step, index) => (
              <article
                key={step.number}
                data-scroll-reveal
                className="grid gap-7 lg:grid-cols-2 lg:items-center lg:gap-14"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#176bff]">
                    {step.number} · {step.label}
                  </p>
                  <h3 className="mt-4 max-w-[12ch] font-display text-[clamp(2rem,4vw,4rem)] font-bold leading-[0.98] tracking-[-0.055em]">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[#61666e] sm:text-lg sm:leading-8">
                    {step.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {step.image ? (
                    <TreatmentImage image={step.image} label={step.visualNote} index={index} />
                  ) : (
                    <ImagePlaceholder label={step.visualNote} index={index} />
                  )}
                </div>
              </article>
            ))}
          </div>

          {page.steps.length < 6 && (
            <div data-scroll-reveal className="mt-20 border-l-2 border-[#176bff] bg-[#f4f6f8] p-7 sm:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#176bff]">06 · Rebuild</p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.045em]">What comes next?</h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#61666e] sm:text-lg sm:leading-8">{page.rehabCopy}</p>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f4f6f8] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div data-scroll-reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#176bff]">How it works</p>
            <h2 className="mt-5 max-w-[12ch] text-balance font-display text-[clamp(2.6rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.06em]">
              Mechanical energy. Clinical context.
            </h2>
          </div>
          <div data-scroll-reveal>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-[#61666e]">
              Shockwave therapy delivers acoustic mechanical energy into musculoskeletal tissue. The stimulus may influence processes involved in pain modulation, cellular signaling, circulation-related responses, and tissue remodeling.
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[#61666e]">
              It is not appropriate for every condition or every patient. Treatment begins with an assessment to determine whether shockwave is appropriate and which tissues or regions should be addressed.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Mechanical stimulus", "Biological response", "Pain modulation", "Tissue remodeling"].map((item, index) => (
                <div key={item} className="border-t border-black/15 pt-3">
                  <span className="font-mono text-[9px] text-[#176bff]">0{index + 1}</span>
                  <p className="mt-1 text-sm font-medium leading-5">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div data-scroll-reveal className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#176bff]">Two technologies · Different roles</p>
            <h2 className="mt-5 text-balance font-display text-[clamp(2.6rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.06em]">
              Broad when the region matters. Focused when precision matters.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article data-scroll-reveal className="group overflow-hidden border border-black/10 bg-[#f4f6f8]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/assets/radial-shockwave-therapy-nyc.png"
                  alt="Radial shockwave equipment used at YW Physical Therapy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="p-7 sm:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#176bff]">Radial shockwave · Treat the region</p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.045em]">Broader regional treatment.</h3>
                <p className="mt-4 text-base leading-7 text-[#61666e]">
                  Radial shockwave distributes mechanical energy across a broader treatment area. It may be considered when surrounding muscle, fascia, or a larger symptomatic region is relevant.
                </p>
              </div>
            </article>
            <article data-scroll-reveal className="group overflow-hidden border border-black/10 bg-[#101114] text-white">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/assets/focused-shockwave-therapy-nyc.png"
                  alt="Focused shockwave equipment used at YW Physical Therapy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="p-7 sm:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6ba6ff]">Focused shockwave · Target the area</p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.045em]">More localized targeting.</h3>
                <p className="mt-4 text-base leading-7 text-white/65">
                  Focused shockwave allows treatment to be directed toward a more localized and potentially deeper target when the assessment identifies a specific treatment site.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#101114] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div data-scroll-reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6ba6ff]">Why YW Physical Therapy</p>
            <h2 className="mt-5 max-w-[11ch] text-balance font-display text-[clamp(2.7rem,5.4vw,5.6rem)] font-bold leading-[0.94] tracking-[-0.065em]">
              Technology is only part of the treatment.
            </h2>
          </div>
          <div data-scroll-reveal>
            <p className="text-lg leading-8 text-white/65">
              Devices do not determine where treatment should be applied, which type of shockwave should be used, or what should happen afterward. Clinical reasoning matters.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-3">
              {["Symptomatic tissue", "Surrounding region", "Movement", "Functional loading", "Activity demands", "Rehab progression"].map((item) => (
                <div key={item} className="bg-[#101114] p-4 text-sm text-white/70">{item}</div>
              ))}
            </div>
            <div className="mt-9 border-t border-white/15 pt-6">
              <p className="font-display text-xl font-bold">Yu-Kuang (Eric) Wu, PT, PhD</p>
              <p className="mt-1 text-sm text-white/55">Doctor of Physical Therapy-led care with a rehabilitation science background.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f4f6f8] py-20 sm:py-28">
        <div data-scroll-reveal className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#176bff]">Clinical fit comes first</p>
          <h2 className="mt-5 text-balance font-display text-[clamp(2.7rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.06em]">
            Is shockwave right for you?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#61666e]">{page.candidateCopy}</p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#61666e]">
            Shockwave is not appropriate for every diagnosis. A clinical assessment helps determine whether the treatment matches the presentation.
          </p>
          <div className="mt-8">
            <BookingButton
              label="Book a Shockwave Evaluation"
              className="!bg-[#176bff] !px-7 !py-3.5 !text-white hover:!bg-[#0d54cf]"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div data-scroll-reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#176bff]">Questions</p>
            <h2 className="mt-5 font-display text-[clamp(2.7rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.06em]">
              Shockwave FAQ
            </h2>
          </div>
          <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {shockwaveFaqs.map((faq) => (
              <details key={faq.question} className="group py-1">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-4 font-display text-lg font-bold tracking-[-0.025em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176bff]">
                  {faq.question}
                  <span className="text-2xl font-light text-[#176bff] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl pb-6 pr-10 text-base leading-7 text-[#61666e]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#176bff] py-20 text-white sm:py-28">
        <div data-scroll-reveal className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Assessment before technology</p>
          <h2 className="mx-auto mt-5 max-w-[15ch] text-balance font-display text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.065em]">
            Find out whether shockwave fits your condition.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/75">
            Treatment begins with understanding the presentation—not simply applying a device to the painful area.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookingButton
              label="Book a Shockwave Evaluation"
              className="w-full !bg-white !px-7 !py-3.5 !text-[#101114] hover:!bg-[#e9edf2] sm:w-auto"
            />
            <Link
              href="/insurance-pricing"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-medium transition-colors hover:bg-white/10 sm:w-auto"
            >
              Review Pricing
            </Link>
          </div>
          <p className="mt-9 font-mono text-[10px] uppercase leading-6 tracking-[0.15em] text-white/65">
            YW Physical Therapy · 224 W 35th St #301-5 · New York, NY · Near Penn Station
          </p>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 p-3 shadow-[0_-10px_35px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
        <BookingButton
          label="Book Evaluation"
          className="flex w-full justify-center !bg-[#176bff] !py-3 !text-white hover:!bg-[#0d54cf]"
        />
      </div>
    </div>
  );
}
