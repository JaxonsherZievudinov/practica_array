// task1
// function sum(...a) {
//      return a.reduce((acc,el)=>acc.concat(el),[])
// }
// console.log(sum([1,2],[3,4]));

// task2
// function sum(a,b) {
//   return a.indexOf(b)
// }
// console.log(sum([1,2,9],9));

// task3
// function sum(a) {
//     let b=a.filter((el,ind)=>{
//         if(a.indexOf(el)==ind){
//             return el
//         }
//     })
//     return b
// }
// console.log(sum([1,6,2,3,3,4,4,5,6,6]));

// task4
// function sum(a) {
//     let b=a.filter(el=>{
//      if(el>0){
//         return el
//      }
//     })
//     return b
// }
// console.log(sum([-1, 2, -3, 4, 5]));

// task5
// function sum(a) {
//     return a.reduce((acc,el)=>acc+el)/a.length;
// }
// console.log(sum([2, 4, 6, 8, 10]));


// task6
// function sum(a){
//     let revers=a.toReversed()
//     let answer=true
//     a.forEach((el,ind) => {
//         if(el !=revers[ind])
//             answer= false
//     });
//     return answer
// }
// console.log(sum([1,2,3,4,1]));

// task7
// function sum(a,b,c) {
//     return c.filter((el) => el>=a && el<=b);
// }
// console.log(sum(3,8,[1,9,95,0,4,7]));

// task8
// function sum(a) {
//     return a.reduce((acc,el)=>{
//        return acc+=el
//     },0)
// }
// console.log(sum([1,2,3,4,5]));

// task9
// function sum(a) {
//     return a.map(el=>{
//         return typeof el
//     })
// }
// console.log(sum(["214", true, false, 2.15, [], null]));

// task10
// function sum(a) {
//     return a.map(el=>{
//         return el.length
//     })
// }
// console.log(sum(["hello","ld"]));

// task11
// function sum(a) {
//    let square=Math.sqrt(a[0])
//    let cube=square**3
//    return cube==a[1]
// }
// console.log(sum([16,48]));

// task12
// function sum(a) {
//     return a.map(el=>{
//         return    el=el*-1     
//     })
// }
// console.log(sum([1,2,3,4,5]));

// task13
// function sum(a) {
//     return a.reduce((acc,el)=>{
//         return acc.concat(el*2)
//     },[])
// }
// console.log(sum([2,5,3]));

// task14
// function sum(a) {
//     return a.reduce((acc,el)=>{
//        if(el>5){
//         acc+=el
//        }
//        else{
//        }
//        return acc
//     },0)
// }
// console.log(sum([1, 5, 20, 30, 4, 9, 18]));

// task15
// function sum(a) {
//      return a.map((el)=>{
//         if(typeof el == "number"){
//             return el
//         }
//         else if(el == undefined){
//            return el
//         }
        
//      })
// }
// console.log(sum([1,2,3,4,5,"a","b"]));