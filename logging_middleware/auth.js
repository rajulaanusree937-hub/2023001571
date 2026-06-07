import axios from "axios";

const CLIENT_ID = "d4f99f8a-7113-41f2-b9d4-ceacec4866b8";
const CLIENT_SECRET = "SXdnmksmcpDesEHt";

export async function getToken() {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/auth",
      {
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Authentication Failed:", error);
  }
}