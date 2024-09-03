"use client";
import { ImageAsset } from "@/component/ImageAsset";
import Navbar from "@/component/Navbar";
import { useCallback, useEffect, useState } from "react";
import UseGetToken from "../hooks/useGetToken";

export default function Page() {
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
    repeatPassword: string;
  }>({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [isValid, setIsValid] = useState<boolean>(false);

//   const token = UseGetToken("token");
//   console.log("token:",token)

  useEffect(() => {
    const { email, password, repeatPassword } = formData;
    setIsValid(
      email.trim() !== "" &&
        password.trim() !== "" &&
        repeatPassword.trim() !== "" &&
        password === repeatPassword
    );
  }, [formData]);

  // Handle form input changes (assuming this function exists)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  //   const isValidForm = useCallback(() => {
  //     const {
  //       provinceInput,
  //       regencyInput,
  //       districtInput,
  //       villageInput,
  //       namaUsaha,
  //     } = formData;
  //     return (
  //       provinceInput &&
  //       regencyInput &&
  //       districtInput &&
  //       villageInput &&
  //       namaUsaha
  //     );
  //   }, [formData]);

  //   console.log(isValid, "valid");

  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang One Touring", href: "#about_us" },
    { label: "Event", href: "#event" },
    { label: "Blog", href: "/blog" },
    { label: "Registrasi member", href: "#register_member" },
    { label: "Login", href: "https://google.com" },
    { label: "Contact Us", href: "#contact-us" },
  ];

  // Function to get a specific cookie by name
  function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift();
    }
    return undefined;
  }

  const onClickRegister = useCallback(async () => {
    try {
      // Example usage
      //   const myCookieValue: string | undefined = getCookie("token");
      //   console.log('',myCookieValue);
      //   console.log("token:", Cookies.get('token'));

      const cookies = document.cookie.split("; ");
      const myCookie =
        cookies.find((row) => row.startsWith("token="))?.split("=")[1] ||
        "Cookie not found";
      console.log("my cookie", myCookie);

      // Delete a cooki
      const response = await fetch("/api/login", {
        method: "POST", // Use POST method
        headers: {
          "Content-Type": "application/json", // Set the appropriate headers for JSON content
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const data = await response.json();

      console.log(data);
      // Set only the `data` array to `carouselItems`, default to an empty array
      // setCarouselItems(data.data || []);
    } catch (error) {
      console.error("Error fetching carousel data:", error);
    }
  }, [formData.email, formData.password]);

  return (
    <>
      <Navbar
        iconNavbar={
          <ImageAsset height={50} width={50} src={"logo-web-fix.png"} />
        }
        menu={menuItems}
      />
      <div className="min-h-screen bg-[#B0BEC5] text-gray-900 flex justify-center">
        <div className="max-w-screen-xl h-auto m-10 sm:m-10 bg-[#87CEEB] shadow sm:rounded-lg flex justify-center flex-1 overflow-y-auto">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
              <div className="mt-4 w-full">
                <label htmlFor="nama-usaha">Email</label>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4 w-full">
                <label htmlFor="nama-usaha">Kata Sandi</label>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                className={`mt-5 tracking-wide font-semibold bg-[#FF6347] text-white w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
                onClick={onClickRegister}
              >
                <span className="ml-3">Login</span>
              </button>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
