const defaultImage = "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const onImageLoading = "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";

const endPointForAPI =
  "https://api.nasa.gov/planetary/apod?api_key=WTL4dpRGNzIQNEJdNa96WobiljLsuulfZQgmvXED";

const imageDisplay = document.querySelector("#image-display");
imageDisplay.src = defaultImage;
imageDisplay.alt = "default-image";

const loadAPIBtn = document.querySelector(".button-load");
loadAPIBtn.addEventListener('click', loadAPI);
const title = document.querySelector(".h2-title");
const date = document.querySelector('.date');
const paragraph = document.querySelector('.paragraph');
const pictureExplanation = document.querySelector('.pictureExplanation');

function loadAPI() {
  imageDisplay.src = onImageLoading;
  fetch(endPointForAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(JSON.stringify(json));
      loadAPIBtn.style.display = "none";
      title.textContent = json.title;
      title.style.textDecoration = "underline";
      date.textContent = `Date : ${json.date}`;
      pictureExplanation.textContent = "Picture Explanation"
      paragraph.textContent = json.explanation;
      imageDisplay.src = json.hdurl;
    }).catch(function (error) {
      console.log(error);
    });
}

