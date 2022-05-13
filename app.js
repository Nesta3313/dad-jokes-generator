const newQuoteButton = document.querySelector("#js-new-joke")
newQuoteButton.addEventListener('click', getJoke)
const spinner = document.querySelector('#js-spinner')
const twitterButton = document.querySelector('#js-twitter-button')
// https://icanhazdadjoke.com/ random joke endpoint
const endpoint = 'https://icanhazdadjoke.com/'

async function getJoke(){
    spinner.classList.remove('hidden')
    newQuoteButton.disabled = true
    try {
        const response = await fetch(endpoint, {
            headers: {
                Accept: "application/json",
            }
        })
        if(!response.ok){
            throw Error (response.statusText)
        }
        const json = await response.json()
        displayJoke(json.joke)
        setTweetButton(json.joke)
    } catch (error) {
        console.log(error)
        alert('Failed to fetch new joke')
    } finally {
        newQuoteButton.disabled = false
        spinner.classList.add('hidden')


    }
}

function displayJoke(joke){
    const jokeText = document.querySelector('#js-joke-text')
    jokeText.textContent = joke
}

function setTweetButton(joke){
    twitterButton.setAttribute('href', `http://twitter.com/share?text=${joke}`)
}

getJoke()