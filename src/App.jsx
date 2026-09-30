import Footer from "./components/footer/Footer";
import Banner from "./components/homes/Banner";
import ConmpanyInfo from "./components/homes/ConmpanyInfo";
import Courses from "./components/homes/Courses";
import Join from "./components/homes/Join";
import Pasion from "./components/homes/Pasion";
import PathSection from "./components/homes/PathSection";
import Sponsors from "./components/homes/Sponsors";
import Navber from "./components/navber/Navber";

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Banner></Banner>
      <Sponsors></Sponsors>
      <Pasion></Pasion>
      <Courses></Courses>
      <PathSection></PathSection>
      <ConmpanyInfo></ConmpanyInfo>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}

export default App;
