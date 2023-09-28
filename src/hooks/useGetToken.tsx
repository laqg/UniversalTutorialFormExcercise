import { useRef } from "react";
import useFetch from "./useFetch";

// Constants
import routes from "../utils/routes";
import constants from "../utils/constants";

function useGetToken() {
  const options = useRef({
    method: "GET",
    headers: {
      Accept: "application/json",
      "api-token": constants.API_TOKEN,
      "user-email": constants.USER_EMAIL
    }
  });

  const { data, loading, error } = useFetch(routes.GET_TOKEN, options.current);

  return { data: data?.auth_token, loading, error };
}

export default useGetToken;
