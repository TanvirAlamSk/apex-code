import Banner from "../components/homes/Banner";
import Comments from "../components/homes/Comments";
import ConmpanyInfo from "../components/homes/ConmpanyInfo";
import Courses from "../components/homes/Courses";
import Join from "../components/homes/Join";
import Pasion from "../components/homes/Pasion";
import PathSection from "../components/homes/PathSection";
import Sponsors from "../components/homes/Sponsors";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Sponsors></Sponsors>
           <Pasion></Pasion>
           <Courses></Courses>
           <PathSection></PathSection>
           <ConmpanyInfo></ConmpanyInfo>
           <Join></Join>
           <Comments></Comments>
        </div>
    );
};

export default Home;