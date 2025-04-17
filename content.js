// Delete chat bubble
function removeElementIfExists(id) {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
}

function removeElementsContaining(text) {
  const elements = document.querySelectorAll(`[id*="${text}"]`);
  elements.forEach(element => {
    element.remove();
  });
}

const targetNode = document.body;

const config = { childList: true, subtree: true };

const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      removeElementIfExists("reamazejs-container");
      removeElementIfExists("shopify-chat");
      removeElementIfExists("gorgias-chat-container");
      removeElementIfExists("intercom-container");
      removeElementIfExists("vw-root");
      removeElementsContaining("videowise");
    }
  }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);
