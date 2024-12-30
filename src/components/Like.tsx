import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [clicked, setClicked] = useState(false);

  const toggleLike = () => {
    setClicked(!clicked);
    onClick();
  };

  return (
    <>
      {clicked ? (
        <AiFillHeart color="#ff6b81" size={20} onClick={toggleLike} />
      ) : (
        <AiOutlineHeart size={20} onClick={toggleLike} />
      )}
    </>
  );
};

export default Like;
