const uuid = require('uuid/v4');
let timeouts = {};

module.exports.set = (func, timeout) => {
    const guid = uuid();
    const action = () => {
        func();
        delete timeouts[guid];
    };
    const timeoutKey = setTimeout(action, timeout);

    timeouts[guid] = {
        key: timeoutKey,
        action,
        remainingTime: timeout,
        startTime: Date.now(),
        isPaused: false
    };

    return guid;
};

module.exports.pause = key => {
    if (!timeouts[key] || timeouts[key].isPaused) {
        return false;
    }

    clearTimeout(timeouts[key].key);
    timeouts[key].isPaused = true;
    timeouts[key].remainingTime = timeouts[key].remainingTime - (Date.now() - timeouts[key].startTime);

    return true;
};

module.exports.resume = key => {
    if (!timeouts[key] || !timeouts[key].isPaused) {
        return false;
    }

    timeouts[key].key = setTimeout(timeouts[key].action, timeouts[key].remainingTime);
    timeouts[key].startTime = Date.now();
    timeouts[key].isPaused = false;

    return true;
};

module.exports.clear = key => {
    if (!timeouts[key]) {
        return false;
    }

    clearTimeout(timeouts[key].key);
    delete timeouts[key];

    return true;
};
