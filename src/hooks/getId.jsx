import { useState, useEffect } from "react";
import axios from "axios";

const useGetId = (url) => {
  const [catId, setCatid] = useState([]);

  const refetchdata = async () => {
    try {
      const response = await axios.get(url);
      setCatid(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    refetchdata();
  }, [url]);

  return { catId, refetchdata };
};

export default useGetId;
