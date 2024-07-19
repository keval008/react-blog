import axios from "axios";

export const getsubCategories = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/subcategories");
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
};
