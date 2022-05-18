let body= document.querySelector('body')
let slider= document.getElementById('slider')
let money= document.getElementById('money')
let pageViews= document.getElementById('page-views')
let checkbox= document.querySelector('input[type=checkbox]')

function checking() {
  if (slider.value == 0) {
    if (checkbox.checked) {
      money.textContent= '$' + (8 - (25 * 8 / 100))
    }
    else {
     money.textContent= '$8'
    }
   pageViews.textContent= '10K PAGEVIEWS'
  } else if (slider.value == 25) {
   if (checkbox.checked) {
     money.textContent= '$' + (12 - (25 * 12 / 100))
   }
   else {
    money.textContent= '$12'
   }
   pageViews.textContent= '50K PAGEVIEWS'
  } else if (slider.value == 50) {
   if (checkbox.checked) {
     money.textContent= '$' + (16 - (25 * 16 / 100))
   }
   else {
    money.textContent= '$16'
   }
   pageViews.textContent= '100K PAGEVIEWS'
  } else if (slider.value == 75) {
   if (checkbox.checked) {
     money.textContent= '$' + (24 - 25 * 24 / 100)
   }
   else {
    money.textContent= '$24'
   }
   pageViews.textContent= '500K PAGEVIEWS'
  } else {
   if (checkbox.checked) {
     money.textContent= '$' + (36 - (25 * 36 / 100))
   }
   else {
    money.textContent= '$36'
   }
   pageViews.textContent= '1M PAGEVIEWS'
  }
 }


slider.addEventListener('change' , e => {
 checking()
 let value= (slider.value - slider.min)/(slider.max-slider.min)*100
 slider.style.background= 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) '
  + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
})

checkbox.addEventListener('change' , e => {
 checking()
})