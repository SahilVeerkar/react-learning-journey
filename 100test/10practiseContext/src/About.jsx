import { UserContext } from "./App";
import { useContext } from "react";
const About=()=>{
  const data=useContext(UserContext);
  return<>
  <h1>{data}</h1>
  </>
}
export default About; 