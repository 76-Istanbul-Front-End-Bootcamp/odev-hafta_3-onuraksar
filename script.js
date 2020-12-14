function Animal(name){
    this.name = name;
}

Animal.prototype.action = function(){
  document.getElementById(this.actionSoundName).play();
  
}

Animal.prototype.putInTheDocument = function(){
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
  
    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
  
    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);
  
    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);
    
    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)
}


function Cat(name){
    Animal.call(this, name);
    this.legs = 4;
    this.actionText = "Meoow"
    this.actionSoundName = "meow"
}

Cat.prototype = Animal.prototype;

function Monkey(name){
    Animal.call(this, name);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
}

Monkey.prototype = Animal.prototype;

var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
