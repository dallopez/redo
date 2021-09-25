var characterEle = document.body.querySelector(".character");

var chara = [
  { name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
  { name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
  { name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
  { name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
  { name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
  { name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" }
];

for (var i = 0; i < chara.length; i++) {
  var ele = document.createElement("div");
  ele.classList.add("character");
  var nameEle = document.createElement("div");
  var classEle = document.createElement("div");
  var vehicleEle = document.createElement("div");
  document.body.append(ele);
  nameEle.innerHTML = "name: " + chara[i].name;
  classEle.innerHTML = "class: " + chara[i].class.toUpperCase();
  vehicleEle.innerHTML = "vehicle: " + chara[i].vehicle;
  ele.appendChild(nameEle);
  ele.appendChild(classEle);
  ele.appendChild(vehicleEle);

  var autobot = document.createElement("img");
  autobot.src =
    "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  var decepticon = document.createElement("img");
  decepticon.src =
    "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";

  if (chara[i].afl == "autobot") {
    ele.classList.add("autobot");
    ele.appendChild(autobot);
  } else {
    ele.classList.add("decepticon");
    ele.appendChild(decepticon);
  };

  if (chara[i].vehicle== "truck") {
    vehicleEle.style.color = "blue";
  } else if (chara[i].vehicle== "tank") {
    vehicleEle.style.color = "green";
  } else if (chara[i].vehicle== "car") {
    vehicleEle.style.color = "gold";
  } else if (chara[i].vehicle== "plane") {
    vehicleEle.style.color= "white";
  }
  characterEle.appendChild(ele);
};