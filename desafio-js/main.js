
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
$("#btn-add").click(()=>{
    console.log("Hi")
    alert("hi")
    let  input = inputsForm()
    createPost(input)
})

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


// let createPost = {}

// Para cargar los post

// $(document).ready(()=>{
//     loadPost();
// })