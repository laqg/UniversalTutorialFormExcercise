import { useContext } from "react";
import { Context } from "../state/context";
import useGetStates from "../hooks/useGetStates";

function States({ handleChange }: { handleChange: (e: string) => void }) {
  const token = useContext(Context);

  const {
    data: statesData,
    loading: statesLoading,
    error: statesError
  } = useGetStates(token);

  if (statesLoading) {
    return (
      <select disabled name="state" id="state">
        <option value="none">{`Loading states...`}</option>
      </select>
    );
  }

  if (statesError) {
    return (
      <select disabled name="state" id="state">
        <option value="none">{`Error fetching states`}</option>
      </select>
    );
  }

  return (
    <>
      {statesData && (
        <>
          <select
            name="state"
            id="state"
            required
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          >
            <option value="" hidden>
              Select your State
            </option>
            {statesData.map((state: string) => (
              <option key={`state_${state}`} value={state}>
                {state}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
}

export default States;
