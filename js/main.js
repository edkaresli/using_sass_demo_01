
var theUL = document.getElementById("theul");
theUL.className = "hideMenu";

function changeStyle(element)
{
    setTimeout(function()
    {
        let currentStyle = element.className; 
        if(currentStyle === "hidden")
        {        
            element.className = "shown";
        }
        else 
        {        
            element.className = "hidden";
        }
    }, 300);       
}

function processEvent()
{        
    var theUL = document.getElementById("theul");    

    if(this.checked)
    {                  
        theUL.className = "showMenu"; 
    }
    else
    {            
        theUL.className = "hideMenu";
    }              
}

window.onload = function()
{
    var currentDiv = document.getElementById("div_individ"); 
    if( currentDiv )
    {
        currentDiv.addEventListener("click", function()
        {
            var p = this.getElementsByTagName("p");
            changeStyle(p[0]);  
        }); 
    }
        
    var anotherDiv = document.getElementById("div_smallbusiness"); 
    if( anotherDiv )
    {
        anotherDiv.addEventListener("click", function()
        {
            var p = this.getElementsByTagName("p");
            changeStyle(p[0]);
        });
    }
    

    var nextDiv = document.getElementById("div_corp"); 
    if( nextDiv )
    {
        nextDiv.addEventListener("click", function()
        {
            var p = this.getElementsByTagName("p");
            changeStyle(p[0]);        
        });
    }
    
    // var theUL = document.getElementById("theul");
    // theUL.className = "hideMenu";
    
    var checkbox = document.getElementById("menu");
    checkbox.checked = false;
    checkbox.addEventListener("change", processEvent, false);    
};

// window.onresize = function()
// {
//     var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//     var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
//     var theUL = document.getElementById("theul"); 

//     if( w > 724 )
//     {
//         theUL.className = "";
//         return;
//     }    
// };