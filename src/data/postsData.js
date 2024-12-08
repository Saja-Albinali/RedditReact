import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const id = uuidv4();
console.log(id);

const posts = [
  {
    id: uuidv4(),
    title: "First Post",
    description: "This is the description of the first post.",
    comments: [],
  },
  {
    id: uuidv4(),
    title: "Second Post",
    description: "This is the description of the second post.",
    comments: [],
  },
  {
    id: uuidv4(),
    title: "Third Post",
    description: "This is the description of the third post.",
    comments: [],
  },
];
export default posts;
