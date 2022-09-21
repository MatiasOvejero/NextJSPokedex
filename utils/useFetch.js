import { useEffect, useRef, useState } from "react";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState(initialState);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setState({ loading: false, error: null, data });
          } else {
            console.log("No se llama a setState");
          }
        }, 2000);
      });
  }, [url]);

  return state;
};
