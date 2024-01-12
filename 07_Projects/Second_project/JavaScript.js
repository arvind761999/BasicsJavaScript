const form = document.querySelector('form');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)

  const weight = (document.querySelector('#weight').value)

  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please Provide a valid height ${height}`;
  }

  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Provide the valid weight ${weight}`;
  }

  else{
    const bmi = (weight /((height*height)/10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }

  if(results < 18.6){
     results.innerHTML = `Under Weight`;
     
  }
  if(results > 18.6 && results < 24.9){
    results.innerHTML = `Normal Range`;
 }
else{
     results.innerHTML = `Overweight`;
}
  

});