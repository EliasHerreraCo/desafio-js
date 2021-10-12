
// Crear post

// 1. Seleccionar el boton *
// 2. Crear el evento y comprobar que realice accion * 
// 3. Despligue de modal al darle click al boton *
// 4. Crear formulario y estructura de la modal
// 5. crear objeto vacio
// 6. llamar el value de cada propiedad del objeto


const obtenerPost = () => {
    let posts
    $.ajax({
        method: "GET",
        url: "https://devto-desafiojs-default-rtdb.firebaseio.com/post.json",
        success: response => { 
            // console.log('response al terminar la peticion',response)
            posts = response
        },
        error: error => {
            console.log(error)
        },
        async: false
    })
    // console.log(products)
    return posts
}

const createPost = (inputArray) => {
    $.ajax({
        method: "POST", 
        url: "https://devto-desafiojs-default-rtdb.firebaseio.com/post.json",
        data: JSON.stringify(inputArray),
        success: (response)=> {
            console.log("enviado")
        },
        error: error => {

        }
    })
}



const post1 = {
        coverImg:"https://res.cloudinary.com/practicaldev/image/fetch/s--wM5Z_Wpr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ffkow5o41tepbdl1tw2t.png",
        title: "Split Cards Effect",
        tags: ["Javascript"  , "Begineers", "webdev", "productivity"],
        imageArticle: "https://res.cloudinary.com/practicaldev/image/fetch/s--wM5Z_Wpr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ffkow5o41tepbdl1tw2t.png", 
        contenido: "so in this post i wont write much but will link a video where i have shown and explained every step :) and made it easier so you can understand "
    }
    



// $("#create-modal").click(()=> {
//     console.log("Click desde Jquery")
// })

const inputsForm = () => {
    let inputPost = {}
    $('#exampleModal .input-form').each(function(index) {
    
        let name = $(this).attr("name")
        let value= $(this).val()
        
        inputPost = {...inputPost,[name]:value}
        
    })
    return inputPost
    
}

// Boton agregar post formulario <aún no funciona>

$(".modal-footer #btn-add").click(()=>{
    console.log("Hi")
    let  input = inputsForm()
    createPost(input)
    // Crear funcion para mostrar post
    // llamar funcion que construya las cards
    pintarCards()
})

object.addEventListener("click", myScript);


console.log(document.querySelector(".btn-add"))

console.log(document.querySelector("#btn-add"))

// Boton Editar post formulario <aún no funciona>
$("#btn-add").click(()=>{
    console.log("Hi")
    alert("hi")
    
})
// Boton Eliminar post formulario <aún no funciona>

$("#btn-add").click(()=>{
    console.log("Hi")
    alert("hi")
    
})


//let createPost = {}

//const obtenerCoverImage 

const inputsForma = () => {
    let inputPost = {}
    $('.input-form').each(function(index) {
        let name = $(this).attr("name")
        let value= $(this).val()
        
        inputPost = {...inputPost,[name]:value}
        console.log(inputPost)
    })
    return inputPost
}
// let createPost = {}

// Para cargar los post

// $(document).ready(()=>{
//     loadPost();
// })


// Pintar un objeto
// 1. obtener el objeto de firebase con una funcion (Funcion obtener post)
// 2. Definir el espacio donde va anidarse el post 
// 3. Crear una funcion que manipule el objeto y cree los elementos del post en HTML
// 4. Añadir estilos css


    function pintarTituloCards() {

    let arrayBaseDatos = Object.values(obtenerPost())    
    let insertandoEnHtml = document.querySelector(".tituloCardBaseDatos")

    arrayBaseDatos.forEach((elemento, index) => {
        let cardTitle = document.createElement("h5")
        cardTitle.textContent = arrayBaseDatos[index].title
        console.log(cardTitle);
        // let tituloText = document.create (titulo)
        // cardTitle.appendChild(tituloText)
        insertandoEnHtml.appendChild(cardTitle)
    })
    // document.body.appendChild(insertandoEnHtml)
}    

    function pintarImagenCards() {

    let arrayBaseDatos = Object.values(obtenerPost())    
    let insertandoImgEnHtml = document.querySelector(".imagenCardBaseDatos")

    arrayBaseDatos.forEach((elemento, index) => {
        let cardImg = document.createElement("img")
        cardImg.setAttribute("src",  arrayBaseDatos[index].coverImg)
        console.log(cardImg);
        // let tituloText = document.create (titulo)
        // cardTitle.appendChild(tituloText)
        insertandoImgEnHtml.appendChild(cardImg)
    })
    // document.body.appendChild(insertandoEnHtml)
}    

function constructoraCards(){
    
}


// Elementos de cards que se deben crear por cada article
// - Avatar con imagen, nombre y fecha
// - Titulo
// - tags
// - Reactions y comments 
// - Editar y eliminar botones




function pintarCards() {
    let arrayBaseDatos = Object.values(obtenerPost()) 
    console.log(arrayBaseDatos)   
    let insertandocards = document.querySelector("#add-cards")


    <div class="container tags card-text d-flex p-0 mb-3">
                                <div class="row">
                                  <a class="col" href=""><small class="text-muted">#javascript</small></a>
                                  <a class="col" href=""><small class="text-muted">#begginers</small></a>
                                  <a class="col" href=""><small class="text-muted">#webdev</small></a>
                                  <a class="col" href=""><small class="text-muted">#100daysofcode</small></a>
                                </div>
                            </div>

    arrayBaseDatos.forEach((elemento, index) => {

        // Creando elementos de card
        let cardDiv = document.createElement("div")
        let cardImg = document.createElement("img")
        let cardTitle = document.createElement("h5")
        let cardDivPosteriorImg = document.createElement("div")
        // Elementos Div Author
        let cardDivAuthor = document.createElement("div")
        let cardDivAuthorInnerRow = document.createElement("div")
        let cardDivAuthorImg = document.createElement("img")
        let cardDivAuthorLast = document.createElement("div")
        let cardDivAuthorLastH6 = document.createElement("h6")
        let cardDivAuthorLastP = document.createElement("p")

        // Elementos tags
        
        let cardDivTags = document.createElement("div")

        // Elementos Div Reactions

        let cardDivReactions = document.createElement("div")


        // Añadiendo contenido a elementos
        cardDivAuthorLastH6.textContent = "Tapajyoti Bos" //Nombre el autor
        cardDivAuthorLastP.textContent = "Aug 22 (9 hours ago)" //Fecha y hora del post
        

        cardTitle.textContent = arrayBaseDatos[index].title
        
        // Añadiendo clases de elementos
        cardDiv.className = "first-card card mb-2"
        cardDivPosteriorImg.className = "card-body p-2 ml-1 mt-1"
        cardDivAuthor.className = "articles-author_container container-fluid d-flex mb-3"
        cardDivAuthorInnerRow.className = "row"
        cardDivAuthorImg.className = "article_logo rounded-circle align-self-center"
        cardDivAuthorImg.className = "article_logo rounded-circle align-self-center"
        cardDivAuthorLast.className ="col p-0 ml-2"
        cardDivAuthorLastH6.className ="m-0"
        cardDivAuthorLastP.className = "m-0"
        cardDivTags.className="container tags card-text d-flex p-0 mb-3"
        
        // Añandiendo atributos
        cardImg.setAttribute("src",  arrayBaseDatos[index].coverImg)
        cardDivAuthorImg.setAttribute("src", "./images/84e49851-d0da-4b98-9483-bb157f9e531f.jpeg")

        // Append elementos
        // Append seccion imagen
        cardDiv.appendChild(cardImg)


        // Append seccion author
        cardDivAuthorLast.appendChild(cardDivAuthorLastH6)
        cardDivAuthorLast.appendChild(cardDivAuthorLastP)
        cardDivAuthorInnerRow.appendChild(cardDivAuthorImg)
        cardDivAuthorInnerRow.appendChild(cardDivAuthorLast)
        cardDivAuthor.appendChild(cardDivAuthorInnerRow)
        


        cardDiv.appendChild(cardDivAuthor)
        cardDiv.appendChild(cardDivPosteriorImg)


        
        cardDivPosteriorImg.appendChild(cardTitle)
        
        

        console.log(cardDiv)
        insertandocards.appendChild(cardDiv)






    })
    
}   
