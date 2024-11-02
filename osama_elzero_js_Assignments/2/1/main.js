let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
// 1. ++a          : Pre-Increment, يزيد `a` أولاً ثم يعيد القيمة.
// 2. +            : Plus
// 4. +b++         : Post-Increment with Unary Plus, يعيد قيمة `b` ثم يزيدها.
// 4. +c++         : Post-Increment with Unary Plus, يعيد قيمة `c` ثم يزيدها.
// 5. -            : Subtraction Operator, عملية الطرح.
// 6. +a++         : Post-Increment with Unary Plus, يعيد قيمة `a` ثم يزيدها.

console.log(++a + -b + +c++ - -a++ + +a);
// 1. ++a          : Pre-Increment, يزيد `a` أولاً ثم يعيد القيمة.
// 2. +            : Unary Plus, يحول القيمة إلى عدد.
// 3. -b           : Unary Negation, يحول `b` إلى قيمة سالبة.
// 4. +c++         : Post-Increment with Unary Plus, يعيد قيمة `c` ثم يزيدها.
// 5. - -a++       : Double Negation and Post-Increment, يجعل قيمة `a` موجبة ويزيدها بعد الإرجاع.
// 6. +a           : Unary Plus, يحول `a` إلى عدد بعد آخر تحديث.

console.log(--c + +b + --a * +b++ - +b * a + --a + true);
// 1. --c          : Pre-Decrement, ينقص `c` أولاً ثم يعيد القيمة.
// 2. +b           : Unary Plus, يحول `b` إلى عدد.
// 3. --a          : Pre-Decrement, ينقص `a` أولاً ثم يعيد القيمة.
// 4. *            : Multiplication Operator, عملية الضرب.
// 5. +b++         : Post-Increment with Unary Plus, يعيد قيمة `b` ثم يزيدها.
// 6. -            : Subtraction Operator, عملية الطرح.
// 7. +b           : Unary Plus, يحول `b` إلى عدد.
// 8. *            : Multiplication Operator, عملية الضرب.
// 9. a            : القيمة الحالية لـ `a`.
// 10. --a         : Pre-Decrement, ينقص `a` ثم يعيد القيمة.
// 11. +           : Unary Plus, يحول `a` إلى عدد.
// 12. true        : Boolean True, يُعامل كـ 1 عند جمعه.
