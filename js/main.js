function ekle() {
    let görev = document.getElementById("txt");
    if (görev.value != "") {
        let li = document.createElement("li");
        let imgFalse = document.createElement("img");
        let imgTrue = document.createElement("img");

        li.innerHTML = görev.value;
        li.setAttribute("class", "list-group-item text-break");
        document.getElementById("yapilacaklar").appendChild(li);

        imgFalse.setAttribute("src", "img/cross.png");
        imgFalse.setAttribute("onclick", "sil()");
        li.appendChild(imgFalse);

        imgTrue.setAttribute("src", "img/accept.png");
        imgTrue.setAttribute("onclick", "yapildi()");
        li.appendChild(imgTrue);

        görev.value = "";
    }
}

function yapildi() {
    let görev = event.currentTarget.parentNode;
    let li = document.createElement("li");
    li.innerHTML = görev.innerHTML;
    li.setAttribute("class", "list-group-item text-break");
    li.childNodes[2].style.display = "none";
    document.getElementById("yapildi").appendChild(li);
    görev.remove();
}

function sil() {
    let görev = event.currentTarget.parentNode;
    görev.remove();
}