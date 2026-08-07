export const siteFacts = {
  name: "YW Physical Therapy",
  url: "https://ywphysicaltherapy.com",
  clinician: {
    name: "Yu-Kuang Wu",
    displayName: "Yu-Kuang (Eric) Wu, PT, PhD",
    profilePath: "/about-dr-eric-wu/",
  },
  defaultSocialImagePath: "/assets/human-system-reset-studio-equipment-midtown-manhattan.png",
} as const;

export const entityIds = {
  website: `${siteFacts.url}/#website`,
  clinic: `${siteFacts.url}/#clinic`,
  clinician: `${siteFacts.url}/#drwu`,
} as const;
