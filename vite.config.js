import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), imagetools()],
  // mode: 'development', // < this is important
  // build: {
  //   minify: false,
  //   // sourcemap: true // < this allows the browser to point you to the correct file
  // }
});
