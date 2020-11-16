//console.log("hi how are you!");

let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    return (this.state = Math.floor(Math.random() * 2));
  },
  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    if (this.state === 0) {
      return "heads";
    } else {
      return "tails";
    }
  },
  toHTML: function () {
    let image = document.createElement("img");
    //image.src = "./images/heads.jpg";
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

    if (this.state === 0) {
      image.src = "./images/heads.jpg";
    } else {
      image.src = "./images/tails.jpg";
    }

    return image;
  },
};
console.log(coin);
console.log(coin.toString());
//console.log(coin.toHTML());
document.body.append(coin.toHTML());

function display20Flips() {
  for (let i = 0; i < 20; i = i + 1) {
    coin.flip();
    let myString = coin.toString();
    document.body.append(myString);
  }
  /*uses a loop to flip the coin 20 times. 
  Each time the coin flips, 
  display the result of each flip as a string on the page 
  (make use of your toString() method) */
}
function display20Images() {
  for (let j = 0; j < 20; j = j + 1) {
    coin.flip();
    let myHTML = coin.toHTML();
    document.body.append(myHTML);
  }
  /* use a loop to flip the coin 20 times
  display the result of each flip as an HTML IMG 
  element on the page 
  (make use of your toHTML() method). */
}
display20Flips();
display20Images();
