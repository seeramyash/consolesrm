const forceBrowserDefault = function(e){
 e.stopImmediatePropagation();
 return true;
};
function removeAllListeners(element, eventType) {
 var eventListeners = getEventListeners(element)[eventType];
 if (eventListeners && eventListeners.length > 0) {
 eventListeners.forEach(function (listener) {
 element.removeEventListener(eventType, listener.listener, listener.useCapture);
 });
 }
}
removeAllListeners(window,'copy')
removeAllListeners(document,'copy')
removeAllListeners(window,'cut')
removeAllListeners(document,'cut')
removeAllListeners(window,'paste')
removeAllListeners(window,'blur')
removeAllListeners(document,'blur')
removeAllListeners(window,'fullscreenchange')
removeAllListeners(window,'fullscreenchange')
removeAllListeners(window,'visibilitychange')
removeAllListeners(window,'visibilitychange')
removeAllListeners(window,'focus')
removeAllListeners(window,'focus')
document.addEventListener('paste', forceBrowserDefault, true);
