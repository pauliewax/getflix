export const fetchSeries = (id) => {
  return $.ajax(
    {
      method: "get",
      url: `/api/series/${id}`,
    }
  );
};

export const fetchSeriesByGenre = (genreId) => {
  return $.ajax(
    {
      method: "get",
      url: `/api/series/genre`,
      data: { genreId }
    }
  );
};
