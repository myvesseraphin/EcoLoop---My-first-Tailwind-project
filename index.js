/**
 * ECOLOOP MAIN JAVASCRIPT
 * Includes: Contact Form, Gemini AI Assistant, and UI Effects
 */

// --- 1. CONFIGURATION ---
const GEMINI_API_KEY = "AIzaSyDnpNtMYf92ZTKNbIt0uHX_HshYmODbLFI";
const MODEL_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// --- 2. CONTACT FORM LOGIC ---
const contactForm = document.getElementById("contact-form");
const statusMessage = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");

if (contactForm) {
  contactForm.onsubmit = async (e) => {
    e.preventDefault();
    submitBtn.innerText = "SENDING...";
    submitBtn.disabled = true;

    const data = new FormData(contactForm);
    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        statusMessage.classList.remove("hidden");
        contactForm.reset();
        submitBtn.innerText = "SENT SUCCESSFULLY";
        submitBtn.classList.add("bg-green-500");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message —>";
    }
  };
}

// --- 3. AI UI EFFECTS (Toggle & Typing) ---

// Toggle the floating chat window
function toggleChat() {
  const win = document.getElementById("ai-window");
  if (!win) return;

  const isHidden = win.classList.contains("hidden");

  if (isHidden) {
    win.classList.remove("hidden");
    // Small delay to trigger Tailwind scale/opacity transitions
    setTimeout(() => {
      win.classList.replace("opacity-0", "opacity-100");
      win.classList.replace("scale-95", "scale-100");
    }, 10);
  } else {
    win.classList.replace("scale-100", "scale-95");
    win.classList.replace("opacity-100", "opacity-0");
    setTimeout(() => win.classList.add("hidden"), 300);
  }
}

// Typing effect for AI responses
function typeEffect(element, text) {
  let i = 0;
  element.innerHTML = "";
  const speed = 20;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      const chatBox = document.getElementById("chat-box");
      if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
      setTimeout(type, speed);
    }
  }
  type();
}

// --- 4. MAIN AI HANDLER (GEMINI) ---

async function handleSend() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const loading = document.getElementById("ai-loading");
  const sendBtn = document.getElementById("send-btn");

  if (!input || !input.value.trim()) return;

  const userMsg = input.value.trim();
  input.value = "";

  // UI: Add User Message Bubble
  chatBox.insertAdjacentHTML(
    "beforeend",
    `
        <div class="bg-black text-white self-end p-4 rounded-2xl rounded-tr-none text-base font-black max-w-[85%] border-2 border-black animate-fade-in">
            ${userMsg}
        </div>
    `
  );

  loading.classList.remove("hidden");
  chatBox.scrollTop = chatBox.scrollHeight;
  sendBtn.disabled = true;

  try {
    const response = await fetch(`${MODEL_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userMsg }] }],
        systemInstruction: {
          parts: [
            {
              text: "You are the EcoLoop AI. Professional, industrial, minimalist tone. Use bold text for key points. No emojis. Stay focused on e-waste and sustainability.",
            },
          ],
        },
      }),
    });

    const data = await response.json();

    if (data.candidates && data.candidates[0].content) {
      const aiText = data.candidates[0].content.parts[0].text;
      loading.classList.add("hidden");

      const aiMsgDiv = document.createElement("div");
      aiMsgDiv.className =
        "bg-gray-100 self-start p-4 rounded-2xl rounded-tl-none text-base font-bold text-black border-2 border-black max-w-[85%]";
      chatBox.appendChild(aiMsgDiv);

      // Trigger the typing animation
      typeEffect(aiMsgDiv, aiText);
    } else {
      throw new Error(data.error?.message || "Empty Response");
    }
  } catch (err) {
    loading.classList.add("hidden");
    console.error("Gemini Error:", err);
    chatBox.insertAdjacentHTML(
      "beforeend",
      `
            <div class="text-[10px] text-red-600 font-black text-center uppercase p-2 border-2 border-red-600 rounded-xl">
                LIMIT REACHED OR API ERROR: PLEASE WAIT 60 SECONDS
            </div>
        `
    );
  } finally {
    sendBtn.disabled = false;
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// --- 5. INITIALIZATION ---

document.addEventListener("DOMContentLoaded", () => {
  // Listen for Enter key in AI input
  const userInput = document.getElementById("user-input");
  if (userInput) {
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleSend();
    });
  }

  // Global toggle exposure (if needed for onclick in HTML)
  window.toggleChat = toggleChat;
  window.handleSend = handleSend;
});
