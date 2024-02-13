//const API_KEY = //"API KEY"

// async function getCompletion(prompt) {
//   const response = await fetch(`https://api.openai.com/v1/completions`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "text-davinci-003",
//       // prompt: "give a random example of programming language",
//       prompt: prompt,
//       max_tokens: 20,
//     }),
//   });

//   const data = await response.json();
//   // console.log(data)
//   return data;
// }

// // getCompletion()

// const prompt = document.querySelector("#prompt");
// const button = document.querySelector("#generate");
// const output = document.querySelector("#output");

// button.addEventListener("click", async () => {
//   console.log(prompt.value);

//   if (!prompt.value) window.alert("Please enter a prompt");

//   const response = await getCompletion(prompt.value);
//   console.log(response);
//   output.innerHTML = response.choices[0].text;
// });

// Vas a funcionar como un calificador de ensayos, vas a tener en cuenta lo siguiente:
// 1. Si vez que el promt que te asignan no tiene estructura de un ensayo no debes arrojar ningún resultado solo pide que te den una información correcta
// 2. Vas a calificar con una puntuación de 0 – 5 los ensayos, se algo Rigido con la evaluación y asignación de nota
// 3. Vas a dar puntos de mejoras muy precisos y cortos


// const API_KEY = "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";
// const PREMISE = "Califica este ensayo con una puntuación de 1.0 a 5.0 y proporciona retroalimentación detallada sobre cómo mejorarlo.";


// async function getCompletion(prompt) {
//   const response = await fetch(`https://api.openai.com/v1/completions`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "text-davinci-003",
//       prompt: `${prompt} ${PREMISE}`,
//       max_tokens: 1500,
//     }),
//   });
//   const data = await response.json();
//   return data;
// }

// const prompt = document.querySelector("#prompt");
// const button = document.querySelector("#generate");
// const output = document.querySelector("#output");

// button.addEventListener("click", async () => {
//   if (!prompt.value) window.alert("Please enter a prompt");
//   const response = await getCompletion(prompt.value);
//   output.innerHTML = response.choices[0].text;
// });

const API_KEY = "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";
const PREMISE = "Si el ensayo es menor a 100 palabras envía un mensaje de error. Califica este ensayo con una puntuación de 1.0 a 5.0 y proporciona retroalimentación detallada sobre cómo mejorarlo. ";

async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `${prompt} ${PREMISE}`,
      max_tokens: 1500,
    }),
  });
  const data = await response.json();
  return data;
}

function enviarFormulario() {
  // Mostrar mensaje de carga
  var output = document.getElementById("output");
  output.value = "Cargando...";

  // Realizar la llamada a la API
  getCompletion(prompt.value)
    .then(function(response) {
      // Obtener la respuesta de la API
      var respuesta = response.choices[0].text;

      // Mostrar la respuesta en el textarea
      output.value = respuesta;
    })
}

const prompt = document.querySelector("#prompt");
const button = document.querySelector("#generate");
const output = document.querySelector("#output");
button.addEventListener("click", enviarFormulario);
