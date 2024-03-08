import React, { useContext } from "react";
import studentContext from "../Context/StudentContext";
import { useMern } from "../Context/MernContext";

const Mern = () => {
  let studentData = useContext(studentContext);
  console.log(studentData);
  let { course, setCourse } = useMern();
  console.log(course);
  return (
    <div>
      <h1>
        This is MERN Course taken By {" " + studentData.name} from{" "}
        {" " + studentData.address}
      </h1>
      <div>
        {course.map((e) => {
          return <li>{e}</li>;
        })}
      </div>
    </div>
  );
};

export default Mern;
