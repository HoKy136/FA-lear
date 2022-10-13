const searchInput = document.getElementById("search-box");
const resultContainer = document.getElementById("result-container");

searchInput.addEventListener("input", async () => {
  const matchedResult = await searchWiki(searchInput.value);
  
  // clear search result
  resultContainer.innerHTML = "";

  async function getData(url, fn){
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
      if(xhr.readyState == XMLHttpRequest.DONE){
        if(xhr.status === 200){
          fn(undefined, JSON.parse(xhr.responseText));
        }else{
          fn(new Error(xhr.statusText), undefined);
        }
      }
    };
    let getXhr =  await xhr.open('Get' , `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageprops%7Cpageimages&format=json&titles=${keyWord}`)
  }
 
  

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
