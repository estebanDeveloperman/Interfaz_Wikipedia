let inputSearch = document.getElementById('inputSearch');
let box_search = document.getElementById('box-search');

// Creando filtrado de busqueda


document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno() {

    let filter = inputSearch.value.toUpperCase();
    let li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i=0; i < li.length; i++) {

        let a = li[i].getElementsByTagName("a")[0];
        let textValue = a.textContent || a.innerHTML;

        if(textValue.toUpperCase().indexOf(filter) > -1 ) {

            li[i].style.display = "";
            box_search.style.display = "block";

            if(inputSearch.value === "") {
                box_search.style.display = "none";
            }

        } else {
            li[i].style.display = "none";
        }

    }


}