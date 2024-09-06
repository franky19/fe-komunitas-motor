import { useCallback, useMemo } from "react";
import {
  AboutUsAPI,
  AboutUsAttribute,
  Carousel,
  OrgStructure,
} from "../store/slices/frontendSlice";
import Apilist from "../helper/api";

type ContextDispatchTypeProps = {
  fetchCarousel: () => Promise<Carousel[] | undefined>;
  fetchAboutUs: () => Promise<AboutUsAttribute | undefined>;
  fetchOrgStructure: () => Promise<OrgStructure[] | undefined>;
};

export const useComunityMotor = (): ContextDispatchTypeProps => {
  const fetchCarousel = useCallback(async () => {
    try {
      const response = await fetch(Apilist.carousel, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw response;
      }

      const data: { data: Carousel[] } = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching carousel data:", error);
      return;
    }
  }, []);

  const fetchAboutUs = useCallback(async () => {
    try {
      const response = await fetch(Apilist.about_us, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch About Us data");
      }

      const data: { data: { attributes: AboutUsAttribute } } =
        await response.json();

      // Return the 'attributes' part which contains the actual About Us data
      return data.data?.attributes;
    } catch (error) {
      console.error("Error fetching About Us data:", error);
      return;
    }
  }, []);

  const fetchOrgStructure = useCallback(async () => {
    try {
      const response = await fetch(Apilist.organitation_structure, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch About Us data");
      }

      const data: { data: OrgStructure[] } =
        await response.json();

      // Return the 'attributes' part which contains the actual About Us data
      return data.data;
    } catch (error) {
      console.error("Error fetching About Us data:", error);
      return;
    }
  }, []);

  const dispatchValueMemo = useMemo(() => {
    return { fetchCarousel, fetchAboutUs,fetchOrgStructure };
  }, [fetchCarousel, fetchAboutUs,fetchOrgStructure]);

  return dispatchValueMemo;
};
