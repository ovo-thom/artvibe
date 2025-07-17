const apiKey = process.env.NEXT_PUBLIC_UNSPLASH_KEY;

const searchPhotos = async (): Promise<void> => {
  const query = "chat";
  const perPage = 9;

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&client_id=${apiKey}`
  );
  const data = await res.json();
  console.log(data);
};
export default searchPhotos;
