export const fetchData = async (fetched) => {
  try {
    const data = await (
      await fetch("http://localhost:3002/api/v1/aws/all")
    ).json();

    fetched(true);
    return data;
  } catch (error) {
    console.error(error);
  }
};
