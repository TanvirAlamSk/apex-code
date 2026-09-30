import React from "react";
import { Layered_radial_gradients } from "../../utils/style";
import Container from "../common/Container";
import { comments } from "../../Data/comments";
import CommentCart from "../common/CommentCart";

const Comments = () => {
  return (
    <section className={`p-18 ${Layered_radial_gradients}`}>
      <Container>
        <div className="grid grid-cols-2 justify-baseline">
          <h2 className="text-[35px] font-bold leading-11">
            Discover What Our <br className="hidden md:block"></br>Community Is
            Saying
          </h2>
          <p className="text-sm font-extralight leading-6">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                comments.map((comment,i)=><CommentCart key={i} comment={comment}></CommentCart>)
            }
        </div>
      </Container>
    </section>
  );
};

export default Comments;
