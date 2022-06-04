// function TodoList() {
//   return (
//     <div>
//       <h1>TodoList Workd</h1>
//     </div>
//   );
// }

import React, { useState } from "react";

function TodoList() {
  const [count, setCount] = useState(0);
  const list = [
    [
      "Go to Market",
      "Buy Laptop",
      "Format It",
      "Install Software",
      "Play Games",
      "Shutdown",
      "Go to Sleep",
      "h",
      "i",
      "j",
      "k",
      "l"
    ]
  ];
  return (
    <div>
      <h3 className="list-name">
        {count + 1}. {list.map((name) => name[count])}{" "}
      </h3>
      <br />
      <button
        className="btn btn-primary npbtn"
        onClick={() => setCount(count - 1)}
      >
        Previous
      </button>
      <button
        className="btn btn-primary npbtn"
        onClick={() => setCount(count + 1)}
      >
        Next
      </button>
      <br />
      <button className="btn btn-secondary npbtn" onClick={() => setCount(0)}>
        {" "}
        Start{" "}
      </button>
    </div>
  );
}

export default TodoList;
