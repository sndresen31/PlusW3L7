let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};
let sydney = {
  state: "New South Wales",
  country: "Australia",
  language: "English",
  temperature: 22,
};
 let ausCities =  ["Melbourne","Canberra", "Perth"];

 function showTemperature (city){
   console.log ("Temperature in " +city, "is 22 degrees");
 }
 ausCities.forEach(showTemperature);

console.log (paris.temperature);
console.log (sydney.temperature);
console.log (ausCities);

 