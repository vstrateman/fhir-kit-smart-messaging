(function () {
  'use strict';

  window.eventHandlersByMessageId = {};
  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(event) {
    event && event.data && event.data.responseToMessageId && eventHandlersByMessageId[event.data.responseToMessageId] && eventHandlersByMessageId[event.data.responseToMessageId](event);
  }

}());
//# sourceMappingURL=index.js.map
