import React from "react";
import "./ProjectModal.css";
import { Button, Modal } from "react-bootstrap";

const ProjectModal = ({ project, setProject,projectName,setProjectName,handleSumbit,loading }) => {

  const handleClose = () => setProject(false);
  const handleShow = () => setProject(true);
  

  return (
    <>
      <Modal className="" show={project} onHide={handleClose}>
        <Modal.Body className="">
          <h3 className="text-center">New Project</h3>
          <hr />
          <div className="addprojInput ">
            <div className="  m-4">
            <div className="w-75 indat ">
              <input
              value={projectName}
              onChange={(e)=>{setProjectName(e.target.value)}}
                type="text"
                className="proinpt"
                placeholder="Enter your website url..."
              />
              <small className="p-0 m-0"> eg. mywebsite.com </small>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button  disabled={loading} className="btn btn-primary" onClick={handleSumbit} >Add</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectModal;
