const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  console.log(val); // => js ruby java python cpp
});

coding.forEach((val) => {
  console.log(val); // => js ruby java python cpp
});

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe); // => js ruby java python cpp
//              ^- We just giving the reference not executing it.

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
// => js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//    ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//    java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//    python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//    cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName); // => javascript java python
});
// Boom you get the value from an array of object.
