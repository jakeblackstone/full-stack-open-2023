import React from "react";
import Part from "./Part";
const Content = ({parts}) => {
  const partElem = parts.map(p => <Part key={p.id} part={p}/>);
  return (
      <div>
        {partElem}
      </div>
  );
};

export default Content;
