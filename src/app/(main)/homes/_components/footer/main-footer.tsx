interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Brand Center", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Help center",
    links: [
      { label: "Discord Server", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Licensing", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
  {
    title: "Download",
    links: [
      { label: "iOS", href: "#" },
      { label: "Android", href: "#" },
      { label: "Windows", href: "#" },
      { label: "MacOS", href: "#" },
    ],
  },
];

const MainFooter = () => {
  return (
    <footer className="bg-">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{section.title}</h2>
              <ul className="space-y-4 font-medium text-gray-500 dark:text-gray-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center border-t border-gray-200 pt-6 dark:border-gray-700">
          <span className="text-center text-sm text-gray-500 dark:text-gray-300">
            © 2023 Wandora by James Nguyen. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
