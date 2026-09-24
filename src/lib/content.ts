export const SITE = {
  name: "Suprotim Choudhury",
  tagline: "Yoga Teacher · Practitioner · Student of the Self",
  instagramUrl: "https://www.instagram.com/supro_ethernal/",
  youtubeUrl: "https://youtube.com/@suprotimchoudhury5492",
  logo: {
    src: "/images/logo-wordmark.png",
    alt: "Suprotim Choudhury — signature logo",
    width: 1200,
    height: 543,
  },
};

export const HERO = {
  tagline:
    "Stillness is not the absence of movement. It is awareness within movement.",
  subtext:
    "Yoga is a practice of presence — an exploration of the body, breath, mind and the space between them.",
  image: {
    src: "/images/portrait-nature.jpg",
    alt: "Suprotim Choudhury standing outdoors among sunlit trees",
  },
};

export const INTRODUCTION = {
  lines: [
    "The practice begins with the body. It does not end there.",
    "Yoga is often encountered through movement. A posture.",
    "A breath.",
    "A sequence.",
    "A moment of stillness.",
  ],
  paragraphs: [
    "But beneath the physical practice lies something deeper: attention.",
    "My approach to yoga is an exploration of that relationship between movement and awareness — developing strength and mobility while cultivating breath, concentration, discipline and stillness.",
  ],
  closingLines: [
    "The practice is not about becoming someone else.",
    "It is about becoming more completely present to who you are.",
  ],
};

export const ABOUT = {
  // TODO: Replace with Suprotim's real biography once provided — no real bio exists yet.
  paragraphs: [
    "This is placeholder biography text for Suprotim Choudhury. Replace with his real story, teaching background, and philosophy once he provides it.",
  ],
  image: {
    src: "/images/portrait-smiling.jpg",
    alt: "Suprotim Choudhury smiling indoors",
  },
};

export const FEATURED_VIDEO = {
  youtubeId: "1c84sUPASio",
  title: "Watch & Practice",
};

type LongVideo =
  | { type: "mp4"; src: string; title: string; subtitle: string }
  | { type: "youtube"; youtubeId: string; title: string; subtitle: string };

export const LONG_VIDEOS: LongVideo[] = [
  {
    type: "mp4",
    src: "/videos/sacred-geometry.mp4",
    title: "Sacred Geometry Explained",
    subtitle: "Mandala, Yantra, Chakras",
  },
  {
    type: "mp4",
    src: "/videos/kali-divine-feminine.mp4",
    title: "Kali: The Divine Feminine Force",
    subtitle: "Who Is Kali?",
  },
];

export const YOG_VIDEOS = [
  {
    src: "/videos/himalaya-meditation.mp4",
    title: "Meditating in the Himalayas",
    width: 720,
    height: 1280,
  },
  {
    src: "/videos/om-chanting.mp4",
    title: "Traditional 'OM' Chanting",
    width: 608,
    height: 1080,
  },
];

export const GALLERY_IMAGES = [
  {
    src: "/images/portrait-warm-indoor.jpg",
    alt: "Suprotim Choudhury portrait, warm indoor lighting",
    width: 846,
    height: 846,
  },
  {
    src: "/images/portrait-black-tshirt.jpg",
    alt: "Suprotim Choudhury portrait outdoors at dusk",
    width: 578,
    height: 1280,
  },
  {
    src: "/images/himalaya-standing-1.jpg",
    alt: "Suprotim Choudhury standing on a rock in the Himalayas",
    width: 1024,
    height: 768,
  },
  {
    src: "/images/himalaya-standing-2.jpg",
    alt: "Suprotim Choudhury standing among Himalayan peaks",
    width: 1024,
    height: 768,
  },
  {
    src: "/images/himalaya-meditation.jpg",
    alt: "Suprotim Choudhury meditating in a Himalayan valley",
    width: 1080,
    height: 734,
  },
  {
    src: "/images/portrait-smiling.jpg",
    alt: "Suprotim Choudhury smiling indoors",
    width: 1080,
    height: 1066,
  },
  {
    src: "/images/portrait-nature.jpg",
    alt: "Suprotim Choudhury standing outdoors among sunlit trees",
    width: 768,
    height: 1024,
  },
  {
    src: "/images/meditation-stone-sculpture-1.jpg",
    alt: "Suprotim Choudhury meditating in lotus pose before a carved stone sculpture",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/warrior-pose-pavilion.jpg",
    alt: "Suprotim Choudhury in warrior pose beneath a pavilion with hanging lotus decor",
    width: 853,
    height: 1280,
  },
  {
    src: "/images/upward-dog-poolside-1.jpg",
    alt: "Suprotim Choudhury in upward-facing dog pose beside a reflecting pool",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/upward-dog-poolside-2.jpg",
    alt: "Suprotim Choudhury in upward-facing dog pose beside a reflecting pool, wider angle",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/lotus-pose-poolside.jpg",
    alt: "Suprotim Choudhury meditating in lotus pose beside a reflecting pool",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/meditation-pavilion.jpg",
    alt: "Suprotim Choudhury meditating in lotus pose beneath an open pavilion",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/namaste-portrait-buddha.jpg",
    alt: "Suprotim Choudhury in namaste pose beside a stone Buddha statue",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/meditation-stone-sculpture-2.jpg",
    alt: "Suprotim Choudhury meditating in lotus pose facing a carved stone sculpture",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/namaste-closeup.jpg",
    alt: "Close-up portrait of Suprotim Choudhury in namaste pose",
    width: 668,
    height: 1562,
  },
  {
    src: "/images/warrior-pose-poolside.jpg",
    alt: "Suprotim Choudhury in warrior pose beside a garden pool",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/tree-pose-buddha.jpg",
    alt: "Suprotim Choudhury in tree pose beside a stone Buddha statue",
    width: 1145,
    height: 1280,
  },
];

// TODO: Empty until Suprotim shares blog posts/articles to publish here.
export const JOURNAL_POSTS: {
  title: string;
  excerpt: string;
  date: string;
  url: string;
}[] = [];

export const PRESS_ITEMS = [
  {
    title: "La Repubblica",
    description:
      "Yoga, Yamm Festival a Milano Marittima: un weekend di pratiche e dialoghi per la pace.",
    url: "https://bologna.repubblica.it/cronaca/2022/06/09/news/yoga_yamm_festival_milano_marittima-352803335/amp/",
    image: {
      src: "/images/press-la-repubblica.jpg",
      alt: "La Repubblica article: Yoga, Yamm Festival a Milano Marittima",
    },
  },
  {
    title: "Radio Wellness",
    description: "YAMM Festival 2022: lo Yoga per tutti a Milano Marittima.",
    url: "https://www.radiowellness.it/yamm22-yoga-milano-marittima-festival/",
    image: {
      src: "/images/press-radio-wellness.jpg",
      alt: "Radio Wellness article: YAMM Festival 2022, lo Yoga per tutti a Milano Marittima",
    },
  },
];
