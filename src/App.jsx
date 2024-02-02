import "./App.css";
import Todos from "./components/todos/todos";

function App() {
  return (
    <>
      <div className="container">
        <div className="header bg-zinc-300">
          <h1 className="font-bold text-2xl text-black">
            Todos <span>{}</span>
          </h1>
        </div>
        <div className="MainBody">
          <form className="inputWrapper flex items-center justify-center mt-6 border-2 pl-[20px] rounded-xl">
            <input
              type="text"
              placeholder="Enter todo here"
              className="miniInput w-full bg-white h-[20px] outline-none"
            />
            <button className="bg-blue-600 text-white flex items-center justify-center w-[90px] h-[50px] rounded-xl">
              Submit
            </button>
          </form>
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
