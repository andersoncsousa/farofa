//Autor: Caique Sousa

//função em processo ainda...
$(document).ready(function() {
    $("#buttonAlert").hide();
    $("#modalButton").click(function() {
        $("#buttonAlert").show();
    });
});

// Validação do Form

(function() {
'use strict';
window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
    });
}, false);
})();

//recupera o arquivo buscado 
var file = document.getElementById("inputFile");
file.onchange = function(){
    if(file.files.length > 0){
        document.getElementById('filename').innerHTML = file.files[0].name;
    }
};