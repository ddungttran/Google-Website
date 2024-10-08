
const searchInput = document.querySelector("#input-box"); // Look for the input box
const searchButton = document.querySelector('button[type="button"]'); // Look for the button 

searchInput.addEventListener("keydown", function(event) { //When hit enter this function will search
    if(event.code === "Enter") {
        search();
    }
});

searchButton.addEventListener("click", function() { // When you click Google Search it will search
    search();
});

function search() { // Search function 
    const input = searchInput.value;
    if(input.trim() !== "") {  // Trim make sure there is no white space and !== "" check if input is not empty
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(input); // Navigate brower, Encode properly
    }else{ // If empty alert pop up
        alert("Please input something to search");
    }
}
