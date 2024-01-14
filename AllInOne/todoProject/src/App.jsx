import { useRef, useState } from "react"

function App() {
  const todoRef = useRef(null)
  const descriptionRef = useRef(null)
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(1);

  const addToTodo = () => {
    if (todoRef.current.value === "" || descriptionRef.current.value === "") {
      return alert("Enter valid details")
    }
    console.log(id);
    setTodoList([...todoList, {
      todoId: id,
      title: todoRef.current.value,
      description: descriptionRef.current.value
    }])
    setId(id + 1)
  }

  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center py-3 px-7">
        <input className="py-2 px-3 text-[18px]" type="text" placeholder='Add Todo' ref={todoRef} />
        <input className="py-2 px-3 text-[18px]" type="text" placeholder='Description' ref={descriptionRef} />
        <button className="mb-16" onClick={() => addToTodo()}>Add to Todo</button>

        <div className="flex flex-wrap gap-6">
          {todoList.map(({ todoId, title, description, }) => (
            <div key={todoId} className="duration-200 ease-in-out hover:h-[500px] hover:text-[10px] w-[300px] h-40 px-5 py-4 bg-zinc-950 rounded-xl flex flex-col items-center text-wrap">
              <div className="flex justify-start px-10 items-center gap-10 border-b-2 w-full">
                <div className="text-2xl pr-5">{todoId}</div>
                <div className="text-2xl truncate ... ">{title}</div>
              </div>
              <div className="text-[18px] text-wrap self-start p-3">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
