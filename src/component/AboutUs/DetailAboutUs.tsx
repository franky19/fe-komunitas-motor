import { ImageAsset } from "../ImageAsset";

export type DetailAboutUsProps = {
  title: string;
  description: string;
  date_found: string;
  location: string;
};

const DetailAboutUs = (props: DetailAboutUsProps) => {
  return (
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
              {props.title}
            </p>
          </div>
          <p className="mt-2 text-[#FF9800]">{props.description}</p>
          <ul className="my-5">
            <li className="flex items-center mb-3 ">
              <ImageAsset height={30} width={30} src={"checklist.svg"} />
              <p className="ml-3 text-[#FF9800]">
                Dibentuk pada {props.date_found}.
              </p>
            </li>
            <li className="flex items-center ">
              <ImageAsset height={30} width={30} src={"checklist.svg"} />
              <p className="ml-3 text-[#FF9800]">{props.location}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailAboutUs;
