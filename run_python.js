var spawn = require('child_process').spawn;

function runBuzzer(){
    var run_buzzer = spawn('python3', ['exec_buzzer.py']);

    run_buzzer.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });

    run_buzzer.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
        setTimeout(runBuzzer, 1000);
    });

    run_buzzer.on('exit', function(code) {
        console.log('exit: ' + code);
        setTimeout(runBuzzer, 1000);
    });

    run_buzzer.on('error', function(code) {
        console.log('error: ' + code);
        setTimeout(runBuzzer, 1000);
    });
}

function runPrint(){
    var run_print = spawn('python3', ['exec_print.py']);

    run_print.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });

    run_print.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
        setTimeout(runPrint, 1000);
    });

    run_print.on('exit', function(code) {
        console.log('exit: ' + code);
        setTimeout(runPrint, 1000);
    });

    run_print.on('error', function(code) {
        console.log('error: ' + code);
        setTimeout(runPrint, 1000);
    });
}

function runRes(){
    var run_res = spawn('python3', ['exec_res.py']);

    run_res.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });

    run_res.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
        setTimeout(runRes, 1000);
    });

    run_res.on('exit', function(code) {
        console.log('exit: ' + code);
        setTimeout(runRes, 1000);
    });

    run_res.on('error', function(code) {
        console.log('error: ' + code);
        setTimeout(runRes, 1000);
    });
}

function runRes2(){
    var run_res2 = spawn('python3', ['exec_res2.py']);

    run_res2.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });

    run_res2.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
        setTimeout(runRes2, 1000);
    });

    run_res2.on('exit', function(code) {
        console.log('exit: ' + code);
        setTimeout(runRes2, 1000);
    });

    run_res2.on('error', function(code) {
        console.log('error: ' + code);
        setTimeout(runRes2, 1000);
    });
}

setTimeout(runBuzzer, 1000);
setTimeout(runPrint, 1000);
setTimeout(runRes, 1000);
setTimeout(runRes2, 1000);
