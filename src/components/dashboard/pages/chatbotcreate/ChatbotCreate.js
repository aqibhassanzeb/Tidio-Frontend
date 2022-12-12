import React, { useEffect, useState } from "react";
import boopSfx from "../../../../images/message.mp3";
import useSound from "use-sound";
import Modal from "react-bootstrap/Modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import {
  Chatbotdelete,
  Chatbotfetch,
  newChatbotCreate,
} from "../../../../apis/Chat-api";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
import Chatbot from "../../../chatbot/Chatbot";
import "../chatbotcreate/ChatbotCreate.css";
import Profilepic from "../../../../images/profile.jpg";
import { AiOutlineSend } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";

function ChatbotCreate() {
  const [play] = useSound(boopSfx);
  const loginUser = JSON.parse(localStorage.getItem("user"));
  const [show, setShow] = useState(false);
  const [Error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [fetchControl, setfetchControl] = useState(false);
  const [ChatbotData, setChatbotData] = useState([]);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const handleClose = () => {
    setError("");
    setShow(false);
  };
  var serialNo = 0;

  // new chat bot create

  const handleCreate = () => {
    if (!name) {
      return setError(true);
    }
    const payload = { name, createdby: loginUser?._id };
    setLoader(true);
    newChatbotCreate(payload)
      .then((result) => {
        toast.success(result.data.message);
        setLoader(false);
        setName("");
        setfetchControl(!fetchControl);
        handleClose();
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  // fetch created chat bot

  const handlefetch = () => {
    const _id = loginUser._id;
    Chatbotfetch(_id)
      .then((res) => {
        setChatbotData(res?.data?.saveUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Delete chatbot function

  const handleDelete = (_id) => {
    Chatbotdelete(_id)
      .then((result) => {
        setfetchControl(!fetchControl);
        toast.success(result.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(framlink);
  };
  useEffect(() => {
    handlefetch();
  }, [fetchControl]);
  var framlink = `${window.location.origin}/chatbot/${loginUser._id} `;
  return (
    <>
      <ToastContainer />
      <div className="bg-light" style={{ height: "87vh" }}>
        <div className="container-fluid">
          <div className="row text-center  chatbtmaindiv mt-2">
            <div className="col-sm-12 mt-4">
              <button className="Cratebotbtn" onClick={handleShow}>
                Create ChatBot
              </button>
              {/* <p>{window.location.href}</p> */}
              <h4 className="m-2">Chatbot Link</h4>
              <input
                type="text"
                className="w-25 inputlinkchatbot p-2"
                value={framlink}
              ></input>
              <button className="Cratebotbtn2 " onClick={handleCopy}>
                Copy
              </button>
              {/* <button onClick={copy}>{!copied ? "Copy link" : "Copied!"}</button> */}
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create ChatBot</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="form-control"
              placeholder="enter your chatbotname"
              onChange={(e) => {
                setName(e.target.value);
                setError(false);
              }}
            ></input>
            {Error && <p style={{ color: "red" }}>Please fill the name</p>}
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={handleClose}>
              Close
            </button>
            <button className="btn btn-primary" onClick={handleCreate}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>

        <div className="row bg-light">
          <div className="text-center mt-3">
            <h3>Your list</h3>
          </div>
          <div className="col mt-3">
            <div className=" d-flex background p-4">
              <Table striped>
                <thead>
                  <tr>
                    <th>S/No</th>
                    <th>Name</th>
                    <th>Embeded Link</th>
                    <th>Embeded Link</th>
                  </tr>
                </thead>
                <tbody>
                  {ChatbotData &&
                    ChatbotData.map((elm) => {
                      return (
                        <>
                          <tr key={elm._id}>
                            <td>{(serialNo = serialNo + 1)}</td>
                            <td>{elm.name}</td>
                            <td>{elm._id}</td>
                            <td>
                              
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(elm._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatbotCreate;
