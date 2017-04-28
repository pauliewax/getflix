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

export const fetchSearch = ( searchQuery ) => {
  return $.ajax(
    {
      method: "get",
      url: `/api/series/search`,
      data: { searchQuery }
    }
  );
};

export const fetchAllSeries = () => {
  return $.ajax(
    {
      method: "get",
      url: `/api/series/`,
    }
  );
};
