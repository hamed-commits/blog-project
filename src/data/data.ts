import { defaultArticlePic, defaultAvatar } from "@/components/image";

export const socialLinks = [
  { svg: null, href: "/", label: "لینکدین" },
  { svg: null, href: "/", label: "توییتر" },
  { svg: null, href: "/", label: "اینستاگرام" },
  { svg: null, href: "/", label: "تلگرام" },
];

export const footerSections = [
  {
    title: "کمپانی",
    links: ["مدیران وبسایت", "تیم ما", "ارتباط با ما", "قوانین"],
  },
  {
    title: "پرسش های متداول",
    links: ["پشتیبانی", "درباره ما", "منابع"],
  },
];

export const articles = [
  {
    title: "اشنایی با لوازم پایه کوهنوردی",
    content:
      "In this guide, we break down actionable strategies for writing blog posts that capture attention...",
    thumbnail: defaultArticlePic,
    slug: "how-to-write-engaging-blog-content",
    views: 120,
    read_time: 5,
    category: {
      title: "تجهیزات",
      thumbnail: "/images/writing.jpg",
      slug: "تجهیزات",
    },
    author: { full_name: "حامد سیادتی", image: defaultAvatar },
  },
  {
    title: "10 قله مرتفع برتر دنیا",
    content:
      "Working remotely requires the right tools. Here are 10 apps that can help boost your productivity...",
    thumbnail: defaultArticlePic,
    slug: "best-productivity-tools-remote-work",
    views: 245,
    read_time: 6,
    category: { title: "قله ها", thumbnail: "/images/tech.jpg", slug: "tech" },
    author: { full_name: "حامد سیادتی", image: defaultAvatar },
  },
  {
    title: "قله های جنگلی ایران",
    content:
      "Minimalism is more than just a trend — it’s a way of life. Learn how to embrace it step-by-step.",
    thumbnail: defaultArticlePic,
    slug: "mastering-minimalist-living",
    views: 310,
    read_time: 4,
    category: {
      title: "قله ها",
      thumbnail: "/images/lifestyle.jpg",
      slug: "قله ها",
    },
    author: { full_name: "امیر طالبی", image: defaultAvatar },
  },
  {
    title: "راهنمای مسیریابی در کوهستان",
    content:
      "AI is already transforming the way we live. Here's what to expect in the next 5 years.",
    thumbnail: defaultArticlePic,
    slug: "future-of-ai-everyday-life",
    views: 410,
    read_time: 7,
    category: {
      title: "مسیریابی",
      thumbnail: "/images/ai.jpg",
      slug: "مسیریابی",
    },
    author: { full_name: "امیر طالبی", image: defaultAvatar },
  },
  {
    title: "غذا های ساده برای جنگل و کوهستان",
    content:
      "Short on time? These quick and easy meals will save your dinner routine.",
    thumbnail: defaultArticlePic,
    slug: "simple-weeknight-recipes",
    views: 190,
    read_time: 3,
    category: { title: "غذا", thumbnail: "/images/food.jpg", slug: "غذا" },
    author: { full_name: "حامد سیادتی", image: defaultAvatar },
  },
  {
    title: "برند های معتبر برای کمپ و کوهنوردی",
    content:
      "Curious about cryptocurrency but don’t know where to start? This guide covers the basics.",
    thumbnail: defaultArticlePic,
    slug: "beginners-guide-crypto-investing",
    views: 270,
    read_time: 6,
    category: {
      title: "تجهیزات",
      thumbnail: "/images/finance.jpg",
      slug: "تجهیزات",
    },
    author: { full_name: "امیر طالبی", image: defaultAvatar },
  },
  {
    title: "اموزش های پایه برای پیمایش ها",
    content:
      "Brands that stick in your mind aren't lucky — they're strategic. Here's why it works.",
    thumbnail: defaultArticlePic,
    slug: "psychology-of-great-branding",
    views: 330,
    read_time: 5,
    category: {
      title: "پیمایش",
      thumbnail: "/images/marketing.jpg",
      slug: "پیمایش",
    },
    author: { full_name: "حامد سیادتی", image: defaultAvatar },
  },
  {
    title: "صعود به قله ارفع کوه",
    content:
      "Freelancing from home sounds amazing, but it’s not always as easy as it seems. Here's the truth.",
    thumbnail: defaultArticlePic,
    slug: "remote-freelancing-myths-vs-reality",
    views: 150,
    read_time: 4,
    category: {
      title: "کوهنوردی",
      thumbnail: "/images/career.jpg",
      slug: "کوهنوردی",
    },
    author: { full_name: "مهرداد صیادی", image: defaultAvatar },
  },
];
