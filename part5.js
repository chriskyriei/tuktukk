function typeText(el, text, speed = 40){
  return new Promise(resolve => {
    el.textContent = "";
    const caret = document.createElement("span");
    caret.className = "caret";
    el.appendChild(caret);
    let i = 0;
    function tick(){
      if(i < text.length){
        caret.insertAdjacentText("beforebegin", text.charAt(i));
        i++;
        setTimeout(tick, speed);
      } else {
        setTimeout(()=>{ caret.remove(); resolve(); }, 220);
      }
    }
    tick();
  });
}
const wait = ms => new Promise(r => setTimeout(r, ms));
const demoParas = [
  `Mm sooo you know I'm uh bad at this stuff but well I'll try to write something which describes you well in a I guess pretty way(Yeah! like that badly written poem😭). But if I fail, just know, There's so much more to you than you know or I can write and knowing that just forgive me cuz I tried and one day maybe I will describe you well....`,
  `Anyways sooo tell me have youv ever stopped and thought why you're soo lovable, "everyone's fav"? Like how can you feel so much everything, feel emotions at their highest intensity. The way you care, the way you express yourself. Always wondered why you call yourself the highlight of the room...Where now I understand how the room all lightens up with just your mention.You’ve got this weird mix of strong but soft, funny but caring, stubborn but still the one who’ll listen till the end vibe. You don’t try too hard, yet you make people feel better just by being around.`,
  `I still remember the first time I heard of you. And honestly, that version of me thought you might be a little arrogant, but also deep down, I could sense there was all good, something real, something different about you reserved especially for people close to you. And now? Now that I know you personally, I just feel lucky. So fucking lucky. Because what I’ve found in you is someone who carries the sweetest, most positive kind of energy. And that’s rare, like finding a whole new shade of light you didn’t know existed until you saw it with your own eyes.`,
  `You walked in an ultimate moment in my life when life was actually really unfolding. At first I saw you as a temporary change...who knew you'll be the bigger part of this life where now I know it'll hurt. The stupid random problems that got me thinking, sad, laughing dead after realizing how silly it is for you to cry over. The gossips oml. Like...like the Masaala missing out of my life! This is how amazing it feels. Sooo cringe and soo fun.`,
  `All this and yet there's a version of you...who's scared, maybe the curse of feeling too much. Your mood swings although are one of the best thing about your character are kind of a hell for you.  The fear by overthinking, the fears you got. I don't know what to say to that but I know you're strong. and just in case you didn't know this already. I'm so proud of you and everything you have endured and achieved, everyone is. I hope you know how worthy you are and how much you bring to the world.I'm proud of you for not giving up, no matter how bad times were. And you should be so proud of yourself too.`,
  `You are precious, Everything you do has an impact. You are a gift to me, I'd like to believe that. I'm soo genuinely happy for your dayyy todayyy. Apologies as this is the best I could do with my knowledge. I've tried soo hard and even if it brings a very tiny moment of smile on your face. All those hours and days are worth it. Wishing you a VERY GOOD DAY although well yeah a day doesn't justify your existence where it should be celebrated everyday. what’s special isn’t the date. It’s that the world holds you in it, and I get to know what life in the truest form looks like...Anyways, `,
];

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const parasContainer = document.getElementById("paras");
const wishBlock = document.getElementById("wish");
const collagePopup = document.getElementById("collagePopup");
const closeCollage = document.getElementById("closeCollage");
const board = document.getElementById("board");
const hbText = document.getElementById("hbBold");
const text1 = "Of course words can never be enough to describe you.";
const text2 = "That even the longest of words can’t never come close to explaining you.";
const text3 = "Come to think of it. It’s very...Uhm...Yeah, I don't have the word for you.";
const text4 = "But that's the fun part, the unknown, the randomness. Kind of things that make life feel life like.";

async function runFlow(){
  line1.classList.remove("hidden");
  line2.classList.add("hidden");
  line3.classList.add("hidden");
  line4.classList.add("hidden");
  parasContainer.classList.add("hidden");
  wishBlock.classList.add("hidden");

  await typeText(line1, text1, 42);
  line1.animate([{ transform: 'scale(1.05)' }, { transform: 'scale(1)' }], { duration: 280 });

  await wait(380);

  line2.classList.remove("hidden");
  await typeText(line2, text2, 40);
  line2.animate([{ transform: 'translateX(10px)' }, { transform: 'translateX(0)' }], { duration: 300 });

  await wait(320);

  line3.classList.remove("hidden");
  await typeText(line3, text3, 40);
  line3.animate([{ opacity: 0.5 }, { opacity: 1 }], { duration: 360 });

  await wait(380);

line4.classList.remove("hidden");
await typeText(line4, text4, 40);
line4.animate(
  [{ transform: 'translateX(40px)', opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }],
  { duration: 500, easing: "ease-out" }
);


  parasContainer.classList.remove("hidden");
  parasContainer.innerHTML = "";
  demoParas.forEach((pText, idx) => {
  setTimeout(() => {
    const p = document.createElement("p");
    p.className = "para";
    p.innerText = pText;
    parasContainer.appendChild(p);

    p.animate(
      [
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      { duration: 600, easing: 'ease-out', fill: 'forwards' }
     );
   }, idx * 700); 
  });

  const totalParaTime = demoParas.length * 700 + 450;
  setTimeout(()=>{
    wishBlock.classList.remove("hidden");
    wishBlock.classList.add("visible");
    wishBlock.animate([{ opacity:0, transform:'translateY(20px)'}, { opacity:1, transform:'translateY(0)'}], { duration: 520 });

    const lastPara = parasContainer.querySelector('.para:last-child');
    if(lastPara){
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            observer.disconnect();
          }
        });
      }, { threshold: 0.5 });
      observer.observe(lastPara);
    }
  }, totalParaTime);
}
runFlow();

hbText.addEventListener('click', ()=> {
  collagePopup.classList.remove('hidden');
  hbText.setAttribute('aria-pressed', 'true');
  setTimeout(initPapers, 80);
});
hbText.parentElement.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hbText.click();
  }
});

closeCollage.addEventListener('click', ()=> {
  collagePopup.classList.add('hidden');
  hbText.setAttribute('aria-pressed', 'false');
});

let highestZ = 100;

function initPapers(){
  const papers = Array.from(document.querySelectorAll('.paper'));
  if(!papers.length) return;

  const boardRect = board.getBoundingClientRect();
  papers.forEach((paper, idx) => {
    paper.style.transition = 'none';
    const randRot = (Math.random() * 8 - 4); 
    paper.dataset.rot = randRot.toFixed(2);

    paper.style.opacity = '1';
    paper.style.transform = `rotate(${randRot}deg) scale(0.85)`;
    paper.style.zIndex = (100 + idx);

    requestAnimationFrame(()=> {
      const pw = paper.offsetWidth;
      const ph = paper.offsetHeight;
      const centerLeft = Math.round((boardRect.width - pw) / 2);
      const centerTop  = Math.round((boardRect.height - ph) / 2);
      const left = centerLeft + (idx * 3);
      const top  = centerTop + (idx * 4);
      paper.style.left = `${left}px`;
      paper.style.top  = `${top}px`;

      const delay = idx * 120;
      paper.animate([
        { transform: `rotate(${randRot}deg) scale(0.3) translateY(-30px)`, opacity: 0.0 },
        { transform: `rotate(${randRot}deg) scale(1) translateY(0px)`, opacity: 1.0 }
      ], { duration: 520 + idx * 80, delay, easing: 'cubic-bezier(.2,.9,.3,1)', fill: 'forwards' });
    });

    new Paper(paper);
  });
}

class Paper {
  constructor(el){
    this.el = el;
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;
    this.init();
  }

  init(){
    const el = this.el;
    el.style.position = 'absolute';
    el.style.touchAction = 'none'; 

    const start = (clientX, clientY, ev) => {
      ev && ev.preventDefault();
      this.dragging = true;
      el.style.zIndex = ++highestZ;
      const rect = el.getBoundingClientRect();
      this.offsetX = clientX - rect.left;
      this.offsetY = clientY - rect.top;
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      document.addEventListener('touchmove', onTouchMove, { passive:false });
      document.addEventListener('touchend', onUp);
    };

    const onDown = (e) => {
      const clientX = e.clientX;
      const clientY = e.clientY;
      start(clientX, clientY, e);
    };
    const onTouchStart = (e) => {
      const t = e.touches[0];
      start(t.clientX, t.clientY, e);
    };

    const onMove = (e) => {
      if(!this.dragging) return;
      e.preventDefault();
      moveTo(e.clientX, e.clientY);
    };
    const onTouchMove = (e) => {
      if(!this.dragging) return;
      e.preventDefault();
      const t = e.touches[0];
      moveTo(t.clientX, t.clientY);
    };

    const moveTo = (clientX, clientY) => {
      const boardRect = board.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      let newLeft = clientX - boardRect.left - this.offsetX;
      let newTop  = clientY - boardRect.top - this.offsetY;
      newLeft = Math.max(6, Math.min(boardRect.width - elRect.width - 6, newLeft));
      newTop  = Math.max(6, Math.min(boardRect.height - elRect.height - 6, newTop));
      el.style.left = `${newLeft}px`;
      el.style.top  = `${newTop}px`;
    };

    const onUp = (e) => {
      this.dragging = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onUp);
    };

    el.addEventListener('mousedown', onDown);
    el.addEventListener('touchstart', onTouchStart, { passive:false });
    el.addEventListener('contextmenu', (ev) => { ev.preventDefault(); }); // block right-click menu
  }
}
