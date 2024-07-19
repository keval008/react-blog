import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/categories");
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
};
