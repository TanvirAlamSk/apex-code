import { Layered_radial_gradients } from "../../utils/style";
import {
  HappyStudentsCard,
  LearningProgressCard,
  TotalRevenueCard,
  YearToDateCard,
} from "../common/cards/learning";
import Container from "../common/Container";
import CourseCard from "../CourseCard";
import person from "../../assets/Image.png";
import limeRing from "../../assets/lime_ring.png";
import { FaCircleCheck } from "react-icons/fa6";
import women from "../../assets/women.png";

const course = {
  id: 1,
  title: "Learn Figma from Basic",
  author: "pumpast studio",
  rating: "4.5",
  lavel: "Beginner",
  image: "https://i.postimg.cc/4NFzDQVJ/courses1.png",
  price: "25",
  tenure: "lifetile",
  buyer: [
    {
      id: 1,
      img: "https://i.postimg.cc/VL3J9GX2/buyer1.png",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/qvyz1sGm/buyer2.png",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/bNKZ0C1K/buyer3.png",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/YCYhd6xn/buyer4.png",
    },
  ],
};

function ConmpanyInfo() {
  return (
    <section className={`00 mt-30 pb-0 ${Layered_radial_gradients}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-30 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Your Path to Professional <br className="hidden md:block" />
              Growth Starts Here!
            </h2>
            <p className="font-extralight mt-10 text-sm">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="flex gap-5 mt-10">
              <span>
                <h3 className="text-2xl text-[#1F53E6] font-semibold">12K</h3>
                <p className="font-extralight text-sm">Students</p>
              </span>
              <span>
                <h3 className="text-2xl text-[#1F53E6] font-semibold">70+</h3>
                <p className="font-extralight text-sm">Courses</p>
              </span>
              <span>
                <h3 className="text-2xl text-[#1F53E6] font-semibold">16</h3>
                <p className="font-extralight text-sm">Creators</p>
              </span>
            </div>
          </div>
          <div className="relative">
            <CourseCard course={course}></CourseCard>
            <img
              src={person}
              alt="A smiling person"
              className="absolute top-15 right-"
            />
            <span className="absolute top-48 right-15">
              <LearningProgressCard></LearningProgressCard>
            </span>
            <img
              src={limeRing}
              alt="a lime color lime"
              className="hidden lg:block absolute top-10 md:-right-5"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 pt-15 pb-80 items-center ">
          <div className="relative">
            <TotalRevenueCard></TotalRevenueCard>
            <YearToDateCard></YearToDateCard>

            <img src={women} alt="women" className="absolute -top-10 left-13" />
            <img
              src={limeRing}
              alt="a lime color lime"
              className="absolute top-15 right-5 rotate-45"
            />
            <span className="absolute -bottom-30 right-0">
              <HappyStudentsCard></HappyStudentsCard>
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              Create & Manage <br className="hidden md:block" /> Courses Easily.
            </h3>
            <p className="font-extralight mt-10 text-sm">
              <strong className="font-bold leading-10">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-10 text-sm space-y-3">
              <li className="flex gap-3 items-center">
                <FaCircleCheck className="text-[#1F53E6]"></FaCircleCheck>
                <span>Share Your Expertise</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaCircleCheck className="text-[#1F53E6]"></FaCircleCheck>
                <span>Monetize Your Passion</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaCircleCheck className="text-[#1F53E6]"></FaCircleCheck>
                <span>Flexibility and Autonomy</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaCircleCheck className="text-[#1F53E6]"></FaCircleCheck>
                <span>Build a Community</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

// FaCircleCheck

export default ConmpanyInfo;
