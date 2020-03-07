function visualRectangle(rectangle) {

    function drawRectangle(rectangle) {
        return ` 
        <div class="text-center mt-5">
            <div style = "background-color: ${rectangle.color};
                height: ${rectangle.height}px; 
                width: ${rectangle.width}px;">
            </div>
        </div> `
    }
        return `
            ${rectangle.map(drawRectangle).join("")}
        `
}

function rectangle() {
    var content = document.getElementById('content');

    var renderRectangle2 = [{
            height: 200,
            width: 100,
            color: "#FF00FF"
    }
  ];
    var innerHTML = visualRectangle(renderRectangle2); 

    content.innerHTML = innerHTML
}