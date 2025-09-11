const replyInput = document.getElementById("replyInput");
const sendBtn = document.getElementById("sendBtn");
const decorContainer = document.querySelector(".float-decor");

for (let i = 0; i < 10; i++) {
  const shape = document.createElement("div");
  shape.classList.add("shape");

  const size = Math.floor(Math.random() * 100) + 60; 
  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;

  shape.style.top = `${Math.random() * 90}%`;
  shape.style.left = `${Math.random() * 90}%`;

  shape.style.animationDuration = `${10 + Math.random() * 8}s`;
  shape.style.animationDelay = `${Math.random() * 5}s`;

  decorContainer.appendChild(shape);
}

function updateSend() {
  if (replyInput.value.trim().length > 0) {
    sendBtn.classList.add("enabled");
  } else {
    sendBtn.classList.remove("enabled");
  }
}
replyInput.addEventListener("input", updateSend);

function handleSubmit() {
  const text = replyInput.value.trim();
  if (!text) return;
  window.location.href = "part2.html";
}
sendBtn.addEventListener("click", handleSubmit);
replyInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSubmit();
});
