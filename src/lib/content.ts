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
  paragraphs: [
    "I am Suprotim Choudhury.",
    "My relationship with yoga has developed through practice, teaching and continual exploration of the discipline beyond the physical form.",
    "I see yoga not simply as exercise, flexibility or performance, but as a multidimensional practice involving āsana, prāṇāyāma, concentration, meditation and self-observation.",
    "The physical body is where many of us begin. We learn to stand. To balance. To breathe. To hold. To release.",
    "And gradually, the practice begins to reveal something beyond the posture itself. It teaches us how we respond to effort. How we relate to discomfort. How we direct attention. How we become still.",
    "That is where yoga becomes more than movement.",
    // TODO: drafted line, not from Suprotim's original brief — flag for his review/edit.
    "Presence is not a state we arrive at once. It is something we return to, again and again, both on and off the mat.",
  ],
  practiceWithoutPretence: {
    heading: "A Practice Without Pretence",
    paragraphs: [
      "I believe yoga can be traditional without becoming inaccessible, and contemporary without losing its roots. My teaching is therefore grounded in the classical spirit of yoga while remaining relevant to modern life.",
      "There is room for physical intensity. There is room for softness. There is room for discipline. And there is room for silence.",
      "The practice meets you where you are — and asks you to become more conscious from there.",
    ],
  },
  image: {
    src: "/images/portrait-smiling.jpg",
    alt: "Suprotim Choudhury smiling indoors",
  },
};

export const PRACTICE = {
  dimensions: [
    {
      number: "01",
      sanskrit: "Āsana",
      subtitle: "The body as a field of awareness.",
      paragraph:
        "Postures develop strength, stability, mobility, balance and control. But the deeper practice lies in learning to inhabit the body consciously — observing sensation, breath, effort and stillness.",
    },
    {
      number: "02",
      sanskrit: "Prāṇāyāma",
      subtitle: "The breath as a bridge.",
      paragraph:
        "Breath is more than something that sustains movement. Through conscious breathing, we begin to observe rhythm, attention and the relationship between breath and mind.",
    },
    {
      number: "03",
      sanskrit: "Dhyāna",
      subtitle: "Attention becomes still.",
      paragraph:
        "Meditation is the gradual cultivation of sustained awareness. Less about forcing the mind to become empty, and more about learning to observe without immediately reacting.",
    },
    {
      number: "04",
      sanskrit: "Sādhana",
      subtitle: "Practice becomes a way of life.",
      paragraph:
        "Sādhana represents commitment. Returning to practice. Returning to discipline. Returning to awareness. Not occasionally. But consistently.",
    },
  ],
  philosophy: {
    heading: "The Body Is the Beginning.",
    paragraphs: [
      "We live through the body. We experience the world through the senses. We breathe. We move. We react. We desire. We resist.",
      "Yoga gives us an opportunity to observe all of this. The posture becomes a doorway. The breath becomes an anchor. Meditation becomes a mirror. And practice becomes a conversation with ourselves.",
      "Yoga is not merely something we do. It is something we learn to see through.",
    ],
  },
  deeper: {
    heading: "Between Movement and Stillness",
    paragraphs: [
      "There is a moment between one movement and the next. Between inhalation and exhalation. Between effort and release.",
      "Between thought and action. That moment is easy to overlook. Yoga teaches us to notice it.",
      "That is where the practice begins to become stillness.",
    ],
  },
};

export const TEACHING = {
  intro: {
    heading: "Teaching Is an Act of Attention",
    paragraphs: [
      "Teaching yoga is not about demonstrating how far a body can move.",
      "It is about helping another person become more aware of their own experience. Every body is different. Every mind approaches practice differently.",
      "There is therefore no single expression of yoga that belongs to everyone.",
      "My role as a teacher is to create the conditions for exploration — offering guidance, structure and awareness while allowing the practitioner to develop their own relationship with the practice.",
    ],
  },
  offerings: [
    {
      number: "01",
      title: "Movement & Mobility",
      description: "Developing conscious movement, stability and range of motion.",
    },
    {
      number: "02",
      title: "Strength & Balance",
      description: "Building physical integrity through disciplined practice.",
    },
    {
      number: "03",
      title: "Breathwork",
      description: "Exploring the relationship between breath, attention and movement.",
    },
    {
      number: "04",
      title: "Meditation",
      description: "Cultivating concentration, observation and stillness.",
    },
    {
      number: "05",
      title: "Traditional Yoga",
      description: "Engaging with yoga as a broader discipline rather than solely a physical practice.",
    },
  ],
  journey: {
    heading: "A Practice That Travels",
    paragraphs: [
      "Yoga has taken me through different places, people and approaches to practice.",
      "From India to Europe and back again, the practice has continued to evolve while its essential questions remain the same:",
    ],
    questions: ["Who am I?", "How do I move through the world? Can I become more aware?"],
    closing:
      "My teaching journey has included work with practitioners in different environments and participation in international yoga events.",
    // Kept as a restrained, factual list — only what Suprotim has verified, no added claims.
    credentials: [
      {
        year: "2022",
        title: "Yamm Festival",
        location: "Milano Marittima, Italy",
        description: "Featured among the Indian yoga teachers at the festival.",
      },
      {
        year: "Certification",
        title: "200-Hour Teacher Training",
        location: "Sri Sri School of Yoga",
        description: "Recorded in the school's teacher registry.",
      },
    ],
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
