import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Section from "../Components/Section";
import SecondSection from "../Components/SecondSection";
function Home() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Header />
      <Section />
      <SecondSection />
    </div>
  );
}
export default Home;
