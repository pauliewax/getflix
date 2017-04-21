export const fetchSeries = (id) => {
  return $.ajax(
    {
      method: "get",
      url: `/api/series/${id}`,
    }
  );
};
