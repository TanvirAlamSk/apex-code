import Container from "../common/Container";
import company1 from "../../assets/companys/company1.png";
import company2 from "../../assets/companys/company2.png";
import company3 from "../../assets/companys/company3.png";
import company4 from "../../assets/companys/company4.png";
import company5 from "../../assets/companys/company5.png";

const Sponsors = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="flex justify-between  gap-3 flex-wrap py-20 px-4">
          <img src={company1} alt="company logo" />
          <img src={company2} alt="company logo" />
          <img src={company3} alt="company logo" />
          <img src={company4} alt="company logo" />
          <img src={company5} alt="company logo" />
        </div>
      </Container>
    </div>
  );
};

export default Sponsors;
