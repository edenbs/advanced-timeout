# advanced-timeout
An advanced, pausable, timeout module for javascript

    const timeout = require('advanced-timeout');

    //Activate timeout the same way you'd use javascript's setTimeout()
    const timeoutID = timeout.set(() => {
        console.log('Hello World');
    }, 1000);

    // Pause timeout
    timeout.pause(timeoutID);

    // Resume
    timeout.resume(timeoutID);

    // Clear
    timeout.clear(timeoutID);


