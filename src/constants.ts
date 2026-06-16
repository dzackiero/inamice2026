
export const COLORS = {
  primary: "#003399", // Deep blue from PDF
  secondary: "#F27D26", // Orange from PDF
  accent: "#E4E3E0", // Light gray/beige
  ink: "#141414",
  bg: "#FFFFFF",
};

export const NAVIGATION = [
  { name: "About", href: "/" },
  {
    name: "INAMICE 2026",
    href: "/inamice-2026",
    subItems: [
      { name: "Main Event", href: "/inamice-2026/main-event" },
      { name: "Awarding Session", href: "/inamice-2026/awarding-session" },
    ]
  },
  { name: "Article", href: "/article" },
  { name: "More", href: "/more", seoSuffix: " About INAMICE" },
  { name: "Registration", href: "https://www.ticket2u.id/event/49337_962c67fd8ae94ed896db20dd98a052a9", isButton: true },
];

const MAIN_EVENT_SPEAKER_IMAGE_BASE = "https://cdn.inamice.net/assets/main-event/speakers";

export const THROWBACK_EVENTS = [
  {
    year: "2023",
    title: "6th INAMICE 2023",
    theme: "Optimizing MICE Development Strategy in Indonesia",
    image: "/img/6th-inamice.jpg",
  },
  {
    year: "2024",
    title: "7th INAMICE 2024",
    theme: "Repositioning Jakarta to Become a Leading Global Business Tourism Destination",
    image: "/img/7th-inamice.jpg",
  },
  {
    year: "2025",
    title: "8th INAMICE 2025",
    theme: "Achieving Sustainable Development Goals 2030 in Jakarta through Sustainable MICE Practices",
    image: "/img/8th-inamice.jpg",
  },
];

export const SPEAKERS = [
  {
    name: "PRAMONO ANUNG WIBOWO",
    role: "Governor of Jakarta for 2024-2029 period",
    topic: "Jakarta's Commitment to a Sustainable and Inclusive Global City",
    type: "KEYNOTE SPEECH",
    image: `${MAIN_EVENT_SPEAKER_IMAGE_BASE}/keynote_speaker.png`,
  },
  {
    name: "EINST RENGGA DAMAHATKO & ROMYALDY",
    role: "TBA",
    topic: "Understanding Digital Transformation as the Foundation of Smart Economy",
    type: "PLENARY SESSION 1",
    image: `${MAIN_EVENT_SPEAKER_IMAGE_BASE}/session1_subtopic1_speaker.png`,
  },
  {
    name: "YUDHA IMAM SUTEDJA",
    role: "TBA",
    topic: "Translating Smart Economy Vision Into Industry Strategy and Sector Growth",
    type: "PLENARY SESSION 1",
    image: `${MAIN_EVENT_SPEAKER_IMAGE_BASE}/session1_subtopic2_speaker.png`,
  },
  {
    name: "VINSENSIUS JEMADU",
    role: "TBA",
    topic: "Defining Smart Economy Metrics: Indicators and the Economic Contributions of MICE",
    type: "PLENARY SESSION 1",
    image: `${MAIN_EVENT_SPEAKER_IMAGE_BASE}/session1_subtopic3_speaker.png`,
  },
  {
    name: "MAXMILAAN BRUINIER",
    role: "TBA",
    topic: "Understanding Industry Realities and Digital Transformation Opportunities in the MICE Ecosystem",
    type: "PLENARY SESSION 2",
    image: `${MAIN_EVENT_SPEAKER_IMAGE_BASE}/session2_subtopic1_speaker.png`,
  },
  {
    name: "NABIL RAMADHAN",
    role: "TBA",
    topic: "Implementing Financial and Digital Transformation in MICE Practices",
    type: "PLENARY SESSION 2",
    image: `${MAIN_EVENT_SPEAKER_IMAGE_BASE}/session2_subtopic2_speaker.png`
  },
  {
    name: "ORACHORN WONGPAN-NGAM",
    role: "TBA",
    topic: "Benchmarking Thailand’s National MICE Governance Model to Strengthen Jakarta’s Strategic Direction",
    type: "PLENARY SESSION 2",
    image: `${MAIN_EVENT_SPEAKER_IMAGE_BASE}/session2_subtopic3_speaker.png`
  },
];

export const RUNDOWN = [
  { time: "8:30 - 9:00", duration: "0:30:00", activity: "Delegates Re-registration & Coffee Break" },
  { time: "9:00 - 9:35", duration: "0:35:00", activity: "Opening Ceremony" },
  { time: "9:35 - 9:45", duration: "0:10:00", activity: "Keynote Speech \u201CPositioning MICE as a Strategic Lever for Jakarta\u2019s Urban Economy\u201D" },
  { time: "9:45 - 11:25", duration: "1:40:00", activity: "Plenary Session 1 - \u201CBuilding Smart Economy Foundations in the MICE Industry: Digital Transformation, Industry Perspective, and Sectoral Contribution\u201D" },
  { time: "11:25 - 11:35", duration: "0:10:00", activity: "Brand Presentation by Sponsor" },
  { time: "11:35 - 12:35", duration: "1:00:00", activity: "Lunch & Networking Session" },
  { time: "12:35 - 12:45", duration: "0:10:00", activity: "Brand Presentation by Sponsor" },
  { time: "12:45 - 14:10", duration: "1:25:00", activity: "Plenary Session 2 - \u201CImplementing Smart Economy Practices in the MICE Ecosystem\u201D" },
  { time: "14:10 - 14:30", duration: "0:20:00", activity: "Coffee Break" },
  { time: "14:30 - 14:40", duration: "0:10:00", activity: "Biznet Gio Cloud Sponsor Lucky Activation" },
  { time: "14:40 - 14:55", duration: "0:15:00", activity: "Appreciation Session" },
  { time: "14:55 - 15:10", duration: "0:15:00", activity: "Closing Ceremony" },
];

export const AWARDS = [
  {
    title: "Innovation in MICE Technology Award",
    description: "Awarded to a MICE organizer that has implemented the most impactful digital innovations, such as data-driven event systems, hybrid event platforms, or AI-based attendee engagement solutions.",
  },
  {
    title: "Jakarta Tech-Ready Venue Award",
    description: "Honors a Jakarta-based venue that has adopted technology integration to enhance delegate experience and operational efficiency.",
  },
  {
    title: "Digital Ticketing Excellence Award",
    description: "Awarded to a digital ticketing platform that offers a seamless purchasing journey, stable transaction security, and an intuitive user experience that simplifies event management for organizers.",
  },
];

export const ARTICLES = [
  {
    date: "24/2/2025",
    title: "The Road to INAMICE 2025: Mendorong Keberlanjutan MICE Bersama Perserikatan Bangsa-bangsa Indonesia",
    source: "Media Indonesia",
    image: "/img/article-1.jpg",
    href: "https://mediaindonesia.com/humaniora/746612/the-road-to-inamice-2025-mendorong-keberlanjutan-mice-bersama-perserikatan-bangsa-bangsa-indonesia",
  },
  {
    date: "24/2/2025",
    title: "The Road to INAMICE 2025: Dorong Keberlanjutan MICE Bersama Perserikatan Bangsa-Bangsa Indonesia",
    source: "Medcom.id",
    image: "/img/article-2.jpg",
    href: "https://www.medcom.id/gaya/wisata/nN9O3y5k-the-road-to-inamice-2025-dorong-keberlanjutan-mice-bersama-perserikatan-bangsa-bangsa-indonesia",
  },
  {
    date: "26/2/2025",
    title: "The Road to INAMICE 2025: Promoting MICE Sustainability with UN Indonesia",
    source: "Netralnews.com",
    image: "/img/article-3.jpg",
    href: "https://en.netralnews.com/the-road-to-inamice-2025-promoting-mice-sustainability-with-un-indonesia/bGxmMmFsQTlUL3RNaVNnOG5LQ2U5UT09",
  },
  {
    date: "25/6/2025",
    title: "Sponsors Play an Active Role in Supporting the Success of a Sustainable Event: The 8th INAMICE 2025",
    source: "INAMICE",
    image: "/img/article-4.jpg",
  },
  {
    date: "22/6/2024",
    title: "INAMICE 2024: Saatnya Optimalkan Posisi Strategis Jakarta di Persimpangan Asia Tenggara",
    source: "National Geographic",
    image: "/img/article-5.jpg",
    href: "https://share.google/gAdXEZzyjAGFTKD6J",
  },
  {
    date: "25/6/2024",
    title: "Rampung Digelar, Konferensi The 7th INAMICE 2024 Bahas Potensi Jakarta Jadi Destinasi Wisata Bisnis Unggulan",
    source: "Medcom.id",
    image: "/img/article-6.jpg",
    href: "https://share.google/olpwa62uzTzGf7mQH",
  },
];
