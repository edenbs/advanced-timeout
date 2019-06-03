# advanced-timeout
An advanced, pausable, timeout module for javascript

## API

### set
Activate timeout the same way you'd use javascript's setTimeout()
Use the returned timeoutID in order to invoke other functions on your timeout such as pause etc
    
    const timeout = require('advanced-timeout');

    const timeoutID = timeout.set(() => {
            console.log('Hello World');
    }, 1000);

### pause
Pause timeout.
Returns a boolean indicating whether paused successfully or not.
    
    timeout.pause(timeoutID);

### resume
Resume a paused timeout.
Returns a boolean indicating whether resumed successfully or not.
    
    timeout.resume(timeoutID);

### getRemainingTime
Returns the time left (in milliseconds) for timeout until its function is invoked.
    
    console.log('Remaining time for timeout:', timeout.getRemainingTime(timeoutID));

### clear
Clears timeout the same way javascript's clearTimeout() does.
    
    timeout.clear(timeoutID);

## Example
    const timeout = require('advanced-timeout');

    // Print 'Hello World' in a second
    const timeoutID = timeout.set(() => {
        console.log('Hello World');
    }, 1000);

    // In 300 ms pause timeout and print remaining time
    timeout.set(() => {
        timeout.pause(timeoutID);

        console.log('Remaining time for timeout:', timeout.getRemainingTime(timeoutID)); 
        // Remaining time for timeout: (Something around 700)

        // Resume timeout in a second
        timeout.set(() => {
            timeout.resume(timeoutID);
        }, 1000)
    }, 300);



