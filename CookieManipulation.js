
function load() {
    var keks = document.cookie.split(";")/*.filter(function(item) {
        return item.trim().indexOf('=') == 0;}*/
    var val = 0;
    var j = 0;
    for (var i = 0; i < autoamount.length; i++){
        j = keks[i].slice(keks[i].indexOf('=')-1, keks[i].indexOf('='));
        val = keks[i].slice(keks[i].indexOf('=')+1);
        autoamount[j] = val;
        autoprice[j] = Math.pow(1.1, autoamount[j]) * autoprice[j]
        document.getElementById(("autoprice" + j)).textContent = "Price: "+Math.floor(autoprice [j]);
        document.getElementById(("autoproduction" + j)).textContent = "Production: " + Math.floor(autoamount [j] * autopower[j] * 10) + " clicks per second";
        document.getElementById(("autobutton" + j)).textContent = autoamount [j];
    }
    value = parseInt([(keks.length)-1]);
   // document.write(value);
}
function save() {
    var cookievalue
    for (var i = 0; i < autoamount.length; i++){
        cookievalue = "auto" + i + "=" + autoamount[i] + "; expires=Thu, 18 Dec 2020 12:00:00 UTC";
        window.alert(cookievalue);
        document.cookie = cookievalue;
    }
    cookievalue = "v=" + Math.floor(value) + "; expires=Thu, 18 Dec 2020 12:00:00 UTC";
    document.cookie = cookievalue;

}
