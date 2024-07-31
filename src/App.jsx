import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./components/Card/Card";
import { add } from "./redux/todo";
import { toast } from 'react-toastify';

function App() {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const input = React.useRef(null);

  const submit = (e) => {
    e.preventDefault();
    if (input.current.value.trim()) {
      dispatch(add({ id: Date.now(), name: input.current.value }));
      input.current.value = "";
      toast.success('Item added successfully!');
    } else {
      toast.error('Please enter a valid item!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
        {/* Input Form */}
        <div className="flex-shrink-0 w-full max-w-sm mr-8">
          <form onSubmit={submit} className="mb-4">
            <input
              ref={input}
              type="text"
              name="name"
              className="border p-2 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="Enter item name"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-1 rounded w-full hover:bg-green-600 text-sm"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Todo List */}
        <div className="flex-1 w-full max-w-xl">
          <div className="space-y-4">
            {todoList.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
