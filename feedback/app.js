const rating = document.querySelectorAll(".ratings");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `

  <p class="heart" >❤️</p>
  <strong> Thank you</strong>
  <br>
  <strong>Feedback:${selectedRating}
`;
})

function removeActive() {
  for (let i = 0; i < rating.length; i++) {
    rating[i].classList.remove("active");
  }
}