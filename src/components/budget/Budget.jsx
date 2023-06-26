/* eslint-disable no-unused-vars */
import "./budget.css";
import MainLogo from "../MainLogo";
import Basic from "./options/Basic";
import ByBudget from "./options/ByBudget";
import Customized from "./options/Customized";


function Budget() {
  return (
    <div className="budget_section_container">
      <MainLogo />
      <div className="budget_options_container">
      <Basic />
      <ByBudget />
      <Customized />
      </div>
     
    </div>
  );
}

export default Budget;
