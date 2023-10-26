/* eslint-disable no-unused-vars */
import "./budget.css";
import Basic from "./options/Basic";
import ByBudget from "./options/ByBudget";


function Budget() {
  return (
    <div className="plans_section">
      <div className="plans_options_container">
        <Basic />
        <ByBudget />
      </div>
    </div>
  );
}

export default Budget;
