var beginvalue = 0;
var beginclickpower = 1;
var beginautoamount = [0, 0, 0, 0, 0, 0, 0, 0];
var beginautopower = [0.1, 0.5, 2, 10, 50, 100, 1, 2];
var beginautoprice = [10, 100, 500, 10000, 72351, 111111, 1, 3];



var value = parseInt(beginvalue.toString());;
var clickpower = parseInt(beginclickpower.toString());
var autoamount = beginautoamount.slice(0);
var autopower = beginautopower.slice(0);
var autoprice = beginautoprice.slice(0);





function startup()
{
    populateAutos();
    load();
    setInterval(function(){timeevent()}, 100);

}



function restart(){

    clickpower = parseInt(beginclickpower.toString());
    autoamount = beginautoamount.slice(0);
    autopower = beginautopower.slice(0);
    autoprice = beginautoprice.slice(0);
    updatevalue();
    updateautos();


}


function updatevalue()
{
    document.getElementById("clickbutton").value = Math.floor( value );
}

function updateautos(){
    for (var id = 0; id < autoamount.length; id++) {
        document.getElementById(("autoprice" + id)).textContent = "Price: " + Math.floor(autoprice [id]);
        document.getElementById(("autoproduction" + id)).textContent = "Production: " + Math.floor(autoamount [id] * autopower[id] * 10) + " clicks per second";
        document.getElementById(("autobutton" + id)).textContent = autoamount [id];
    }

}

function clickevent()
{

    value = value + clickpower;
    updatevalue();
}

function timeevent()
{
    var addtovalue = 0;

    for (var i=0; i<autoamount.length; i++){
        addtovalue = addtovalue + autoamount[i] * autopower[i];
    }

    value = value + addtovalue;
    //autochecker();
    updatevalue();
}

function buyauto(id){
    if (value >= autoprice[id]){
        autoamount[id]++;
        value=value - Math.floor(autoprice[id]);
        autoprice[id] = autoprice[id] * 1.1;
        document.getElementById(("autoprice" + id)).textContent = "Price: "+Math.floor(autoprice [id]);
        document.getElementById(("autoproduction" + id)).textContent = "Production: " + Math.floor(autoamount [id] * autopower[id] * 10) + " clicks per second";
        document.getElementById(("autobutton" + id)).textContent = autoamount [id];
    }
}

function autochecker(){
    for (var i = 0; i < autoamount.length; i++) {
        if (value>=autoprice [i]){
            document.getElementById(("autobutton" + i)).disabled = false;
        } else {
            document.getElementById(("autobutton" + i)).disabled = true;
        }
    }
}


function upgradeauto(){


}
