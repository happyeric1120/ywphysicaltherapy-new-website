const rows = [
  {
    symptom: "Neck pain",
    factor: "Often associated with limited thoracic rotation or sustained screen posture.",
    focus: "Thoracic mobility, cervical control, breathing mechanics, and work-position tolerance.",
    strategy: "Mobility restoration, postural endurance, and motor control retraining.",
  },
  {
    symptom: "Low back pain",
    factor: "In many cases, hip-loading deficits or trunk timing issues increase lumbar demand.",
    focus: "Single-leg stability, hip hinge mechanics, trunk control, and load tolerance.",
    strategy: "Movement retraining, graded strengthening, and progressive return to loaded activity.",
  },
  {
    symptom: "Shoulder pain overhead",
    factor: "Commonly linked with scapular control deficits or limited thoracic extension.",
    focus: "Overhead mechanics, shoulder blade timing, rib position, and rotator cuff capacity.",
    strategy: "Neuromuscular re-education, shoulder loading progressions, and movement variability.",
  },
  {
    symptom: "Runner knee pain",
    factor: "Often reflects a load-distribution issue rather than one isolated weak muscle.",
    focus: "Gait analysis, hip and foot control, cadence, training load, and tissue irritability.",
    strategy: "Gait cues, capacity building, and staged return-to-running progression.",
  },
  {
    symptom: "Achilles or plantar heel pain",
    factor: "Frequently associated with repetitive tendon load exceeding current tissue capacity.",
    focus: "Calf strength, ankle mobility, foot mechanics, plyometric tolerance, and training spikes.",
    strategy: "Load management, tendon capacity work, and gradual reintroduction of impact.",
  },
  {
    symptom: "Recurring sports injuries",
    factor: "Often connected to compensation patterns that repeat under speed, fatigue, or rotation.",
    focus: "Sport-specific movement, asymmetry, deceleration control, and recovery between sessions.",
    strategy: "Pattern correction, strength reinforcement, and sport-specific exposure progressions.",
  },
];

export default function MovementMatrixSection() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-surface border-y border-brand-border overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,119,89,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p className="type-label text-brand-gold mb-5">Movement Dysfunction Matrix</p>
          <h2 className="type-display-m text-brand-white mb-6">
            Symptoms rarely tell the whole movement story.
          </h2>
          <p className="type-body-l text-brand-muted">
            Pain often shows up where tissue is overloaded, but the contributing pattern may involve
            mobility, coordination, strength, recovery, or training load. The Human System Reset™
            starts by mapping those relationships before choosing treatment.
          </p>
        </div>

        <div className="overflow-x-auto border border-brand-border rounded-lg bg-white">
          <table className="w-full min-w-[920px] border-collapse text-left">
            <caption className="sr-only">
              Common pain presentations, possible movement contributors, assessment focus, and
              recovery strategies at YW Physical Therapy.
            </caption>
            <thead>
              <tr className="border-b border-brand-border bg-brand-surface">
                {["Symptom", "Common Contributing Factor", "Assessment Focus", "Recovery Strategy"].map(
                  (heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="px-5 py-4 align-bottom font-mono text-[10px] uppercase tracking-[0.18em] text-brand-muted"
                    >
                      {heading}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.symptom} className="border-b border-brand-border last:border-b-0">
                  <th
                    scope="row"
                    className="w-[18%] px-5 py-5 align-top font-display text-base font-bold text-brand-white"
                  >
                    {row.symptom}
                  </th>
                  <td className="w-[28%] px-5 py-5 align-top type-body-m text-brand-muted">
                    {row.factor}
                  </td>
                  <td className="w-[28%] px-5 py-5 align-top type-body-m text-brand-muted">
                    {row.focus}
                  </td>
                  <td className="w-[26%] px-5 py-5 align-top type-body-m text-brand-muted">
                    {row.strategy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
