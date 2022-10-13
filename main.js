color = "pink";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "";
lastX = 0;
lastY = 0;
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseLEAVE";
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mouseDOWN";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDOWN"){
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidth = 4;

        ctx.arc(current_position_of_mouse_X,current_position_of_mouse_Y,36,0,2*Math.PI);
        ctx.stroke();
    }
    lastX = current_position_of_mouse_X;
    lastY = current_position_of_mouse_Y;

}