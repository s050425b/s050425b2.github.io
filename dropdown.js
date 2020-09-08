/*
const dropdown1=document.getElementById("dropdown-1");
const dropdown2=document.getElementById("dropdown-2");

function handleEvent(event){
    console.log("hello");
    document.getElementById("dropdownList-1").style.display="block";
}

function handleEventMouseOut(event){
    document.getElementById("dropdownList-1").style.display="none";
}

dropdown1.addEventListener("mouseover",handleEvent);
dropdown1.addEventListener("mouseout",handleEventMouseOut);
dropdown2.addEventListener("mouseover",handleEvent);
dropdown2.addEventListener("mouseout",handleEventMouseOut);
*/
/*
class DropdownClass{
    constructor(number){
        this._number=number;
        this._node=document.getElementById(`dropdown-${number}`);
        this.handleEvent=this.handleEvent.bind(this);
        this.handleEventMouseOut=this.handleEventMouseOut.bind(this);
    }

    handleEvent(event){
        document.getElementById(`dropdownList-${this._number}`).style.display="block";
    }
    
    handleEventMouseOut(event){
        document.getElementById(`dropdownList-${this._number}`).style.display="none";
    }
}

const dropdown1=new DropdownClass(1);
dropdown1._node.addEventListener("mouseover",dropdown1.handleEvent);
dropdown1._node.addEventListener("mouseout",dropdown1.handleEventMouseOut);

const dropdown2=new DropdownClass(2);
dropdown2._node.addEventListener("mouseover",dropdown2.handleEvent);
dropdown2._node.addEventListener("mouseout",dropdown2.handleEventMouseOut);
*/

$(".dropdown").on('mouseenter', event => {
    $(event.currentTarget).find(".dropdownList").slideDown();
})
.on('mouseleave',event=>{
    $(event.currentTarget).find(".dropdownList").slideUp();
});

