const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const submitBtn = document.querySelector('.submit-btn');
const options = document.querySelectorAll('.options li');
let userRated = document.getElementById('user-rated');
let selectedOption = null;

submitBtn.addEventListener('click', () => {
  ratingCard.style.display = 'none';
  thankYouCard.style.display = 'block';
})

options.forEach(option => {
  option.addEventListener('click', () => {

    // reseting the options
    options.forEach(opt => {
      opt.style.backgroundColor = '';
      opt.style.color = '';
    })

      option.style.backgroundColor = 'hsl(216, 12%, 54%)';
      option.style.color = 'hsl(0, 0%, 100%)';
        
      userRated.innerHTML = option.innerText;
  })
})