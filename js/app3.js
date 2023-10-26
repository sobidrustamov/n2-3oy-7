let cars = ["BMW", "AUDI", "TOYOTA", "MAZDA", "TESLA", "BYD"];

let newCar = prompt("Mashina nomini katta harflarda kiriting");

if (cars.includes(newCar) === true) {
  console.log(newCar + " allaqachon ro'yxatda bor");
} else {
  cars.unshift(newCar);
  console.log(newCar + " Qo'shildi Sizda " + cars + " mashinalar bor");
}
