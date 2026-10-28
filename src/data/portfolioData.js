export const personalInfo = {
  name: "Manish",
  fullName: "Manish Prajapati",
  role: "2D Animator · Motion Designer · Creative Developer",
  headline: "Hi, I’m Manish — and I make things move.",
  tagline: "2D Animator, motion designer and creative developer turning playful characters, interactive stories, and pixels into living experiences with a bit of bounce.",
  aboutShort: "I’m a 2D animator, motion designer and creative developer who loves turning simple ideas into characters, scenes and stories with a bit of bounce in them. When I’m not animating, I’m probably sketching new characters or hunting down the perfect sound effect.",
  aboutLong: [
    "I started out doodling flipbooks in the margins of school notebooks, and somehow that turned into a full-blown passion of making pixels dance. Toon Boom, After Effects, and interactive web tools are basically my second home now.",
    "I've worked with indie game studios, digital brands, and creative teams that needed a distinct personality. Every project gets the same thing: a story first, bounce and rhythm second, polish throughout.",
    "Outside of client work, I'm either dissecting classic animation frames for research, exploring programmatic motion with Remotion and Canvas, or sketching quirky characters that will probably never ship — but that's half the fun."
  ],
  stats: [
    { value: "40+", label: "Projects shipped" },
    { value: "6+", label: "Years animating & building" },
    { value: "15+", label: "Happy clients & collabs" }
  ],
  email: "hello@manishprajapati.com",
  socials: {
    github: "https://github.com/manixhprajapati",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com"
  }
};

export const projectsData = [
  {
    id: 1,
    title: "Neon Bloom",
    tag: "2D Animation",
    img: "/img/project-1.png",
    accent: "--color-violet",
    rotate: "-rotate-2",
    badge: "NEW",
    description: "A vibrant short 2D animation about an electric flower blooming into a hypnotic burst of neon light. Animated frame by frame with a hand-painted color palette, snappy keyframes, and a bouncy squash-and-stretch feel."
  },
  {
    id: 2,
    title: "Paper Trail",
    tag: "Motion Graphics",
    img: "/img/project-2.png",
    accent: "--color-coral",
    rotate: "rotate-1",
    description: "A kinetic-type explainer following a paper airplane's dynamic journey across a pastel papercraft sky. Animated in After Effects with custom vector illustrations, kinetic pacing, and a continuous sweeping 3D camera move."
  },
  {
    id: 3,
    title: "Static Hearts",
    tag: "Animated Short",
    img: "/img/project-3.png",
    accent: "--color-cyan",
    rotate: "-rotate-1",
    description: "A bite-sized animated short about two glitchy retro CRT robots falling for each other, told through tactile TV static, analog textures, and heartbeat pulses. Built as an expressive character design exploration."
  },
  {
    id: 4,
    title: "Sunset Drive",
    tag: "Music Video",
    img: "/img/project-4.png",
    accent: "--color-gold",
    rotate: "rotate-2",
    description: "A retro-styled music video cut to a synth-pop groove, blending live road trip footage with stylized 2D cel motion graphic overlays for a warm, nostalgic VHS-tinted atmosphere."
  }
];

export const toolkitData = [
  { name: "Toon Boom Harmony", icon: "WandSparkles", accent: "--color-violet", tilt: "-rotate-3" },
  { name: "After Effects", icon: "Video", accent: "--color-coral", tilt: "rotate-2" },
  { name: "Adobe Illustrator", icon: "Palette", accent: "--color-cyan", tilt: "-rotate-2" },
  { name: "Photoshop", icon: "Image", accent: "--color-gold", tilt: "rotate-3" },
  { name: "Blender 3D", icon: "Box", accent: "--color-accent", tilt: "-rotate-2" },
  { name: "React & Motion", icon: "Code", accent: "--color-cyan", tilt: "rotate-2" }
];
