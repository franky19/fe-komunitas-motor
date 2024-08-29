const RegistrasiMember = () => {
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
              value="male"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
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
              value="female"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
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
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Daftar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrasiMember;
