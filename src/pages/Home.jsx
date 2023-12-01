import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Section from "../Components/Section";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";
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
      <ThirdSection />
    </div>
  );
}
export default Home;
