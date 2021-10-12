const deletePost = () => {
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