let dollor = prompt("kurs dollor: ");
let euro = prompt("kurs euro: ");
let money = prompt("Qancha pulingiz bor");

let ticket = 350 * dollor;
let living = 500 * dollor;
let picnic = 300 * euro;

let sum = ticket + living + picnic;

if (sum > money) {
  console.log(
    "Kechirasiz siz bu pul bilan bizning xizmatimizdan foydalana olmaysiz!"
  );
} else {
  console.log(
    "Safaringiz xayrli bo'lsin! Sizga xizmat ko'rsatishdan mamnunmiz"
  );
}
