import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
function Home() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Header />
    </div>
  );
}
export default Home;
