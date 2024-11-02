export const individualServices = [
  {
    id: 1,
    title: "Video Essay Editing",
    description: "Transform your ideas into compelling video essays. I'll help structure your content, add engaging visuals, and polish your narrative for maximum impact. (For Minecraft videos, I'll add cinematic shots free of extra charge as I see fit.)",
    price: "Starting at $20 per hour of work",
    images: [
      "https://placehold.co/600x400?text=Video+Essay+1",
      "https://placehold.co/600x400?text=Video+Essay+2",
      "https://placehold.co/600x400?text=Video+Essay+3"
    ]
  },
  {
    id: 2,
    title: "Thumbnail Creation",
    description: "Capture your audience's attention with eye-catching thumbnails. I'll create custom graphics that perfectly encapsulate your video's content and entice viewers to click on it.",
    price: "$15 for 3 thumbnails",
    images: [
      "https://placehold.co/600x400?text=Thumbnail+1",
      "https://placehold.co/600x400?text=Thumbnail+2",
      "https://placehold.co/600x400?text=Thumbnail+3"
    ]
  },
  {
    id: 3,
    title: "Cinematic Minecraft Shots",
    description: "Sold Out - Elevate your Minecraft content with breathtaking cinematic shots to create stunning visuals within your story, perfect for intros, transitions, showcasing stuff, and making your video look like a movie.",
    displayDescription: "<strong>Sold Out</strong> - Elevate your Minecraft content with breathtaking cinematic shots to create stunning visuals within your story, perfect for intros, transitions, showcasing stuff, and making your video look like a movie.",
    price: "$20 per hour of work",
    images: [
      "https://placehold.co/600x400?text=Minecraft+1",
      "https://placehold.co/600x400?text=Minecraft+2",
      "https://placehold.co/600x400?text=Minecraft+3"
    ]
  },
  {
    id: 4,
    title: "Algorithm Optimization",
    description: "Boost your video's discoverability with our algorithm optimization service. I'll research and implement the best titles, descriptions, tags, and keywords to help your content rank higher in search results.",
    price: "$20 per video",
    images: [
      "https://placehold.co/600x400?text=SEO+1",
      "https://placehold.co/600x400?text=SEO+2",
      "https://placehold.co/600x400?text=SEO+3"
    ]
  }
];

export const bundleServices = [
  {
    id: 5,
    title: "Video Essay Bundle",
    description: "Get everything you need for a successful video essay. This bundle includes: 3 Thumbnail options, 3 title options, An algorithm-optimized description, algorithm-optimized tags, & Full video editing",
    price: "Starting at $20 + $20 per hour of editing (Save $15)",
    images: [
      "https://placehold.co/600x400?text=Video+Essay+Bundle+1",
      "https://placehold.co/600x400?text=Video+Essay+Bundle+2",
      "https://placehold.co/600x400?text=Video+Essay+Bundle+3"
    ],
    bundleDetails: [
      { name: "Video Essay Editing", link: "/services/1" },
      { name: "Thumbnail Creation", link: "/services/2" },
      { name: "Algorithm Optimization", link: "/services/4" }
    ]
  },
  {
    id: 6,
    title: "Full Video Details",
    description: "Optimize your video's presentation and discoverability. This bundle includes: Eye-catching thumbnail, Attention-grabbing title, Compelling description, & algorithm-optimized tags and keywords",
    price: "$25 (Save $10)",
    images: [
      "https://placehold.co/600x400?text=Full+Video+Details+1",
      "https://placehold.co/600x400?text=Full+Video+Details+2",
      "https://placehold.co/600x400?text=Full+Video+Details+3"
    ],
    bundleDetails: [
      { name: "Thumbnail Creation", link: "/services/2" },
      { name: "Algorithm Optimization", link: "/services/4" }
    ]
  },
  {
    id: 7,
    title: "Channel Starter Pack",
    description: "Kickstart your YouTube channel with everything you need to look professional. This bundle includes: 3 Channel banner options, Profile picture design, & Templates for 3 thumbnail styles",
    price: "$75",
    images: [
      "https://placehold.co/600x400?text=Channel+Starter+Pack+1",
      "https://placehold.co/600x400?text=Channel+Starter+Pack+2",
      "https://placehold.co/600x400?text=Channel+Starter+Pack+3"
    ],
    bundleDetails: [
      { name: "Thumbnail Creation", link: "/services/2" }
    ]
  }
];

// Keep the original servicesData export if you still need it elsewhere
export const servicesData = [...individualServices, ...bundleServices];
