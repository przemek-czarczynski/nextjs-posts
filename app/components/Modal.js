"use client";

import React, { useState } from "react";
import AddPostForm from "./AddPostForm";
import getAllUsers from "@/lib/getAllUsers";

export const Modal = () => {
  const [authors, setAuthors] = useState([]);
  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);

  const addHandleClick = async () => {
    document.getElementById("my_modal_4").showModal();
    const data = await getAllUsers();
    if (authors.length == 0) setAuthors(data);
  };

  const initialValue = async () => {
    const data = await getAllUsers();
    if (authors.length == 0) setAuthors(data);
    setIsSuccessSubmit(false);
  };

  return (
    <>
      <label htmlFor="my_modal_6" className="btn" onClick={initialValue}>
        Add New Post
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <AddPostForm
            authors={authors}
            isSuccessSubmit={isSuccessSubmit}
            setIsSuccessSubmit={setIsSuccessSubmit}
          />
        </div>
      </div>
    </>
  );
};
