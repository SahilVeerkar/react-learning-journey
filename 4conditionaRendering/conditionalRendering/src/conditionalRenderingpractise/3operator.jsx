function Admin(){
const isAdmin = true;
return(<>
{isAdmin && "Admin Panel"};
</>)
}
export default Admin;