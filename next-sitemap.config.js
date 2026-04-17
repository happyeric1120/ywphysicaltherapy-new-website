/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ywphysicaltherapy.com",
  generateRobotsTxt: true,
  outDir: "./out",          // static export outputs to /out
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
