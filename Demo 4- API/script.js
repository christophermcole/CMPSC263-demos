function main() {
  const noAuthContainer = document.getElementById("no-auth");
  noAuthContainer.querySelector("#get").addEventListener("click", () => getNoAuthData(noAuthContainer));

  const authContainer = document.getElementById("auth");
  authContainer.querySelector("#get").addEventListener("click", () => getAuthData(authContainer));
}

function getNoAuthData(noAuthContainer) {
  const month = noAuthContainer.querySelector("#month").value;
  const day = noAuthContainer.querySelector("#day").value;

  fetch(`https://api.jonzav.me/v1/national-days/?month=${month}&day=${day}`)
  .then(response => response.json())
  .then(data => {
    const result = noAuthContainer.querySelector("#results");
    result.innerHTML = JSON.stringify(data, null, 2);
  });
}

function getAuthData(authContainer){
  fetch('https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '30e0bcbf9cmshf23693360ae1833p169065jsn8045ea9b141b',
      'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
    }
  })
  .then(response => response.json())
  .then(data => {
    const result = authContainer.querySelector("#results");
    result.innerHTML = JSON.stringify(data, null, 2);
  });
}