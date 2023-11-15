import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    data: null,
    isLoading: true,
  });

  const getData = async () => {
    try {
      const resp = await fetch(url);
      const respData = await resp.json();
      setDataFetch({
        data: respData,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect( () => { 
    getData()
   }, [url] )

   return {
    data: dataFetch.data,
    isLoading: dataFetch.isLoading
   }
};
