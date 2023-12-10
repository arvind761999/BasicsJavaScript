const coding =  ["js","rb","py","java","cpp"];

// coding.forEach(function (items){
//        console.log(items);
// })


// coding.forEach((items) => {
//     console.log(items);
// })

// function printMe(items){
//     console.log(items);
// }

// coding.forEach(printMe);

coding.forEach((items, index, arr) => {
    // console.log(items, index, arr);
})


const myCoding = [
    {
        languageName: "javaScript",
        languagefileName: "js"
    },
    {
        languageName: "jav",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    }
]

myCoding.forEach((items) => {
    console.log(items.languageName);
})


