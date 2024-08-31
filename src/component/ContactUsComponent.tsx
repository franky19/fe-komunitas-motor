const ContactUsComponent = () => {
  return (
    <section id="contact-us" className="bg-[#B0BEC5] py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Hubungi Kami</h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Lokasi</h3>
            <p className="mb-4">
              Jl. Motor Lestari No. 123, Kota Motor, Indonesia
            </p>
            <h3 className="text-xl font-semibold mb-4">Email</h3>
            <p className="mb-4">info@komunitasmotor.com</p>
            <h3 className="text-xl font-semibold mb-4">Telepon</h3>
            <p className="mb-4">+62 812 3456 7890</p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Formulir Kontak</h3>
            <form
              action="#"
              method="POST"
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-white"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsComponent;
