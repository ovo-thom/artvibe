export const apiKey = process.env.NEXT_PUBLIC_UNSPLASH_KEY;

export interface Photo {
  id: string;
  alt_description: string | null;
  width: number;
  height: number;
  urls: {
    small: string;
    regular: string;
    full: string;
    [key: string]: string;
  };
}

const searchPhotos = async (): Promise<Photo[]> => {
  const query = "voyage";
  const perPage = 12;

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&client_id=${apiKey}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  const data = await res.json();
  return data.results;
};

export default searchPhotos;
