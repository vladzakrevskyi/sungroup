import { MainBanner } from "./MainBanner";
import { ContentSection } from "./ContentSection";
import { Specification } from "./Specification";
import logo from "../img/lenovo-logo-01.svg";

function App() {
  return (
    <>
      <img src={logo} className="logo" alt="logo" width="80" loading="lazy" />
      <MainBanner />
      <ContentSection />
      <Specification />
    </>
  );
}

export default App;
