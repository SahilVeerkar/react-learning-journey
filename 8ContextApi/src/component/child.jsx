import { useContext } from "react";
import userContext from "../store/hello-context";
function Child(){
  const user= useContext(userContext);
  return <>
  <h1>hello {user} </h1>
  </>
}
export default Child;