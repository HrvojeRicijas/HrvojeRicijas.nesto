/*
<div class="autobox">
                    <div class="buttonbox" >
                        <button type="button" id="autobutton0" onclick="buyauto(0)" class="buybutton">0</button>
                        <button type="button" id="upgradebutton0" onclick="upgradeauto(0)" class="upgradebutton">0</button>
                    </div>
                        <label id="autoprice0">Price: 10</label>
                        <label id="autoproduction0">Production: 0</label>
                </div>
*/

function createAuto(id){
    var autobutton = document.createElement('button')
    autobutton.type = "button";
    autobutton.onclick = function(){buyauto (id);};
    autobutton.id = "autobutton" + id;
    autobutton.innerHTML = "0";
    autobutton.className = "buybutton";

    var upgradebutton = document.createElement('button')
    upgradebutton.type = "button";
    upgradebutton.onclick = function(){upgradeauto (id);};
    upgradebutton.id = "upgradebutton" + id;
    upgradebutton.innerHTML = "0";
    upgradebutton.className = "upgradebutton";

    var buttondiv = document.createElement('div')
    buttondiv.id = "buttondiv" + id;
    buttondiv.className = "buttonbox";

    buttondiv.appendChild(autobutton);
    buttondiv.appendChild(upgradebutton);

    var pricelabel = document.createElement('label')
    pricelabel.id = "autoprice" + id;
    pricelabel.innerHTML = "Price: " + autoprice [id];

    var productionlabel = document.createElement('label')
    productionlabel.id = "autoproduction" + id;
    productionlabel.innerHTML = "Production: 0";

    var autodiv = document.createElement('div')
    autodiv.id = "autodiv" + id;
    autodiv.className = "autobox";

    autodiv.appendChild(buttondiv);
    autodiv.appendChild(pricelabel);
    autodiv.appendChild(productionlabel);

    document.getElementById("autos").appendChild(autodiv);
}

function populateAutos(){
    for (var i = 0; i<autoamount.length; i++){
        createAuto(i);
    }

}