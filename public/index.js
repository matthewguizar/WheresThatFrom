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


// const movieQuote = require('popular-movie-quotes');



const handleAnswer = (event) => {
    event.preventDefault
    let answerValue = qotdInput.value 
    qotdInput.value = ''
    displaySection.innerHTML = ''
    const displayDiv = document.createElement('div')
    
    axios.post(`${baseURL}/api/quote/answer`)
    .then(res =>{
        if (answerValue === res.data.movie){
            displaySection.appendChild(displayDiv)
            console.log(`${answerValue} is CORRECT FOO`)
            // window.alert(`${answerValue} is CORRECT FOO`)
           displayDiv.innerHTML = `${answerValue} is the right answer`
            
        } else{
            displaySection.appendChild(displayDiv)
            console.log(`NO, ITS FROM ${res.data.movie}`)
            // window.alert(`${answerValue} is NOT CORRECT FOO`)
            displayDiv.innerHTML = `${answerValue} is not the right answer, feel free to keep trying`
            
        }
        
    })
    
    
}  

const movieSearch = async (e) => {
    e.preventDefault()
    let searchVal = search.value
    if (searchVal.value = ''){
        window.alert('well you gotta atleast try')
    }
   else  
    axios.get(`${baseURL}/api/search?search=${searchVal}`)
    .then(res =>{

        const title = (res.data.movie)
        const quote = (res.data.quote)
      console.log(res.data)
        
        elemP.innerHTML = `<h3>${title}</h3>
        <h3>Quote 1:</h3> 
        <span>${quote}</span>`
        
    })
    
}

document.addEventListener('DOMContentLoaded', function() {
    axios.get(`${baseURL}/api/quote`)
    .then(res => {
        // console.log(res.data)
        elemP.innerHTML = `<h3>Can you guess this Quote?</h3>
        <span>${res.data.quote}</span>`
    
    })
    
    
});

randomBtn.addEventListener('click', function(event) {
    event.preventDefault()
    qotdInput.innerHTML = ''
    sectionInput.innerHTML = ''
    displaySection.innerHTML = ''
    axios.get(`${baseURL}/api/random-quotes`)
    .then(res => {
        const line = (res.data[0].movie)
        const line2 = (res.data[0].quote)
        elemP.innerHTML = `<h3 class="random">Quote:</h3>
        <span>${line2}</span>
        <h3>Title</h3>
        <span>${line}</span>`
        
        
    })
    
  });

qotdBtn.addEventListener('click', handleAnswer)
myForm.addEventListener('submit', movieSearch)

