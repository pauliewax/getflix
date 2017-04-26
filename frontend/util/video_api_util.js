export const fetchVideos = () => {
  return $.ajax(
    {
      method: "get",
      url: "/api/videos",
    }
  );
};

export const fetchVideo = (id) => {
  return $.ajax(
    {
      method: "get",
      url: `/api/videos/${id}`,
    }
  );
};

export const fetchBySeries = (seriesId) => {
  return $.ajax(
    {
      method: "get",
      url: `/api/videos/series`,
      data: { seriesId }
    }
  );
};
