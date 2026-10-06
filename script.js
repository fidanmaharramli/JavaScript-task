class CustomMatch {
    constructor(initialValue) {
        this.value = initialValue;
    }
    plus(number) {
        this.value += number;
        return this; 
    }

    minus(number) {
        this.value -= number;
        return this;
    }
    multiply(number) {
        this.value *= number;
        return this;
    }
    divide(number) {
    this.value /= number;
    return this;
}
    }   
var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result.value);



// 2task
const numbers =[5, 12, 3, 20, 8];
numbers.sort((a, b) => b - a);
console.log(numbers); 














//3cu
function getWordLengths(str) {
    return str.split(" ").map(word => word.length);
}
const text = "bir class yaradirsiz";
const lengthsArray = getWordLengths(text);

console.log(lengthsArray);  







//4
const universityGroup = {
    groupName: "PA-203",
    students: [],

    // Добавить студента
    addStudent(student) {
        this.students.push(student);
    },

    // Удалить студента по id
    removeStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
    },

    // Получить студента по id
    getStudent(id) {
        return this.students.find(student => student.id === id);
    },

    // Получить средний балл
    getAverageGrade(id) {
        const student = this.getStudent(id);

        if (!student) {
            return 0;
        }

        let sum = 0;

        for (let grade of student.grade) {
            sum += grade;
        }

        return sum / student.grade.length;
    },

    // Добавить оценку
    addGrade(id, grade) {
        const student = this.getStudent(id);

        if (student) {
            student.grade.push(grade);
        }
    },

    // Получить лучшего студента
    getTopStudent() {
        let bestStudent = this.students[0];

        for (let student of this.students) {
            if (this.getAverageGrade(student.id) > this.getAverageGrade(bestStudent.id)) {
                bestStudent = student;
            }
        }

        return bestStudent;
    },

    // Показать всех студентов
    getAllStudents() {
        return this.students;
    },

    // Имя лучшего студента
    getBestStudentName() {
        return this.getTopStudent().name;
    }
};


universityGroup.addStudent({
    id: 1,
    name: "Fidas",
    age: 17,
    grade: [85, 90]
});
universityGroup.addStudent({
    id: 2,
    name: "Aslan",
    age: 20,
    grade: [95, 100]
});
universityGroup.addGrade(1, 95);
console.log(universityGroup.getAllStudents());
console.log(universityGroup.getStudent(1));
console.log(universityGroup.getAverageGrade(1));
console.log(universityGroup.getTopStudent());
console.log(universityGroup.getBestStudentName());
