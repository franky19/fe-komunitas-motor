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
