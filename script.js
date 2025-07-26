function addWord() {
  const word = document.getElementById("wordInput").value.trim();
  const meaning = document.getElementById("meaningInput").value.trim();

  if (word === "" || meaning === "") {
    alert("Please enter both word and meaning.");
    return;
  }

  const wordCard = document.createElement("div");
  wordCard.className = "word-card";

  wordCard.innerHTML = `
    <div class="word">${word}</div>
    <div class="meaning">${meaning}</div>
    <div class="links">
      <a href="https://www.google.com/search?q=${word}+meaning" target="_blank">More Examples</a>
      <a href="https://www.google.com/search?q=${word}&tbm=isch" target="_blank">Image</a>
    </div>
  `;

  document.getElementById("wordList").prepend(wordCard);

  // Clear input fields
  document.getElementById("wordInput").value = "";
  document.getElementById("meaningInput").value = "";
}
