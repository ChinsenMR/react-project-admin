import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "antd";
function Home() {
  // const data = useSelector((state: any) => {
  //   console.log(state, "test");
  //   return state.todos.list;
  // });
  // useEffect(() => {
  //   console.log(data, 'effect')
  // }, [data])
  const dispatch = useDispatch();
  return (<Skeleton avatar paragraph={{ rows: 4 }} />
  // return (
  //   <>
  //     <div>Home{JSON.stringify(data)}</div>
  //     <button onClick={() => dispatch({ type: "ADD_TODO", text: ["213213"] })}>
  //       +
  //     </button>
  //     <button onClick={() => dispatch({ type: "decrement" })}>-</button>
  //   </>
  );
}
export default Home;
