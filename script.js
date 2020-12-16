class AnimalClass {
  constructor(name, imgURL) {
    this.name = name;
    this.imgURL = imgURL;
  }

  putInTheDocument() {
    // creating a table and its row:
    let petsTable = document.getElementById("petsTable");
    let petTR = document.createElement("tr");
    petTR.setAttribute("class", this.name); // add a class to select for an event later.
    // name:
    let petNameTD = document.createElement("td");
    petNameTD.setAttribute("class", this.name); // adding a class to use for onclick event, later.
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
    // legs:
    let petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);
    // action button:
    let petActionTD = document.createElement("td");
    let petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);
    // event listeners for the button:
    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)

  }

  action() {
    document.getElementById(this.actionSoundName).play(); // #meow , #scream
  }

  showImage() {
    const changeSrcFunc = () => {
      let animalImage = document.querySelector(".animal_img");
      // animalImage.style.visibility = "visible"; // change the visibility of the image to visible. (was styled inline in HTML)
      animalImage.style.display = "flex"; // change the visibility of the image to visible. (was styled inline in HTML)
      animalImage.src = this.imgURL; // change the source of the image with the given URL.
    }
    document.querySelector(`.${this.name}`).onclick = changeSrcFunc; // call the function when the user clicks on the animal's name.

  }

}


class Cat extends AnimalClass {
  constructor(name, imgURL) {
    super(name, imgURL);
    this.legs = 4;
    this.actionText = "Meoow"
    this.actionSoundName = "meow"
    // call corresponding methods of parent class:
    super.action();
    super.putInTheDocument();
    super.showImage();
  }

}
//
class Monkey extends AnimalClass {
  constructor(name, imgURL) {
    super(name, imgURL);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
    // call corresponding methods of parent class:
    super.action();
    super.putInTheDocument();
    super.showImage();
  }

}

let Mila = new Cat("Mila", "https://i4.hurimg.com/i/hurriyet/75/750x422/5f2ebbaf0f25441490314a5f.jpg");

let Charlie = new Monkey("Charlie", "https://img-s2.onedio.com/id-56cad2b18b395074609ae53b/rev-0/w-635/f-jpg-webp/s-91c7f1c714da04965a4fb981b8bcb49dde79d506.webp");
