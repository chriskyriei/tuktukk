const chat = document.getElementById("chat");
const typing = document.getElementById("typing");
const popup = document.getElementById("popup");
const forcePopup = document.getElementById("forcePopup");

const messages = [

  "Heyyyy!",
  
  "Lol. Seems that I actually got myself to send this...",

  "FUCK YEAHH",

  "Anyways,Uhm, Sooo I made this little something...with a few other somethings in it",

  "And uh hope you like it!! ig",

  "But before that we'll do the mandatory drama.",

  "Ahem..",

  "Soooo do you know what's special about today???",
  
  "NO you don't🥰",

  "And ofcourse I'm not gonna make a yes or no box asking u if u wanna find out..pfft that'd be so silly!",

  "For sure..."
];

let index = 0;

function showTyping() {
  typing.style.display = "flex";
}

function hideTyping() {
  typing.style.display = "none";
}

function addMessage(text, special = false) {
  const msg = document.createElement("div");
  msg.className = `message ${special ? "special" : ""}`;
  msg.innerHTML = `<div class="bubble">${text}</div>`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function nextMessage() {
  if (index >= messages.length) {
    setTimeout(() => popup.classList.remove("hidden"), 1000);
    return;
  }

  showTyping();
  setTimeout(() => {
    hideTyping();
    const isSpecial = index === messages.length - 1;
    addMessage(messages[index], isSpecial);
    index++;
    setTimeout(nextMessage, 1500);
  }, 2500);
}

nextMessage();

document.getElementById("accept").addEventListener("click", () => {
  window.location.href = "part3.html";
});

document.getElementById("reject").addEventListener("click", () => {
  popup.classList.add("hidden");
  forcePopup.classList.remove("hidden");
});

document.getElementById("forceAccept").addEventListener("click", () => {
  window.location.href = "part3.html";
});
