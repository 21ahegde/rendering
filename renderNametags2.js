function renderNametags(nametags) {
   /* return `
        
        <div class="text-center mt-5">
            <code>${JSON.stringify(nametags)}</code>
        </div>
    ` */

   for (var i=0; i < nametags.length; i++) {
       console.log(nametags);
   }
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ];

    content.innerHTML = renderNametags(nametagsAbstraction);

}

