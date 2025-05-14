# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1
``` javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body')

buttons.forEach((button)=> {
    // console.log(button);
    button.addEventListener('click', (e)=> {
        console.log(e);
        console.log(e.target)
        if(e.target.id) {
            body.style.backgroundColor = e.target.id
        }
    })
})
```

## project 2
``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## project 3
``` javascript
const clock = document.getElementById('clock');

// clock.innerHTML = date.toLocaleTimeString();

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  //   console.log(date.toLocaleTimeString());
}, 1000);

```

## project 4
``` javascript

```