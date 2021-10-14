const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// 1
const getSubjects = (student) => Object.keys(student.subjects).map((subject) => subject.substring(0, 1).toUpperCase() + subject.substring(1).toLowerCase().replaceAll('_', ' '));

// 2
const getAverageMark = (student) => {
    let quantity = Object.values(student.subjects).length;
    return (Object.values(student.subjects).map((marks) => marks.reduce((acc, mark) => { quantity++; return acc + mark; })).reduce((acc, mark) => acc + mark) / quantity).toFixed(2);

}

// 3
const getStudentInfo = (student) => {
    return { name: student.name, course: student.course, averageMark: getAverageMark(student) / 1 };
}

// 4
const getStudentsNames = (names) => names.map((student) => student.name).sort();

// 5
const getBestStudent = (students) => students.sort((a, b) => getAverageMark(b) - getAverageMark(a))[0].name;

//6
const calculateWordLetters = (word) => {
    const wordObject = {};
    word.toLowerCase().split('').forEach((letter) => {
        Object.keys(wordObject).includes(letter) ? wordObject[letter]++ : wordObject[letter] = 1
    });
    return wordObject;
}

console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters('тест'));



































































// const getStudentsNames = (names) => names.map((student) => student.name).sort();
// console.log(getStudentsNames(students));