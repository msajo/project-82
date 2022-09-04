mouseEvent = ""
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
width = "11"
radius = "5";
canvas.addEventListener("mouseDown", my_mousedown);
canvas.addEventListener("mouseMove", my_mousemove);
canvas.addEventListener("mouseUp", my_mouseup);
canvas.addEventListener("mouseLeave", my_mouseleave);

function my_mousedown (e);
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}


function my_mousemove(e)
{
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDOWN"){
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidth = 4;

        ctx.moveTo(lastX, lastY);
        ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y);
        ctx.stroke();
    }
    lastX = current_position_of_mouse_X;
    lastY = current_position_of_mouse_Y;
}
