
// ===============================
// 1. Array Literal (Single line):
// ===============================
var names = ['Asif', 'Arif', 'Huzaifa', 'Hamza'];
console.log(names)

// Array Literal (Multi line)
var names1 = 
[
    'Hamza',
    'Huzaifa',
    'Arif',
    'Asif'
]
console.log(names1)

// Arry Literal (Value assign)
var names2 = [];
names2[0] = 'Asif Raza';
names2[1] = 'Arif Hanif';
names2[2] = 'Huzaifa Sajid'
names2[3] = 'Hamza Sajid'
console.log(names2)

// ============================
// 2. Array with "new" keyword:
// ============================
var names3 = new Array ('Asif', 'Arif', 'Huzaifa', 'Hamza')
console.log(names3)


// ===================
// Length of an Array:
// ===================
console.log(names.length);

// =======================================================
// Removing Values from an Array (PSS): Pop, Shift, Splice
// =======================================================
console.log(names);

names.pop(); // removes the LAST value
console.log(names);

names.shift(); // removes the FIRST value
console.log(names);

names.splice(0,2); // removes 2 values from 0 index
console.log(names);

// ======================================================
// Adding Values in an Array (PUS): Push, Unshift, Splice
// ======================================================
names.push("Harmain"); // to add single value at LAST index
console.log(names);

names.push("Fatima", "Khizra"); // to add multiple values at LAST index (subsequently)
console.log(names);

names.unshift("Harmain"); // to add single value at FIRST index
console.log(names);

names.splice(1,0, "Sajid"); // to add a value on SPECIFIC index
console.log(names);

names.splice(1,0, "Sajid", "Saad"); // to add multiple values on SPECIFIC index
console.log(names);

//==========================
// Subset of an Array: Slice
//==========================
var names = ['Asif', 'Arif', 'Huzaifa', 'Hamza'];
var subNames = names.slice(1,3);// from 1st index to 3rd - 1 = 2nd index (3rd index is exclusive)
console.log(subNames); //  ['Arif', 'Huzaifa']

// =================
// Sorting an Array:
// =================
names.sort(); // A-Z
console.log(names);

console.log(names.reverse()); // Z-A

// ==============================
// Iterating array with For Loop:
// ==============================
for (i = 0; i < names.length; i++){
    console.log(names[i]);
    OR
    document.write(names[i]);
    document.write("<br>");
}
