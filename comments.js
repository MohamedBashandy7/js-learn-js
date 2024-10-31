//******************************* عشان اخليها تدور حوالين بعضها ***********************************/
// let arr = [1, 2, 3, 4, 5, 6];

// function rearrangeArray(selected) {
//   // إيجاد فهرس العنصر المختار
//   const index = arr.indexOf(selected);

//   // إعادة ترتيب المصفوفة
//   if (index !== -1) {
//     return [...arr.slice(index), ...arr.slice(0, index)];
//   }
//   return arr;
// }

// // إنشاء النمط لكل عنصر من 1 إلى 6
// for (let i = 1; i <= 6; i++) {
//   console.log(`عند اختيار ${i}:`, rearrangeArray(i));
// }
// let arr = [1, 2, 3, 4, 5, 6];

// function rearrangeArray(selected) {
//   const n = arr.length; // طول المصفوفة
//   const index = arr.indexOf(selected); // فهرس العنصر المختار
//   let newArr = []; // مصفوفة جديدة لحفظ الترتيب الجديد

//   // بناء المصفوفة بناءً على المعادلة
//   for (let i = 0; i < n; i++) {
//     newArr.push(arr[(index + i) % n]);
//   }

//   return newArr;
// }

// // إنشاء النمط لكل عنصر من 1 إلى 6
// for (let i = 1; i <= 6; i++) {
//   console.log(`عند اختيار ${i}:`, rearrangeArray(i));
// }
// let arr = [1, 2, 3, 4, 5, 6];

// function rearrangeArray(selected) {
//   const n = arr.length;
//   const index = arr.indexOf(selected);

//   // إنشاء مصفوفة جديدة باستخدام المعادلة الديناميكية
//   const newArr = arr.map((_, i) => arr[(index + i) % n]);

//   return newArr;
// }

// // اختبار الدالة لكل اختيار من 1 إلى 6
// for (let i = 1; i <= 6; i++) {
//   console.log(`عند اختيار ${i}:`, rearrangeArray(i));
// }


// let arr = [1, 2, 3, 4, 5, 6];

// function rearrangeArray(selected) {
//   const n = arr.length; // طول المصفوفة
//   let index = -1; // فهرس العنصر المختار

//   // إيجاد فهرس العنصر المختار يدويًا
//   for (let i = 0; i < n; i++) {
//     if (arr[i] === selected) {
//       index = i;
//       break;
//     }
//   }

//   // مصفوفة جديدة لحفظ الترتيب بعد التدوير
//   let newArr = new Array(n);

//   // بناء المصفوفة باستخدام معادلة التدوير
//   for (let i = 0; i < n; i++) {
//     newArr[i] = arr[(index + i) % n];
//   }

//   return newArr;
// }

// // إنشاء النمط لكل عنصر من 1 إلى 6
// for (let i = 1; i <= 6; i++) {
//   console.log(`عند اختيار ${i}:`, rearrangeArray(i));
// }
