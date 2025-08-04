module.exports = {
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
};

module.exports.getOptions = (locale = "en") => ({
  debug: process.env.NODE_ENV === "development",
  fallbackLng: "en",
  lng: locale,
  preload: ["en", "es", "pt"],
  ns: ["common"],
  defaultNS: "common",
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
});
