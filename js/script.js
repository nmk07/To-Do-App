$(function () {
    $addTaskButton = $('#add-task > input:button')
    $addTaskText = $('#add-task > input:text')
    $addTaskDiv = $('#add-task')
    $addedTasksDiv = $('#added-tasks')
    $tasksDiv = $('#tasks')

    $('#added-tasks').on('change', 'input:checkbox', toggleTaskCompleteStatus)

    $addTaskButton.click(addTask)
    $addTaskText.keydown(function (e) {
        if (e.key == 'Enter') addTask()
    })


    function addTask() {
        newTask = $addTaskText.val()

        if(newTask.length == 0) return

        newTaskHTML = `
        <div class="task">
        <input type="checkbox">
        <span>${newTask}</span>
        <hr>
        </div>
        `
        $addTaskText.val(null)
        $addedTasksDiv.prepend(newTaskHTML)

        console.log('Task added!')
    }

    function toggleTaskCompleteStatus() {
        isTaskCompleted = $(this).is(':checked')
        if (isTaskCompleted) {
            $(this).parent().addClass('completed-task')
        }
        else {
            $(this).parent().removeClass('completed-task')
        }
        console.log('update task')
    }
})