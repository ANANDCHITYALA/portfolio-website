// Typing effect
const typedText = document.getElementById('typed');
const text = "ANAND CHITYALA";
let index = 0;
(function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index++);
    setTimeout(type, 150);
  }
})();

// Dark mode toggle
const btn = document.getElementById("toggleTheme");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btn.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
});
