// pages/blog/index.tsx
'use client'
import BlogCard, { BlogProps } from "@/component/BlogCardComponent";
import FooterComponent from "@/component/FooterComponent";
import { ImageAsset } from "@/component/ImageAsset";
import Navbar from "@/component/Navbar";

const blogPosts: BlogProps[] = [
  {
    title: "First Blog Post",
    id: "first-blog-post",
    detail: "This is a brief description of the first blog post.",
    date: "August 1, 2024",
  },
  {
    title: "Second Blog Post",
    id: "second-blog-post",
    detail: "This is a brief description of the second blog post.",
    date: "August 1, 2024",
  },
];

export default function BlogPage() {
  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang One Touring", href: "#about_us" },
    { label: "Event", href: "#event" },
    { label: "Blog", href: "/blog" },
    { label: "Registrasi member", href: "#register_member" },
    { label: "Login", href: "https://google.com" },
    { label: "Contact Us", href: "#contact-us" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar
        iconNavbar={
          <ImageAsset height={50} width={50} src={"logo-web-fix.png"} />
        }
        menu={menuItems}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
