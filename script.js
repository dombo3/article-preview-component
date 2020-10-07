let shareContainer = document.getElementById('share-container');
let contact = document.getElementById('contact');
let arrow = document.getElementById('arrow');

document.getElementById('unshare-button').addEventListener("click", function() {
  shareContainer.classList.toggle('hidden');
  arrow.classList.toggle('hidden');
})

document.getElementById('share-button').addEventListener("click", function() {
  shareContainer.classList.toggle('hidden');
  arrow.classList.toggle('hidden');
});