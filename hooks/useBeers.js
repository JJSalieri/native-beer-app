import { useState, useEffect } from "react";
import axios from "axios";

export const useBeers = (page, limit) => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://api.punkapi.com/v2/beers?page=1&per_page=20`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoader(false));
  }, [page, limit]);

  return { data, loader, error };
};
