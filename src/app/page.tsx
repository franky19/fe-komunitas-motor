"use client";
import { ImageAsset } from "@/component/ImageAsset";
import Navbar from "@/component/Navbar";
import SlideshowBanner from "@/component/SlideBanner/SlideShowBanner";
import { useState, useEffect, useCallback } from "react";
import {
  AboutUsAPI,
  AboutUsAttribute,
  Carousel,
  DetailOrgStructure,
  OrgStructure,
} from "./store/slices/frontendSlice";
import "../component/SlideBanner/SlideBanner.css";
import RegistrasiMember from "@/component/RegistrasiMember";
import FooterComponent from "@/component/FooterComponent";
import ContactUsComponent from "@/component/ContactUsComponent";
import AboutUs from "@/component/AboutUs/AboutUs";
import { useComunityMotor } from "./hooks/useComunityMotor";

export default function Home() {
  const {
    fetchCarousel,
    fetchAboutUs,
    fetchOrgStructure,
    SubmitRegisterMember,
  } = useComunityMotor();
  const [carouselItems, setCarouselItems] = useState<Carousel[]>([]);
  const [isFetched, setIsFetched] = useState(false); // Add flag to prevent multiple fetches
  const [OrgStructureItem, setOrgStructureItem] = useState<OrgStructure[]>([]);
  const [aboutUsItems, setAboutUsItem] = useState<AboutUsAttribute | undefined>(
    {
      title: "string",
      description: "string",
      date_founded: "string",
      visi: "string",
      misi: "string",
      location_comunity: "",
    }
  );

  useEffect(() => {
    fetchAboutUs().then((data) => {
      if (data) {
        console.log("Fetched About Us data:", data);
        setAboutUsItem(data); // Update state with fetched data
        setIsFetched(true); // Mark data as fetched to avoid duplicate API calls
      }
    });
    fetchCarousel().then((data) => {
      if (data) {
        setCarouselItems(data); // Set the fetched carousel items to the state
        setIsFetched(true); // Mark as fetched
      }
    });
    fetchOrgStructure().then((data) => {
      if (data) {
        console.log("Fetched organitation data:", data);
        setOrgStructureItem(data);
      }
    });
  }, [fetchAboutUs, fetchCarousel, fetchOrgStructure]); // Include `isFetched` as a dependency

  console.log(carouselItems);

  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang One Touring", href: "#about_us" },
    { label: "Event", href: "#event" },
    { label: "Blog", href: "/blog" },
    { label: "Registrasi member", href: "#register_member" },
    { label: "Login", href: "/login" },
    { label: "Contact Us", href: "#contact-us" },
  ];

  const getStructureOrg = useCallback(() => {
    // Extract the end year of the period and find the maximum end year
    const maxPeriodEndYear = Math.max(
      ...OrgStructureItem.map((item) =>
        parseInt(item.attributes.period.split(" - ")[1])
      )
    );

    console.log("Max period end year:", maxPeriodEndYear);

    // Filter the OrgStructureItem to return only the items that match the max period
    const filteredOrgStructure = OrgStructureItem.filter(
      (item) =>
        parseInt(item.attributes.period.split(" - ")[1]) === maxPeriodEndYear
    );

    // Map the filtered items to get the necessary details
    return filteredOrgStructure.map((value) => ({
      avatarSrc: value?.attributes?.profile?.url,
      name: value?.attributes?.name,
      position: value?.attributes?.position,
    }));
  }, [OrgStructureItem]);

  return (
    <div className="bg-gray-100">
      <Navbar
        iconNavbar={
          <ImageAsset height={50} width={50} src={"logo-web-fix.png"} />
        }
        menu={menuItems}
      />
      <SlideshowBanner carouselItems={carouselItems} />
      <AboutUs
        detailAboutUs={{
          title: aboutUsItems?.title || "", // Properly access title
          description: aboutUsItems?.description || "", // Default to empty string if undefined
          date_found: aboutUsItems?.date_founded || "", // Add other fields as needed
          location: aboutUsItems?.location_comunity || "", // Example field, adjust according to your data structure
        }}
        visiMisi={{
          visi: aboutUsItems?.visi || "", // Example field
          misi: aboutUsItems?.misi || "", // Example field
        }}
        organitationStructure={{
          detailOrg: getStructureOrg() || [], // Use getStructureOrg() function and default to an empty array if undefined
        }}
      />
      <div id="event" className="py-[24px] bg-[#B0BEC5]">
        <section
          className="bg-cover bg-center h-96 flex items-center justify-center"
          // style="background-image: url('your-image-url.jpg');"
        >
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Event Komunitas Motor
            </h1>
            <p className="text-white text-lg md:text-xl">
              Bergabunglah dengan kami dalam event seru dan penuh petualangan!
            </p>
          </div>
        </section>
        <section className="container mx-auto py-12 px-4 md:px-0">
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Touring Merdeka 2024
            </h2>
            <p className="text-gray-600 mb-4">
              Acara touring memperingati Hari Kemerdekaan Indonesia dengan rute
              yang menampilkan destinasi bersejarah. Peserta akan melakukan
              konvoi dengan bendera merah putih dan berhenti di tempat-tempat
              bersejarah.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Tanggal & Waktu:
                </h3>
                <p className="text-gray-600">
                  17 Agustus 2024, 06:00 AM - 06:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Rute:
                </h3>
                <p className="text-gray-600">
                  Jakarta – Bogor – Bandung – Jakarta
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Pendaftaran:
            </h3>
            <p className="text-gray-600 mb-6">
              Silakan daftar melalui form di bawah ini. Biaya partisipasi Rp
              150.000, termasuk makan siang dan donasi.
            </p>

            <a
              href="#form"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Daftar Sekarang
            </a>
          </div>
        </section>
      </div>
      <div id="register_member" className="py-[24px] bg-gray-900">
        <div className="container flex flex-col justify-center mx-auto py-[24px]">
          <p className="text-white text-center text-4xl mb-[25px]">
            Registrasi member
          </p>
        </div>
        <RegistrasiMember SubmitRegisterMember={SubmitRegisterMember} />
      </div>
      <ContactUsComponent />
      <FooterComponent />
    </div>
  );
}
