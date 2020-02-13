const API_URL = "https://api.unsplash.com/search/photos?page=1&client_id={your_key}&query="

console.log("hello world!!!");

const form = document.querySelector("form");
const searchInput = document.querySelector("input");

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  const searchTerm = searchInput.value;
  search(searchTerm);
}

function search(term) {
  const url = `${API_URL}${term}`;
  console.log(url)
  fetch(url).then(response => response.json()).then(results => console.log(results));
}