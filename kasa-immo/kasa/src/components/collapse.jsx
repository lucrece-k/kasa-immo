import "../components/index.scss";
import arrowBack from "../images/arrow_back.png";
import { useState } from "react";

function Collapse({ title, content, description, equipments }) {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
      <div className="info-a-propos" onClick={handleToggle}>
        <p>{title}</p>
        <img
          className={`arrow-back ${isOpen ? "rotated" : ""}`}
          src={arrowBack}
          alt="arrow"
        />
      </div>
      {isOpen ? (
        <div className="collapse-content">
          {content && <p>{content}</p>}
          {description && (
            <p style={{ paddingBlock: 0, paddingInline: 30 }}>{description}</p>
          )}
          {equipments && (
            <ul style={{ listStyleType: "none" }}>
              {equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
export default Collapse;
