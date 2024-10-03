import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo = () => {
  const navigate = useNavigate();

  const saveTodo = async (event) => {
    event.preventDefault();
    // Collect form input
    const formData = new FormData(event.target);
    // Post data to todo api
        await axios.post("https://todo-api-i7c7.onrender.com/todos", {
          title: formData.get('todo')
        });
    // Goto the homepage
    navigate('/');
  }

  return (
    <div>
      <h1>Add A New Todo</h1>
      <form onSubmit={saveTodo}>
        <input type="text" placeholder="Add todo here" required name="todo" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
