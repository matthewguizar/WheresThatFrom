WHERES THAT FROM web app

it's a place for movie quotes. quote of the day is picked by movie title, and random quote shows a title and quote. search function allows user
to look up quotes based on title.

Javascript, HTML, CSS, Node.js, axios, express, and popular-movie-quotes were all used to create this

1. The quote of the day feature is started when page is loaded and user is only given the quote and theyre answer must match the title of quote
in order for the correct message to appear and if it doesn't another message saying they are wrong but can keep trying will appear.
This was the first step I took and probably the simplest, but figuring out how to make the quote not be random was difficult. What I ended up doing
was setting the function to search up a movie by title and just print the first quote. So I can simply make it a daily quote by changing the title daily.


2. The random quote feature just gets a random quote and prints it on the page allowing the user to see where it's from so they aren't guessing
 printing both the title and the quote was more challenging than getting the random quote to appear. at first I just had the quote but decided having the 
 title was important. So I messed around with the information being passed from backend to frontend to get what I wanted. I needed to use dot notation on the 
 frontend and save them to variables to print what I wanted

3. The search option is how a user can check if a movie they know has a quote there. it shows what the user searched just to double check the user is getting back
what they searched

Getting the information for the search function was a task, but I just destructured the variable that the input was saved to on the backend so it could
input the string into the search movie function

__________________________________________________INSTRUCTIONS TO REPRODUCE THIS WEB APP___________________________________________________

Fork git repository 
download zipfolder 
run npm i (to get all necessary dependencies)
run nodemon