// let fruit = prompt("What fruit do you like the most?", "");
// let bag = {
//     [fruit]: "Hope yu like this",
// }
// console.log(bag[fruit]);

// let user = {
//     name: "Tushar Malhotra",
//     age: 23,
//     userIsAdmin: true,
// }

// for (let prop in user) console.log(user[prop]);

// let phoneDials = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+91": "India",
//     "+1": "USA",
// }

// for (let code in phoneDials) {
//     console.log(+code);
// };

// function isEmptyObj(obj) {

//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// let newObj = {};
// console.log(isEmptyObj(newObj));


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }



// function sumOfSalaries(salaries) {
//     let sumOfSalaries = 0;
//     for (let salary in salaries) {
//         sumOfSalaries += salaries[salary];
//     }
//     return sumOfSalaries;
// }
// console.log(sumOfSalaries(salaries));

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// let menu1 = {
//     width: 500,
//     height: 1000,
//     newStr: "Hey we go",
// }

// function multiplyNumeric(obj) {

//     for (let dataKey in obj) {
//         if (typeof obj[dataKey] === "number") {
//             obj[dataKey] *= 2;
//         };
//     }
//     return obj;
// }

// console.log(multiplyNumeric(menu));
// console.log(multiplyNumeric(menu1));


// let obj = {};

// Object.defineProperty(obj, 'name', {
//     value: "Tushar Malhotra",
//     writable: true,
//     enumerable: true,
//     configurable: true,
// })

// Object.defineProperty(obj, 'age', {
//     value: 23,
//     writable: true,
//     enumerable: true,
//     configurable: true,
// })

// console.log(obj);



// let newUser = {
//     name: 'Vinod Kumar',
//     age: 24,
// }

// let clone = {};

// for (key in newUser) {
//     clone[key] = newUser[key];
// }
// clone["name"] = "Suresh Patil";
// console.log(newUser);
// console.log(clone);


// let newClone = {...newUser };
// console.log(newClone);

// let user = {};
// let's create a circular reference:
// user.me references the user itself
// user.me = user;
// console.log(user);


const slides = document.querySelectorAll(".slide");
let count = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

function goNext() {
    count === slides.length - 1 ? count = 0 : count++;
    slideImage();
};

function goPrev() {
    count <= 0 ? count = slides.length - 1 : count--;
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`
    })
}