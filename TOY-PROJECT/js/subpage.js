const root = document.getElementById("root");
const main = document.getElementById("main");

const menuContainer = document.querySelector('#root > header > ul'); 



for(let i = 0; i < main.children.length; i++) {
  main.children[i].style.visibility = "hidden";
}


menuContainer.addEventListener('click', function (event) {
  let getHashValue = event.target.dataset.hash;
  
  console.log(getHashValue);
  for(let i = 0; i < main.children.length; i++) {
    if(getHashValue === main.children[i].dataset.hash) {
      main.children[i].style.visibility = "visible";
    } else {
      main.children[i].style.visibility = "hidden";
    }
  }
});