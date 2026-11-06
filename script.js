
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let clearButton = document.getElementById("clearButton");
let toolCards = document.querySelectorAll(".tool-card");
let noResults = document.getElementById("noResults");
let categoryButtons = document.querySelectorAll(".category-btn");

let selectedCategory = "all";

// SEARCH FUNCTION
searchButton.addEventListener("click", function() {

    let searchText = searchInput.value.toLowerCase();
    let found = 0;

    toolCards.forEach(function(card) {

        let toolInfo = card.innerText.toLowerCase();

        if (
            toolInfo.includes(searchText) &&
            (selectedCategory === "all" ||
            selectedCategory === card.dataset.category)
        ) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }

    });

    if (found === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});

// ENTER KEY FUNCTION
searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchButton.click();
    }

});

// CATEGORY FILTER FUNCTION
categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {
categoryButtons.forEach(function(btn) {
    btn.classList.remove("active");
});

button.classList.add("active");
        selectedCategory = button.dataset.category;

        searchButton.click();

    });

});
// CLEAR SEARCH FUNCTION
clearButton.addEventListener("click", function() {

    searchInput.value = "";

    selectedCategory = "all";

    categoryButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    document.querySelector('[data-category="all"]').classList.add("active");

    searchButton.click();

});