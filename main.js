canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "Pink";
width_of_line = 5;
    var last_position_of_touch_x,last_position_of_touch_y;
    var width = screen.width;
    var new_width = screen.width - 70;
    var new_height = screen.height - 300;
    if(width < 992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
        console.log("My_Touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("Width_of_line").value;

        last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("My Touchmove")
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_touch_x + ",y = " + last_position_of_touch_y);
        ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + ",y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_touch_x = current_position_of_touch_x; 
        last_position_of_touch_y = current_position_of_touch_y;
    }
    var last_position_x, last_position_y;
    var mouseEvent = "empty";

    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e) {
        color = document.getElementById("color").value;
        Width_of_line = document.getElementById("Width_of_line").value;
        mouseEvent = "mouseDown";
    }
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e) {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
        if(mouseEvent == "mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = Width_of_line;

            console.log("Last Position Of X And Y Coordinates = ");
            console.log("X = "+last_position_x+"Y = "+last_position_y);
            ctx.moveTo(last_position_x, last_position_y);

            console.log("Current Position Of X And Y Coordinates = ");
            console.log("X = "+current_position_of_mouse_x+"Y = "+current_position_of_mouse_y);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();
        }
        last_position_x = current_position_of_mouse_x; 
        last_position_y = current_position_of_mouse_y;
    }
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e) {
        mouseEvent = "mouseup";
    }
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e) {
        mouseEvent = "mouseleave";
    }
    function Clear_drawing() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
