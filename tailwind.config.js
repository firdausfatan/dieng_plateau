/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{html,js}", // Sesuaikan dengan struktur proyekmu
    "./src/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Gradien dengan posisi mulai dari 70%
        'custom-gradient': "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 1)), url('/img/dieng1.png')",
      },
    },
  },
  plugins: [],
};