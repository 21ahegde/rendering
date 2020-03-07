function visualCircle(circles) {

    function drawCircle(circles) {
        return `
        <div class="text-center mt-5">
            <div style = "background-color: ${circles.color};
                height: ${circles.radius}px; 
                width: ${circles.radius}px;
                border-radius: ${circles.radius}px;">
            </div>
        </div> `
    }
        return `
            ${circles.map(drawCircle).join("")}
        `
}

function circles() {
    var content = document.getElementById('content');

    var renderCircles2 = [{
            radius: 50,
            color: "red"
        },
        {
            radius: 30,
            color: "purple"
        },
        {
            radius: 25,
            color: "red"
        },
        {
            radius: 50,
            color: "purple"
        },
    ]; 

        var innerHTML = visualCircle(renderCircles2);

        content.innerHTML = innerHTML

}

/*
Have not attempted all exercises here but I think I am on the right track
*/ 