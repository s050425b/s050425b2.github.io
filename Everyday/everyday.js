const apiKey="NqwUEpQuaEDUtWT9zK6faWT6UHQoth2BSXEVaeFq"
const link="https://api.nasa.gov/planetary/apod?api_key=";
let url=link+apiKey;

async function getData(){
    return Promise((resolve,reject)=>{
        fetch(url)
        .then(response=>{
            console.log(response);
            return response.json()
        })
        .then(jsonResponse=>{
            resolve(jsonResponse);
        })
    });
}

//console.log(getData());

fetch(url)
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log(data);
    document.getElementById("video-title").innerHTML=`<h2>${data.title}</h2> <p>Data from NASA API</p>`;
    if (data.media_type="image"){
        document.getElementById("video").innerHTML=`<img src="${data.url}" />`;
    } else {
        document.getElementById("video").innerHTML=`<iframe src="${data.url}" allowfullscreen=true ></iframe>`;
    }
    document.getElementById("video-discription").innerHTML=`<p>${data.explanation}</p>`;
});