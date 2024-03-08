import { createContext, useContext, useState } from "react";

const MernContext = createContext();

export const MernContextAPI = (props) => {
  console.log(props);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [course, setCourse] = useState([
    "MongoDB",
    "Express Js",
    "React Js",
    "Node Js"
  ]);
  return (
    <>
      <MernContext.Provider value={{ course, setCourse }}>
        {props.children}
      </MernContext.Provider>
    </>
  );
};
export const useMern = () => {
  const mernData = useContext(MernContext);
  return mernData;
};
