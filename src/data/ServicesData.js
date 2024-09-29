export const individualServices = [
  {
    id: 1,
    title: "Video Essay Editing",
    description: "Transform your ideas into compelling video essays. Our expert editors will help structure your content, add engaging visuals, and polish your narrative for maximum impact.",
    price: "Starting at $150 per video",
    imageUrl: "/path/to/video-essay-image.jpg"
  },
  {
    id: 2,
    title: "Thumbnail Creation",
    description: "Capture your audience's attention with eye-catching thumbnails. Our designers create custom graphics that perfectly encapsulate your video's content and entice viewers to click.",
    price: "$30 per thumbnail",
    imageUrl: "/path/to/thumbnail-creation-image.jpg"
  },
  {
    id: 3,
    title: "Cinematic Minecraft Shots",
    description: "Elevate your Minecraft content with breathtaking cinematic shots. We use advanced techniques to create stunning visuals within the Minecraft world, perfect for intros, transitions, or standalone content.",
    price: "Starting at $100 per shot sequence",
    imageUrl: "/path/to/minecraft-shots-image.jpg"
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Boost your video's discoverability with our SEO optimization service. We'll research and implement the best titles, descriptions, tags, and keywords to help your content rank higher in search results.",
    price: "$50 per video",
    imageUrl: "/path/to/seo-optimization-image.jpg"
  }
];

export const bundleServices = [
  {
    id: 5,
    title: "Video Essay Bundle",
    description: "Get everything you need for a successful video essay. This bundle includes: Thumbnail creation, Catchy title crafting, Engaging description writing, SEO-optimized tags, Full video editing and post-production",
    price: "$250 (Save $30)",
    imageUrl: "/path/to/video-essay-bundle-image.jpg"
  },
  {
    id: 6,
    title: "Full Video Details",
    description: "Optimize your video's presentation and discoverability. This bundle includes: Eye-catching thumbnail, Attention-grabbing title, Compelling description, SEO-optimized tags and keywords",
    price: "$100 (Save $20)",
    imageUrl: "/path/to/full-video-details-image.jpg"
  },
  {
    id: 7,
    title: "Channel Starter Pack",
    description: "Kickstart your YouTube channel with everything you need to look professional. This bundle includes: Channel banner design, Profile picture design, Templates for 3 thumbnail styles, SEO optimization for channel description",
    price: "$200 (Save $30)",
    imageUrl: "/path/to/channel-starter-pack-image.jpg"
  }
];

// Keep the original servicesData export if you still need it elsewhere
export const servicesData = [...individualServices, ...bundleServices];
