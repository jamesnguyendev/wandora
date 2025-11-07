import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Wandora",
  version: packageJson.version,
  copyright: `© ${currentYear}, Wandora.`,
  meta: {
    title: "Wandora - A booking platform with advanced features and seamless integration  ",
    description:
      "Wandora  is a fantastic booking platform, designed to simplify your booking experience, with many easy-to-use features.",
  },
};
