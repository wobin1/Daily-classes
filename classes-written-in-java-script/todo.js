function todo() {
    let choice1, choice2;
    
    // function for adding task
    function addTask() {
        var task1 = prompt("add task");
        var task2 = prompt("add task");
        var task3 = prompt("add task");
        var task4 = prompt("add task");
        var task5 = prompt("add task");
        var task6 = prompt("add task");
        var task7 = prompt("add task");
        var task8 = prompt("add task");
        var task9 = prompt("add task");
        var task10 = prompt("add task");
    }

    // message that is asking of what you want to do
    var choice = prompt("Do you want to add task? Enter yes or no")
    choice1 = "yes";
    choice2 = "no";

    // condition on the choice made
    if (choice == choice1) {
        addTask();
    }else if(choice == choice2) {
        console.log("thank you for working with us");
        console.log(task1);
        console.log(task2);
        console.log(task3);
        console.log(task4);
        console.log(task5);
        console.log(task6);
        console.log(task7);
        console.log(task8);
        console.log(task9);
        console.log(task10);
    }else {
        console.log("you have made an invalid choice");
    }

    // function choices(madeChoice) {
    //     if(madeChoice == choice1) {
    //         addTask();
    //     }else {
    //         console.log(task1);
    //         console.log(task2);
    //         console.log(task3);
    //         console.log(task4);
    //         console.log(task5);
    //         console.log(task6);
    //         console.log(task7);
    //         console.log(task8);
    //         console.log(task9);
    //         console.log(task10);
    //     }
    // }



}

todo();