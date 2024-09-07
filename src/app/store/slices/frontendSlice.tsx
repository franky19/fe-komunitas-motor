export type Carousel = {
  id: number;
  attributes: CarouselAttributes;
};

type CarouselAttributes = {
  title: string;
  description: string;
  image_slider: {
    url: string;
  };
};

export type AboutUsAPI = {
  id: number;
  attributes: AboutUsAttribute;
};

export type AboutUsAttribute = {
  title: string;
  description: string;
  date_founded: string;
  visi: string;
  misi: string;
  location_comunity: string;
};

export type OrgStructure = {
  id: number;
  attributes: {
    name: string;
    position: string;
    period: string;
    profile: {
      url: string;
    };
  };
};

export type DetailOrgStructure = {
  avatarSrc?: string;
  position?: string;
  name?: string;
};

export type registerBody = {
  name: string;
  gender: string;
  address: string;
  vehicle: string;
  colorVehicle: string;
  policeNo: string;
};

export type FormDataLogin = {
  email: string;
  password: string;
};
