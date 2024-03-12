// if (condition à respectet) {
// si c'est true => tâches à réaliser
// }
// else {
// je fais autre chose
// }

let name = "John";
let age = 19;

// if (name === "John") {
//   if (age > 17) {
//     console.log(
//       "Tu es majeur(e) ! Viens la faire la fête c'est vendredi ! Tout est permis"
//     );
//   } else {
//     console.log("Tu es mineur(e)");
//   }
//   console.log("Welcome John");
// } else {
//   console.log("What's your name ?");
// }

const note = prompt("Quelle est votre note ?");

if (note >= 15 && note <= 20) {
  alert("reçu avec mention");
} else if (note >= 10 && note < 15) {
  alert("reçu, tu aurais pu faire mieux");
} else if (note >= 0 && note < 10) {
  alert("Tu es vraiment un gros n...");
} else {
  alert("Mytho !");
}
