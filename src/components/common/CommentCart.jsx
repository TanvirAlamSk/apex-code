
const CommentCart = ({comment}) => {
    const {img,name,title,note}=comment;
    return (
        <div className='bg-white p-5 rounded-2xl'>
            <img src={img} alt="commentetors image" />
            <h5 className='font-semibold mt-6'>{name}</h5>
            <p className='text-sm text-[#003BE2]'>{title}</p>
            <p className='mt-6 text-sm font-extralight pr-5'>
                {note}
            </p>
        </div>
    );
};

export default CommentCart;