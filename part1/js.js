let baseURL = "http://numbersapi.com";
let favNum = 14;

// via jQuery
$.getJSON(`${baseURL}/${favNum}?json`).then((response) => {
  console.log(response);
});

// via axios
axios.get(`${baseURL}/${favNum}?json`).then((response) => {
  console.log(response.data);
});

// multiple number in single request via axios
let favNums = [14, 21, 7];
axios.get(`${baseURL}/${favNums}?json`).then((response) => {
  console.log(response.data);
});

// promise for all
let favNumFacts = [];

for (let i = 1; i < 5; i++) {
  favNumFacts.push(axios.get(`${baseURL}/${favNum}?json`));
}

// console.log(favNumFacts);

Promise.all(favNumFacts)
  .then((facts) =>
    facts.forEach((response) => {
      //   console.log(response.data);
      $("body").append(`<p>${response.data.text}</p>`);
    })
  )
  .catch((err) => {
    console.error(err);
  });