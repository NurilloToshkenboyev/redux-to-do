import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root');

export const EditModal = ({ isOpen, onRequestClose, onSave, initialName }) => {
  const [name, setName] = useState(initialName);

  const handleSave = () => {
    onSave(name);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white p-6 rounded shadow-md mx-auto my-10 max-w-md w-full"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-2xl mb-4">Edit Item</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
      <button onClick={onRequestClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
    </Modal>
  );
};
