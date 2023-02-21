import { v1 as uuidv1 } from "uuid";
import { USER_URL, MESSAGE_URL } from "../config";

// const USER_URL = "http://localhost:3002/api/v1/aws/user";
// const MESSAGE_URL = "http://localhost:3002/api/v1/aws/message";

export const fetchData = async ({ data, setData }) => {
  try {
    const data = await (await fetch(`${USER_URL}/all`)).json();
    console.log(data);
    setData(true);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async (userId, setUser) => {
  try {
    const data = await (
      await fetch(`${USER_URL}/${userId ? userId : "1000"}`)
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
      await fetch(`${USER_URL}/update/${userId}`, {
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
    // console.log(uuidv1());
    const conditionalId = userId === "0000" ? uuidv1() : userId;
    // console.log(conditionalId);
    const conditionalBody = {
      ...body,
      Id: conditionalId,
      InviteId: conditionalId,
    };

    const data = await (
      await fetch(`${MESSAGE_URL}/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(conditionalBody),
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
      await fetch(`${MESSAGE_URL}/${userId ? userId : "1000"}`)
    ).json();
    if (Item) {
      setMessage(Item);
    }
    return Item;
  } catch (err) {
    console.err(err);
  }
};
