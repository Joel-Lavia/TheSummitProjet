import { Navigate, useNavigate } from "react-router-dom"
function Home() {
const navigate = useNavigate();
const handleClick = () => {
    navigate('/theLodge');
}  
return(
 <div>
 <button onClick={handleClick}>Connection</button>
 </div>
   ); 
}
export default Home