console.log('connected')
const elemP = document.querySelector('.qotd-box')
const random = document.querySelector('.quote')
const randomBtn = document.querySelector('.random_quotebtn')
const qotdInput = document.querySelector('.qotd-answer')
const qotdBtn = document.querySelector('.qotd-btn')
const displaySection = document.querySelector('#displaysection')
const search = document.querySelector('.search')
const searchBtn = document.querySelector('.submit-btn')
const myForm = document.querySelector('#myForm')
const myForms = document.querySelector('#myForms')
const sectionInput = document.querySelector('#input')

 


const handleAnswer = (event) => {
    event.preventDefault
    let answerValue = qotdInput.value 
    qotdInput.value = ''
    displaySection.innerHTML = ''
    const displayDiv = document.createElement('div')
    
    axios.post(`/api/quote/answer`)
    .then(res =>{
        if (answerValue === res.data.movie){
            displaySection.appendChild(displayDiv)
            console.log(`${answerValue} is CORRECT FOO`)
           displayDiv.innerHTML = `${answerValue} is the right answer`
            
        } else{
            displaySection.appendChild(displayDiv)
            console.log(`NO, ITS FROM ${res.data.movie}`)
            displayDiv.innerHTML = `${answerValue} is not the right answer, feel free to keep trying`
            
        }
        
    })
    
    
}  

const movieSearch = async (e) => {
    e.preventDefault()
    qotdInput.innerHTML = ''
    sectionInput.innerHTML = ''
    displaySection.innerHTML = ''
    let searchVal = search.value
    
    axios.get(`/api/search?search=${searchVal}`)
    .then(res =>{
        
        const title = (res.data.movie)
        const quote = (res.data.quote)
        
        search.innerHTML = ''
        elemP.innerHTML = `<p class='search-title'> showing results from '${title}'</p>
        <h3 class='quote-1'>Quote 1:</h3> 
        <span class='search-quote'>${quote}</span>`
        
    })
    
}

document.addEventListener('DOMContentLoaded', function() {
    axios.get(`/api/quote`)
    .then(res => {
        elemP.innerHTML = `<h3 class='qotd-title'>Quote of the Day</h3><span class='quote-span'>${res.data.quote}</span>`
    
    })
    
    
});

randomBtn.addEventListener('click', function(event) {
    event.preventDefault()
    qotdInput.innerHTML = ''
    sectionInput.innerHTML = ''
    displaySection.innerHTML = ''
    axios.get(`/api/random-quotes`)
    .then(res => {
        const line = (res.data[0].movie)
        const line2 = (res.data[0].quote)
        elemP.innerHTML = `
        <div class="random">Quote:</div>
        <span class='random-text'>${line2}</span>
        <div class='random-title'>Title:</div><span>${line}</span>`
        
        
    })
    
  });

qotdBtn.addEventListener('click', handleAnswer)
myForm.addEventListener('submit', movieSearch)

