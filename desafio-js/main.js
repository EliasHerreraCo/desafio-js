
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

// Estructura del objeto en la base de datos
// post 1 {
//     coverImg: file,
//     title: string,
//     tags: [tag1, tag2, tag3, tag4],
//     imageArticle: [url1 o img1...], 
//     contenido: stringBody
// }

// let createPost = {}

// Para cargar los post

// $(document).ready(()=>{
//     loadPost();
// })