const USERURL = "http://localhost:3002/api/v1/aws/user";
const MESSAGEURL = "http://localhost:3002/api/v1/aws/message";

export const fetchData = async ({ data, setData }) => {
  try {
    const data = await (await fetch(`${USERURL}/all`)).json();

    setData(true);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async (userId, setUser) => {
  try {
    const data = await (
      await fetch(`${USERURL}/${userId ? userId : "1000"}`)
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
      await fetch(`${USERURL}/update/${userId}`, {
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

export const updateMessage = async (userId, body) => {
  try {
    console.log(body);
    const data = await (
      await fetch(`${MESSAGEURL}/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
    ).json();

    return data;
  } catch (err) {
    console.err(err);
  }
};

export const fetchMessage = async (userId, setMessage) => {
  try {
    const { Item } = await (
      await fetch(`${MESSAGEURL}/${userId ? userId : "1000"}`)
    ).json();
    if (Item) {
      setMessage(Item);
    }
    return Item;
  } catch (err) {
    console.err(err);
  }
};
