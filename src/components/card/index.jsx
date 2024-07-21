import { DropDownMore } from "../dropdown-icons/more";
import { DropDownLess } from "../dropdown-icons/less";
import { useState } from "react";

export const Card = ({ title, renderComponent }) => {
  const [isViewMore, setViewMore] = useState(true);

  const handleToggle = () => {
    setViewMore(!isViewMore);
  };

  return (
    <div className="container_card">
      <div className="wrapper_card">
        <h3 className="title_card">{title}</h3>
        <div onClick={handleToggle}>
          {isViewMore ? <DropDownLess /> : <DropDownMore />}
        </div>
      </div>
      {isViewMore && renderComponent()}
    </div>
  );
};