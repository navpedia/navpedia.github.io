function isMobile() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
}

function isFirefox() {
    if (typeof InstallTrigger !== 'undefined') {
        return true;
    } else {
        return false;
    }
}

if (!isMobile()) {
    if (!isFirefox()) {
        window.location = "unsupported-browser.html";
        window.close();
    }
}