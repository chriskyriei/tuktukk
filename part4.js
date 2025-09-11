  const lines = document.querySelectorAll(".line");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  lines.forEach(line => observer.observe(line));

  const input = document.getElementById("commentInput");
  const btn = document.getElementById("submitBtn");
  const list = document.getElementById("commentList");

  let comments = JSON.parse(localStorage.getItem("guestbook")) || [];
  comments.forEach(addCommentToDOM);

  input.addEventListener("input", () => {
    btn.disabled = input.value.trim().length === 0;
  });

  btn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const comment = { name: "Tuktuk", text };
    comments.push(comment);
    localStorage.setItem("guestbook", JSON.stringify(comments));

    addCommentToDOM(comment);
    input.value = "";
    btn.disabled = true;
  });

  function addCommentToDOM(comment) {
    const div = document.createElement("div");
    div.className = "comment";

    div.innerHTML = `
      <div class="avatar">T</div>
      <div class="text"><strong>${comment.name}:</strong> ${comment.text}</div>
    `;

    list.appendChild(div);
  }
  document.getElementById("continueBtn").addEventListener("click", () => {
    window.location.href = "part5.html";
  });
function addCommentToDOM(comment) {
  const div = document.createElement("div");
  div.className = "comment";

  // Use a default avatar image (replace avatar.png with your own path)
  const avatarURL = comment.avatar || "images/tuktuk.jpg";

  div.innerHTML = `
    <div class="avatar"><img src="${avatarURL}" alt="avatar"></div>
    <div class="text"><strong>${comment.name}:</strong> ${comment.text}</div>
  `;

  list.appendChild(div);
}