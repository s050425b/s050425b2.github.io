const link="https://images-api.nasa.gov/search?q=";
const btn=document.getElementById("btn");
const search=document.getElementById("search");
const display= document.getElementById("display");

function getData(event){
    let url=link+search.value;
    fetch(url)
    .then(response=>response.json())
    .then(jsonResponse=>{
        display.innerHTML="";

        console.log(jsonResponse);
        for (let i=0; i<10 && i<jsonResponse.collection.items.length; i++){
            let container=document.createElement("div");
            container.id="container";

            let iconContainer=document.createElement("div");
            iconContainer.id="icon";

            iconContainer.innerHTML=`<img src="${jsonResponse.collection.items[i].links[0].href}" />`

            let newNode=document.createElement("div");
            newNode.id="searchDisplay";

            let title=document.createElement("h1");
            title.innerHTML=jsonResponse.collection.items[i].data[0].title;
            newNode.appendChild(title);

            let description=document.createElement("p");
            description.innerHTML=jsonResponse.collection.items[i].data[0].description;
            newNode.appendChild(description);

            container.appendChild(iconContainer);
            container.appendChild(newNode);

            display.appendChild(container);
        }
    });

}

btn.addEventListener("click",getData);