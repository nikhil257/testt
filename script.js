function studentObj(id, name, grades){
    return{
        id : id,
        name :name,
        grades :grades,
    }
};

let students =[];

function addStudent(id, name, grades){
    let student = studentObj(id, name, grades);
    students.push(student);
}
addStudent(111, "John", 97);
addStudent(222, "Smith", 82);
addStudent(333, "Ron", 77);
addStudent(444, "Harry", 74);

console.log("after adding new students to array");
console.log(students);

function removeStudent(id){
    // students = students.filter(student => student.id !== id); 
    students.splice(2, 1);
}
removeStudent(111);
console.log("after removing students from array");
console.log(students);