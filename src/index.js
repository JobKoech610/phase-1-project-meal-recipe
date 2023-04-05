
document.addEventListener("DOMContentLoaded", function() {
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => {
// console.log(data.meals[0])

let meal = data.meals[0];
//select nodes


let name = document.querySelector('#strMeal')
let category = document.querySelector('#strCategory')
let location = document.querySelector('#strArea')
// let instructions= document.querySelector('#strInstructions')// recipe button
let mealThumb = document.querySelector('#strMealThumb')

let tags = document.querySelector('#strTags')
let youtube = document.querySelector('#strYoutube')
let ingredient1 = document.querySelector('#strIngredient1')//ingredient button
let ingredient2 = document.querySelector('#strIngredient2')
let ingredient3 = document.querySelector('#strIngredient3')
let ingredient4 = document.querySelector('#strIngredient4')
let ingredient5 = document.querySelector('#strIngredient5')
let ingredient6 = document.querySelector('#strIngredient6')
console.log(ingredient6);
let measure1 = document.querySelector('#strMeasure1')//measure button
let measure2 = document.querySelector('#strMeasure2')
let measure3 = document.querySelector('#strMeasure3')
let measure4 = document.querySelector('#strMeasure4')
let measure5 = document.querySelector('#strMeasure5')
let measure6 = document.querySelector('#strMeasure6')
let source = document.querySelector('#strSource')

let btn = document.createElement('button')
btn.textContent='recipe';
btn.addEventListener('click', ()=>{
  let instructions= document.querySelector('#strInstructions')// recipe button
  instructions.textContent = meal.strInstructions
})
document.getElementById('random').appendChild(btn)

//inserting data
name.textContent = meal.strMeal
category.textContent = meal.strCategory
location.textContent = meal.strArea
// instructions.textContent = meal.strInstructions
mealThumb .src = meal.strMealThumb
tags.textContent = meal.strTags
// .textContent = meal.strMeal
 youtube.href = meal.strYoutube
ingredient1.textContent = meal.strIngredient1
ingredient2.textContent = meal.strIngredient2
ingredient3.textContent = meal.strIngredient3
ingredient4.textContent = meal.strIngredient4
ingredient5.textContent = meal.strIngredient5
ingredient6.textContent = meal.strIngredient6

 measure1.textContent = meal.strMeasure1
 measure2.textContent = meal.strMeasure2
 measure3.textContent = meal.strMeasure3
 measure4.textContent = meal.strMeasure4
 measure5.textContent = meal.strMeasure5
 measure6.textContent = meal.strMeasure6
 source.href = meal.strSource

  })

  const form = document.querySelector("#form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
  const searchArea = document.querySelector('#search').value
  const input = searchArea .split(' ').join('');
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
  .then(resp => resp.json())
  .then(searchMeal => {
    console.log(searchMeal.meals[0])
    let search = searchMeal.meals[0]

      // Check If Searched Meal Is Found Or Not
      // if(search){
      //   search.forEach(element => {
      //     createMealInfoDiv(element, input);
      //     });
      // }
      // else{
          
      //     document.body.innerHTML = `<p>No meal found for ${input}!</p>`;
      // }
  

let name = document.querySelector('#strMeal')
let category = document.querySelector('#strCategory')
let location = document.querySelector('#strArea')
let mealThumb = document.querySelector('#strMealThumb')
let instructions= document.querySelector('#strInstructions')// recipe button
// mealThumb.addEventListener('click', ()=>{
//   let instructions= document.querySelector('#strInstructions')// recipe button
//   instructions.textContent = search.strInstructions
// })
let tags = document.querySelector('#strTags')
let youtube = document.querySelector('#strYoutube')
let ingredient1 = document.querySelector('#strIngredient1')//ingredient button
let ingredient2 = document.querySelector('#strIngredient2')
let ingredient3 = document.querySelector('#strIngredient3')
let ingredient4 = document.querySelector('#strIngredient4')
let ingredient5 = document.querySelector('#strIngredient5')
let ingredient6 = document.querySelector('#strIngredient6')
let measure1 = document.querySelector('#strMeasure1')//measure button
let measure2 = document.querySelector('#strMeasure2')
let measure3 = document.querySelector('#strMeasure3')
let measure4 = document.querySelector('#strMeasure4')
let measure5 = document.querySelector('#strMeasure5')
let measure6 = document.querySelector('#strMeasure6')
let source = document.querySelector('#strSource')


//inserting data
name.textContent = search.strMeal
category.textContent = search.strCategory
location.textContent = search.strArea
mealThumb .src = search.strMealThumb
instructions.textContent = search.strInstructions
tags.textContent = search.strTags
// .textContent = meal.strMeal
 youtube.href = search.strYoutube
ingredient1.textContent = search.strIngredient1
ingredient2.textContent = search.strIngredient2
ingredient3.textContent = search.strIngredient3
ingredient4.textContent = search.strIngredient4
ingredient5.textContent = search.strIngredient5
ingredient6.textContent = search.strIngredient6
 measure1.textContent = search.strMeasure1
 measure2.textContent = search.strMeasure2
 measure3.textContent = search.strMeasure3
 measure4.textContent = search.strMeasure4
 measure5.textContent = search.strMeasure5
 measure6.textContent = search.strMeasure6
 source.href = search.strSource



  })
})
});



