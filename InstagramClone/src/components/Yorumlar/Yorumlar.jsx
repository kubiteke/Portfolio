import "./Yorumlar.css";
import Yorum from "../Yorumlar/Yorum";

const Yorumlar = ({ yorumlar }) => {
  return (
    <div>
      {yorumlar.map((yorum) => {
        return <Yorum key={yorum.id} yorum={yorum} />;
      })}
    </div>
  );
};

export default Yorumlar;
