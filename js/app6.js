let random = Math.floor(Math.random() * 10) + 1;
let input = prompt("1-10 oraliqda son kiriting");
if (random == input) {
  console.log("To'g'ri topdiz");
} else {
  console.log("Topolmadiz! " + " O'ylangan son " + random + " kiritilgan son " + input);
}
