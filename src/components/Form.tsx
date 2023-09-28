import React, { useState } from "react";
import States from "./States";
import Cities from "./Cities";

function Form({ token }: { token: string }) {
  const [selectedState, setSelectedState] = useState<string | undefined>();

  function handleStateChange(state: string) {
    setSelectedState(state);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      firstName: e.target.fname.value,
      lastName: e.target.lname.value,
      state: e.target.state.value,
      city: e.target.city.value,
      email: e.target.email.value,
      password: e.target.password.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="form-data">
        <label>First name:</label>
        <input type="text" name="fname" required />

        <label>Last name:</label>
        <input type="text" name="lname" required />

        <label>State: </label>
        <States handleChange={handleStateChange} />

        <label>City: </label>
        {selectedState && <Cities state={selectedState} />}
        {!selectedState && (
          <select disabled name="city" id="city">
            <option value="" hidden>
              No cities available
            </option>
          </select>
        )}

        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Password:</label>
        <input type="password" name="password" required />

        <br />
      </div>
      <input id="submit" type="submit" value="Submit 📫" />
    </form>
  );
}

export default Form;
