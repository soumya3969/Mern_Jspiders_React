// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function EditModal({ closeModal, editTask, dispatch }) {
  console.log(editTask);
  const [updateTask, setUpdateTask] = useState(editTask.task);
  const updateHandeler = () => {
    dispatch({
      type: "edit",
      payload: { task: updateTask, index: editTask.index }
    });
    closeModal();
  };
  return (
    <>
      {console.log(updateTask)}
      <div className="modal-container">
        <div className="modal">
          <h2>EDIT YOUR TASK</h2>
          <textarea
            cols="30"
            rows="10"
            value={updateTask}
            onChange={(e) => setUpdateTask(e.target.value)}
          ></textarea>
          <div className="modal-buttons">
            <button onClick={updateHandeler}>UPDATE TASK</button>
            <button onClick={closeModal}>CLOSE</button>
          </div>
          <h2 className="cross" onClick={closeModal}>
            <RxCross2 />
          </h2>
        </div>
      </div>
    </>
  );
}

export default EditModal;
