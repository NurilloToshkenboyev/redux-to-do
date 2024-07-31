import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editItem, deleteItem } from "../../redux/todo";
import { EditModal } from "../../components/Modal/Modal";
import { toast } from 'react-toastify';

export const Card = ({ name, id }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const saveName = (newName) => {
    dispatch(editItem({ id, name: newName }));
    toast.success('Item updated successfully!');
  };

  const handleDelete = () => {
    dispatch(deleteItem(id));
    toast.success('Item deleted successfully!');
  };

  return (
    <div className="bg-gray-100 p-4 mb-4 shadow-md">
      <h1 className="text-xl">{name}</h1>
      <p className="text-gray-500">{id}</p>
      <button
        onClick={handleDelete}
        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
      >
        Delete
      </button>
      <button
        onClick={openModal}
        className="bg-green-500 text-white px-2 py-1 rounded"
      >
        Edit
      </button>
      <EditModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onSave={saveName}
        initialName={name}
      />
    </div>
  );
};
