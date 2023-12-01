import { Navigate, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <button onClick={() => handleClick("/TheLodge")}>Connection</button>
    </div>
  );
}
export default Home;
