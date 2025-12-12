
const quote = document.querySelector('.your-quote');
const quoteIn = document.querySelector('#quotetext');

const desc = document.querySelector('.quote-exp');
const descIn = document.querySelector('#quotedesc');

quote.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        quoteIn.textContent = quote.value;
    }
});

desc.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        descIn.textContent = desc.value;
    }
});
