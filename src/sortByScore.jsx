import { useContext } from "react";
import { AppContext } from "./App";

const Sort = () => {
  const { comments, setComments } = useContext(AppContext);

  const sortedArr = comments.sort((a, b) => {
    let a1 = +a.Upvotes;
    let a2 = +b.Upvotes;
    if (a1 < a2) {
      return -1;
    }
    if (a1 > a2) {
      return 1;
    }
    return 0;
  });

  console.log("this s sorted array", sortedArr);
};

export default Sort;
