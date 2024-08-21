//INput del usuario, entrada de la skill que quiere añadir y botón para añadirla
const enterSkill = document.getElementById("enterSkill");
const addSkill = document.getElementById("addSkill");


addSkill.addEventListener("click", () => {
    
    if(enterSkill.value.trim() != "") { 
        //atrapar el elemento html de la lista de skills por su id 
        const listaSkills = document.getElementById("listaSkills");

        //Crear un elemento de lista
        let skill = document.createElement("li");

        //Guardar el contenido del input del usuario en el elemento de la lista de skills
        skill.textContent = enterSkill.value;

        //Añadir el elemento a la lista de skills
        listaSkills.appendChild(skill);

        
    } else {
        alert("input vacío")
        
    }
    //Reiniciar input
    enterSkill.value = "";

}   );


//INput del usuario, entrada de la educación que quiere añadir y botón para añadirla
const enterEducation = document.getElementById("enterEducation");
const addEducation = document.getElementById("addEducation");

addEducation.addEventListener("click", () => {
    if(enterEducation.value.trim() != "") {
        //atrapar el elemento html de la lista de skills por su id 
        const listaEducation = document.getElementById("listaEducation");

        //Crear un elemento html para la lista de historial de educación
        let education = document.createElement("li");

        //Guardar el contenido del input del usuario en el elemento de la lista de historial de educación
        education.textContent = enterEducation.value;

        //Añadir el elemento a la lista del historial de educación
        listaEducation.appendChild(education);
    } else {
        alert("input vacío")
    }
    //Reiniciar input
    enterEducation.value = "";

} );
