// const games = ["COD", "Candycrush", "Minecraft", "Apex Legends"];
// const iGames = games[Symbol.iterator]();
// console.log (iGames.next());
// console.log (iGames.next());
// console.log (iGames.next());
// console.log (iGames.next());
// console.log (iGames.next());

// for (let n of games) {
//   console.log(n);
// }


//PART ONE
// function tens() {
//   let i = 0;
//   return {
//     next() {
//       i++;

//       if (i <= 100) {
//         return {
//           value: i * 10,
//           done: false
//         };
//       }

//       return {
//         value: undefined,
//         done: true,
//       };
//     }
//   };
// }

// const tensOfH = tens();



//PART 2
function tens() {
      let i = 0;
      return {
        next() {
          i++;
    
          if (i <= 10) {
            return {
              value: i * 10,
              done: false
            };
          }
    
          return {
            value: undefined,
            done: true,
          }
        }
      };
    }
  ///contains returned from calling tens value 
  
  const tensOfH = tens();

  console.log (tensOfH.next());
console.log (tensOfH.next());
console.log (tensOfH.next());
console.log (tensOfH.next());
console.log (tensOfH.next());
console.log (tensOfH.next());
console.log (tensOfH.next());
console.log (tensOfH.next());
console.log (tensOfH.next());
console.log (tensOfH.next());
console.log (tensOfH.next());
    
  