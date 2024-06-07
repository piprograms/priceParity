const results = document.getElementById('results');
const citiesURL = "http://localhost:3000/cities";
const pricesURL = "http://localhost:3000/prices";
const dummyDataURL = 'https://dummyjson.com/recipes'

// Call `fetch()`, passing in the URL.
fetch(dummyDataURL)
  // fetch() returns a promise. When we have received a response from the server,
  // the promise's `then()` handler is called with the response.
  .then((response) => {
    // Our handler throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // Otherwise (if the response succeeded), our handler fetches the response
    // as text by calling response.text(), and immediately returns the promise
    // returned by `response.text()`.
    return response.json();
  })
  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we console.log the text
  .then((data) => {
    let recipesData = data.recipes
    // function generateRecipes(arr) {
    //   let items = "";
    //   for(let i = 0; i < arr.length; i++) {
    //     items += `<li>${arr[i].name}</li>`;
    //   }
    //   return items;
    // }

    // results.innerHTML = `<ul>${generateRecipes(recipesData)}</ul>`;
    function generateRecipes(arr) {
      let items = "";
      for(let i = 0; i < arr.length; i++) {
        items += `<option value=${arr[i].name}>${arr[i].name}</option>`;
      }
      return items;
    }

    results.innerHTML = `<select>${generateRecipes(recipesData)}</select>`;
  })
  // Catch any errors that might happen, and display a message
  // in the console
  .catch((error) => {
    console.warn(`Could not fetch cities: ${error}`);
  });


// // Call `fetch()`, passing in the URL.
// fetch(citiesURL)
//   // fetch() returns a promise. When we have received a response from the server,
//   // the promise's `then()` handler is called with the response.
//   .then((response) => {
//     // Our handler throws an error if the request did not succeed.
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     // Otherwise (if the response succeeded), our handler fetches the response
//     // as text by calling response.text(), and immediately returns the promise
//     // returned by `response.text()`.
//     return response.json();
//   })
//   // When response.text() has succeeded, the `then()` handler is called with
//   // the text, and we console.log the text
//   .then((data) => {
//     console.log(data);
//     let citiesData = data.cities[0];
//     console.log(citiesData);
//     results.innerText = citiesData;
//   })
//   // Catch any errors that might happen, and display a message
//   // in the console
//   .catch((error) => {
//     console.warn(`Could not fetch cities: ${error}`);
//   });

// // Call `fetch()`, passing in the prices URL.
// fetch(pricesURL)
//   // fetch() returns a promise. When we have received a response from the server,
//   // the promise's `then()` handler is called with the response.
//   .then((response) => {
//     // Our handler throws an error if the request did not succeed.
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     // Otherwise (if the response succeeded), our handler fetches the response
//     // as text by calling response.text(), and immediately returns the promise
//     // returned by `response.text()`.
//     return response.text();
//   })
//   // When response.text() has succeeded, the `then()` handler is called with
//   // the text, and we console.log the text
//   .then((text) => {
//     console.log(text);
//   })
//   // Catch any errors that might happen, and display a message
//   // in the console
//   .catch((error) => {
//     console.warn(`Could not fetch prices: ${error}`);
//   });
