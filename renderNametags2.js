function renderNametags(nametags) {
    var name = [];
    for (var i=0; i < nametags.length; i++) {
        var newNametag = `
        <div class="text-center mt-5">
            <div>${nametags[i]}</div>
        </div>
        
    `
    name.push(newNametag); 

    }
    
        
    
    return name.join("");
  

  
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}

