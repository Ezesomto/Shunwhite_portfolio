const box = document.createElement("div");
const shadow = box.attachShadow({ mode: "closed" });
shadow.innerHTML = `<style>.card{padding:20px;background:#111;border-radius:10px;color:#fff}</style>
    <div class='card'>Welcome to my portfolio</div>`;
document.body.appendChild(box);
