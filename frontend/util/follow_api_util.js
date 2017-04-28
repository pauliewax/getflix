export const fetchFollows = () => (
  $.ajax({
    url: '/api/follows/',
    method: 'GET',
  })
);

export const createFollow = (follow) => {
  return $.ajax(
    {
      method: "post",
      url: `/api/follows/`,
      data: { follow }
    }
  );
};

export const deleteFollow = (followId) => {
  return $.ajax(
    {
      method: "delete",
      url: `/api/follows/${followId}`
    }
  );
};
