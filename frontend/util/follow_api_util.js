export const createFollow = (follow) => {
  return $.ajax(
    {
      method: "post",
      url: `/api/follows/`,
      data: { follow }
    }
  );
};
