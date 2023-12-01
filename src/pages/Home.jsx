import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Section from "../Components/Section";
function Home() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Header />
      <Section />
    </div>
  );
}
export default Home;
