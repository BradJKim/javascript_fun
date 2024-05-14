const submitButton = document.querySelector('.submit_button');
const text = document.querySelector('#first_name');

console.log(text)
console.log(submitButton)

submitButton.addEventListener('click', (event) => {
    console.log(`Hello ${text.value}`)
});