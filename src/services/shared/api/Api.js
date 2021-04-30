import Cookies from "universal-cookie";
export const Get = async (action) => {
  try {
    const response = await fetch(action, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + new Cookies().get("Jwt")
      },

      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const Post = async (action, json = null) => {
  try {
    const response = await fetch(action, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + new Cookies().get("Jwt")
      },

      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(json),
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const Put = async (action, json = null) => {
  try {
    const response = await fetch(action, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + new Cookies().get("Jwt")
      },

      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(json),
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const Delete = async (action, json = null) => {
  try {
    const response = await fetch(action, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + new Cookies().get("Jwt")
      },

      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(json),
    });

    return response;
  } catch (error) {
    return error;
  }
};