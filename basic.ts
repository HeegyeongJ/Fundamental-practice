let animal = 'Tiger';

// animal = 10 오류

let score: number | string = 'A';

type Person = {
    name: string,
    age: number
}; 

// let person: Person;
// let people: Person[]

function add(a: number, b: number) {
    return a + b;
}
function print(value: any) {
    console.log(value);
}

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); console.log(updatedArray)
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')
// updatedArray : number[]
// stringArray : string[]