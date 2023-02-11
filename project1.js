//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes =[{
    quote:"The most important thing is to enjoy your life - to be happy - it's all that matters.",
person : 'Steve Jobs'},
{
    quote:"Don't let anyone tell you what you can't do. Follow your dreams and persist.",
    person: 'Barack Obama'
},
{
    quote:"Life is what we make it and how we make it – whether we realize it or not.",
    person : 'Napoleon Hill'
},
{
    quote : "In order to be truly happy, you must pursue your dreams and goals.",
    person :'Oprah Winfrey'
},
{
    quote: "If you want to make your dreams come true, the first thing you have to do is wake up." ,
    person : 'J.M. Power'
},
{
    quote: "The only limit to our realization of tomorrow will be our doubts of today." ,
    person : 'Franklin D. Roosevelt'
},
{
    quote: "We may encounter many defeats but we must not be defeated.",
    person : 'Maya Angelou'
},
{
    quote: "Be persistent and never give up hope.",
    person: 'George Lucas'
},
{
    quote: "The only way to do great work is to love what you do.",
    person:'Steve Jobs'
},
{
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    person: 'Albert Einstein'
},
{
    quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    person: 'Jimmy Dean'
},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person
})