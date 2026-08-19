// 
type Student = {
    name: string;
    marks: number[];
};

function getStudentResult(student: Student): {
    name: string;
    average: number;
    result: string;
} {
    if (student.marks.length === 0) {
        return {
            name: student.name,
            average: 0,
            result: "Failed"
        };
    }

    const total = student.marks.reduce((sum, mark) => {
        return sum + mark;
    }, 0);

    const average = total / student.marks.length;

    const result = average >= 40 ? "Passed" : "Failed";

    return {
        name: student.name,
        average: average,
        result: result
    };
}