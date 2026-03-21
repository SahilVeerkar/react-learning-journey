function Random(){
let num=Math.random()*10;
return <h1 style={{'background-color':'red '}}>random value is : {Math.round(num)}</h1>
}
export default Random;