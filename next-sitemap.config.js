/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ywphysicaltherapy.com",
  generateRobotsTxt: true,
  outDir: "./out",          // static export outputs to /out
  autoLastmod: false,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/about", "/lp", "/wellness-body-reset"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
