import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxLength: number;
}

const ExpandableText = ({ children, maxLength }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= maxLength) {
    return <>{children}</>;
  }

  return (
    <>
      <div>
        {expanded ? children : children.substring(0, maxLength) + " ..."}{" "}
      </div>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Collapse" : "Read More"}
      </button>
    </>
  );
};

export default ExpandableText;
