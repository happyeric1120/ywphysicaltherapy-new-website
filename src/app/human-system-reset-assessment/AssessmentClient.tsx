"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const HRV_BOOKING_URL = "https://calendar.app.google/1BkTPd9xWbbQi4v49";
const NEURAL_REGULATION_URL = "https://calendar.app.google/1BkTPd9xWbbQi4v49";

const responseOptions = [
  { label: "Never", value: 0 },
  { label: "Occasionally", value: 1 },
  { label: "Frequently", value: 2 },
  { label: "Almost Daily", value: 3 },
];

const sections = [
  {
    key: "cognitive",
    title: "Cognitive Load & Mental Recovery",
    questions: [
      "I experience brain fog or difficulty concentrating.",
      "My mind continues racing when I try to relax or fall asleep.",
      "I feel mentally exhausted after a normal workday.",
      "I have difficulty disconnecting from work responsibilities.",
      "Minor stressors feel overwhelming.",
    ],
  },
  {
    key: "sleep",
    title: "Sleep & Recovery",
    questions: [
      "I have difficulty falling asleep.",
      "I wake up during the night.",
      "I wake feeling unrefreshed despite sufficient time in bed.",
      "I feel tired during the day even after sleeping.",
      "My energy levels fluctuate significantly throughout the day.",
    ],
  },
  {
    key: "physical",
    title: "Physical Recovery",
    questions: [
      "My neck or shoulders feel persistently tight.",
      "I experience recurring low back discomfort.",
      "Massage or stretching only provides temporary relief.",
      "My body feels stiff after prolonged sitting.",
      "Physical tension increases during stressful periods.",
    ],
  },
  {
    key: "readiness",
    title: "Lifestyle Load & Recovery Readiness",
    questions: [
      "My legs feel heavy after standing or sitting for long periods.",
      "My hands or feet frequently feel cold.",
      "I recover slowly after workouts or physical activity.",
      "I often feel physically drained despite adequate rest.",
      "I frequently feel wired but tired.",
      "I spend more than 6 hours per day working at a computer.",
      "I consume caffeine multiple times per day.",
      "I frequently use screens before bedtime.",
      "I exercise intensely more than 4 times per week.",
      "I frequently feel pressured by work or personal responsibilities.",
    ],
  },
];

const safetyItems = [
  "Pacemaker or implanted electronic device",
  "History of seizures",
  "Currently pregnant",
  "Acute DVT or thrombophlebitis",
  "Open wounds on lower extremities",
  "Congestive heart failure",
  "Photosensitivity medication",
  "Retinal or macular disease",
];

const allQuestions = sections.flatMap((section) =>
  section.questions.map((question) => ({ sectionKey: section.key, question })),
);

type Step = "intro" | "questions" | "processing" | "results";

function getCategory(score: number) {
  if (score <= 25) {
    return {
      title: "Balanced Recovery Pattern",
      summary:
        "Your self-reported recovery load is currently lower. An HRV baseline can still be useful if you want objective recovery data.",
      recommendation: "Optional HRV baseline",
    };
  }
  if (score <= 50) {
    return {
      title: "Moderate Recovery Load",
      summary:
        "You reported some recovery stress signals. HRV assessment may help clarify recovery readiness and baseline recovery patterns.",
      recommendation: "Consider HRV assessment",
    };
  }
  if (score <= 75) {
    return {
      title: "High Recovery Demand",
      summary:
        "You reported multiple sleep, stress, physical tension, or recovery burden signals. An HRV assessment is recommended for more objective recovery data.",
      recommendation: "HRV assessment recommended",
    };
  }
  return {
      title: "Strong Recovery Assessment Candidate",
    summary:
      "Your responses suggest a higher recovery load pattern. A Human System Profile™ and recovery-focused session may help identify your current baseline.",
    recommendation: "Strong candidate for HRV assessment",
  };
}

function getSafetyNotes(selected: string[]) {
  const notes: string[] = [];
  if (selected.includes("Pacemaker or implanted electronic device") || selected.includes("History of seizures")) {
    notes.push("Sensory-based recovery tools may not be appropriate without provider review.");
  }
  if (selected.includes("Currently pregnant")) {
    notes.push("Please consult your healthcare provider before scheduling recovery-focused interventions.");
  }
  if (selected.includes("Acute DVT or thrombophlebitis") || selected.includes("Open wounds on lower extremities") || selected.includes("Congestive heart failure")) {
    notes.push("Compression therapy may not be appropriate without medical clearance.");
  }
  if (selected.includes("Photosensitivity medication") || selected.includes("Retinal or macular disease")) {
    notes.push("Red light exposure should be reviewed carefully before use.");
  }
  return notes;
}

export default function AssessmentClient() {
  const [step, setStep] = useState<Step>("intro");
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [safety, setSafety] = useState<Record<string, boolean>>({});

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === allQuestions.length;

  const results = useMemo(() => {
    const rawScore = allQuestions.reduce((sum, _question, index) => sum + (answers[index] ?? 0), 0);
    const indexScore = Math.round((rawScore / 75) * 100);
    const domainScores = sections.map((section) => {
      const questionIndexes = allQuestions
        .map((question, index) => (question.sectionKey === section.key ? index : -1))
        .filter((index) => index >= 0);
      const raw = questionIndexes.reduce((sum, index) => sum + (answers[index] ?? 0), 0);
      const max = questionIndexes.length * 3;
      return {
        key: section.key,
        title: section.title,
        score: Math.round((raw / max) * 100),
      };
    });
    const topDomains = [...domainScores].sort((a, b) => b.score - a.score).slice(0, 3);
    const selectedSafety = Object.entries(safety)
      .filter(([, selected]) => selected)
      .map(([item]) => item);

    return {
      rawScore,
      indexScore,
      category: getCategory(indexScore),
      domainScores,
      topDomains,
      selectedSafety,
      safetyNotes: getSafetyNotes(selectedSafety),
    };
  }, [answers, safety]);

  function handleStart() {
    if (!disclaimerAccepted) return;
    setStep("questions");
  }

  function handleSubmit() {
    if (!isComplete) return;
    setStep("processing");
    window.setTimeout(() => setStep("results"), 900);
  }

  function resetAssessment() {
    setAnswers({});
    setSafety({});
    setDisclaimerAccepted(false);
    setStep("intro");
  }

  return (
    <>
      <section className="grain gold-glow relative pt-32 pb-20 md:pt-44 md:pb-28 bg-brand-black overflow-hidden text-center">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-5">Human System Reset™ Screening</p>
          <h1 className="type-display-l text-brand-white mb-6">
            Is your system ready for recovery?
          </h1>
          <p className="type-body-l text-brand-muted max-w-2xl mx-auto">
            A private, local-only questionnaire to help you decide whether an objective HRV
            Assessment or recovery-focused session may be a good next step.
          </p>
        </div>
      </section>

      {step === "intro" && (
        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-3xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Before You Begin</p>
            <h2 className="type-display-m text-brand-white mb-6">A short recovery-load screening.</h2>
            <div className="space-y-5 type-body-l text-brand-muted mb-8">
              <p>
                This assessment looks at self-reported sleep, cognitive load, physical tension,
                lifestyle demand, and recovery patterns. It does not diagnose medical conditions.
              </p>
              <p>
                Your responses stay in this browser session. YW Physical Therapy does not store your
                answers, score, or personal information.
              </p>
            </div>
            <label className="flex gap-3 p-5 border border-brand-border bg-white type-body-m text-brand-muted cursor-pointer" style={{ borderRadius: "2px" }}>
              <input
                type="checkbox"
                checked={disclaimerAccepted}
                onChange={(event) => setDisclaimerAccepted(event.target.checked)}
                className="mt-1 h-4 w-4 accent-brand-gold"
              />
              <span>
                I understand this assessment is intended for educational and wellness purposes only
                and does not constitute medical advice, diagnosis, or treatment.
              </span>
            </label>
            <button
              type="button"
              onClick={handleStart}
              disabled={!disclaimerAccepted}
              className="mt-8 inline-block font-body font-medium text-sm tracking-wide px-8 py-4 bg-brand-gold text-brand-black hover:opacity-90 disabled:opacity-35 disabled:cursor-not-allowed transition-opacity"
              style={{ borderRadius: "2px" }}
            >
              Start Screening →
            </button>
          </div>
        </section>
      )}

      {step === "questions" && (
        <section className="py-24 bg-brand-black">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="type-label text-brand-gold mb-4">Questionnaire</p>
                <h2 className="type-display-m text-brand-white">Rate each statement.</h2>
              </div>
              <p className="font-mono text-xs text-brand-muted tracking-widest uppercase">
                {answeredCount} / {allQuestions.length} answered
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.key} className="border border-brand-border bg-brand-surface p-6 md:p-8" style={{ borderRadius: "2px" }}>
                  <h3 className="font-display font-bold text-brand-white text-xl mb-6">{section.title}</h3>
                  <div className="space-y-5">
                    {section.questions.map((question) => {
                      const questionIndex = allQuestions.findIndex((item) => item.question === question);
                      return (
                        <fieldset key={question} className="border-t border-brand-border pt-5">
                          <legend className="type-body-m text-brand-white mb-3">{question}</legend>
                          <div className="grid sm:grid-cols-4 gap-2">
                            {responseOptions.map((option) => (
                              <label
                                key={option.label}
                                className={[
                                  "px-3 py-3 border text-center font-body text-xs cursor-pointer transition-colors",
                                  answers[questionIndex] === option.value
                                    ? "border-brand-gold bg-brand-gold/10 text-brand-white"
                                    : "border-brand-border bg-white text-brand-muted hover:border-brand-gold/40",
                                ].join(" ")}
                                style={{ borderRadius: "2px" }}
                              >
                                <input
                                  type="radio"
                                  name={`q-${questionIndex}`}
                                  value={option.value}
                                  checked={answers[questionIndex] === option.value}
                                  onChange={() => setAnswers((current) => ({ ...current, [questionIndex]: option.value }))}
                                  className="sr-only"
                                />
                                {option.label}
                              </label>
                            ))}
                          </div>
                        </fieldset>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="border border-brand-border bg-brand-surface p-6 md:p-8" style={{ borderRadius: "2px" }}>
                <h3 className="font-display font-bold text-brand-white text-xl mb-3">Safety Screening</h3>
                <p className="type-body-m text-brand-muted mb-6">
                  These items do not affect your score. They only help identify topics to review
                  before certain recovery tools are considered.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {safetyItems.map((item) => (
                    <label key={item} className="flex items-start gap-3 p-4 border border-brand-border bg-white type-body-m text-brand-muted cursor-pointer" style={{ borderRadius: "2px" }}>
                      <input
                        type="checkbox"
                        checked={Boolean(safety[item])}
                        onChange={(event) => setSafety((current) => ({ ...current, [item]: event.target.checked }))}
                        className="mt-1 h-4 w-4 accent-brand-gold"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isComplete}
                className="inline-block font-body font-medium text-sm tracking-wide px-8 py-4 bg-brand-gold text-brand-black hover:opacity-90 disabled:opacity-35 disabled:cursor-not-allowed transition-opacity"
                style={{ borderRadius: "2px" }}
              >
                View Screening Result →
              </button>
              <button
                type="button"
                onClick={resetAssessment}
                className="inline-block font-body font-medium text-sm tracking-wide px-8 py-4 border border-brand-border text-brand-muted hover:border-brand-white hover:text-brand-white transition-colors"
                style={{ borderRadius: "2px" }}
              >
                Reset
              </button>
            </div>
          </div>
        </section>
      )}

      {step === "processing" && (
        <section className="py-32 bg-brand-black text-center">
          <div className="max-w-3xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-5">Processing Locally</p>
            <h2 className="type-display-m text-brand-white mb-6">Calculating your recovery load index.</h2>
            <div className="h-1 max-w-md mx-auto bg-brand-surface overflow-hidden" style={{ borderRadius: "999px" }}>
              <div className="h-full w-2/3 bg-brand-gold animate-pulse" />
            </div>
          </div>
        </section>
      )}

      {step === "results" && (
        <section className="py-24 bg-brand-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 mb-10">
              <div className="p-8 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                <p className="type-label text-brand-gold mb-5">Recovery Load Index</p>
                <p className="font-display font-bold text-brand-white leading-none mb-4" style={{ fontSize: "clamp(56px, 8vw, 96px)" }}>
                  {results.indexScore}
                  <span className="text-2xl text-brand-muted"> / 100</span>
                </p>
                <h2 className="font-display font-bold text-brand-white text-2xl mb-4">
                  {results.category.title}
                </h2>
                <p className="type-body-m text-brand-muted mb-5">{results.category.summary}</p>
                <p className="type-label text-brand-gold">{results.category.recommendation}</p>
              </div>

              <div className="p-8 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                <p className="type-label text-brand-gold mb-5">Highest Self-Reported Load Areas</p>
                <div className="space-y-5">
                  {results.domainScores.map((domain) => (
                    <div key={domain.key}>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <p className="font-body font-medium text-brand-white text-sm">{domain.title}</p>
                        <p className="font-mono text-xs text-brand-muted">{domain.score} / 100</p>
                      </div>
                      <div className="h-2 bg-white border border-brand-border overflow-hidden" style={{ borderRadius: "999px" }}>
                        <div className="h-full bg-brand-gold" style={{ width: `${domain.score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                <p className="type-label text-brand-gold mb-4">What This Means</p>
                <h3 className="font-display font-bold text-brand-white text-2xl mb-5">
                  This is a screening, not a diagnosis.
                </h3>
                <p className="type-body-m text-brand-muted mb-5">
                  Your result reflects patterns you reported today. It is designed to help decide
                  whether objective HRV-based recovery assessment may be useful.
                </p>
                <div className="space-y-3">
                  {results.topDomains.map((domain) => (
                    <p key={domain.key} className="type-body-m text-brand-muted">
                      <span className="text-brand-white">{domain.title}</span> was one of your
                      higher self-reported load areas.
                    </p>
                  ))}
                </div>
              </div>

              <div className="p-8 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                <p className="type-label text-brand-gold mb-4">Privacy + Safety</p>
                <p className="type-body-m text-brand-muted mb-5">
                  Your assessment was processed locally within your browser. No personal information
                  or assessment results are stored by YW Physical Therapy.
                </p>
                {results.safetyNotes.length > 0 ? (
                  <div className="space-y-3">
                    {results.safetyNotes.map((note) => (
                      <p key={note} className="type-body-m text-brand-muted">
                        <span className="text-brand-gold">Safety note:</span> {note}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="type-body-m text-brand-muted">
                    No safety cautions were selected. Your provider will still review appropriateness
                    before any in-office recovery tools are used.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-10 p-8 border border-brand-gold/25 bg-brand-surface text-center" style={{ borderRadius: "2px" }}>
              <p className="type-label text-brand-gold mb-4">Ready For Objective Recovery Data?</p>
              <h3 className="type-display-m text-brand-white mb-5">Start with HRV assessment.</h3>
              <p className="type-body-l text-brand-muted max-w-2xl mx-auto mb-8">
                This questionnaire provides subjective screening. HRV assessment provides objective
                data about recovery readiness and baseline recovery patterns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={HRV_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body font-medium text-sm tracking-wide px-8 py-4 bg-brand-gold text-brand-black hover:opacity-90 transition-opacity"
                  style={{ borderRadius: "2px" }}
                >
                  Schedule HRV Assessment →
                </a>
                <a
                  href={NEURAL_REGULATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body font-medium text-sm tracking-wide px-8 py-4 border border-brand-border text-brand-white hover:border-brand-gold hover:text-brand-gold transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  Schedule Recovery Session →
                </a>
                <Link
                  href="/physical-therapy-near-penn-station"
                  className="inline-block font-body font-medium text-sm tracking-wide px-8 py-4 border border-brand-border text-brand-muted hover:border-brand-white hover:text-brand-white transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  Learn Human System Reset™
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
