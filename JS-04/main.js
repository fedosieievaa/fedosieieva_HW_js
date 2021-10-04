const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і стуктури даних'];
const marks = [4, 5, 5, 3, 4, 5];

// 1
const getPairs = function(students) {
    const pairs = [];
    const boys = [];
    const girls = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].endsWith('а') || students[i].endsWith('я')) {
            girls.push(students[i]);
            continue;
        }
        boys.push(students[i]);
    }
    for (let i = 0; i < boys.length; i++) {
        pairs.push([boys[i]].concat([girls[i]]));
    }
    return pairs;
}
const pairs = getPairs(students);
console.log(pairs);

// 2
const getThemes = function(pairs, themes) {
    const themesOfPairs = [];
    for (let i = 0; i < pairs.length; i++) {
        themesOfPairs.push([
            [pairs[i][0]] + ' i ' + [pairs[i][1]]
        ].concat([themes[i]]));
    }
    return themesOfPairs;
}
const themesOfPairs = getThemes(pairs, themes);
console.log(themesOfPairs);

// 3
const getMark = function(students, marks) {
    const markForStudent = [];
    for (let i = 0; i < students.length; i++) {
        markForStudent.push([students[i]].concat([marks[i]]));
    }
    return markForStudent;
}
const markForStudent = getMark(students, marks);
console.log(markForStudent);

// 4
const randomMark = function(themesOfPairs) {
    const markForTheme = []
    for (let i = 0; i < themesOfPairs.length; i++) {
        markForTheme.push(
            themesOfPairs[i].concat([Math.ceil(Math.random() * 5)])
        );
    }
    return markForTheme;
}
const result = randomMark(themesOfPairs);
console.log(result);