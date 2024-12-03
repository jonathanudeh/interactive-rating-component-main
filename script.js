const form = document.querySelector("form");
const thankYouPage = document.querySelector(".thank-you-page");
const starImage = document.querySelector('.star-image');
const ratingOptions = document.querySelector(".rating-options");
const rating = ratingOptions.querySelectorAll(".rating");
const ratingNumber = document.getElementById("rating-number");
const submitBtn = document.getElementById("submit");

let ratingVal;

setTimeout(() => {
    starImage.style.transform = 'rotate(1080deg)';
}, 100);

const handleRating = (e) => {
    ratingVal = e.target.value;
}

const handleSubmission = (e) => {
    e.preventDefault();
    if (ratingVal) {
        form.classList.add("disabled");
        thankYouPage.classList.remove("disabled");
        ratingNumber.textContent = ratingVal;
    }
}

rating.forEach(button => {
    button.addEventListener("click", handleRating);
})

submitBtn.addEventListener("click", handleSubmission);