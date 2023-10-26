let piyoda = 1100 / 2;
let velikda = 1100 / 20;
let moshinada = 1100 / 70;
let poyezdda = 1100 / 150;
let samalyotda = 1100 / 880;

let ulov = +prompt(
  "Ulov tartib raqamini tanlang: 1)piyida, 2)velikda, 3)moshinada, 4)poyezdda, 5)samalyotda"
);

switch (ulov) {
  case 1: {
    console.log("Siz Xorazmga piyoda " + piyoda + " soatda borasiz");
    break;
  }
  case 2: {
    console.log("Siz Xorazmga velikdada " + velikda + " soatda borasiz");
    break;
  }
  case 3: {
    console.log(
      "Siz Xorazmga moshinada " + Math.round(moshinada) + " soatda borasiz"
    );
    break;
  }
  case 4: {
    console.log(
      "Siz Xorazmga poyezdda " + Math.ceil(poyezdda) + " soatda borasiz"
    );
    break;
  }
  case 5: {
    console.log("Siz Xorazmga samalyotda " + samalyotda + " soatda borasiz");
    break;
  }
  default: {
    console.log("Noto'g'ri raqam kiritdingiz!");
  }
}
