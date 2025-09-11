const mainText = document.getElementById('mainText');

const historyText = `Neither am I talking bout...
 The Battle of Brandywine(although it really was cool)
 Or Russia's Move to Cali
 Or the day of first Fuck you to Slave Catchers(sad event)
 Or the fact that Swami Vivekananda's gave his famous universal tolerance wisdom today then
 Yea this was the day, the Pentagon's inception was laid
 Atari was launched today(goated)
 Vinoba Bhave's bday
 The Martian was released today in 2015!!
 There must be more but that's all I could think of right now `;

const lines = [
  { text: "Uhmmm...", size: "big", bg: "#f9f7f3", color: "#6BCB77" },
  { text: "Yes, it's a Thursday...", size: "big", bg: "#fef6eb", color: "#FFD93D" },
  { text: "But what's special?", size: "big", bg: "#fffbea", color: "#1C1C1C" },
  { text: "No, I'm not talking about 9/11", size: "big", bg: "#f3f3f3", color: "#ff8ba7" },
  { text: "And I definitely wasn't about to write that...", size: "big", bg: "#ffd6e0", color: "#4D96FF" },
  { text: "...I'm not talking bout the Alcaraz US Open 2022 win just cuz you watch it", size: "big", bg: "#92ffe7ff", color: "#ffd752ff" },
  { text: historyText, size: "small", bg: "#e9f3ff", color: "#444" ,},
  { autoCountdown: true }
];

let idx = 0;
let busy = false;
const FADE = 500;
const GAP = 150;

function setColors(bg, fg) {
  document.body.style.backgroundColor = bg;
  mainText.style.color = fg;
}

function render(line, instant = false) {
  if (line.size === "small") {
    mainText.classList.add("small");
    mainText.innerHTML = line.text.replace(/\n/g, "<br>");
  } else {
    mainText.classList.remove("small");
    mainText.textContent = line.text;
  }
  setColors(line.bg, line.color);

  if (instant) {
    mainText.style.opacity = 1;
    mainText.style.transform = "translateY(0)";
  }
}

function showNext() {
  if (busy || idx >= lines.length) return;
  busy = true;
  const line = lines[idx];

  mainText.style.opacity = 0;
  mainText.style.transform = "translateY(15px)";

  setTimeout(() => {
    render(line);
    mainText.style.opacity = 1;
    mainText.style.transform = "translateY(0)";
    busy = false;
    if (line.autoCountdown) {
      startCountdown();
    }
  }, FADE + GAP);
  idx++;
}

function startCountdown() {
  const nums = [
    "Ofcourse it isn't any of them stupid things...", 
    "And...Yeah, these events are cool...", 
    "But there's something way more special today....", 
    "",               // pause after this one
    "It's you!", 
  ];
  let i = 0;

  function step() {
    mainText.style.opacity = 0;
    setTimeout(() => {
      mainText.textContent = nums[i];
      mainText.classList.remove("small");
      mainText.classList.add("countdown");

      // 🔑 apply special font just for "It's you!"
      if (nums[i] === "It's you!") {
        mainText.style.fontFamily = "'Bodoni Moda', serif";
      } else {
        mainText.style.fontFamily = ""; // fallback to your normal font
      }

      mainText.style.opacity = 1;
      
      // timing logic
      let delay;
      if (nums[i] === "") {
        delay = 1500; // pause
      } else if (i === nums.length - 1) {
        delay = 3000; // last one
      } else {
        delay = 1100; // normal
      }

      i++;
      if (i < nums.length) {
        setTimeout(step, delay);
      } else {
        setTimeout(() => (window.location.href = "part4.html"), 3000);
      }
    }, FADE);
  }
  step();
}
/*
function startCountdown() {
  const nums = ["Ofcourse it isn't any of them stupid things...", "And...Yeah, these events are cool...", "But there's something way more special today....", 
                "2..", "1."];
  let i = 0;

  function step() {
    mainText.style.opacity = 0;
    setTimeout(() => {
      mainText.textContent = nums[i];
      mainText.classList.remove("small");
      mainText.classList.add("countdown");
      mainText.style.opacity = 1;
      i++;
      if (i < nums.length) {
        setTimeout(step, 900);
      } else {
        setTimeout(() => (window.location.href = "part4.html"), 1000);
      }
    }, FADE);
  }
  step();
}
*/
render(lines[0], true);
idx = 1;

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    showNext();
  }
});