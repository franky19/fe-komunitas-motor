"use client";
import { useComunityMotor } from "@/app/hooks/useComunityMotor";
import { registerBody } from "@/app/store/slices/frontendSlice";
import { ChangeEvent, useCallback, useState } from "react";

type RegisterMemberProps = {
  SubmitRegisterMember: (
    name: string,
    gender: string,
    address: string,
    vehicle: string,
    colorVehicle: string,
    policeNo: string
  ) => void;
};

const RegistrasiMember = ({ SubmitRegisterMember }: RegisterMemberProps) => {
  // const { SubmitRegisterMember } = useComunityMotor();
  const [formData, setFormData] = useState<registerBody>({
    name: "",
    gender: "Laki - Laki",
    address: "",
    vehicle: "",
    colorVehicle: "",
    policeNo: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const onClickRegister = useCallback(() => {
  //   SubmitRegisterMember()
  // }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nama
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Nama"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Jenis Kelamin
          </label>
          <div className="flex items-center mb-4">
            <input
              id="gender-male"
              type="radio"
              name="gender"
              value="Laki - Laki"
              checked={formData.gender === "Laki - Laki"}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              onChange={handleChange}
            />
            <label
              htmlFor="gender-male"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Laki-laki
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="gender-female"
              type="radio"
              name="gender"
              value="Perempuan"
              checked={formData.gender === "Perempuan"}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              onChange={handleChange}
              defaultChecked
            />
            <label
              htmlFor="gender-female"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Perempuan
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="alamat"
          >
            Alamat
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="alamat"
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          {/* <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="alamat"
          /> */}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jenis_kendaraan"
          >
            Jenis Kendaraan
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jenis_kendaraan"
            type="text"
            placeholder="Jenis Kendaraan"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="warna"
          >
            Warna
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="warna"
            type="text"
            placeholder="Warna Kendaraan"
            name="colorVehicle"
            onChange={handleChange}
            value={formData.colorVehicle}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="no_police"
          >
            No Polisi
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="no_police"
            type="text"
            placeholder="No Polisi"
            value={formData.policeNo}
            name="policeNo"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() =>
              SubmitRegisterMember(
                formData.name,
                formData.gender,
                formData.address,
                formData.vehicle,
                formData.colorVehicle,
                formData.policeNo
              )
            }
          >
            Daftar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrasiMember;
