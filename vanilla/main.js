const API_URL =
  "https://api.unsplash.com/search/photos?page=1&client_id={you_key}";

const form = document.querySelector("form");
const searchInput = document.querySelector("input");
const loadingImage = document.querySelector("#loadingImage");
const images = document.querySelector(".images");

loadingImage.style.display = "none";

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  const searchTerm = searchInput.value;
  search(searchTerm).then(displayImages);
}

function search(term) {
  const url = `${API_URL}&query=${term}`;
  loadingImage.style.display = "";
  return fetch(url)
    .then(response => response.json())
    .then(results => {
      return results;
    });
}

function displayImages({ results }) {
  for (let index in results) {
    const imageElement = document.createElement("img");
    imageElement.src = results[index].urls.regular;
    images.appendChild(imageElement);
  }
  loadingImage.style.display = "none";
}
