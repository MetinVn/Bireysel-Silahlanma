import React from "react";

const ListItem = ({ href, children, isExternal }) => (
  <li>
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="text-gray-600 hover:text-gray-900 block mb-1">
      {children}
    </a>
  </li>
);

const Section = ({ title, items }) => (
  <div className="flex-1 min-w-[200px] mb-4">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <ul className="list-none p-0">
      {items.map((item, index) => (
        <ListItem key={index} href={item.href} isExternal={item.isExternal}>
          {item.label}
        </ListItem>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const sections = [
    {
      title: "About Us",
      items: [
        { label: "Our Mission", href: "#about" },
        { label: "Our Team", href: "#team" },
        { label: "Careers", href: "#careers" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Crime Data", href: "#data" },
        { label: "Reports", href: "#reports" },
        { label: "Resources", href: "#resources" },
      ],
    },
    {
      title: "Links",
      items: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Follow Us",
      items: [
        { label: "X", href: "https://twitter.com", isExternal: true },
        { label: "Facebook", href: "https://facebook.com", isExternal: true },
        { label: "LinkedIn", href: "https://linkedin.com", isExternal: true },
        { label: "Instagram", href: "https://instagram.com", isExternal: true },
      ],
    },
  ];

  return (
    <footer className="bg-slate-200 text-gray-800 py-6 px-4 border-t border-gray-300">
      <div className="container mx-auto flex flex-wrap justify-between">
        {sections.map((section, index) => (
          <Section key={index} title={section.title} items={section.items} />
        ))}
      </div>
      <div className="text-center mt-6 border-t border-gray-300 pt-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Metin Isakhanli. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
