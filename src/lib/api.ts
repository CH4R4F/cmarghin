import qs from "qs";

const strapiBase = process.env.STRAPI_BASE_URL || "http://localhost:1337";

export function getStrapiURL(path: string) {
  return `${strapiBase}${path}`;
}

export async function fetchAPI({ path, urlParams, options }: fetchAPIProps) {
  const mergedOptions = {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const queryString = qs.stringify(urlParams);
  const url = `${strapiBase}${path}${queryString ? `?${queryString}` : ""}`;

  const res = await fetch(url, mergedOptions);

  if (!res.ok) {
    throw new Error(`Error fetching data from ${url}`);
  }

  const data = await res.json();

  return data;
}

export default fetchAPI;
