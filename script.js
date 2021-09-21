var point_1 = [document.getElementById("point_1_Y"), document.getElementById("point_1_X")]
var point_2 = [document.getElementById("point_2_Y"), document.getElementById("point_2_X")]
var point_3 = [document.getElementById("point_3_Y"), document.getElementById("point_3_X")]
var point_4 = [document.getElementById("point_4_Y"), document.getElementById("point_4_X")]
var display_box = document.getElementById("display-box");
var img = document.getElementById("myImage");
// console.log(img.clientHeight, img.clientWidth);
var click_num = 0;
display_box.style.height = img.clientHeight;
display_box.style.width = img.clientWidth;
function myFunction(event) {
        var top = null;
        var left = null;
        var box_height = null;
        var box_width = null;
    if (click_num%2 == 0) {
        click_num += 1;
        point_1[0].innerHTML = event.offsetY;
        point_1[1].innerHTML = event.offsetX;
        point_2[0].innerHTML = null;
        point_2[1].innerHTML = null;
        point_3[0].innerHTML = null;
        point_3[1].innerHTML = null;
        point_4[0].innerHTML = null;
        point_4[1].innerHTML = null;
        display_box.style.height = null;
        display_box.style.width = null;
    }
    else {
        click_num += 1;
        point_2[0].innerHTML = event.offsetY;
        point_2[1].innerHTML = event.offsetX;
        /*
        ASSIGNING OTHER TWO POINTS COORDINATES
        */
        point_3[0].innerHTML = point_2[0].innerHTML;
        point_3[1].innerHTML = point_1[1].innerHTML;
        point_4[0].innerHTML = point_1[0].innerHTML;
        point_4[1].innerHTML = point_2[1].innerHTML;
        box_height = Math.abs(point_2[0].innerHTML - point_1[0].innerHTML);
        box_width = Math.abs(point_2[1].innerHTML - point_1[1].innerHTML);
        // console.log(box_height+"-BOX HEIGHT",box_width+"-BOX WIDTH");
        display_box.style.height = String(box_height)+"px";
        display_box.style.width = String(box_width)+"px";
        
        // Locating Box's Position on the Image
        left = Math.min(point_1[1].innerHTML, point_2[1].innerHTML);
        console.log("LEFT - "+left);
        display_box.style.left = (left) +"px";
        top = Math.min(point_1[0].innerHTML, point_2[0].innerHTML);
        console.log("TOP - "+top);
        display_box.style.top = (top) +"px";
    }
}