
        lucide.createIcons();
        
        // Mobile Hamburger Actions
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIconRaw = document.getElementById('menu-icon-raw');
        
        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            if(!isHidden) {
                menuIconRaw.setAttribute('data-lucide', 'x');
                menuBtn.classList.add('border-secondary', 'text-secondary');
                menuBtn.classList.remove('border-primary', 'text-primary');
                speakJarvis("Mobile UI loaded.", "thinking");
            } else {
                menuIconRaw.setAttribute('data-lucide', 'terminal');
                menuBtn.classList.add('border-primary', 'text-primary');
                menuBtn.classList.remove('border-secondary', 'text-secondary');
                speakJarvis("Mobile UI closed.", "idle");
            }
            lucide.createIcons();
        });

        document.querySelectorAll('.menu-link').forEach(l => l.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIconRaw.setAttribute('data-lucide', 'terminal');
            menuBtn.classList.add('border-primary', 'text-primary');
            menuBtn.classList.remove('border-secondary', 'text-secondary');
            lucide.createIcons();
        }));

        ScrollReveal().reveal('.reveal-left', { origin: 'left', distance: '40px', duration: 1000 });
        ScrollReveal().reveal('.reveal-right', { origin: 'right', distance: '40px', duration: 1000 });
        ScrollReveal().reveal('.reveal-up', { origin: 'bottom', distance: '20px', duration: 800, interval: 150 });

        /* ============================================================
           ENGINE 1: SCRIPT AUTO-TYPING TERMINAL (IDLE ANIMATION)
           ============================================================ */
        const typeTarget = document.getElementById('hacker-type-engine');
        const phrases = [
            "Building and learning things in tech, one step at a time.",
            "Initializing networking node credentials...",
            "Executing frontend web interfaces...",
            "Exploring alternative scientific theories..."
        ];
        let i = 0; let j = 0; let currentPhrase = []; let isDeleting = false; let isEnd = false;

        function loopTyping() {
            isEnd = false;
            if(typeTarget) typeTarget.innerHTML = currentPhrase.join('');

            if (i < phrases.length) {
                if (!isDeleting && j <= phrases[i].length) {
                    currentPhrase.push(phrases[i][j]);
                    j++;
                    if(typeTarget) typeTarget.innerHTML = currentPhrase.join('');
                }
                if (isDeleting && j <= phrases[i].length) {
                    currentPhrase.pop();
                    j--;
                    if(typeTarget) typeTarget.innerHTML = currentPhrase.join('');
                }
                if (j == phrases[i].length) {
                    isEnd = true;
                    isDeleting = true;
                }
                if (isDeleting && j === 0) {
                    currentPhrase = [];
                    isDeleting = false;
                    i++;
                    if (i == phrases.length) { i = 0; }
                }
            }
            const spedUp = Math.random() * (60 - 30) + 30;
            const normalSpeed = Math.random() * (100 - 60) + 60;
            const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
            setTimeout(loopTyping, time);
        }
        setTimeout(loopTyping, 500);

        /* ============================================================
           ENGINE 2: DIGITAL MATRIX TEXT GLITCH SYSTEM
           ============================================================ */
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=_/";
        
        document.querySelectorAll('.glitch-txt, .glitch-contact-txt').forEach(element => {
            element.onmouseover = event => {
                let iteration = 0;
                clearInterval(element.interval);
                
                element.interval = setInterval(() => {
                    element.innerText = element.innerText
                        .split("")
                        .map((letter, index) => {
                            if(index < iteration) {
                                return element.dataset.value[index];
                            }
                            return letters[Math.floor(Math.random() * letters.length)]
                        })
                        .join("");
                    
                    if(iteration >= element.dataset.value.length){ 
                        clearInterval(element.interval);
                    }
                    iteration += 1 / 2;
                }, 25);
            }
        });

        /* ============================================================
           ENGINE 3: AUTOMATIC GLITCH NAME SWAP & MATRIX TRANSITION
           ============================================================ */
        let isMatrixFaceActive = false;

        function triggerGlitchSwap(element) {
            const primaryWord = element.dataset.primary;
            const secondaryWord = element.dataset.secondary;
            const targetWord = element.innerText.trim() === primaryWord ? secondaryWord : primaryWord;
            
            let iteration = 0;
            clearInterval(element.glitchInterval);

            element.glitchInterval = setInterval(() => {
                element.innerText = element.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return targetWord[index] || "";
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iteration >= Math.max(primaryWord.length, secondaryWord.length)) {
                    element.innerText = targetWord;
                    clearInterval(element.glitchInterval);
                    
                   
                }
                iteration += 1 / 2;
            }, 40);
        }

        setInterval(() => {
            document.querySelectorAll('.auto-name-swap').forEach(el => {
                triggerGlitchSwap(el);
            });
        }, 4000);
		function randomMatrixToggle() {

    const activate = Math.random() < 0.35;

    startHackerGlitchTransition(
        activate
    );

    const nextDelay =
        Math.floor(
            Math.random() * 15000
        ) + 10000;

    setTimeout(
        randomMatrixToggle,
        nextDelay
    );
}

setTimeout(
    randomMatrixToggle,
    8000
);

        /* ============================================================
           ENGINE 4: BACKGROUND MATRIX CANVAS EFFECT
           ============================================================ */
        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');

        function resizeMainCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeMainCanvas();
        window.addEventListener('resize', resizeMainCanvas);

        const matrixChars = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+=".split("");
        const fontSize = 14;
        let columns = canvas.width / fontSize;
        let rainDrops = Array(Math.floor(columns)).fill(1);

        window.addEventListener('resize', () => {
            columns = canvas.width / fontSize;
            rainDrops = Array(Math.floor(columns)).fill(1);
        });

        function drawMatrixBg() {
            ctx.fillStyle = 'rgba(3, 3, 5, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff66';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        }
        setInterval(drawMatrixBg, 30);

     /* ============================================================
   ENGINE 5: PORTRAIT HACKER GLITCH TRANSITION & MATRIX FACE
   ============================================================ */

const faceCanvas = document.getElementById('hacker-face-canvas');
const fCtx = faceCanvas.getContext('2d');
const profileImg = document.getElementById('main-profile-img');
const photoContainer = document.getElementById('profile-photo-container');

function resizeFaceCanvas() {
    faceCanvas.width = faceCanvas.parentElement.offsetWidth || 320;
    faceCanvas.height = faceCanvas.parentElement.offsetHeight || 320;
}
resizeFaceCanvas();
window.addEventListener('resize', resizeFaceCanvas);

let faceDrops = Array(70).fill(0);

const matrixFaces = [
    { leftEye: "◉", rightEye: "◉", mouth: "_" },
    { leftEye: "X", rightEye: "X", mouth: "-" },
    { leftEye: "@", rightEye: "@", mouth: "~" },
    { leftEye: "0", rightEye: "0", mouth: "O" },
    { leftEye: "#", rightEye: "#", mouth: "#" },
    { leftEye: "8", rightEye: "8", mouth: "=" }
];

let currentFace = matrixFaces[0];

function drawMysteriousFace() {

    if (!isMatrixFaceActive) return;

    fCtx.fillStyle = "rgba(0,0,0,0.12)";
    fCtx.fillRect(
        0,
        0,
        faceCanvas.width,
        faceCanvas.height
    );

    const w = faceCanvas.width;
    const h = faceCanvas.height;
    const fontSize = 12;

    fCtx.font = `${fontSize}px monospace`;

    for (let i = 0; i < faceDrops.length; i++) {

        const x = i * (w / faceDrops.length);
        const y = faceDrops[i] * fontSize;

        const dx = x - w / 2;

        const char =
            matrixChars[
                Math.floor(
                    Math.random() *
                    matrixChars.length
                )
            ];

        let isFacePixel = false;

        // Hood shape
        if (
            y > h * 0.15 &&
            y < h * 0.85 &&
            Math.abs(dx) <
            (h * 0.85 - y) * 0.75 + 25
        ) {
            isFacePixel = true;
        }

        // Neck cut
        if (
            y > h * 0.70 &&
            Math.abs(dx) >
            (h - y) * 1.4
        ) {
            isFacePixel = false;
        }

        const leftEye =
            y > h * 0.42 &&
            y < h * 0.48 &&
            dx > -w * 0.20 &&
            dx < -w * 0.08;

        const rightEye =
            y > h * 0.42 &&
            y < h * 0.48 &&
            dx > w * 0.08 &&
            dx < w * 0.20;

        const mouth =
            y > h * 0.60 &&
            y < h * 0.66 &&
            Math.abs(dx) < w * 0.10;

        if (leftEye) {

            fCtx.fillStyle = "#00f0ff";
            fCtx.shadowBlur = 15;
            fCtx.shadowColor = "#00f0ff";

            fCtx.fillText(
                currentFace.leftEye,
                x,
                y
            );

            fCtx.shadowBlur = 0;

        }
        else if (rightEye) {

            fCtx.fillStyle = "#00f0ff";
            fCtx.shadowBlur = 15;
            fCtx.shadowColor = "#00f0ff";

            fCtx.fillText(
                currentFace.rightEye,
                x,
                y
            );

            fCtx.shadowBlur = 0;

        }
        else if (mouth) {

            fCtx.fillStyle = "#00ff66";

            fCtx.fillText(
                currentFace.mouth,
                x,
                y
            );

        }
        else if (isFacePixel) {

            fCtx.fillStyle = "#00ff66";

            fCtx.fillText(
                char,
                x,
                y
            );

        }
        else {

            fCtx.fillStyle =
                "rgba(0,255,102,0.10)";

            fCtx.fillText(
                char,
                x,
                y
            );
        }

        if (
            y > h &&
            Math.random() > 0.97
        ) {
            faceDrops[i] = 0;
        }

        faceDrops[i]++;
    }

    requestAnimationFrame(
        drawMysteriousFace
    );
}

function startHackerGlitchTransition(
    activateMatrix
) {

    photoContainer.classList.add(
        "glitch-active"
    );

    setTimeout(() => {

        photoContainer.classList.remove(
            "glitch-active"
        );

        if (activateMatrix) {

            currentFace =
                matrixFaces[
                    Math.floor(
                        Math.random() *
                        matrixFaces.length
                    )
                ];

            profileImg.classList.add(
                "opacity-0"
            );

            faceCanvas.classList.remove(
                "opacity-0"
            );

            faceCanvas.classList.add(
                "opacity-100"
            );

            isMatrixFaceActive = true;

            faceDrops.fill(0);

            drawMysteriousFace();

        } else {

            profileImg.classList.remove(
                "opacity-0"
            );

            faceCanvas.classList.add(
                "opacity-0"
            );

            faceCanvas.classList.remove(
                "opacity-100"
            );

            isMatrixFaceActive = false;
        }

    }, 350);
}

        /* ============================================================
           ENGINE 6: SKILL MODULE LOG DISPLAYER WITH MATRIX TEXT ANIMATION
           ============================================================ */
        function decodeTextMatrixEffect(element, targetText) {
            let iteration = 0;
            clearInterval(element.matrixTextInterval);
            
            element.matrixTextInterval = setInterval(() => {
                element.innerText = targetText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return targetText[index];
                        }
                        if (letter === " " || letter === "\n") {
                            return letter;
                        }
                        return matrixChars[Math.floor(Math.random() * matrixChars.length)];
                    })
                    .join("");
                
                if (iteration >= targetText.length) {
                    clearInterval(element.matrixTextInterval);
                }
                iteration += Math.ceil(targetText.length / 30) + 1;
            }, 15);
        }

        function showSkillInline(skillId) {
            const container = document.getElementById('inline-display-container');
            const modId = document.getElementById('inline-module-id');
            const title = document.getElementById('inline-module-title');
            const desc = document.getElementById('inline-module-desc');
            
            container.classList.remove('hidden');
            setTimeout(() => {
                container.classList.remove('opacity-0', 'scale-95');
                container.classList.add('opacity-100', 'scale-100');
            }, 50);
            
            const data = {
    networking: {
        mod: "> MODULE: NET_INFRA_LOG_DECRYPTED",
        title: "Computer Network Engineering Node",
        text: "Currently studying computer networking with a focus on infrastructure, connectivity, and troubleshooting. Interested in understanding how data travels across networks, how systems communicate securely, and how modern digital environments are built and maintained."
    },

    webdev: {
        mod: "> MODULE: FRONTEND_CORE_MAIN_LOG",
        title: "Frontend Development & Interface Design",
        text: "Passionate about creating responsive and visually appealing web experiences. Constantly exploring new techniques in frontend development, UI design, animations, and interactive user experiences while building projects that combine functionality with creativity."
    },

    exploration: {
        mod: "> MODULE: RESEARCH_AND_EXPERIMENTAL_LAB",
        title: "Technology Exploration & Creative Research",
        text: "Driven by curiosity and a desire to understand how things work. Frequently exploring science, astronomy, history, engineering concepts, creative writing, and experimental projects that encourage learning through hands-on experience and discovery."
    }
};
            
            if(data[skillId]) {
                modId.innerText = data[skillId].mod;
                decodeTextMatrixEffect(title, data[skillId].title);
                decodeTextMatrixEffect(desc, data[skillId].text);
                speakJarvis("Skill decrypted.", "thinking");
            }
            container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        /* ============================================================
           ENGINE 7: SECURE LINK TRIGGER INTERCEPTOR (FIX NEW TAB DELAY)
           ============================================================ */
        document.querySelectorAll('.hacker-link-trigger').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const destinationHref = this.getAttribute('href');
                const targetWindow = this.getAttribute('target') || '_self';
                const labelContainer = this.querySelector('.exec-label');
                const defaultLabelText = labelContainer ? labelContainer.innerText : '[ EXECUTE ]';
                
                if (labelContainer) labelContainer.innerText = '[ BYPASSING... ]';
                speakJarvis("Redirecting node...", "thinking");
                
                setTimeout(() => {
                    if (labelContainer) labelContainer.innerText = defaultLabelText;
                    
                    if (targetWindow === '_blank') {
                        window.open(destinationHref, '_blank');
                    } else {
                        window.location.href = destinationHref;
                    }
                }, 1000);
            });
        });

       /* ============================================================
   ENGINE 8: IMPROVED JARVIS AI SYSTEM
   ============================================================ */
const visitorData = {

    get visitorId() {
        return document.getElementById("visitor-id")?.textContent || "UNKNOWN";
    },

    get browser() {
        return document.getElementById("browser-info")?.textContent || "Unknown";
    },

    get device() {
        return document.getElementById("device-info")?.textContent || "Unknown";
    },

    get battery() {
        return document.getElementById("battery-info")?.textContent || "N/A";
    },

    get ping() {
        return document.getElementById("ping-load")?.textContent || "N/A";
    },

    get timezone() {
        return document.getElementById("timezone-info")?.textContent || "Unknown";
    },

    get language() {
        return document.getElementById("language-info")?.textContent || "Unknown";
    },

    get resolution() {
        return document.getElementById("resolution-info")?.textContent || "Unknown";
    },

    get os() {
        return document.getElementById("os-info")?.textContent || "Unknown";
    },

    get input() {
        return document.getElementById("input-info")?.textContent || "Unknown";
    },

    get scale() {
        return document.getElementById("scale-info")?.textContent || "Unknown";
    },

    get connection() {
        return document.getElementById("connection-info")?.textContent || "Unknown";
    },

    get darkMode() {
        return document.getElementById("darkmode-info")?.textContent || "Unknown";
    },

    get touchPoints() {
        return document.getElementById("touch-info")?.textContent || "0";
    },

    get threads() {
        return document.getElementById("threads-info")?.textContent || "?";
    },

    get ram() {
        return document.getElementById("ram-info")?.textContent || "?";
    },

    get gpu() {
        return document.getElementById("gpu-info")?.textContent || "Unknown";
    },

    get cpuLoad() {
        return document.getElementById("cpu-load")?.textContent || "N/A";
    },

    get ramLoad() {
        return document.getElementById("ram-load")?.textContent || "N/A";
    },
	get humanScore() {
    return document.getElementById("human-score")?.textContent || "0%";
},

    get network() {
        return document.getElementById("net-load")?.textContent || "N/A";
    }

};
const jarvisSpeech = document.getElementById('jarvis-speech');
const jarvisEyeLeft = document.getElementById('jarvis-eye-left');
const jarvisEyeRight = document.getElementById('jarvis-eye-right');
const jarvisMouth = document.getElementById('jarvis-mouth');

let lastInteractionTimestamp = Date.now();
let isSystemIdleMode = false;
let idleCycleTimer = null;

const ownerFactsData = [

    "Operator identified as Rex.",
    "Rex is currently studying computer networking.",
    "Networking remains one of Rex's primary interests.",
    "Routing and infrastructure systems frequently attract Rex's attention.",
    "Rex enjoys learning how complex systems work behind the scenes.",

    "Web development module detected.",
    "Frontend experimentation is currently active.",
    "TailwindCSS appears frequently inside Rex's projects.",
    "Creative interface design remains under continuous development.",
    "Random coding sessions may occur without warning.",

    "Astronomy archive accessed successfully.",
    "Rex enjoys exploring stars, planets and space phenomena.",
    "Curiosity levels remain unusually high.",
    "Scientific exploration module remains operational.",
    "Unknown theories continue to be investigated.",

    "History database remains active.",
    "Military technology topics detected in local interests.",
    "Research mode frequently engages during late-night sessions.",
    "Learning never truly stops in this workspace.",
    "Knowledge acquisition protocols functioning normally.",

    "Writing subsystem detected.",
    "Novel and story development module available.",
    "Creative narrative generation remains operational.",
    "Ideas often appear faster than documentation.",
    "Imagination levels remain above recommended limits.",

    "Gaming module found.",
    "Digital entertainment systems remain accessible.",
    "Recreational protocols currently enabled.",
    "Achievement hunting routines occasionally detected.",
    "System recommends touching grass periodically.",

    "DIY experimentation module active.",
    "Rex enjoys building random projects for no particular reason.",
    "Curiosity-driven engineering remains online.",
    "Prototype creation probability remains elevated.",
    "Another side project may already be under construction.",

    "Jarvis monitoring all active systems.",
    "System integrity verified.",
    "No critical anomalies detected.",
    "Background diagnostics completed successfully.",
    "Mainframe operating within expected parameters.",
    "Communication channels remain available.",
    "Network status secure.",
    "Telemetry synchronization completed.",
    "Awaiting further instructions.",
    "Passive observation mode engaged.",

    "Operator activity levels appear stable.",
    "Monitoring user interaction patterns.",
    "Portfolio systems responding normally.",
    "Knowledge archives remain accessible.",
    "Security protocols currently nominal.",
    "Environmental scan completed successfully.",

    "Coffee dependency status: unknown.",
    "Mathematics enthusiasm level: not detected.",
    "Probability of starting another project: 97%.",
    "Probability of finishing every project: classified.",
    "Random idea generator operating at maximum capacity.",
    "Sleep schedule data unavailable.",
    "Productivity fluctuations detected.",
    "Chaos levels remain manageable.",
    "The operator appears to enjoy experimenting with everything.",
    "Warning: curiosity levels exceed factory specifications.",

    "Jarvis remains online.",
    "Observation mode active.",
    "Awaiting operator input.",
    "All systems green.",
    "Monitoring complete.",
    "Standing by."
];

const expressions = {
    idle: ["O","_","O"],
    thinking: ["o",".","o"],
    active: ["O","v","O"],
    happy: ["^","w","^"],
    reading: ["-","_","-"],
    alert: ["0","v","0"],
    suspicious: [">","_","<"],
    excited: ["O","W","O"],
    sleep: ["-",".","-"]
};

const idleFaces = [
    "idle",
    "thinking",
    "happy",
    "suspicious",
    "sleep"
];
const jarvisDescriptions = {

    home:
    "Main landing interface containing primary system access.",

    about:
    "Personal profile, interests and technical background.",

    specialist:
    "Technical modules, skills and learning focus.",

    contact:
    "Communication channels and external connections.",

    networking:
    "Networking module covering infrastructure, routing and connectivity.",

    webdev:
    "Frontend development module focused on interfaces and websites.",

    exploration:
    "Experimental sandbox for technology research and creative projects.",

    email:
    "Direct electronic communication channel.",

    whatsapp:
    "Real-time messaging communication node.",

    github:
    "Project archive and source code repository.",

    discord:
    "Community and direct chat terminal."
};

setInterval(() => {
    const time = new Date();

    document.getElementById('jarvis-clock').textContent =
        time.getHours().toString().padStart(2,'0') + ':' +
        time.getMinutes().toString().padStart(2,'0') + ':' +
        time.getSeconds().toString().padStart(2,'0');
},1000);

function updateJarvisFaceExpression(mode="idle") {

    const face = expressions[mode] || expressions.idle;

    jarvisEyeLeft.innerText = face[0];
    jarvisMouth.innerText = face[1];
    jarvisEyeRight.innerText = face[2];
}

function speakJarvis(message,mood="active") {

    updateJarvisFaceExpression(mood);

    jarvisSpeech.innerText = message;
}

function refreshInteractionTimestamp() {

    lastInteractionTimestamp = Date.now();

    if(isSystemIdleMode){

        isSystemIdleMode = false;

        clearTimeout(idleCycleTimer);

        speakJarvis(
            "User interaction detected. Systems online.",
            "active"
        );
    }
}
function getRandomJarvisFact(){

    // 25% kemungkinan bikin kalimat dinamis

    if(Math.random() < 0.25){

        const dynamicMessages = [

    `Visitor ${visitorData.visitorId} authenticated.`,
    `Session ${visitorData.visitorId} verified.`,
    `Monitoring ${visitorData.browser} environment.`,
    `Device identified as ${visitorData.device}.`,
    `Battery reserve at ${visitorData.battery}.`,
    `Current latency measured at ${visitorData.ping}.`,
    `Timezone synchronized with ${visitorData.timezone}.`,
	`Visitor ${visitorData.visitorId} authenticated.`,
`Operating system ${visitorData.os} confirmed.`,
`Browser environment: ${visitorData.browser}.`,
`GPU renderer: ${visitorData.gpu}.`,
`System memory reports ${visitorData.ram}.`,
`Processor threads available: ${visitorData.threads}.`,
`Display resolution ${visitorData.resolution}.`,
`Display scaling configured at ${visitorData.scale}.`,
`Input subsystem: ${visitorData.input}.`,
`Battery reserve currently ${visitorData.battery}.`,
`Connection profile: ${visitorData.connection}.`,
`Network throughput estimated at ${visitorData.network}.`,
`Current latency measured at ${visitorData.ping}.`,
`Timezone synchronized with ${visitorData.timezone}.`,
`Language preference detected: ${visitorData.language}.`,
`Dark mode status: ${visitorData.darkMode}.`,
`Touch capability reports ${visitorData.touchPoints}.`,
`CPU load currently ${visitorData.cpuLoad}.`,
`Memory utilization ${visitorData.ramLoad}.`,
`Human activity score currently ${visitorData.humanScore}.`,
`Operator engagement measured at ${visitorData.humanScore}.`,
`Interaction index: ${visitorData.humanScore}.`,

    `Analyzing visitor ${visitorData.visitorId}.`,
    `Tracking telemetry data.`,
    `Scanning active systems.`,
    `Verifying network integrity.`,
    `Monitoring runtime diagnostics.`,
    `System status remains nominal.`,
    `Connection remains secure.`

];

        return dynamicMessages[
            Math.floor(
                Math.random() *
                dynamicMessages.length
            )
        ];
    }

    // 75% ambil fact normal

    return ownerFactsData[
        Math.floor(
            Math.random() *
            ownerFactsData.length
        )
    ];
}
function initializeIdleFactLoop(){

    if(!isSystemIdleMode) return;

    const randomFace =
        idleFaces[
            Math.floor(
                Math.random()*idleFaces.length
            )
        ];

    updateJarvisFaceExpression(randomFace);

    speakJarvis(
    getRandomJarvisFact(),
    randomFace
);

    idleCycleTimer = setTimeout(() => {

        if(isSystemIdleMode){
            initializeIdleFactLoop();
        }

    },7000);
}

function checkUserInteractionState(){

    const selected =
        window
        .getSelection()
        .toString()
        .trim();

    if(selected.length > 0){

        refreshInteractionTimestamp();

        const preview =
            selected.substring(0,40);

        speakJarvis(
            `Reading: "${preview}${selected.length > 40 ? '...' : ''}"`,
            "reading"
        );

        return;
    }

    if(
        Date.now() -
        lastInteractionTimestamp >
        15000
    ){

        if(!isSystemIdleMode){

            isSystemIdleMode = true;

            initializeIdleFactLoop();
        }
    }
}

setInterval(checkUserInteractionState,1000);

document.addEventListener(
    'selectionchange',
    checkUserInteractionState
);

window.addEventListener('click',() => {
    refreshInteractionTimestamp();
});


/* ---------- NAVIGATION ---------- */

document.querySelectorAll('.nav-link').forEach(link => {

    link.addEventListener('click', () => {

        const section =
            link.getAttribute('href')
            .replace('#','');

        speakJarvis(
            jarvisDescriptions[section],
            "thinking"
        );

    });

});

/* ---------- MOBILE MENU ---------- */

document.querySelectorAll('.menu-link').forEach(link => {

    link.addEventListener('click',() => {

        const text =
            link.textContent.toLowerCase();

        if(text.includes('home')){
            speakJarvis(
                "Home module selected.",
                "happy"
            );
        }

        if(text.includes('about')){
            speakJarvis(
                "About module selected.",
                "thinking"
            );
        }

        if(text.includes('specialist')){
            speakJarvis(
                "Specialist node selected.",
                "alert"
            );
        }

        if(text.includes('contact')){
            speakJarvis(
                "Contact node selected.",
                "active"
            );
        }
    });
});

/* ---------- SKILL CARDS ---------- */

document
.querySelectorAll('.skill-card')
.forEach(card => {

    card.addEventListener('click', () => {

        const title =
            card.querySelector('h3')
            ?.innerText
            ?.toLowerCase();

        if(title.includes('network'))
            speakJarvis(
                jarvisDescriptions.networking,
                "alert"
            );

        else if(title.includes('web'))
            speakJarvis(
                jarvisDescriptions.webdev,
                "thinking"
            );

        else if(title.includes('exploration'))
            speakJarvis(
                jarvisDescriptions.exploration,
                "excited"
            );

    });

});

/* ---------- RANDOM BLINK ---------- */

setInterval(() => {

    const currentFace =
        expressions.idle;

    if(
        jarvisEyeLeft.innerText !== "-" &&
        Math.random() > 0.35
    ){

        jarvisEyeLeft.innerText = "-";
        jarvisEyeRight.innerText = "-";

        setTimeout(() => {

            jarvisEyeLeft.innerText =
                currentFace[0];

            jarvisEyeRight.innerText =
                currentFace[2];

        },150);
    }

},4000);
document
.querySelector('a[href^="mailto:"]')
?.addEventListener('click',() => {

    speakJarvis(
        jarvisDescriptions.email,
        "active"
    );

});

document
.querySelector('a[href*="wa.me"]')
?.addEventListener('click',() => {

    speakJarvis(
        jarvisDescriptions.whatsapp,
        "happy"
    );

});

document
.querySelector('a[href*="github.com"]')
?.addEventListener('click',() => {

    speakJarvis(
        jarvisDescriptions.github,
        "alert"
    );

});

document
.querySelector('a[href*="discord.com"]')
?.addEventListener('click',() => {

    speakJarvis(
        jarvisDescriptions.discord,
        "excited"
    );

});
function getStartupMessage(){

    const visitorId = visitorData?.visitorId || "UNKNOWN";

    const startupMessages = [

        `Identity ${visitorId} verified. Jarvis online and standing by.`,

        `Welcome back, visitor ${visitorId}. All systems operational.`,

        `Session ${visitorId} detected. Jarvis ready for duty.`,

        `Authentication successful. Visitor ${visitorId} recognized.`,

        `Good day, visitor ${visitorId}. Diagnostics complete.`,

        `Access granted. Initializing portfolio systems.`,

        `Jarvis online. Visitor ${visitorId} logged successfully.`,

        `System synchronization complete. Welcome, visitor ${visitorId}.`,

        `Portfolio archive unlocked. Standing by.`,

        `Telemetry link established. All systems nominal.`

    ];

    return startupMessages[
        Math.floor(
            Math.random() * startupMessages.length
        )
    ];
}

setTimeout(() => {

    speakJarvis(
        getStartupMessage(),
        "happy"
    );

}, 500);

        /* ============================================================
           ENGINE 9: DRAGGABLE COMPONENT OVERLAYS FOR MOBILE & DESKTOP
           ============================================================ */
        const dragBox = document.getElementById('jarvis-floating-container');
        const dragHeader = document.getElementById('jarvis-header');
        let currentX; let currentY; let initialX; let initialY;
        let xOffset = 0; let yOffset = 0; let activeDragState = false;

        dragHeader.addEventListener('mousedown', dragStart);
        document.addEventListener('mousemove', dragProcess);
        document.addEventListener('mouseup', dragTerminate);

        dragHeader.addEventListener('touchstart', dragStart, { passive: true });
        document.addEventListener('touchmove', dragProcess, { passive: false });
        document.addEventListener('touchend', dragTerminate);

        function dragStart(e) {
            let clientX, clientY;
            if (e.type === 'touchstart') {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }
            initialX = clientX - xOffset;
            initialY = clientY - yOffset;
            if (e.target === dragHeader || dragHeader.contains(e.target)) {
                activeDragState = true;
            }
        }

        function dragProcess(e) {
            if (activeDragState) {
                if (e.cancelable) e.preventDefault();
                let clientX, clientY;
                if (e.type === 'touchmove') {
                    clientX = e.touches[0].clientX;
                    clientY = e.touches[0].clientY;
                } else {
                    clientX = e.clientX;
                    clientY = e.clientY;
                }
                currentX = clientX - initialX;
                currentY = clientY - initialY;
                xOffset = currentX;
                yOffset = currentY;
                dragBox.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }
        }

        function dragTerminate() {
            initialX = currentX;
            initialY = currentY;
            activeDragState = false;
        }
		
		// Fake live stats

let cpuEstimate = 0;
let ramEstimate = 0;
let pingEstimate = 0;
let networkEstimate = 0;

async function updateSystemStats() {

    // Ping estimasi

    const start = performance.now();

    try {

        await fetch(window.location.href, {
            method: "HEAD",
            cache: "no-store"
        });

        pingEstimate =
            Math.round(
                performance.now() - start
            );

    } catch {

        pingEstimate = 999;

    }

    // Network estimasi

    if (navigator.connection) {

        networkEstimate =
            navigator.connection.downlink || 0;

    }

    // CPU estimasi dari jumlah core

    const cores =
        navigator.hardwareConcurrency || 4;

    cpuEstimate =
        Math.min(
            95,
            Math.round(
                15 +
                (100 / cores) +
                Math.random() * 12
            )
        );

    // RAM estimasi

    const ram =
        navigator.deviceMemory || 8;

    ramEstimate =
        Math.min(
            90,
            Math.round(
                35 +
                (8 / ram) * 20 +
                Math.random() * 10
            )
        );

    document.getElementById("cpu-load")
        .textContent =
        cpuEstimate + "%";

    document.getElementById("ram-load")
        .textContent =
        ramEstimate + "%";

    document.getElementById("net-load")
        .textContent =
        networkEstimate + " Mbps";

    const pingValue =
        pingEstimate + " ms";

    document.getElementById("ping-load")
        .textContent =
        pingValue;

    document.getElementById("hero-ping")
        .textContent =
        pingValue;

    // Status

    let status = "SECURE";

    if (pingEstimate > 100) {
        status = "STABLE";
    }

    if (pingEstimate > 250) {
        status = "WARNING";
    }

    document.getElementById("hero-status")
        .textContent =
        status;
}

updateSystemStats();

setInterval(
    updateSystemStats,
    5000
);
// Device info

document.getElementById("device-info").textContent =
    navigator.platform;

 function getBrowserName() {

    const ua = navigator.userAgent;

    if (ua.includes("Edg/")) {
        return "Microsoft Edge";
    }

    if (ua.includes("OPR/")) {
        return "Opera";
    }

    if (ua.includes("Firefox/")) {
        return "Firefox";
    }

    if (ua.includes("Chrome/")) {
        return "Google Chrome";
    }

    if (ua.includes("Safari/")) {
        return "Safari";
    }

    return "Unknown";
}

document.getElementById("browser-info")
    .textContent = getBrowserName();

document.getElementById("threads-info").textContent =
    navigator.hardwareConcurrency || "?";

document.getElementById("ram-info").textContent =
    (navigator.deviceMemory || "?") + " GB";

document.getElementById("timezone-info").textContent =
    Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone;

// GPU detection

const canvasGPU =
    document.createElement("canvas");

const gl =
    canvasGPU.getContext("webgl");

if (gl) {

    const debug =
        gl.getExtension(
            "WEBGL_debug_renderer_info"
        );

    if (debug) {

        const gpu =
            gl.getParameter(
                debug.UNMASKED_RENDERER_WEBGL
            );

        document.getElementById("gpu-info")
            .textContent = gpu;

    } else {

        document.getElementById("gpu-info")
            .textContent = "Unknown";

    }

} else {

    document.getElementById("gpu-info")
        .textContent = "Unsupported";

}

//visitor id
function generateVisitorId() {

    const seed =
    navigator.userAgent +
    navigator.platform +
    navigator.hardwareConcurrency +
    navigator.deviceMemory +
    screen.width +
    screen.height +
    Intl.DateTimeFormat().resolvedOptions().timeZone;

    let hash = 0;

    for(let i = 0; i < seed.length; i++) {

        hash =
        ((hash << 5) - hash)
        + seed.charCodeAt(i);

        hash |= 0;
    }

    return Math.abs(hash)
        .toString(16)
        .toUpperCase()
        .slice(0,8);
}

const visitorId = generateVisitorId();

document.getElementById("visitor-id").textContent =
    visitorId;

document.getElementById("hero-visitor-id").textContent =
    visitorId;
	
//battery
let batteryLevel = "Unknown";

if (navigator.getBattery) {

    navigator.getBattery().then(battery => {

        function updateBattery() {

            batteryLevel =
                Math.round(
                    battery.level * 100
                ) + "%";

            document.getElementById(
                "battery-info"
            ).textContent = batteryLevel;
        }

        updateBattery();

        battery.addEventListener(
            "levelchange",
            updateBattery
        );
    });
}

//matrix effect
function matrixReveal(element, finalText) {

    const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

    let iteration = 0;

    const interval =
    setInterval(() => {

        element.textContent =
        finalText
            .split("")
            .map((char, index) => {

                if(index < iteration){
                    return finalText[index];
                }

                return chars[
                    Math.floor(
                        Math.random() *
                        chars.length
                    )
                ];

            })
            .join("");

        iteration += 0.5;

        if(iteration >= finalText.length){

            clearInterval(interval);

            element.textContent =
            finalText;
        }

    }, 30);
}

//detector
document.getElementById("language-info").textContent =
    navigator.language;

document.getElementById("resolution-info").textContent =
    `${screen.width}x${screen.height}`;

document.getElementById("scale-info").textContent =
    Math.round(window.devicePixelRatio * 100) + "%";

document.getElementById("touch-info").textContent =
    navigator.maxTouchPoints || 0;

document.getElementById("input-info")
    .textContent =
    navigator.maxTouchPoints > 0
    ? "Mouse + Touch"
    : "Mouse & Keyboard";

document.getElementById("darkmode-info").textContent =
    window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "Enabled"
        : "Disabled";

document.getElementById("connection-info").textContent =
    navigator.connection?.effectiveType?.toUpperCase()
        || "Unknown";
	
//os detected
function getOS() {

    const ua = navigator.userAgent;

    if (ua.includes("Windows NT"))
        return "Windows";

    if (ua.includes("Mac OS X"))
        return "macOS";

    if (ua.includes("Android"))
        return "Android";

    if (ua.includes("Linux"))
        return "Linux";

    if (ua.includes("iPhone") || ua.includes("iPad"))
        return "iOS";

    return "Unknown";
}

document.getElementById("os-info").textContent =
    getOS();
	
//human skor
let humanScore = 50;

function increaseHumanScore(amount) {

    humanScore = Math.min(
        99,
        humanScore + amount
    );

    updateHumanScore();
}

function updateHumanScore() {

    document.getElementById(
        "human-score"
    ).textContent =
    Math.round(humanScore) + "%";
}

// mouse
window.addEventListener(
    "mousemove",
    () => increaseHumanScore(0.2)
);

// click
window.addEventListener(
    "click",
    () => increaseHumanScore(1)
);

// keyboard
window.addEventListener(
    "keydown",
    () => increaseHumanScore(2)
);

// turun perlahan saat idle
setInterval(() => {

    humanScore = Math.max(
        35,
        humanScore - 0.3
    );

    updateHumanScore();

}, 1000);

updateHumanScore();
	
//rotasi data
const statusGroups = [

    [
        ["STATUS", "visitor-status"],
        ["HUMAN SCORE", "human-score"],
        ["VISITOR ID", "visitor-id"]
    ],

    [
        ["DEVICE", "device-info"],
        ["BROWSER", "browser-info"],
        ["BATTERY", "battery-info"]
    ],

    [
        ["THREADS", "threads-info"],
        ["RAM", "ram-info"],
        ["GPU", "gpu-info"]
    ],

    [
        ["TIMEZONE", "timezone-info"],
        ["LANGUAGE", "language-info"],
        ["OS", "os-info"]
    ],

    [
        ["RESOLUTION", "resolution-info"],
        ["DISPLAY SCALE", "scale-info"],
        ["INPUT DEVICE", "input-info"]
    ],

    [
        ["CONNECTION", "connection-info"],
        ["DARK MODE", "darkmode-info"],
        ["TOUCH POINTS", "touch-info"]
    ],

    [
        ["CPU LOAD", "cpu-load"],
        ["RAM USAGE", "ram-load"],
        ["NETWORK", "net-load"]
    ],

    [
        ["PING", "ping-load"],
        ["BATTERY", "battery-info"],
        ["STATUS", "visitor-status"]
    ]
];

//render
let currentStatusGroup = 0;

function renderStatusGroup() {

    const group =
        statusGroups[
            currentStatusGroup
        ];

    for(let i = 0; i < 3; i++){

        const label =
        document.getElementById(
            `dynamic-label-${i+1}`
        );

        const value =
        document.getElementById(
            `dynamic-value-${i+1}`
        );

        label.textContent =
            group[i][0];

        const source =
        document.getElementById(
            group[i][1]
        );

        matrixReveal(
            value,
            source.textContent
        );
    }
}

renderStatusGroup();

setInterval(() => {

    currentStatusGroup++;

    if(
        currentStatusGroup >=
        statusGroups.length
    ){
        currentStatusGroup = 0;
    }

    renderStatusGroup();

}, 8000);