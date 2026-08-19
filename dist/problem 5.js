"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStudentResult(student) {
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
//# sourceMappingURL=problem%205.js.map