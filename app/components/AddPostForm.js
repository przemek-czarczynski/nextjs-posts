"use client";

import { useState } from "react";

function AddPostForm({ authors, isSuccessSubmit, setIsSuccessSubmit }) {
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    author: "",
  });

  const [validationMessage, setValidationMessage] = useState({
    title: "",
    description: "",
    author: "",
  });

  const [noErrors, setNoErrors] = useState(false);

  const updateFormValue = (e) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    e.target.value.length < 1
      ? setValidationMessage((prev) => ({
          ...prev,
          [e.target.name]: "This field is required",
        }))
      : setValidationMessage((prev) => ({
          ...prev,
          [e.target.name]: "",
        }));
  };

  const validateForm = (fields) => {
    const iTitle = fields.target[0];
    const iDescription = fields.target[1];
    const iAuthor = fields.target[2];

    iTitle.value.length < 1
      ? setValidationMessage((prev) => ({
          ...prev,
          [iTitle.name]: "This field is required",
        }))
      : setNoErrors(true);

    iDescription.value.length < 1
      ? setValidationMessage((prev) => ({
          ...prev,
          [iDescription.name]: "This field is required",
        }))
      : setNoErrors(true);

    iAuthor.value == "" || iAuthor.value == "0"
      ? setValidationMessage((prev) => ({
          ...prev,
          [iAuthor.name]: "This field is required",
        }))
      : setNoErrors(true);
  };

  const submitForm = (e) => {
    e.preventDefault();
    validateForm(e);
    if (noErrors) {
      setNoErrors(false);
      setIsSuccessSubmit(true);
    }
  };

  const clearForm = () => {
    setFormValue({
      title: "",
      description: "",
      author: "",
    });
    setValidationMessage({
      title: "",
      description: "",
      author: "",
    });
  };

  return (
    <>
      {!isSuccessSubmit && (
        <form onSubmit={submitForm}>
          <label className=" w-full text-sm block mb-2">
            <span className="font-bold">Title</span>
            <input
              className="w-full bg-gray-200 p-2 grow"
              type="text"
              name="title"
              value={formValue.title}
              onChange={(e) => updateFormValue(e)}
            ></input>
            <span className="block h-4 text-xs text-red-600">
              {validationMessage.title}
            </span>
          </label>
          <label className=" w-full text-sm block mb-2">
            <span className="font-bold">Description</span>
            <textarea
              className="w-full bg-gray-200 p-2 grow"
              type="text"
              name="description"
              value={formValue.description}
              onChange={(e) => updateFormValue(e)}
            ></textarea>
            <span className="block h-4 text-xs text-red-600">
              {validationMessage.description}
            </span>
          </label>

          <label className="flex flex-col w-full text-sm">
            <span className="font-bold">Author</span>
            <select
              name="author"
              id="author"
              onChange={(e) => updateFormValue(e)}
              value={formValue.author}
            >
              <option value={0}>--Please choose an author--</option>
              {authors.map((e) => {
                return (
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </select>
            <span className="block h-4 text-xs text-red-600">
              {validationMessage.author}
            </span>
          </label>

          <div className="modal-action">
            <button className="btn">Submit</button>
            <label htmlFor="my_modal_6" className="btn" onClick={clearForm}>
              Cancel
            </label>
          </div>
        </form>
      )}

      {isSuccessSubmit && (
        <form>
          <p>New post has been submitted successfully!</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn" onClick={clearForm}>
              Close
            </label>
          </div>
        </form>
      )}
    </>
  );
}

export default AddPostForm;
