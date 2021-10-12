
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

const obtenerPostModificado = () => {
    let keysBaseDatos = Object.keys(obtenerPost())    
    let arrayBaseDatos = Object.values(obtenerPost())   
    let postModificado = keysBaseDatos.forEach((id, index) => {
        
    })
}


function keys (){
    keysBaseDatos.forEach((article, index) => {
        article.Id = index;
        console.log(obtenerPost());
    })
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

//     function pintarImagenCards() {

//     let arrayBaseDatos = Object.values(obtenerPost())    
//     let insertandoImgEnHtml = document.querySelector(".imagenCardBaseDatos")

//     arrayBaseDatos.forEach((elemento, index) => {
//         let cardTags = document.createElement("img")

//         cardTags.textContent = arrayBaseDatos[index].title
//         console.log(cardImg);
//         // let tituloText = document.create (titulo)
//         // cardTitle.appendChild(tituloText)
//         insertandoImgEnHtml.appendChild(cardImg)
//     })
//     // document.body.appendChild(insertandoEnHtml)
// }    

   


function pintarCards() {
    let arrayBaseDatos = Object.values(obtenerPost()) 
    
    let insertandocards = document.querySelector("#add-cards")


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
        let cardDivInnerTags = document.createElement("div")
        let cardtagElement = document.createElement("a")
        let cardtagElementSmall = document.createElement("small")

       

        // Elementos Div Reactions y botonos

        let cardDivReactions = document.createElement("div")
        let cardDivInnerReactions = document.createElement("div")
        let cardDivInnerLastSup = document.createElement("div")
        let cardDivInnerLastInf = document.createElement("div")


        // Elementos  commentrs
        let cardDivInnerLastComment =  document.createElement("a")
        
        let cardDivInnerLastImgComment =  document.createElement("img")
        let cardDivInnerLastSupSpanComment1 =  document.createElement("span")
        let cardDivInnerLastSupSpanComment2=  document.createElement("span")

        // Elementos  reactions
        let cardDivInnerLastReactions =  document.createElement("a")
        
        let cardDivInnerLastImgReactions =  document.createElement("img")
        let cardDivInnerLastSupSpanReactions1 =  document.createElement("span")
        let cardDivInnerLastSupSpanReactions2=  document.createElement("span")


        // Elementos botones
        let cardButtonSmall = document.createElement("small")
        let cardButtonEdit = document.createElement("button")
        let cardButtonDelete = document.createElement("button")


        // Añadiendo contenido a elementos
        cardDivAuthorLastH6.textContent = "Tapajyoti Bos" //Nombre el autor
        cardDivAuthorLastP.textContent = "Aug 22 (9 hours ago)" //Fecha y hora del post
        

        cardTitle.textContent = arrayBaseDatos[index].title //Titulo del post
        cardtagElementSmall.textContent ="#"+ arrayBaseDatos[index].tags // Tags de post
        

        cardDivInnerLastSupSpanReactions1.textContent ="125"
        cardDivInnerLastSupSpanReactions2.textContent ="reactions"
        cardDivInnerLastSupSpanComment1.textContent ="8"
        cardDivInnerLastSupSpanComment2.textContent ="Comments"

        cardButtonSmall.textContent = "4 min read"
	    cardButtonEdit.textContent = "Edit"
	    cardButtonDelete.textContent = "Delete"


        console.log()
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
        cardDivInnerTags.className = "row"
        cardtagElement.className ="col"
        cardtagElementSmall.className ="text-muted"

        // Clases reactions
        cardDivReactions.className ="container-fluid"
        cardDivInnerReactions.className ="row"
        cardDivInnerLastSup.className ="articles-reactions col p-0"
        cardDivInnerLastInf.className ="col p-0 d-flex justify-content-end"
        cardDivInnerLastSupSpanComment1.className ="text-muted"
        cardDivInnerLastSupSpanComment2.className ="text-muted d-none d-md-inline"
        cardDivInnerLastSupSpanReactions1.className ="text-muted"
        cardDivInnerLastSupSpanReactions2.className ="text-muted d-none d-md-inline"
        cardDivInnerLastInf.className = "col p-0 d-flex justify-content-end"

        // Clases butones
        cardDivInnerLastInf.className = "col p-0 d-flex justify-content-end"
        cardButtonSmall.className ="text-muted align-self-center mr-2"
        cardButtonEdit.className = "btn btn-warning btn-sm ml-1"
        cardButtonDelete.className = "btn btn-danger btn-sm ml-1"

        // Añandiendo atributos
        cardImg.setAttribute("src",  arrayBaseDatos[index].coverImg)
        cardDivAuthorImg.setAttribute("src", "./images/84e49851-d0da-4b98-9483-bb157f9e531f.jpeg")
        cardDivInnerLastImgReactions.setAttribute("src", "./svg-images/Reactions.svg")
        cardDivInnerLastImgComment.setAttribute("src", "./svg-images/Comments.svg")
        cardButtonEdit.setAttribute("type","button")
        cardButtonDelete.setAttribute("type","button")

        // Append elementos----------------------------------------------------------
        
        // Append seccion imagen
        cardDiv.appendChild(cardImg)


        // Append seccion author
        cardDivAuthorLast.appendChild(cardDivAuthorLastH6)
        cardDivAuthorLast.appendChild(cardDivAuthorLastP)
        cardDivAuthorInnerRow.appendChild(cardDivAuthorImg)
        cardDivAuthorInnerRow.appendChild(cardDivAuthorLast)
        cardDivAuthor.appendChild(cardDivAuthorInnerRow)
        cardDivPosteriorImg.appendChild(cardDivAuthor)
        

        cardDiv.appendChild(cardDivPosteriorImg)
       //Appen Tittulo
        cardDivPosteriorImg.appendChild(cardTitle)
        
        //Append seccion tags
        cardtagElement.appendChild(cardtagElementSmall)
        cardDivInnerTags.appendChild(cardtagElement)
        cardDivTags.appendChild(cardDivInnerTags)
        cardDivPosteriorImg.appendChild(cardDivTags)
        



        //Append seccion reactions & comments
        cardDivInnerLastReactions.appendChild(cardDivInnerLastImgReactions) 
        cardDivInnerLastReactions.appendChild(cardDivInnerLastSupSpanReactions1)
        cardDivInnerLastComment.appendChild(cardDivInnerLastSupSpanReactions2)
        cardDivInnerLastSup.appendChild(cardDivInnerLastReactions)
        



        cardDivInnerLastComment.appendChild(cardDivInnerLastImgComment) 
        cardDivInnerLastComment.appendChild(cardDivInnerLastSupSpanComment1)
        cardDivInnerLastComment.appendChild(cardDivInnerLastSupSpanComment2)
        cardDivInnerLastSup.appendChild(cardDivInnerLastComment)
        cardDivInnerReactions.appendChild(cardDivInnerLastSup)
        cardDivReactions.appendChild(cardDivInnerReactions)
        cardDivPosteriorImg.appendChild(cardDivReactions)
        



        // cardDivInnerLastReactions.appendChild() 


        //Append seccion buttons
        cardDivInnerLastInf.appendChild(cardButtonSmall)
        cardDivInnerLastInf.appendChild(cardButtonEdit)
        cardDivInnerLastInf.appendChild(cardButtonDelete)
        cardDivInnerReactions.appendChild(cardDivInnerLastInf)




        
        insertandocards.appendChild(cardDiv)
        console.log(cardDiv)
    })
    
}   

function borrarCards() {
    let cardsPosition = document.getElementById("card-position")
    let cards = document.getElementById("add-cards")
    
    cardsPosition.removeChild(cards)
}    

$(".modal-footer #btn-add").click(()=>{
    console.log("Hi")
    let  input = inputsForm()
    createPost(input)
    // Crear funcion para mostrar post
    // llamar funcion que construya las cards
    borrarCards()
    pintarCards()
})