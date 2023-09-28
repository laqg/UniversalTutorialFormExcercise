import { useEffect, useRef, useState } from "react";

import useFetch from "./useFetch";

// constants
import routes from "../utils/routes";

function useGetStates(token: string, city: string) {
  const options = useRef({
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json"
    }
  });

  const [cities, setCities] = useState<Array<string> | undefined>();

  const { data, loading, error } = useFetch(
    `${routes.GET_CITIES}${city}`,
    options.current
  );

  useEffect(() => {
    if (data)
      setCities(data?.map((city: { city_name: string }) => city.city_name));
  }, [data]);

  return { data: cities, loading, error };
}

export default useGetStates;
