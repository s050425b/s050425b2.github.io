const apiKey="NqwUEpQuaEDUtWT9zK6faWT6UHQoth2BSXEVaeFq"
//const link="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=";
const link="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=";
const url=link+apiKey;

const container=document.getElementById("display");

fetch(url)
.then(response=>response.json())
.then(jsonResponse=>{
    const data=jsonResponse.photos;
    console.log(data);
    let div=document.createElement("div");
    div.className="photos";
    container.appendChild(div);
    for (i=0; i<data.length; i++){
        let div2=document.createElement("div");
        div2.className="photo"
        div2.innerHTML=`<img src="${data[i].img_src}" />`;
        div.appendChild(div2);
    }
});




 /*
class page{
    constructor(){
        this._page=4
    }

    nextPage(){
            console.log("hello");
            fetch(url)
            .then(response=>response.json())
            .then(jsonResponse=>{
                const data=jsonResponse.photos;
                console.log(data);
                let div=document.createElement("div");
                container.innerHTML="";
                div.className="photos";
                document.getElementById("display").appendChild(div);
                for (i=this._page; i<(this._page+4); i++){
                    let div2=document.createElement("div");
                    div2.className="photo";
                    div2.innerHTML=`<img src="${data[i].img_src}" />`;
                    div.appendChild(div2);
                }
                this._page=+4;
            });
    }
}

const  x=new page();
document.getElementById("page").onclick=(event)=>{
    x.nextPage();
};
*/