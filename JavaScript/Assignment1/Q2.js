
const userName = "Tanya";
const age = 20;
const isStudent = true;
const subjects = ["Java", "JavaScript", "DBMS"];
const student = { name: "Tanya", course: "B.Tech CSE" };
const middleName = null;
let address;

const dataReport = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    {
        Label: "Subjects",
        Value: subjects.join(", "),
        Type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    {
        Label: "Student Object",
        Value: JSON.stringify(student),
        Type: typeof student
    },
    { Label: "Middle Name", Value: middleName, Type: "null" },
    { Label: "Address", Value: String(address), Type: typeof address }
];

console.table(dataReport);

