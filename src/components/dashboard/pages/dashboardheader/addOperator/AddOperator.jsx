import React from "react";
import { FaUser } from "react-icons/fa";

const AddOperator = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col d-flex ">
            <div className="operatormaindiv">
              <FaUser />
              <h4>Operators</h4>
            </div>
            <div className="operatormaindiv">
              <button className="btn btn-primary">Add new department</button>
              <button className="btn btn-primary">Add an Operator</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOperator;
