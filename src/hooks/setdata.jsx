import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, setData] = useState([]);

  const refetch = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    refetch();
  }, [url]);

  return { data, refetch };
};

export default useGet;
