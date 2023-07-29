import axios from "axios";

const ROOT_URL = "http://localhost:8000/api/v1";

const userURL = ROOT_URL + "/user";

export const registerUser = async (userObj) => {
  try {
    const { data } = await axios.post(userURL, userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
