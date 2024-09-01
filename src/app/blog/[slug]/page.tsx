'use client'
import FooterComponent from "@/component/FooterComponent";
import { ImageAsset } from "@/component/ImageAsset";
import Navbar from "@/component/Navbar";


export default function Page({ params }: { params: { slug: string } }) {
    const blogPost = {
        title: "Sample Blog Post",
        content: `
          <p>This is the content of the blog post with the slug <strong>${params.slug}</strong>.</p>
          <p>Here's some more content...</p>
        `,
        date: "August 15, 2024",
      };
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
           <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
           <p className="text-sm text-gray-500 mb-6">{blogPost.date}</p>
           <div
             className="prose"
             dangerouslySetInnerHTML={{ __html: blogPost.content }}
           />
         </div>
         <FooterComponent />
       </div>
        // <ContainerStructure>
        //     <DetailProduct id={params.slug}  />

        // </ContainerStructure>
    )
    // return <div>My Post: {params.slug}</div>
}