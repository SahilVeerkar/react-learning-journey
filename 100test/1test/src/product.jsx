function Test({name,price,inStock}){
  return(<>
  <h1>{name} - {price} {inStock?"[In stock]" :"[out of stock]"} </h1>;
 
  </>)
}
export default Test;