import { useContext } from "react";
import { Context } from "../state/context";
import useGetCities from "../hooks/useGetCities";

function Cities({ state }: { state: string }) {
  const token = useContext(Context);

  const {
    data: citiesData,
    loading: citiesLoading,
    error: citiesError
  } = useGetCities(token, state);

  if (citiesLoading) {
    return (
      <select disabled name="city" id="city">
        <option value="">{`Loading cities in ${state}...`}</option>
      </select>
    );
  }

  if (citiesError) {
    return (
      <select disabled name="city" id="city">
        <option value="">{`Error fetching cities in ${state}`}</option>
      </select>
    );
  }

  return (
    <>
      {citiesData && (
        <>
          <select name="city" id="city" required>
            <option value="" hidden>
              Select your City
            </option>
            {citiesData.map((state: string) => (
              <option key={`city_${state}`} value={state}>
                {state}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
}

export default Cities;
