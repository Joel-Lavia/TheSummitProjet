import { Navigate, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <button onClick={() => handleClick("/TheLodge")}>Connection</button>
      <button onClick={() => handleClick("/SkiRun")}>Connection</button>
      <button onClick={() => handleClick("/SkiRun")}>Connection</button>


    </div>
  );
}
export default Home;
