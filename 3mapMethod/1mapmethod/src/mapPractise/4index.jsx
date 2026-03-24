function Index(){
  const users=["Ram", "Shyam", "Sahil"];
  return<>
   {users.map((item,index)=>(
    <h1 key={index}>{index}-{item}</h1>
   ))}
  </>
}
export default Index;