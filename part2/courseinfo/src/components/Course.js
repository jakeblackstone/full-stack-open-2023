import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({course}) => {
    const exSum = course.parts.reduce((acc, curr) => {
        return {exercises: acc.exercises + curr.exercises}
    });


    console.log(exSum.exercises)
    return(
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total total={exSum}/>
        </div>
    );
};
export default Course
