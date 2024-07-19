import axios from "axios";

export const getBlogs = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/blogs");
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
};
