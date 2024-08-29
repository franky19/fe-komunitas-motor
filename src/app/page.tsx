"use client";
import { ImageAsset } from "@/component/ImageAsset";
import Navbar from "@/component/Navbar";
import SlideshowBanner from "@/component/SlideBanner/SlideShowBanner";
import { useState, useEffect } from "react";
import { Carousel } from "./store/slices/frontendSlice";
import "../component/SlideBanner/SlideBanner.css";
import VisiMisiContainer from "@/component/VisiMisiContainer";
import StrukturOrganisasiContainer from "@/component/StrukturOrganisasiContainer";
import RegistrasiMember from "@/component/RegistrasiMember";
import FooterComponent from "@/component/FooterComponent";

export default function Home() {
  const [carouselItems, setCarouselItems] = useState<Carousel[]>([]);
  const fetchCarouselData = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/carousels");
      const data = await response.json();
      console.log("data:", data.data); // Log the fetched data
      setCarouselItems(data.data || []); // Set only the `data` array to `carouselItems`, default to an empty array
    } catch (error) {
      console.error("Error fetching carousel data:", error);
    }
  };

  useEffect(() => {
    fetchCarouselData();
  }, []);

  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang One Touring", href: "#about_us" },
    { label: "Event", href: "#event" },
    { label: "Blog", href: "/" },
    { label: "Registrasi member", href: "#register_member" },
    { label: "Login", href: "#about_us" },
    { label: "Contact Us", href: "/" },
  ];

  return (
    <div className="bg-gray-100">
      <Navbar
        iconNavbar={
          <ImageAsset height={50} width={50} src={"logo-web-fix.png"} />
        }
        menu={menuItems}
      />
      <SlideshowBanner carouselItems={carouselItems} />
      <div id="about_us" className="py-[24px] bg-black">
        <div className="container flex flex-wrap justify-center mx-auto py-[24px]">
          <ImageAsset
            height={100}
            width={500}
            src={"tentang-kami.jpeg"}
            className="w-[50%] h-full rounded"
          />
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 animate__animated animate__fadeInRight">
            <div className="ml-4 lg:ml-8 pl-2 text-gray-300 text-base">
              <div className="mb-10 mx-auto ">
                <h2 className="mt-4 text-white text-4xl font-normal text-center md:text-justify">
                  Tentang Kami
                </h2>
                <p className="text-[#D3D3D3] font-light text-xl text-center md:text-justify">
                  Komunitas Motor Indonesia
                </p>
              </div>
              <p className="mt-2 text-[#FF9800]">
                Merupakan komunitas yang diawali dengan kesamaan hobi berkendara
                sepeda motor dan dibentuk secara sadar sebagai sarana untuk
                menjalin silaturahmi sesama pengguna motor maupun dengan
                komunitas lainnya.
              </p>
              <ul className="my-5">
                <li className="flex items-center mb-3 ">
                  <ImageAsset height={30} width={30} src={"checklist.svg"} />
                  <p className="ml-3 text-[#FF9800]">
                    Dibentuk pada 16 Februari 2019.
                  </p>
                </li>
                <li className="flex items-center ">
                  <ImageAsset height={30} width={30} src={"checklist.svg"} />
                  <p className="ml-3 text-[#FF9800]">
                    Berpusat di Bandung dan beberapa wilayah di Indonesia
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <VisiMisiContainer />
        <StrukturOrganisasiContainer />
      </div>
      <div id="event" className="py-[24px] bg-[#B0BEC5]">
        <div className="container flex flex-col justify-center mx-auto py-[24px]">
          <p className="text-black text-center text-4xl mb-[25px]">Event</p>
        </div>
      </div>
      <div id="register_member" className="py-[24px] bg-black">
        <div className="container flex flex-col justify-center mx-auto py-[24px]">
          <p className="text-white text-center text-4xl mb-[25px]">
          Registrasi member
          </p>
        </div>
        <RegistrasiMember />
        {/* <div className="container flex flex-wrap justify-center mx-auto py-[24px]">
          <ImageAsset
            height={100}
            width={500}
            src={"tentang-kami.jpeg"}
            className="w-[50%] h-full rounded"
          />
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 animate__animated animate__fadeInRight">
            <div className="ml-4 lg:ml-8 pl-2 text-gray-300 text-base">
              <div className="mb-10 mx-auto ">
                <h2 className="mt-4 text-white text-4xl font-normal text-center md:text-justify">
                  Tentang Kami
                </h2>
                <p className="text-[#D3D3D3] font-light text-xl text-center md:text-justify">
                  Komunitas Motor Indonesia
                </p>
              </div>
              <p className="mt-2 text-[#FF9800]">
                Merupakan komunitas yang diawali dengan kesamaan hobi berkendara
                sepeda motor dan dibentuk secara sadar sebagai sarana untuk
                menjalin silaturahmi sesama pengguna motor maupun dengan
                komunitas lainnya.
              </p>
              <ul className="my-5">
                <li className="flex items-center mb-3 ">
                  <ImageAsset height={30} width={30} src={"checklist.svg"} />
                  <p className="ml-3 text-[#FF9800]">
                    Dibentuk pada 16 Februari 2019.
                  </p>
                </li>
                <li className="flex items-center ">
                  <ImageAsset height={30} width={30} src={"checklist.svg"} />
                  <p className="ml-3 text-[#FF9800]">
                    Berpusat di Bandung dan beberapa wilayah di Indonesia
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <VisiMisiContainer />
        <StrukturOrganisasiContainer /> */}
      </div>
      <FooterComponent/>
    </div>
  );
}
