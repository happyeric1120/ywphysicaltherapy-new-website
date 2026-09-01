export type ShockwaveLandingKey =
  | "general"
  | "tendon"
  | "plantar"
  | "lowBack"
  | "neckShoulder";

export type TreatmentStep = {
  number: string;
  label: string;
  title: string;
  description: string;
  visualNote: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type ShockwaveLandingPageData = {
  key: ShockwaveLandingKey;
  path: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroDescription: string;
  concernLabel: string;
  conditionHeading: string;
  conditionIntro: string;
  assessmentPoints: string[];
  rehabCopy: string;
  candidateCopy: string;
  steps: TreatmentStep[];
};

const sharedSteps = {
  assessment: {
    number: "01",
    label: "Assess",
    title: "Find the treatment target.",
  },
  radial: {
    number: "02",
    label: "Region",
    title: "Treat the broader region.",
  },
  focused: {
    number: "03",
    label: "Target",
    title: "Direct energy with precision.",
  },
  laser: {
    number: "04",
    label: "Recovery",
    title: "Post-Shockwave Care.",
  },
  softTissue: {
    number: "05",
    label: "System",
    title: "Address related muscle regions.",
  },
};

export const shockwaveLandingPages: Record<ShockwaveLandingKey, ShockwaveLandingPageData> = {
  general: {
    key: "general",
    path: "/shockwave-therapy-nyc",
    title: "Shockwave Therapy NYC | Focused & Radial Shockwave | YW Physical Therapy",
    metaDescription:
      "Explore focused and radial shockwave therapy in Midtown Manhattan with an assessment-driven physical therapy approach and post-shockwave care.",
    eyebrow: "Focused + Radial Shockwave · Midtown Manhattan",
    h1: "Shockwave Therapy in Midtown Manhattan",
    heroDescription:
      "A comprehensive, assessment-driven approach that may combine radial shockwave, focused shockwave, post-shockwave care, and physical therapy for selected musculoskeletal presentations.",
    concernLabel: "General Shockwave Care",
    conditionHeading: "A treatment strategy—not a one-device session.",
    conditionIntro:
      "The painful spot is only one part of the picture. Assessment may consider symptoms, movement, loading tolerance, the surrounding region, and the role each treatment tool may play.",
    assessmentPoints: [
      "symptom location and behavior",
      "movement and loading tolerance",
      "surrounding muscular involvement",
      "relevant functional demands",
    ],
    rehabCopy:
      "Depending on the examination, the plan may include movement strategies, progressive loading, mobility, strengthening, or activity modification. Shockwave does not replace rehabilitation.",
    candidateCopy:
      "Shockwave may be considered for selected persistent tendon, plantar, muscle, and myofascial presentations when clinically appropriate.",
    steps: [
      {
        ...sharedSteps.assessment,
        description: "Evaluate symptoms, movement, loading tolerance, and surrounding muscular or soft-tissue involvement before choosing a device or treatment site.",
        visualNote: "General musculoskeletal assessment",
        image: {
          src: "/assets/shockwave/low-back/assessment.png",
          alt: "Physical therapist observing a patient during a musculoskeletal movement assessment",
        },
      },
      {
        ...sharedSteps.radial,
        description: "Radial shockwave may be used across a broader symptomatic or mechanically related region when examination findings support that approach.",
        visualNote: "Radial shockwave · broader region",
        image: {
          src: "/assets/shockwave/tendon/radial.jpg",
          alt: "Radial shockwave treatment applied across a broader muscle and tendon region",
        },
      },
      {
        ...sharedSteps.focused,
        description: "Focused shockwave may be directed toward a selected localized tissue or symptomatic area when clinically appropriate.",
        visualNote: "Focused shockwave · localized target",
        image: {
          src: "/assets/shockwave/plantar/focused.png",
          alt: "Focused shockwave treatment applied to a selected localized musculoskeletal target",
        },
      },
      {
        ...sharedSteps.laser,
        description: "Class IV laser may be applied after shockwave as an adjunct within the treatment session.",
        visualNote: "Class IV laser · post-shockwave care",
        image: {
          src: "/assets/shockwave/neck-shoulder/laser.png",
          alt: "Class IV laser used as post-shockwave care for a selected treatment region",
        },
      },
      {
        ...sharedSteps.softTissue,
        description: "Percussive or vibration-based treatment may be used for surrounding muscle groups when clinically appropriate.",
        visualNote: "Rapid Release · related muscle region",
        image: {
          src: "/assets/shockwave/low-back/rapid-release.png",
          alt: "Rapid Release treatment applied to a related muscular region",
        },
      },
      {
        number: "06",
        label: "Rebuild",
        title: "Reconnect movement and capacity.",
        description: "Selected exercise may connect the treatment session with movement control, progressive loading, and the functional goals that matter to the patient.",
        visualNote: "Guided exercise · movement integration",
        image: {
          src: "/assets/shockwave/tendon/exercise.jpg",
          alt: "Physical therapist guiding a patient through a progressive rehabilitation exercise",
        },
      },
    ],
  },
  tendon: {
    key: "tendon",
    path: "/shockwave-tendon-pain-nyc",
    title: "Shockwave Therapy for Tendon Pain NYC | YW Physical Therapy",
    metaDescription:
      "Explore shockwave therapy for selected Achilles, elbow, patellar and other tendon problems in Midtown Manhattan.",
    eyebrow: "Tendon Pain · Focused + Radial Shockwave",
    h1: "Shockwave Therapy for Tendon Pain in NYC",
    heroDescription:
      "A comprehensive approach for selected tendon problems combining regional radial shockwave, targeted focused shockwave, post-shockwave care, and rehabilitation.",
    concernLabel: "Tendon Pain",
    conditionHeading: "Look beyond one painful point.",
    conditionIntro:
      "Persistent tendon pain may involve the tendon, muscle-tendon unit, surrounding tissues, movement, and the way the area is being loaded. Not every tendon condition is appropriate for shockwave.",
    assessmentPoints: [
      "symptom location",
      "tendon loading tolerance",
      "mobility and muscle function",
      "activity and training demands",
    ],
    rehabCopy:
      "The next step may include progressive loading, movement modification, and gradual return to functional or athletic activity based on examination findings.",
    candidateCopy:
      "Selected Achilles, elbow, patellar, rotator cuff, or calcific shoulder presentations may be discussed after a clinical assessment.",
    steps: [
      {
        ...sharedSteps.assessment,
        description: "Assess symptom location, tendon loading tolerance, mobility, muscle function, and the demands that matter to the patient.",
        visualNote: "Tendon loading assessment",
        image: {
          src: "/assets/shockwave/tendon/assessment.png",
          alt: "Physical therapist observing a patient during an Achilles tendon loading assessment",
        },
      },
      {
        ...sharedSteps.radial,
        description: "Radial shockwave may be applied across the broader muscle-tendon region based on examination findings.",
        visualNote: "Radial shockwave · muscle-tendon region",
        image: {
          src: "/assets/shockwave/tendon/radial.jpg",
          alt: "Radial shockwave treatment applied across the calf and Achilles tendon region",
        },
      },
      {
        ...sharedSteps.focused,
        description: "Focused shockwave may then be directed toward a selected localized tendon treatment site when appropriate.",
        visualNote: "Focused shockwave · selected tendon site",
        image: {
          src: "/assets/shockwave/tendon/focused.png",
          alt: "Focused shockwave treatment applied to a selected Achilles tendon target",
        },
      },
      {
        ...sharedSteps.laser,
        description: "Class IV laser may be applied to the treatment region following shockwave as an adjunct within the session.",
        visualNote: "Class IV laser · post-shockwave care",
        image: {
          src: "/assets/shockwave/tendon/laser.png",
          alt: "Class IV laser used as post-shockwave care for the Achilles tendon region",
        },
      },
      {
        ...sharedSteps.softTissue,
        description: "Rapid Release or another vibration-based technique may be used for related muscle regions when appropriate.",
        visualNote: "Rapid Release · related muscle group",
        image: {
          src: "/assets/shockwave/tendon/rapid-release.jpg",
          alt: "Rapid Release treatment applied to surrounding calf musculature",
        },
      },
      {
        number: "06",
        label: "Rebuild",
        title: "Reload the tendon with purpose.",
        description: "Selected exercise may be used to reconnect the treatment session with tendon loading, lower-limb control, and a gradual return to meaningful activity.",
        visualNote: "Guided exercise · tendon loading",
        image: {
          src: "/assets/shockwave/tendon/exercise.jpg",
          alt: "Physical therapist guiding a patient through an Achilles tendon loading exercise",
        },
      },
    ],
  },
  plantar: {
    key: "plantar",
    path: "/shockwave-plantar-fasciitis-nyc",
    title: "Shockwave Therapy for Plantar Fasciitis NYC | YW Physical Therapy",
    metaDescription:
      "Explore focused and radial shockwave therapy for selected plantar fasciitis and heel pain presentations in Midtown Manhattan.",
    eyebrow: "Plantar Fasciitis + Heel Pain",
    h1: "Shockwave Therapy for Plantar Fasciitis & Heel Pain in NYC",
    heroDescription:
      "A structured treatment approach that looks beyond the painful spot and considers the heel, plantar region, calf, and movement factors that may contribute to persistent symptoms.",
    concernLabel: "Plantar Fasciitis + Heel Pain",
    conditionHeading: "Heel pain can involve more than the heel.",
    conditionIntro:
      "The assessment may include the plantar region, calf, ankle mobility, foot loading, walking tolerance, and other factors that may influence stress on the heel.",
    assessmentPoints: [
      "heel pain location",
      "walking tolerance",
      "ankle mobility and calf function",
      "foot loading",
    ],
    rehabCopy:
      "Recommendations may include calf and foot loading, mobility work, footwear or activity modification, and gradual progression of walking or athletic demands.",
    candidateCopy:
      "Shockwave may be considered for selected persistent plantar or heel pain presentations after an assessment confirms an appropriate musculoskeletal target.",
    steps: [
      {
        ...sharedSteps.assessment,
        description: "Review heel pain location, walking tolerance, plantar sensitivity, ankle mobility, calf function, and foot loading.",
        visualNote: "Foot and ankle assessment",
        image: {
          src: "/assets/shockwave/plantar/assessment.png",
          alt: "Physical therapist assessing the plantar foot and heel region",
        },
      },
      {
        ...sharedSteps.radial,
        description: "Radial shockwave may be used across the broader plantar, heel, or calf region as clinically appropriate.",
        visualNote: "Radial shockwave · broader foot/calf region",
        image: {
          src: "/assets/shockwave/plantar/radial.jpg",
          alt: "Radial shockwave treatment applied across the calf and heel region",
        },
      },
      {
        ...sharedSteps.focused,
        description: "Focused shockwave may be directed toward a selected localized plantar or heel region when appropriate.",
        visualNote: "Focused shockwave · selected heel target",
        image: {
          src: "/assets/shockwave/plantar/focused.png",
          alt: "Focused shockwave treatment applied to a selected plantar heel target",
        },
      },
      {
        ...sharedSteps.laser,
        description: "Class IV laser may be applied after shockwave as an adjunct within the session.",
        visualNote: "Class IV laser · post-shockwave care",
        image: {
          src: "/assets/shockwave/plantar/laser.png",
          alt: "Class IV laser used as post-shockwave care for the plantar heel region",
        },
      },
      {
        ...sharedSteps.softTissue,
        description: "Rapid Release or another vibration-based technique may be used for related calf or lower-leg musculature.",
        visualNote: "Rapid Release · calf region",
        image: {
          src: "/assets/shockwave/plantar/rapid-release.jpg",
          alt: "Rapid Release treatment applied to surrounding calf musculature",
        },
      },
      {
        number: "06",
        label: "Rebuild",
        title: "Reload the foot with control.",
        description: "Selected exercise may reconnect the treatment session with foot control, progressive loading, and walking or activity demands.",
        visualNote: "Guided exercise · foot loading",
        image: {
          src: "/assets/shockwave/plantar/exercise.png",
          alt: "Patient performing a guided foot strengthening exercise with a towel",
        },
      },
    ],
  },
  lowBack: {
    key: "lowBack",
    path: "/shockwave-low-back-pain-nyc",
    title: "Shockwave Therapy for Low Back Pain NYC | YW Physical Therapy",
    metaDescription:
      "Explore an assessment-driven shockwave approach for selected muscular and soft-tissue contributors to persistent low back pain in Midtown Manhattan.",
    eyebrow: "Selected Low Back Presentations",
    h1: "Shockwave Therapy for Selected Low Back Pain in NYC",
    heroDescription:
      "A physical therapist-guided approach for selected muscular and soft-tissue contributors to persistent low back discomfort.",
    concernLabel: "Low Back Discomfort",
    conditionHeading: "First determine whether shockwave fits.",
    conditionIntro:
      "Low back symptoms can arise from many sources. Shockwave is not presented as a treatment that repairs discs, reverses arthritis, or corrects structural spinal changes.",
    assessmentPoints: [
      "symptom behavior",
      "lumbar and hip movement",
      "functional tolerance",
      "muscular and soft-tissue findings",
    ],
    rehabCopy:
      "Treatment may include trunk and hip movement, progressive loading, mobility, strengthening, or activity modification based on the examination.",
    candidateCopy:
      "Shockwave may be discussed only when the examination identifies a selected muscular or soft-tissue contributor that represents an appropriate treatment target.",
    steps: [
      {
        ...sharedSteps.assessment,
        description: "Evaluate symptom behavior, lumbar and hip movement, functional tolerance, muscular tenderness, and relevant loading patterns.",
        visualNote: "Lumbar and hip movement assessment",
        image: {
          src: "/assets/shockwave/low-back/assessment.png",
          alt: "Physical therapist observing a patient during a low back movement assessment",
        },
      },
      {
        ...sharedSteps.radial,
        description: "Radial shockwave may be applied to a broader selected paraspinal, gluteal, or related muscular region.",
        visualNote: "Radial shockwave · broad muscular region",
        image: {
          src: "/assets/shockwave/low-back/radial.png",
          alt: "Radial shockwave treatment applied to a selected low back region",
        },
      },
      {
        ...sharedSteps.focused,
        description: "Focused shockwave may be used for a selected localized muscular or soft-tissue treatment area when clinically appropriate.",
        visualNote: "Focused shockwave · localized soft-tissue target",
        image: {
          src: "/assets/shockwave/low-back/focused.jpg",
          alt: "Focused shockwave treatment applied to a localized low back target",
        },
      },
      {
        ...sharedSteps.laser,
        description: "Class IV laser may be applied to the selected treatment region after shockwave as an adjunct.",
        visualNote: "Class IV laser · post-shockwave care",
        image: {
          src: "/assets/shockwave/low-back/laser.png",
          alt: "Class IV laser used as post-shockwave care for the low back region",
        },
      },
      {
        ...sharedSteps.softTissue,
        description: "Rapid Release may be used for related paraspinal, gluteal, hip, or thoracolumbar musculature when clinically appropriate.",
        visualNote: "Rapid Release · related muscle region",
        image: {
          src: "/assets/shockwave/low-back/rapid-release.png",
          alt: "Rapid Release treatment applied to surrounding low back and hip musculature",
        },
      },
      {
        number: "06",
        label: "Rebuild",
        title: "Reconnect movement and control.",
        description: "Selected movement and exercise may be used to connect the treatment session with trunk control, hip movement, and the activities that matter to the patient.",
        visualNote: "Guided exercise · movement integration",
        image: {
          src: "/assets/shockwave/low-back/exercise.png",
          alt: "Physical therapist guiding a patient through a low back rehabilitation exercise",
        },
      },
    ],
  },
  neckShoulder: {
    key: "neckShoulder",
    path: "/shockwave-neck-shoulder-pain-nyc",
    title: "Shockwave Therapy for Neck & Shoulder Pain NYC | YW Physical Therapy",
    metaDescription:
      "Explore shockwave therapy for selected muscular and soft-tissue contributors to persistent neck and shoulder discomfort in Midtown Manhattan.",
    eyebrow: "Neck + Shoulder · Selected Musculoskeletal Targets",
    h1: "Shockwave Therapy for Neck & Shoulder Pain in NYC",
    heroDescription:
      "A targeted approach for selected muscular and soft-tissue contributors to persistent neck and shoulder discomfort.",
    concernLabel: "Neck + Shoulder Discomfort",
    conditionHeading: "A careful assessment comes first.",
    conditionIntro:
      "Neck and shoulder discomfort may involve multiple muscular and movement-related contributors. Shockwave should be used only when the examination identifies an appropriate musculoskeletal target.",
    assessmentPoints: [
      "cervical and shoulder movement",
      "symptom-provoking positions",
      "scapular mechanics",
      "work and functional demands",
    ],
    rehabCopy:
      "Movement retraining, scapular exercise, strengthening, ergonomic strategies, and progressive loading may be incorporated based on the examination.",
    candidateCopy:
      "Shockwave may be considered for selected posterior shoulder, periscapular, or other musculoskeletal targets—not for anterior neck or non-musculoskeletal structures.",
    steps: [
      {
        ...sharedSteps.assessment,
        description: "Assess cervical and shoulder movement, symptom-provoking positions, scapular mechanics, muscular findings, and work demands.",
        visualNote: "Cervical and shoulder movement assessment",
        image: {
          src: "/assets/shockwave/neck-shoulder/assessment.png",
          alt: "Physical therapist assessing the neck and shoulder region",
        },
      },
      {
        ...sharedSteps.radial,
        description: "Radial shockwave may be used for a broader selected upper trapezius, posterior shoulder, or periscapular muscular region.",
        visualNote: "Radial shockwave · posterior shoulder region",
        image: {
          src: "/assets/shockwave/neck-shoulder/radial.png",
          alt: "Radial shockwave treatment applied to the upper trapezius and posterior shoulder region",
        },
      },
      {
        ...sharedSteps.focused,
        description: "Focused shockwave may be used for a selected localized and clinically appropriate shoulder target.",
        visualNote: "Focused shockwave · selected shoulder target",
        image: {
          src: "/assets/shockwave/neck-shoulder/focused.png",
          alt: "Focused shockwave treatment applied to a selected posterior shoulder target",
        },
      },
      {
        ...sharedSteps.laser,
        description: "Class IV laser may be applied to the selected shoulder region following shockwave as an adjunct.",
        visualNote: "Class IV laser · post-shockwave care",
        image: {
          src: "/assets/shockwave/neck-shoulder/laser.png",
          alt: "Class IV laser used as post-shockwave care for the posterior shoulder region",
        },
      },
      {
        ...sharedSteps.softTissue,
        description: "Rapid Release or another technique may be used for related periscapular or posterior shoulder musculature.",
        visualNote: "Rapid Release · periscapular region",
        image: {
          src: "/assets/shockwave/neck-shoulder/rapid-release.png",
          alt: "Rapid Release treatment applied to surrounding periscapular musculature",
        },
      },
      {
        number: "06",
        label: "Rebuild",
        title: "Reconnect shoulder movement and control.",
        description: "Selected exercise may be used to reconnect the treatment session with scapular control, shoulder movement, and progressive functional loading.",
        visualNote: "Guided exercise · shoulder control",
        image: {
          src: "/assets/shockwave/neck-shoulder/exercise.png",
          alt: "Physical therapist guiding a patient through a shoulder rehabilitation exercise",
        },
      },
    ],
  },
};

export const shockwaveFaqs = [
  {
    question: "Is shockwave therapy painful?",
    answer:
      "Treatment can feel strong or uncomfortable depending on the area and sensitivity. Intensity can be adjusted based on tolerance and treatment goals.",
  },
  {
    question: "What is the difference between radial and focused shockwave?",
    answer:
      "Radial shockwave distributes energy across a broader region, while focused shockwave can direct energy toward a more localized treatment target. Either or both may be considered depending on the clinical presentation.",
  },
  {
    question: "Do you always use both radial and focused shockwave?",
    answer:
      "No. Treatment is individualized. The type of shockwave and treatment sequence depend on the assessment and clinical indication.",
  },
  {
    question: "What is Post-Shockwave Care?",
    answer:
      "Post-Shockwave Care is YW Physical Therapy's term for adjunct treatment performed after shockwave. This may include Class IV laser and treatment of related muscular regions when appropriate. It does not imply that this combination is proven superior to shockwave alone.",
  },
  {
    question: "Is shockwave a replacement for exercise or physical therapy?",
    answer:
      "No. Progressive loading, exercise, movement, and activity management often remain important parts of rehabilitation. Shockwave may be incorporated as one component of a broader plan.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of visits varies with the condition, symptom duration, examination findings, response to treatment, and rehabilitation needs.",
  },
  {
    question: "Is shockwave covered by insurance?",
    answer:
      "Coverage varies by plan and indication, and shockwave itself is frequently not covered as a standard benefit. Contact YW Physical Therapy for current pricing and coverage information.",
  },
];
