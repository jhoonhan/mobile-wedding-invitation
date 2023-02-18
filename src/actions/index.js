export const fetchData = async ({ fetched, setFetched }) => {
  try {
    const data = await (
      await fetch("http://localhost:3002/api/v1/aws/all")
    ).json();

    setFetched({ ...fetched, data: true });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async (userId, { fetched, setFetched }, setUser) => {
  try {
    const data = await (
      await fetch(`http://localhost:3002/api/v1/aws/${userId}`)
    ).json();

    setUser(data.Item);
    setFetched({ ...fetched, user: true });
    return data;
  } catch (err) {
    console.err(err);
  }
};
