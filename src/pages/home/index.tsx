import { useSelector, useDispatch } from "react-redux";

function Home() {
  const data = useSelector((state: any) => {
    console.log(state);
    return state.todos.list;
  });
  const dispatch = useDispatch();
  return (
    <>
      <div>Home{JSON.stringify(data)}</div>
      <button onClick={() => dispatch({ type: "ADD_TODO", text: ["aaa"] })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
export default Home;
