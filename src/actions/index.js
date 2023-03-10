import { USER_URL, MESSAGE_URL } from "../config";

// const USER_URL = "http://localhost:3002/user";
// const MESSAGE_URL = "http://localhost:3002/message";
const DEFAULT_IDS = ["1000", "1001", "1000", "0000", 1000, 1001, 1000];

const IS_DEFAULT = (userId) => {
  return DEFAULT_IDS.includes(userId);
};

const validateUser = (queryPw, userPw) => {
  if (queryPw !== userPw) return false;
  return true;
};

export const fetchData = async ({ data, setData }) => {
  try {
    const data = await (await fetch(`${USER_URL}/all`)).json();
    setData(true);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async ({ userId, queryPw }, setUser) => {
  try {
    let pw = queryPw;
    const data = await (
      await fetch(`${USER_URL}/${userId ? userId : 1000}`)
    ).json();

    const userData = data.Item;
    if (+userId === 1000) {
      pw = 1000;
    }
    if (+userId === 1001) {
      pw = 1001;
    }
    if (!queryPw && +userId !== 1000 && +userId !== 1001) {
      throw new Error("Password missing");
    }

    const validated = validateUser(userData.userPw, +pw);
    if (!validated) {
      throw new Error("Validation failed");
    }
    setUser(data.Item);
    return data;
  } catch (err) {
    console.error(err);
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
    const random = Math.floor(100000000 + Math.random() * 900000000);
    const conditionalId = IS_DEFAULT(userId) ? random : +userId;
    const conditionalBody = {
      ...body,
      InviteId: +conditionalId,
    };

    const data = await (
      await fetch(`${MESSAGE_URL}/${+conditionalId}`, {
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
      await fetch(`${MESSAGE_URL}/${userId ? +userId : 1000}`)
    ).json();

    if (Item) {
      setMessage(Item);
    }
    return Item;
  } catch (err) {
    console.err(err);
  }
};
