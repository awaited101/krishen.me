/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: { extend: { fontFamily: { kreon: "Kreon" } }, fontSize: {} },
    corePlugins: { preflight: false },
  };
  