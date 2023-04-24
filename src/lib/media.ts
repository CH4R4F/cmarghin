import { getStrapiURL } from "./api";

export async function getMedia(media: Media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
