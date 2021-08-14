$(function () {
    $addTaskButton = $('#add-task > input:button')
    $addTaskText = $('#add-task > input:text')
    $addTaskDiv = $('#add-task')
    $addedTasksDiv = $('#added-tasks')
    $tasksDiv = $('#tasks')

    $addedTasksDiv.on('change', 'input.cb-task-complete:checkbox', toggleTaskCompleteStatus)
    $addedTasksDiv.on('click', 'input.cb-task-important:checkbox', toggleTaskImportance)

    $addTaskButton.click(addTask)
    $addTaskText.keydown(function (e) {
        if (e.key == 'Enter') addTask()
    })


    function addTask() {
        newTask = $addTaskText.val()

        if(newTask.length == 0) return

        newTaskHTML = `
        <div class="task">
        <input type="checkbox" class="cb-task-complete">
        <span class="task-title">${newTask}</span>
        <label><input type="checkbox" class="cb-task-important">Mark as important</label>
        </div>
        <hr>
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

    function toggleTaskImportance() {
        isTaskImportant = $(this).parents('div.task').hasClass('important-task')
        if(isTaskImportant) {
            $(this).parents('div.task').removeClass('important-task')
        }
        else {
            $(this).parents('div.task').addClass('important-task')
        }
        console.log('toggleTaskImportance')
    }
})