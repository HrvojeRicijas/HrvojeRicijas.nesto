var value=0;
var clickpower=1;
var autoamount = [0, 0, 0, 0];
var autopower = [0.1, 0.5, 2, 10];
var autoprice = [10, 100, 500, 10000];



function startup()
{
    populateAutos();
    load();
    value=0;
    setInterval(function(){timeevent()}, 100);

}


function update()
{
    document.getElementById("clickbutton").value = Math.floor( value );
}

function clickevent()
{
    value = value + clickpower;
    update();
}

function timeevent()
{
    var addtovalue = 0;

    for (var i=0; i<autoamount.length; i++){
        addtovalue = addtovalue + autoamount[i] * autopower[i];
    }

    value = value + addtovalue;
    //autochecker();
    update();
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