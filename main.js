$(document).ready(function() {
    
    $("#addTaskBtn").click(function() {
    addTask();
    });

    
    $("#taskList").on("click", "li", function() {
    $(this).toggleClass("completed");
    });

    function addTask() {
    
    var taskName = $("#taskName").val();

    if (taskName.trim() !== "") {

        var li = $("<li>").text(taskName);

        $("#taskList").append(li);

        $("#taskName").val("");
    }
    }
});