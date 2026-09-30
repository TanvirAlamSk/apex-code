// import { Star, BookOpen, Clock, MessageCircle } from "lucide-react";
import { HiMiniChartBar } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";

function CourseCard({course}) {
  const {title,author,rating,lavel,image,price,tenure,buyer}=course;
  console.log(image)
  return (
    <div className="w-90 p-3 overflow-hidden rounded-2xl bg-white border-2 border-gray-200">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-cover rounded-2xl"
        />

        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-xs text-black font-extralight">
          <div className="flex items-center rounded-full bg-gray-100/50 px-2.5 py-1 backdrop-blur-sm">
            <span>17 Lessons</span>
          </div>

          <div className="flex items-center rounded-full bg-gray-100/50 px-2.5 py-1 backdrop-blur-sm">
            <span>2 hours 16 mins</span>
          </div>

          <div className="flex items-center rounded-full bg-gray-100/50 px-2.5 py-1 backdrop-blur-sm">
            <span>59 Comments</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="text-[16px] font-semibold leading-snug text-gray-900">
            {title.length>25? title.slice(0,25)+"...":title}
          </h3>
          <div className="flex shrink-0 items-center gap-0.5 text-md text-gray-800">
            <span>{rating}</span>
            <IoIosStar className="h-3.5 w-3.5 fill-gray-400 " />
          </div>
        </div>

        <p className="mb-3 text-xs ">
          by <span className="text-blue-700">{author}</span>{" "}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-2 text-xs font-medium text-gray-600">
              <HiMiniChartBar />
              {lavel}
            </span>

            <div className="flex items-center -space-x-2">
              {
                buyer.map((b)=><img key={b.id}
                src={b.img}
                className="h-8 w-8 rounded-full border-2 border-white object-cover"
                alt=""
              />)
              }

              <span className="flex h-8 w-8 items-center justify-center rounded-full  border-white bg-lime-400 text-[10px] font-medium text-gray-900">
                26+
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
            <p className="text-lg font-bold text-blue-700">${price}<span className="text-xs text-gray-800 font-extralight">/{tenure}</span></p>
          </div>
      </div>
    </div>
  );
}

export default CourseCard;
