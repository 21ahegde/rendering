function renderNametags(nametags) {
    var name = [];
    for (var i=0; i < nametags.length; i++) {
        var newNametag = `
        <div class="card" style="width: 18rem;">
       
            <div class="card-body">
                <h5 class="card-title" style="background:blue; color:white; text-align:center;">Hello My Name is:</h5>
                    <p class="card-text"> 
                        <div class="text-center mt-5">
                         <div>${nametags[i]}</div>
                        </div>
                    </p>
           
            </div>
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

