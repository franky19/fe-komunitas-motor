import DetailAboutUs, { DetailAboutUsProps } from "./DetailAboutUs";
import OrganitationStructureContainer, {
  DetailOrgStructureProps,
} from "./StrukturOrganisasiContainer";
import VisiMisiContainer, { VisiMisiProps } from "./VisiMisiContainer";

type AboutUsProps = {
  detailAboutUs: DetailAboutUsProps;
  visiMisi: VisiMisiProps;
  organitationStructure: DetailOrgStructureProps;
};

const AboutUs = (props: AboutUsProps) => {
  const { detailAboutUs, visiMisi, organitationStructure } = props; // Destructured for better readability

  return (
    <div id="about_us" className="py-[24px] bg-gray-900 text-white">
      <DetailAboutUs
        title={detailAboutUs?.title}
        description={detailAboutUs?.description}
        date_found={detailAboutUs?.date_found}
        location={detailAboutUs?.location}
      />
      <VisiMisiContainer visi={visiMisi?.visi} misi={visiMisi?.misi} />
      <OrganitationStructureContainer
        detailOrg={organitationStructure.detailOrg || []}
      />
    </div>
  );
};

export default AboutUs;
