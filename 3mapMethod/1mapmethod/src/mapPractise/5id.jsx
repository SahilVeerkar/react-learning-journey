function Id(){
const products = [
  { id: 1, name: "Shoes" },
  { id: 2, name: "Watch" }
];
return<>
{products.map((item)=>(
  <h1 key={item.id}>{item.name}</h1>
))}
</>
}
export default Id;
