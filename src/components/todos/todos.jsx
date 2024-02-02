import "./todos.css";

function Todos() {
  return (
    <>
      <div className="mt-5 bg-zinc-200 h-[65px] rounded-xl flex items-center justify-between px-[20px]">
        <div className="TodosCheckWrappers flex gap-2">
          <input type="checkbox" className="checkbox border-black" />
          <p className="text-black font-semibold">walk the dog</p>
        </div>
        <div className="DeleteOrChange flex gap-2">
          <div className="bg-green-500 w-[35px] h-[30px] rounded-xl"></div>
          <div className="bg-red-500 w-[35px] h-[30px] rounded-xl"></div>
        </div>
      </div>
    </>
  );
}

export default Todos;
