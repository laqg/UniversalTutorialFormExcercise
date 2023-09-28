import { useEffect, useRef, useState } from "react";

import useFetch from "./useFetch";

// constants
import routes from "../utils/routes";

function useGetStates(token: string) {
  const options = useRef({
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json"
    }
  });

  const [countries, setCountries] = useState<Array<string> | undefined>();

  const { data, loading, error } = useFetch(routes.GET_STATES, options.current);

  useEffect(() => {
    if (data)
      setCountries(
        data.map((state: { state_name: string }) => state.state_name)
      );
  }, [data]);

  return { data: countries, loading, error };
}

export default useGetStates;
