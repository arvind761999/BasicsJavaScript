// const tinderUser = new Object(); // This is a SingleTon Object

const tinderUser = {};  // This is not a SingleTon Object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email: "some@1223",
    fullname: {
        userfullname: {
            fname: "Arvind",
            lname: "Thakur"
        }
    }
};

// console.log(regularUser.fullname.userfullname.fname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1,obj2);

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
        name: "Arvind"
    },
    {
        name: "Arvind"
    },
    {
        name: "Arvind"
    },
    {
        name: "Arvind"
    },
];

// console.log(users[1].name);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Arvind"
};

// course.courseInstructor

// Destructuring of object
const {courseInstructor: instructor} = course;
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Arvind",
//     "coursename": "Hindi",
//      "age": 23
// }

