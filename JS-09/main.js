class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
        this.isExpelled = false;
    }
    get getMarks() {
        return this.isExpelled ? null : this.marks;
    }
    set setMarks(mark) {
        if (!this.isExpelled) {
            this.marks.push(mark);
        };
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }
    getAverageMark() {
        if (this.marks.length >= 1 && !this.isExpelled) {
            return (this.marks.reduce((acc, mark) => acc + mark) / this.marks.length).toFixed(1);
        } else {
            return 0;
        }
    }
    dismiss() {
        this.isExpelled = true;
    }
    recover() {
        this.isExpelled = false;
    }
}
// Створюю дані студента: 
const nastya = new Student('ЛНУ імені І. Франка', '5', 'Федосєєва Анастасія');
console.log(`Дані студента: ${nastya.getInfo()}`);

// Ставлю оцінки студенту:
nastya.setMarks = 5;
nastya.setMarks = 4;
nastya.setMarks = 4;
nastya.setMarks = 5;
nastya.setMarks = 5;
console.log(`Оцінки студента: ${nastya.getMarks}`);

// Cереднє арифметичне:
console.log(`Cереднє арифметичне: ${nastya.getAverageMark()}`)

// Виключаю студента:
nastya.dismiss();

// Пробую ставити оцінку:
nastya.setMarks = 3;
console.log(`Виключаю студента і пробую ставити оцінку: ${nastya.getMarks}`);

// Поновлюю студента:
nastya.recover();

// Пробую ставити оцінку:
nastya.setMarks = 3;
console.log(`Поновлюю студента і пробую ставити оцінку: ${nastya.getMarks}`);

// ADVANCED TASK

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 30000);
    }
    getScholarship() {
        if (this.getAverageMark() >= 4) {
            console.log('Ви отримали 1400 грн. стипендії.');
        }
    }
}
// Створюю дані нового студента: 
const sasha = new BudgetStudent('НУ "ЛП"', '7', 'Федосєєв Олександр');
console.log(`Дані нового студента: ${ sasha.getInfo()}`);

// Ставлю оцінки студенту:
sasha.setMarks = 3;
sasha.setMarks = 4;
sasha.setMarks = 5;
sasha.setMarks = 5;
console.log(`Оцінки студента: ${sasha.getMarks}`);