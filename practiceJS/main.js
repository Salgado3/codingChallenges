//Make an array out of the Button ID's, those array elements should be used at the end of the url
let excuseCategory = [];
document;
document.querySelectorAll("button").forEach((item) =>
  item.addEventListener("click", (e) => {
    console.log(e);
    getFetch(e.target.id);
  })
);

//Want to use the elements inside the URL
function getFetch(e) {
  fetch(`https://excuser.herokuapp.com/v1/excuse/${e}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".response").innerText = data[0].excuse;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
