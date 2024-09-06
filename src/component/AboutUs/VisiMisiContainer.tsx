export type VisiMisiProps = {
  visi?: string;
  misi?: string;
};

const VisiMisiContainer = (props: VisiMisiProps) => {
  return (
    <div className="container flex flex-col justify-center mx-auto py-[24px]">
      <p className="text-white text-center text-4xl mb-[25px]">
        Visi / Misi Organisasi
      </p>
      <div className="px-[16px] md:px-0 mb-5">
        <p className="text-lg md:text-xl text-[#D3D3D3]">Visi</p>
        <p className="text-xs md:text-lg text-[#FF9800] ">{props.visi}</p>
      </div>
      <div className="mb-5 px-[16px] md:px-0">
        <p className="text-lg md:text-xl text-[#D3D3D3]">Misi</p>
        <p className="text-xs md:text-lg text-[#FF9800]">{props.misi}</p>
      </div>
    </div>
  );
};

export default VisiMisiContainer;
