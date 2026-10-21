$(document).ready(function(){
    $(".changeVis").hide();
});

$(document).mousemove(function(e){
    $("#cursorFollow").css({
        left: e.pageX,
        top: e.pageY
    });
});

$("#bathClickBreak").click(function(){
    $(".changeVis").show();
    $("#bathClickBreak").hide();
    $("#lostlandSign").attr("class", "toVeryFront");
    $("#lostlandIslandBack").attr("class", "toBack");
    $("#breakTypo").atttr("class", "toBack");
});

$("#phoneAlarm").click(function(){
    $("#phoneAlarmText").hide();
    $("#cursorFollow").hide();
    $("#wakeUp").hide();
    $("#phoneAlarm").attr("src", "media/images/phoneAlone.png");
    $("#phoneAlarm").attr("class", "regular");
})

const scrollContainer = document.getElementById("htmlScroll");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY-25;
});