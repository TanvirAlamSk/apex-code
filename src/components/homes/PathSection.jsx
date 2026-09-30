import {
  MdAddBusiness,
  MdBusiness,
  MdComputer,
  MdDesignServices,
  MdDeveloperMode,
  MdOutlinePhotoCameraFront,
} from "react-icons/md";
import Container from "../common/Container";

const sectors = [
  {
    id: 1,
    name: "Design",
    icon: <MdDesignServices className="w-12 h-12 p-2 rounded-4xl bg-lime-400" />,
  },
  {
    id: 2,
    name: "Development",
    icon: <MdDeveloperMode className="w-12 h-12 p-2 rounded-4xl bg-lime-400" />,
  },
  {
    id: 3,
    name: "IT & Software",
    icon: <MdComputer className="w-12 h-12 p-2 rounded-4xl bg-lime-400" /> 
  },
  {
    id: 4,
    name: "Business",
    icon: <MdBusiness className="w-12 h-12 p-2 rounded-4xl bg-lime-400" />,
  },
  {
    id: 5,
    name: "Marketing",
    icon: <MdAddBusiness className="w-12 h-12 p-2 rounded-4xl bg-lime-400" />,
  },
  {
    id: 6,
    name: "Photography",
    icon: <MdOutlinePhotoCameraFront className="w-12 h-12 p-2 rounded-4xl bg-lime-400" />,
  },
];

const PathSection = () => {
  return (
    <section className="mt-18 text-center">
      <Container>
        <h2 className="text-3xl font-bold">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-4 max-w-198 mx-auto text-gray-700 font-extralight text-sm">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>

        <figure className="mt-17 flex flex-wrap gap-5 justify-between px-6">
          {sectors.map((sector) => (
            <span key={sector.id} className="w-40 h-40 border-2 border-gray-200 rounded-2xl flex flex-col items-center justify-center">
              {sector.icon}
              <p className="text-[14px] mt-2">{sector.name}</p>
            </span>
          ))}
        </figure>
      </Container>
    </section>
  );
};

export default PathSection;
