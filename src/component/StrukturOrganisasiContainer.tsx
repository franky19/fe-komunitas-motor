import Avatar from "./Avatar";

const StrukturOrganisasiContainer = () => {
  return (
    <div className="container flex flex-col mx-auto py-[24px] gap-[24px]">
      <p className="text-white text-center text-4xl mb-[25px]">
        Struktur Organisasi
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-lg">
          <div className="flex justify-between p-6 ">
            <div className="w-1/2 p-2 text-center">
              <Avatar
                AvatarSrc="/assets/avatar-sample.svg"
                classNameImage="h-10 w-10 md:h-20 md:w-20 rounded-full ring-2 ring-white mx-auto"
                position="Ketua"
                classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                name="John Doe"
                classNameAvatarName="text-xs md:text-lg font-normal text-center"
              />
            </div>
            <div className="w-1/2 p-2 text-center">
              <Avatar
                AvatarSrc="/assets/avatar-sample.svg"
                classNameImage="h-10 w-10 md:h-20 md:w-20 rounded-full ring-2 ring-white mx-auto"
                position="Wakil Ketua"
                classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                name="John Doe"
                classNameAvatarName="text-xs md:text-lg font-normal text-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 p-6">
            <div className="text-center p-2">
              <Avatar
                AvatarSrc={"/assets/avatar-sample.svg"}
                classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
                position="Sekretaris"
                classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                name="John Doe"
                classNameAvatarName="text-xs md:text-lg font-normal text-center"
              />
            </div>
            <div className="text-center p-2">
              <Avatar
                AvatarSrc={"/assets/avatar-sample.svg"}
                classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
                position="Bendahara I"
                classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                name="John Doe"
                classNameAvatarName="text-xs md:text-lg font-normal text-center"
              />
            </div>
            <div className="text-center p-2">
              <Avatar
                AvatarSrc={"/assets/avatar-sample.svg"}
                classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
                position="Bendahara II"
                classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                name="John Doe"
                classNameAvatarName="text-xs md:text-lg font-normal text-center"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 p-6">
            <div className="text-center p-2">
              <Avatar
                AvatarSrc={"/assets/avatar-sample.svg"}
                classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
                position="Anggota"
                classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                name="John Doe"
                classNameAvatarName="text-xs md:text-lg font-normal text-center"
              />
            </div>
            <div className="text-center p-2">
              <Avatar
                AvatarSrc={"/assets/avatar-sample.svg"}
                classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
                position="Anggota"
                classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                name="John Doe"
                classNameAvatarName="text-xs md:text-lg font-normal text-center"
              />
            </div>
            <div className="text-center p-2">
              <Avatar
                AvatarSrc={"/assets/avatar-sample.svg"}
                classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
                position="Anggota"
                classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                name="John Doe"
                classNameAvatarName="text-xs md:text-lg font-normal text-center"
              />
            </div>
            <div className="text-center p-2">
              <Avatar
                AvatarSrc={"/assets/avatar-sample.svg"}
                classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
                position="Anggota"
                classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                name="John Doe"
                classNameAvatarName="text-xs md:text-lg font-normal text-center"
              />
            </div>
            <div className="text-center p-2">
              <Avatar
                AvatarSrc={"/assets/avatar-sample.svg"}
                classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
                position="Anggota"
                classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                name="John Doe"
                classNameAvatarName="text-xs md:text-lg font-normal text-center"
              />
            </div>
            <div className="text-center p-2">
              <Avatar
                AvatarSrc={"/assets/avatar-sample.svg"}
                classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
                position="Anggota"
                classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                name="John Doe"
                classNameAvatarName="text-xs md:text-lg font-normal text-center"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex gap-[16px] md:gap-[30px] justify-center mb-5">
        <Avatar
          AvatarSrc="/assets/avatar-sample.svg"
          classNameImage="h-10 w-10 md:h-20 md:w-20 rounded-full ring-2 ring-white mx-auto"
          position="Ketua"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc="/assets/avatar-sample.svg"
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Wakil Ketua"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
      </div>

      <div className="flex gap-[36px] justify-center mb-5">
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Sekretaris"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Bendahara I"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Bendahara II"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
      </div>
      <div className="grid grid-cols-4 justify-center gap-[36px] lg:w-1/2 mx-auto xs:w-full xs:px-[16px]">
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />{" "}
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />{" "}
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
        <Avatar
          AvatarSrc={"/assets/avatar-sample.svg"}
          classNameImage="h-10 w-10 md:h-20 md:w-20  rounded-full ring-2 ring-white mx-auto"
          position="Anggota"
          classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
          name="John Doe"
          classNameAvatarName="text-xs md:text-lg font-normal text-center"
        />
      </div> */}
    </div>
  );
};

export default StrukturOrganisasiContainer;
