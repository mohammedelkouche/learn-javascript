//================================================================
// Callback Hell (Nested Callbacks)
// When callbacks are nested deeply, the code becomes unreadable and hard to maintain.
//================================================================




function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});

//================================================================
//Error handling can get messy when dealing with nested callbacks.
//================================================================


function devide (a, b, callback)
{
    if (b === 0)
        callback(new Error ("cannot devide by zero"), null);
    else
        callback(null, a / b);
}

function result (error, result)
{
    if (error)
        console.log("Error : " ,error.message);
    else
        console.log("Result : " ,result);
}

devide(10, 2, result);
devide(10, 0, result);

console.log("//========================================//");

//================================================================
// Promises (Fixing Callback Hell)
//================================================================
console.log("//====== Promis =======//");

function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 1000);
    });
}

function step3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve();
        }, 1000);
    });
}

step1()
    .then(step2)
    .then(step3)
    .then(() => console.log("All steps completed"));



console.log("Start");
setTimeout(() => console.log("Middle"), 1000);
console.log("End");
