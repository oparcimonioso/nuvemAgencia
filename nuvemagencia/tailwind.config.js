import tailwindcss from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          bg: 'rgb(var(--color-bg)',
          text: 'rgb(var(--color-text))'
        }
      }
    },
    plugins: [tailwindcss],
  }

module.exports = {
    darkMode: 'class',
    // ... resto da configuração
  }