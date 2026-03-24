
import Test from "./product";
function App() {
const products = [
  { id: 1, name: "Shoes", price: 1000, inStock: true },
  { id: 2, name: "Watch", price: 2000, inStock: false }
];

  return (
    <>
   {products.map((item)=>(
   <Test key={item.id} name={item.name} price={item.price} inStock={item.inStock}></Test>
   ))}
    </>
  )
}

export default App
