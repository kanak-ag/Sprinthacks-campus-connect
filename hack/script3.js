const search =() =>{
    const searchbox = document.getElementById("searchmovie").value.toUpperCase();
    const storemovie = document.getElementById("content-container")
    const movie = document.querySelectorAll(".movie-list-item")
    const mname = document.getElementsByTagName("h2")

    for(var i=0; i<mname.length; i++){
        let match = movie[i].getElementsByTagName("h2")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                movie[i].style.display = "";
            }else{
                movie[i].style.display = "none";
            }
        }
    }
}
