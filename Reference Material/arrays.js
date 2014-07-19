//Arrays don't need a specific data type. Like most variable declaration in javascript, type doesn't necessarily need to be designated

//Arrays with a consistent data type are considered homogeneous
var strings = ["this","is","an","array"];
var numbers = [1,2,3,4,5,6];
var bools = [true, false, false, true, false];

//When data types are mixed, they're considered heterogeneous
var mixedTypes = [1,2, "stuff", "more stuff", false, 4, "mixed"];

//Arrays can be multidimensional by containing arrays within arrays
var multidimensional = [[1,2,3],[4,5,6],[7,8,9]];

//Arrays are jagged when they're inconsistent with the number of items in each element
var jagged = [[1,2,3], 4, [5,6]];
