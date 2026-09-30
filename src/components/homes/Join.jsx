import React from "react";
import { bg_style } from "../../utils/style";
import Cone1 from '../../assets/Cone.png'
// import Cone2 from '../../assets/Cone1.png'
import frame1 from '../../assets/Frame.png'
import frame2 from '../../assets/Frame (1).png'
import limering from '../../assets/lime_ring.png'
import Conelime from '../../assets/Conelime.png'
import ovallime from '../../assets/ovallime.png'
import MaskGroup from '../../assets/MaskGroup.png'

const Join = () => {
  return (
    <section
      className={`h-122 ${bg_style} overflow-hidden relative text-center`}
    >
      <div className="max-w-195 mx-auto mt-22 ">
        <h2 className="text-4xl font-bold leading-10">
          Unlock Your Potential as a <br className="hidden lg:block "></br>
          Creator with ByteSpace
        </h2>
        <p className="font-extralight text-sm leading-7 mt-10">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <button className="bg-lime-400 mt-10 py-2.5 px-4 rounded-3xl text-black text-sm">Join as Creator</button>
      </div>
      <img src={Cone1} alt="white cone" className="absolute top-56 -left-17 -rotate-30" />
      <img src={frame1} alt="lime color ring" className="absolute -top-40"/>
       <img src={frame2} alt="lime color ring big" className="absolute top-3 left-45 "/>
      <img src={limering} alt="lime color ring small"  className="absolute -bottom-21 right-0 "/>
       <img src={Conelime} alt="lime color cone" className="absolute top-0 right-35 "/>
      <img src={ovallime} alt="oval shape lime color" className="absolute bottom-0 left-0 "/>
       <img src={MaskGroup} alt="" className="absolute top-0 -right-5 " />
    </section>
  );
};

export default Join;
