function Map(){
  const users=["Ram", "Shyam", "Sahil"];
  return<>
   {users.map((item,index)=>(
    <span key={index}>Hello {item}</span>
   ))}
  </>
}
export default Map;