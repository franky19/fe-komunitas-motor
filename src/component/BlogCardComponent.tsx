// components/BlogCardComponent.tsx
import Link from "next/link";
import Links from "./Links";

export type BlogProps = {
  title: string;
  id: string;
  detail: string;
  date: string;
};

export default function BlogCard({ post }: { post: BlogProps }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.detail}</p>
        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
        <Links href={`/blog/${post.id}`}>
          <p className="text-blue-500 hover:underline">Read more</p>
        </Links>
      </div>
    </div>
  );
}
