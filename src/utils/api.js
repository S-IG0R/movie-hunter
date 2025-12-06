const baseUrl = `${import.meta.env.VITE_BASE_API_URL}${
  import.meta.env.VITE_OMDB_API_KEY
}`;
export const fetchMovie = async ({ request, page = 1, type = '' }) => {
  console.log(request, page, type);
  const str = `${baseUrl}&s=${request || 'matrix'}${
    type === 'all' || !type ? '' : `&type=${type}`
  }&page=${page}`;

  return await fetch(str);
};
