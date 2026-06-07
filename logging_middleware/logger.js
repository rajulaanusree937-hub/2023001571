import axios from "axios";
import { getToken } from "./auth";

export async function Log(stack, level, packageName, message) {
  try {
    const token = await getToken();

    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Logging Failed:", error);
  }
}