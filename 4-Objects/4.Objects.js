
// ==============
// What is JSON?
// ==============
// JSON (JavaScript Object Notation) is primarily used for transferring data between a WEB SERVER and a WEB APPLICATION

//========================
// How to Create Objects?
//========================
const car =
{
    color: "black",
    model: "2022",
    price: "2.5M"
};

console.log(car); // {color: 'Red', model: '2022', price: '2.5M'}

//========================================
// How to access the values of an Objects?
//========================================
console.log(car.color); // black
console.log(car.model); // 2002
console.log(car.price); // 2.5M

//==================================
// How to Change value in an Object?
//==================================
car.color = "Red";
console.log(car.color); // Red

// =======================================
// How to convert an Object into a String?
// =======================================
const carString = JSON.stringify(car);
console.log(carString); // {"color":"Red","model":"2022","price":"2.5M"}

// =======================================
// How to convert a String into an Object?
// =======================================
const carObj = JSON.parse(carString);
console.log(carObj); // {color: 'Red', model: '2022', price: '2.5M'}





