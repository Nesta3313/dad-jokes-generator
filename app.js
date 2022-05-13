const newQuoteButton = document.querySelector("#js-new-joke")
newQuoteButton.addEventListener('click', getJoke)
// https://icanhazdadjoke.com/ random joke endpoint
const endpoint = 'https://icanhazdadjoke.com/'
async function getJoke(){
    const response = await fetch(endpoint, {
        headers: {
            Accept: "application/json",
            
        }
    })
    const joke = await response.json()
    console.log(joke)
}