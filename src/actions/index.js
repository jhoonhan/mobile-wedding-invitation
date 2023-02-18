export const fetchData = async ({ data, setData }) => {
  try {
    const data = await (
      await fetch("http://localhost:3002/api/v1/aws/all")
    ).json();

    setData(true);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async (userId, { fetched, setFetched }, setUser) => {
  try {
    const data = await (
      await fetch(
        `http://localhost:3002/api/v1/aws/${userId ? userId : "1000"}`
      )
    ).json();

    setUser(data.Item);
    return data;
  } catch (err) {
    console.err(err);
  }
};

// export const updateUser = async (userId, body)=> {
//   try {
//     const res = await
//   }
// }

export const updateUser = async (userId, body) => {
  try {
    // console.log(body);
    const data = await (
      await fetch(`http://localhost:3002/api/v1/aws/update/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body),
      })
    ).json();

    return data;
  } catch (err) {
    console.err(err);
  }
};
