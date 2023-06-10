const htmlCodeEl = document.querySelector("#html");
const cssCodeEl = document.querySelector("#css");
const jsCodeEl = document.querySelector("#js");
const outputEl = document.querySelector("#output");

function run() {

    localStorage.setItem('htmlCodeEl', htmlCodeEl.value);
    localStorage.setItem('cssCodeEl', cssCodeEl.value);
    localStorage.setItem('jsCodeEl', jsCodeEl.value);

    outputEl.contentDocument.body.innerHTML = `<style>${localStorage.cssCodeEl}</style>` + localStorage.htmlCodeEl;
    outputEl.contentWindow.eval(localStorage.jsCodeEl);
}

htmlCodeEl.addEventListener("keyup",()=>{run()})
cssCodeEl.addEventListener("keyup",()=>{run()})
jsCodeEl.addEventListener("keyup",()=>{run()})

htmlCodeEl.value = localStorage.htmlCodeEl;
cssCodeEl.value = localStorage.cssCodeEl;
jsCodeEl.value = localStorage.jsCodeEl;