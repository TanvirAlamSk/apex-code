const buttons = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const Pasion = () => {
  return (
    <div className="mt-18 max-w-250 mx-auto text-center">
      <h2 className="text-3xl font-bold leading-10">
        Discover Your Passion, <br className="hidden md:block"></br> Build Your
        Skills
      </h2>
      <p className="text-gray-400 font-light mt-4 px-14">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>

      <div className="flex flex-wrap gap-x-3 gap-y-4 justify-center items-center mt-10.5">
        {buttons.map((button, i) => (
          <button className={`bg-gray-100 py-2 px-4 rounded-3xl text-[14px] text-gray-700 ${i == 0 && "bg-lime-400 text-black"} ${i>=7 &&  "mr-1"}` } key={i}>
            {button}
          </button>
        ))}

         <button className="text-blue-800 font-medium">
            + More
          </button>
      </div>
    </div>
  );
};

export default Pasion;
