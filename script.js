let shareContainer = document.getElementById('share-container');
let contact = document.getElementById('contact');

document.getElementById('unshare-button').addEventListener("click", function() {
  shareContainer.classList.toggle('hidden');
  contact.classList.toggle('hidden');
})

document.getElementById('share-button').addEventListener("click", function() {
  shareContainer.classList.toggle('hidden');
  contact.classList.toggle('hidden');
});