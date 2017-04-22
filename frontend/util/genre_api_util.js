export const fetchGenres = () => {
  return $.ajax(
    {
      method: "get",
      url: `/api/genres/`,
    }
  );
};
