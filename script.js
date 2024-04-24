const BASE_URL = "https://opentdb.com/api.php?amount=10&difficulty=easy";

const main = document.querySelector(".centered")

const button = document.querySelector("form")

button.addEventListener("submit", (e) => {

    getTriviaQuestion(e);
})

function getTriviaQuestion (e) {
    e.preventDefault();

    console.log("its happening");

    fetch(BASE_URL).then((response) => response.json()).then(( { results } ) => {
        results.map(result => {
            main.innerHTML += `<article class="card">
            <h2>${result.category}</h2>
            <p>${result.question}</p>
            <button onclick="showAnswer(event)">Show Answer</button>
            <p class="hidden">${result.correct_answer}</p>
          </article>`
        });
    })


    
}

function showAnswer (event) {

    event.target.nextElementSibling.classList.toggle("hidden");

}