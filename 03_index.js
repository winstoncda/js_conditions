// const extension = "be";
// let pays;

// switch (extension) {
//   case "uk": {
//     pays = "Royaume Uni";
//     break;
//   }
//   case "be": {
//     pays = "Belgique";
//     break;
//   }
//   case "fr": {
//     pays = "France";
//     break;
//   }
//   default: {
//     pays = "Ce pays ne fait partie de notre base de données";
//   }
// }

// console.log(pays);

const pays = "Chine";
let continent;

switch (pays) {
  case "France":
  case "Belgique":
  case "Italie": {
    continent = "Europe";
    break;
  }
  case "Chine":
  case "Japon": {
    continent = "Asie";
    break;
  }
  case "Maroc":
  case "Ouganda":
  case "Kenya": {
    continent = "Afrique";
    break;
  }
  default: {
    continent = "Ce continent ne fait partie de notre base de données";
  }
}

console.log(continent);
