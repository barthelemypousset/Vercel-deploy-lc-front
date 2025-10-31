yearDiv = document.querySelector("#year");
fetch("https://vercel-deploy-lc.vercel.app/year")
  .then((response) => response.json())
  .then((data) => {
    yearDiv.textContent += data.year;
  });
