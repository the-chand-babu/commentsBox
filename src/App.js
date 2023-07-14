import "./styles.css";
import { createContext, useState } from "react";
import Comment from "./Comment";
const AppContext = createContext();
import Sort from "./sortByScore";

export default function App() {
  const [comments, setComments] = useState([]);

  return (
    <div className="App">
      <AppContext.Provider value={{ comments, setComments }}>
        <Sort />
        <Comment />
      </AppContext.Provider>
    </div>
  );
}

export { AppContext };
