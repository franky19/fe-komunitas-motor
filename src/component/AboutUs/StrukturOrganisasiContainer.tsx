import { DetailOrgStructure } from "@/app/store/slices/frontendSlice";
import Avatar from "../Avatar";
import { BASEURL_API } from "@/app/config/devconfig";

export type DetailOrgStructureProps = {
  detailOrg: DetailOrgStructure[];
};

const OrganitationStructureContainer = (props: DetailOrgStructureProps) => {
  const { detailOrg } = props;

  return (
    <div className="container flex flex-col mx-auto py-[24px] gap-[24px]">
      <p className="text-white text-center text-4xl mb-[25px]">
        Struktur Organisasi
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-lg">
          <div className="flex justify-between p-6">
            {detailOrg.slice(0, 2).map((member, index) => (
              <div key={index} className="w-1/2 p-2 text-center">
                <Avatar
                  AvatarSrc={
                    `${BASEURL_API}${member.avatarSrc}` ||
                    "/assets/avatar-sample.svg"
                  }
                  classNameImage="h-10 w-10 md:h-20 md:w-20 rounded-full ring-2 ring-white mx-auto"
                  position={member.position}
                  classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                  name={member.name}
                  classNameAvatarName="text-xs md:text-lg font-normal text-center"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 p-6">
            {detailOrg.slice(2, 5).map((member, index) => (
              <div key={index} className="text-center p-2">
                <Avatar
                  AvatarSrc={
                    `${BASEURL_API}${member.avatarSrc}` ||
                    "/assets/avatar-sample.svg"
                  }
                  classNameImage="h-10 w-10 md:h-20 md:w-20 rounded-full ring-2 ring-white mx-auto"
                  position={member.position}
                  classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                  name={member.name}
                  classNameAvatarName="text-xs md:text-lg font-normal text-center"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-5 p-6">
            {detailOrg.slice(5).map((member, index) => (
              <div key={index} className="text-center p-2">
                <Avatar
                  AvatarSrc={
                    `${BASEURL_API}${member.avatarSrc}` ||
                    "/assets/avatar-sample.svg"
                  }
                  classNameImage="h-10 w-10 md:h-20 md:w-20 rounded-full ring-2 ring-white mx-auto"
                  position={member.position}
                  classNamePosition="mt-3 font-bold text-sm md:text-xl text-center"
                  name={member.name}
                  classNameAvatarName="text-xs md:text-lg font-normal text-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganitationStructureContainer;
