import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2022-03-25",
  useCdn: false,
};

export const client = createClient(config);
export const urlFor = (source) => imageUrlBuilder(config).image(source);
