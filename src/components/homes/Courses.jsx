import { courses } from "../../Data/allcourses";
import Container from "../common/Container";
import CourseCard from "../CourseCard";

const Courses = () => {
  return (
    <Container>
      <secion className="grid grid-cols-3 gap-10 mt-19 px-5">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </secion>
    </Container>
  );
};

export default Courses;
