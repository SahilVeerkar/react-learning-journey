import { useContext } from "react";
import { userContext } from "./App";

const Home=()=>{
  const userName=useContext(userContext);
return<>
<h1>{userName}</h1>
</>
}
export default Home;