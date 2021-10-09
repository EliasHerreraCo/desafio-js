// Crear post

// 1. Seleccionar el boton *
// 2. Crear el evento y comprobar que realice accion * 
// 3. Despligue de modal al darle click al boton *
// 4. Crear formulario y estructura de la modal
// 5. crear objeto vacio
// 6. llamar el value de cada propiedad del objeto


$("#create-modal").click(()=> {
    console.log("Click desde Jquery")
})

// Estructura del objeto en la base de datos
// post 1 {
//     coverImg: file,
//     title: string,
//     tags: [tag1, tag2, tag3, tag4],
//     imageArticle: [url1 o img1...], 
//     contenido: stringBody
// }

let createPost = {}

const obtenerCoverImage 