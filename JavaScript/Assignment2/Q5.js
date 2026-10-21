
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    const isSecure =
        isDoorLocked &&
        isWindowClosed &&
        isAlarmOn &&
        isOwnerInside;

    if (isSecure) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

checkSecurity();

isAlarmOn = false;
checkSecurity();

isAlarmOn = true;
isDoorLocked = false;
checkSecurity();

console.log(`Owner is outside: ${!isOwnerInside}`);
