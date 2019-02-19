function afficher() {

    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var aff = document.getElementById("affiche");
    var num = a.value;
    var val = parseInt(a.value);
    if (num < 10) {
        aff.innerHTML = "";
        for (var i = 0; i <= b.value; i++) {
            for (var j = 0; j < i; j++) {
                num = j;
                aff.innerHTML += num + val + " ";
            }
            aff.innerHTML += "<br>";
        }
    } else {
        aff.innerHTML = "Erreur";
    }
}