function minuites() {
    let sec, min;

    sec = 60;
    min = prompt('input the number of minutes you want to convert to seconds');

    conversion = sec * min;
    console.log(min + " minutes" + " = " + conversion + " seconds " );

}

minuites();