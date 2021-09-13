var click_num = 0
function myFunction(event) {
    if (click_num > 1) {
        alert("PLEASE USE RESET BUTTON OR RELOAD THE PAGE")
    }
    else if (click_num == 1) {
        y_coord = document.getElementById("point_2_Y");
        x_coord = document.getElementById("point_2_X");
        click_num += 1;
        y_coord.innerHTML = event.offsetY;
        x_coord.innerHTML = event.offsetX;
        /*
        ASSIGNING OTHER TWO POINTS COORDINATES
        */
        let point_1_Y = document.getElementById("point_1_Y").innerHTML
        let point_1_X = document.getElementById("point_1_X").innerHTML
        document.getElementById("point_3_Y").innerHTML = y_coord.innerHTML;
        document.getElementById("point_3_X").innerHTML = point_1_X;
        document.getElementById("point_4_Y").innerHTML = point_1_Y;
        document.getElementById("point_4_X").innerHTML = x_coord.innerHTML;
    }
    else if (click_num == 0) {
        y_coord = document.getElementById("point_1_Y");
        x_coord = document.getElementById("point_1_X");
        click_num += 1;
        y_coord.innerHTML = event.offsetY;
        x_coord.innerHTML = event.offsetX;
    }
}