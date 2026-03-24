function Evenodd(){
  const arr=[1, 2, 3, 4];
return<>
{arr.map((item,index)=>(
  <h1 key={index}>
    {item%2==0?item + " is even" : item + " is odd" };
  </h1>
))}
</>
}
export default Evenodd;