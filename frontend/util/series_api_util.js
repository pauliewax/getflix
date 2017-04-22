export const fetchSerie = (id) => {
  return $.ajax(
    {
      method: "get",
      url: `/api/series/${id}`,
    }
  );
};

export const fetchSeries = (genreId) => {
  return $.ajax(
    {
      method: "get",
      url: `/api/series/genre`,
      data: { genreId }
    }
  );
};
