const searchInput = document.getElementById("search-box");
const resultContainer = document.getElementById("result-container");

searchInput.addEventListener("input", function () {
  const matchedResult = searchWiki(searchInput.value);

  // clear search result
  resultContainer.innerHTML = "";

  for (let i = 0; i < matchedResult.length; i++) {
    const divTag = document.createElement("div");
    const htmlContent = `<div class="line-result">
                           
                            <p> <img src = "${matchedResult[i].img}" style ="width :30px ; height:30px"/><a href="${
                              "https://en.wikipedia.org/wiki/" +
                              matchedResult[i].name
                            }"
                            target="_blank">${matchedResult[i].name}</a></p>
                            <p>${matchedResult[i].title}</p>
                        </div>`;

    divTag.innerHTML = htmlContent;

    resultContainer.appendChild(divTag);
  }
});

function searchWiki(keyWord) {
  if (!keyWord) return [];

  return Queries.filter((Query) =>
  Query.name.toLowerCase().startsWith(keyWord.toLowerCase())
  );
}
