// app/page.tsx (if using the app directory)
"use server";
import { ImageAsset } from "@/component/ImageAsset";
import { cookies } from "next/headers";
import Navbar, { MenuItem } from "@/component/Navbar";
import { redirect } from "next/navigation";
import LoginComponent from "@/component/LoginComponent";

export default async function Page() {
  // Access cookies directly in server-side
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  const showItems = !token; // Show menu only when token is not present

  if (token) {
    redirect("/admin");
  }

  const menuItems: MenuItem[] = [
    { label: "Beranda", href: "/" },
    { label: "Tentang One Touring", href: "/#about_us" },
    { label: "Event", href: "/#event" },
    { label: "Blog", href: "/blog" },
    { label: "Registrasi member", href: "/#register_member" },
    { label: "Login", href: "/login" },
    { label: "Contact Us", href: "/#contact-us" },
  ];

  return (
    <>
      {showItems && (
        <>
          <Navbar
            iconNavbar={
              <ImageAsset height={50} width={50} src={"logo-web-fix.png"} />
            }
            menu={menuItems}
            activeNavbar="Login"
          />
          <LoginComponent />
        </>
      )}
    </>
  );
}
