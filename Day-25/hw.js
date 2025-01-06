// const fruits = ["apple", "banana", "kiwi", "orange", "mango"]


// Array.prototype.forEach2 = function(callback,thisvalue) {
//     const length = this.length
//     for(let i = 0; i < length; i++) {
//         if(i in this) {
//             callback.call(thisvalue,this[i], i, this)
//         }
//     }
// };

// const result = fruits.forEach2(function(fruit,index, arr) {
//     delete fruits[2]
//     console.log(fruit);
//     console.log(index);
//     console.log(arr);
//     console.log(this);
// },{id: 123}) 


// const obj = {
//     numbers: [1,2,3],
//     add(number) {
//         console.log(this.numbers);
//         this.numbers.push(number)
//         console.log(this.numbers);
//     },
//     import(numbers) {
//         console.log(this);
//         numbers.forEach((number) => {
//             this.add(number)
//         })
//     }
// }

// // obj.add(4)
// obj.import([4,5,6,7,8])



// Array.prototype.filter2 = function(callback, thisArg) {
//     const length = this.length
//     const arr = []
//     for(let i = 0; i < length; i++) {
//         if(i in this) {
//             if(callback.call(thisArg, this[i], i, this)) {
//                 arr.push(this[i])
//                 console.log(this);
//             }
//         }
//     }
//     return arr
// };

// // Sample usage

// // Sample 1
// const arr = [1, 2, 3, 4, 5];
// const result = arr.filter2((value, index, array) => {
//     return value > 3;
// });
// console.log(result);
// const result1 = arr.filter((value, index, array) => {
//     return value > 3;
// });

// console.log(result1); // 3

// // Sample 2
// const thresholdObj = { threshold: 4 };
// const resultWithThisArg = arr.find2(function(value) {
//     return value > this.threshold;
// }, thresholdObj);

// console.log(resultWithThisArg); // 5

// // Sample 3
// const sparseArr = [1, , 3]; // Có phần tử trống
// const sparseResult = sparseArr.find2((value) => value > 2);

// console.log(sparseResult); // 3


// Array.prototype.findIndex2 = function (callback, thisArg) {
//     const length = this.length;

//     for (let i = 0; i < length; i++) {
//         if (i in this) {
//             if (callback.call(thisArg, this[i], i, this)) {
//                 return i;
//             }
//         }
//     }
//     return -1
// };

// Sample usage

// Sample 1
// const arr = [1, 2, 3, 4, 5];
// const index = arr.findIndex2((value, index, array) => {
//     return value > 3
// });

// console.log(index); // 2

// Sample 2
// const thresholdObj = { threshold: 4 };
// const indexWithThisArg = arr.findIndex2(function (value) {
//     console.log(this.threshold);
//     return value > this.threshold;
// }, thresholdObj);

// console.log(indexWithThisArg); // 4

// Sample 3
// const sparseArr = [1, , 3];
// const sparseIndex = sparseArr.findIndex2((value) => {
//     console.log(value);
// });

// console.log(sparseIndex); // 2


// Array.prototype.map2 = function(callback, thisArg) {
//     const length = this.length;
//     const newArray = []
//     for(let i = 0; i < length; i++) {
//         if(i in this) {
//                 newArray[i] = callback.call(thisArg, this[i], i , this)
//         }
//     }
//     return newArray
// }



// // Sample 1
// const arr1 = [1, 2, 3, 4, 5];
// const result1 = arr1.map2((value) => value * 2);

// console.log(result1); // [2, 4, 6, 8, 10]
// console.log(result1.length); // 5

// // Sample 2
// const arr2 = [1, , , , 5]; // Có phần tử trống
// const result2 = arr2.map2((value) => value * 2);

// console.log(result2); // [2, empty, empty, empty, 10]
// console.log(result2.length); // 5

// Array.prototype.every2 = function(callback, thisArg) {
//     const length = this.length;
//     if(length === 0) return true
//     for(let i = 0 ;i < length; i++) {
//         if(i in this) {
//             const result = callback.call(thisArg, this[i], i , this)
//             if(!result) return false
//         }
//     }
//     return true
// }

// const ages = [18, 20, 20, 30];

// // Kiểm tra toàn bộ phần tử có từ 18 trở lên không
// const result = ages.every2(age => age >= 18);

// console.log(result);



// Array.prototype.some2 = function(callback, thisArg) {
//     const length = this.length;
//     for(let i = 0 ;i < length; i++) {
//         if(i in this) {
//             const result = callback.call(thisArg, this[i], i , this)
//             if(result) return true
//         }
//     }
//     return false
// }


// const ages = [];
// // Kiểm tra toàn bộ phần tử có từ 18 trở lên không
// const result = ages.some2(age => age >= 18);
// const result1 = ages.some(age => age >= 18);


// console.log(result);
// console.log(result1);




// const order = {
//     code: "#DH001",
//     products: [
//       { name: "iPhone", price: 100, quantity: 1 },
//       { name: "iPad", price: 200, quantity: 3 },
//       { name: "Macbook", price: 300, quantity: 2 }
//     ]
//   };
  
// ;

//  const total = order.products.reduce((sum, product) => {
//     return sum + product.price * product.quantity;
//   }, 0);
  

// console.log(total)

// Array.prototype.reduce2 = function(callback, initialValue ) {
//     const length = this.length
//     let accumulator = this[0]
//     if(length === 0) {
//         throw new Error('Reduce of empty array with no initial value')
//     }
//     for(let i = 1; i < length; i++) {
//         if(i in this) {
//             if( callback.call(initialValue, accumulator, this[i], i, this)) {
//                 accumulator += this[i]
//             }
//         }
//     }
//     return accumulator
// }









// Array.prototype.reduce2 = function (callback, initialValue) {

//     if (initialValue === undefined) {
            
//             if (this.length) initialValue = this[0];
//             else throw new Error("Error: Reduce of empty array with no initial value");
//         }
    
//         for (let i = 0; i < this.length; i++) {
//             if(this[i] === undefined) continue
//             initialValue = callback.call(this, initialValue, this[i], i, this)
//     };
//     return initialValue;
// }

// Array.prototype.reduce2 = function(callback, initialValue) {
//     const length = this.length
//     if(initialValue === undefined) {
//         if(length) initialValue = this[0]
//         else throw new Error('"Error: Reduce of empty array with no initial value"')
//     } 
//     for(let i = 0; i < length; i++) {
//         if(this[i] === undefined) continue
//         initialValue = callback.call(this, initialValue, this[i], i, this)
//     }
//     return initialValue
// }




// const order = {
//     code: "#DH001",
//     products: [
//       { name: "iPhone", price: 100, quantity: 1 },
//       { name: "iPad", price: 200, quantity: 3 },
//       { name: "Macbook", price: 300, quantity: 2 }
//     ]
//   };
  
//   const total = order.products.reduce2((sum, product) => {
//     return sum + product.price * product.quantity;
//   },0);
  
//   console.log(total);
  
//   const arr1 = [1, 2, 3, 4, 5];

//   const result1 = arr1.reduce2((accumulator, value) => {
//       return accumulator + value;
//   }, 0);
  
//   console.log(result1); // 15
  
//   // Sample 2
  
//   const arr2 = [];
  
//   const result2 = arr2.reduce2((accumulator, value) => {
//       return accumulator + value;
//   });
  
//   console.log(result2); // Error: Reduce of empty array with no initial value
  
//   // Sample 3
  
//   const arr3 = [];
  
//   const result3 = arr3.reduce2((accumulator, value) => {
//       return accumulator + value;
//   }, 0);
  
//   console.log(result3); 




// const students = [
//     { id: 1, fullname: "Le Van Minh", age: 28, address: "NgheAn" },
//     { id: 2, fullname: "Hoang Quang Thang", age: 18, address: "VinhPhuc" },
//     { id: 6, fullname: "Nguyen Van Anh Cong", age: 22, address: "HaNoi" },
//     { id: 3, fullname: "Kieu Minh Tue", age: 21, address: "VinhPhuc" },
//     { id: 4, fullname: "Nguyen Van Cong", age: 18, address: "HaNoi" },
//     { id: 5, fullname: "Nguyen Minh Cong", age: 18, address: "HaNoi" },
//     ];


// const studentsList = students.sort( (a,b) => {
//     let aFullName = a.fullname.split(" ")
//     let bFullName = b.fullname.split(" ")
//     let aLastName = aFullName.pop()
//     let bLastName = bFullName.pop()
//     if(aLastName < bLastName) return -1 
//     else if(aLastName > bLastName) return 1
//     if(aFullName.join() < bFullName.join()) return -1
//     else if(aFullName.join() > bFullName.join()) return 1
   
// })

// console.log(studentsList);


/**
* Cho mảng fruits.
*
* NHÓM CÁC PHẦN TỬ CÓ ĐẶC ĐIỂM CHUNG.
* Đếm các loại trái cây xuất hiện nhiều lần và thống kê lại thành 1 object.
*
* LOẠI BỎ PHẦN TỬ TRÙNG LẶP
* Tạo ra mảng fruitsRemoveDuplicated chỉ chứa các phần tử không trùng lặp của fruits
*/
// Input:
// const fruits = ["apple", "banana", "orange", , , , , "kiwi", "orange", "apple", "kiwi", "apple"];
// // Output:

// const result = fruits.reduce((acc, fruit) => {
//     if(fruit in acc) {
//         acc[fruit]++
//     }else {
//         acc[fruit] = 1
//     }
//     return acc
// },{})

const users = [
    { id: 1, fullname: "Nguyen Manh Dung", gender: "male", address: "Ca Mau" },
    { id: 2, fullname: "Nguyen Xuan Phu", gender: "male", address: "Da Nang" },
    { id: 3, fullname: "Bui Tien Toan", gender: "male", address: "Quang Ninh" },
    { id: 4, fullname: "Nguyen Phuong Hang", gender: "female", address: "Khanh Hoa" },
    { id: 5, fullname: "Nguyen Minh Anh", gender: "female", address: "Bac Ninh" },
    { id: 6, fullname: "Duong Thuy Dung", gender: "female", address: "Quang Ninh" },
];

// const createGroupUsers = function() {
//     let group = {}
//     for(let)

// }


