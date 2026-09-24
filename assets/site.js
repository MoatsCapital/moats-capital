"use strict";
const form = document.getElementById("contact-form");
if (form) {
  const recipient = (window.MOATS_CONFIG?.contactEmail || "").trim();
  const configured = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient);
  const button = document.getElementById("send-button");
  button.disabled = !configured;
  if (configured) document.getElementById("form-note").textContent = "Opens a draft in your email app. Review it and send it there.";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!configured || !form.reportValidity()) return;
    const data = new FormData(form);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent("Moats Capital inquiry")}&body=${encodeURIComponent(body)}`;
    document.getElementById("form-status").textContent = "Your email app should open with a draft. Your message has not been sent by this website. If no draft opens, please configure an email app on your device.";
  });
}
