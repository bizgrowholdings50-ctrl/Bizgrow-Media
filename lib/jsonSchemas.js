export const businessRef = {
  "@type": "LocalBusiness",
  "@id": "https://bizgrowmedia.co.uk/#localbusiness",
  name: "BizGrow Media",
  url: "https://bizgrowmedia.co.uk/",
  telephone: "+44 7903 332433",
  image: "https://bizgrowmedia.co.uk/icon.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "CEME Campus, Marsh Way",
    addressLocality: "Rainham",
    postalCode: "RM13 8EU",
    addressCountry: "GB",
  },
};

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
];

export const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": businessRef["@id"],
  name: businessRef.name,
  url: businessRef.url,
  telephone: businessRef.telephone,
  image: businessRef.image,
  address: businessRef.address,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5284,
    longitude: 0.1775,
  },
  openingHoursSpecification: openingHours,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://bizgrowmedia.co.uk/",
  },
  areaServed: "GB",
  priceRange: "££",
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  headline: "About BizGrow Media",
  description:
    "BizGrow Media is a UK business media studio delivering podcast production, authority-building content, and growth-driven media services.",
  url: "https://bizgrowmedia.co.uk/about-us/",
  mainEntity: businessRef,
};

export const studioProductionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Studio & Production",
  serviceType: "Podcast and video production",
  description:
    "Premium Studio & Production services for podcasts, executive interviews, video storytelling, and brand media content.",
  url: "https://bizgrowmedia.co.uk/studio-production/",
  provider: businessRef,
};

export const contentEngineSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Content Engine",
  serviceType: "Content marketing and production",
  description:
    "Content Engine services that create consistent, value-driven digital content to grow visibility and audience trust.",
  url: "https://bizgrowmedia.co.uk/content-engine/",
  provider: businessRef,
};

export const authorityBuilderSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Authority Builder",
  serviceType: "Personal and business branding",
  description:
    "Authority Builder services for building credibility, industry presence, and trust through strategic brand media.",
  url: "https://bizgrowmedia.co.uk/authority-builder/",
  provider: businessRef,
};

export const growthEngineSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Growth Engine",
  serviceType: "Growth strategy and lead generation",
  description:
    "Growth Engine services designed to increase visibility, generate leads, and accelerate revenue with business media campaigns.",
  url: "https://bizgrowmedia.co.uk/growth-engine/",
  provider: businessRef,
};
