document.getElementById("contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for the message! (In real life you'd connect this to Formspree / EmailJS / Supabase / etc.)");
  e.target.reset();
});
