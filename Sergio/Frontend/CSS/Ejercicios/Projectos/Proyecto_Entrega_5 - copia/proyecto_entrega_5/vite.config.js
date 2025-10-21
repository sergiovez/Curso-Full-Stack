import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },
  base: "/CSS-HTML-Proyect/",
  build: {
    outDir: 'docs', // Cambiado a 'docs' para GitHub Pages
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html', // Usamos rutas relativas simples
        blog1: './blogs/Blog_Innovadora.html',
        blog2: './blogs/Blog_Junior.html',
        blog3: './blogs/Blog_Saber.html',
        aviso: './vistas/Aviso_Legal.html',
        blogs: './vistas/Blog.html',
        contacto: './vistas/Contacto.html',
        cursos: './vistas/Cursos.html',
        login: './vistas/Login.html',
        quienes: './vistas/Quienes_somos.html',
        registro: './vistas/Registro.html',
        curso1: './cursos/Blockchain.html',
        curso2: './cursos/Inteligencia_Artificial.html',
        curso3: './cursos/Ciberseguridad.html',
        curso4: './cursos/Full-Stack.html',
        // Añade aquí otros archivos HTML que necesites
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          if (/\.(jpg|jpeg|png|gif|svg|webp)$/.test(assetInfo.name)) {
            return 'img/[name].[hash][extname]';
          }
          if (/\.(mp4|webm|ogg)$/.test(assetInfo.name)) {
            return 'video/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: './blogs/*.html',
          dest: './blogs'
        },
        {
          src: './vistas/*.html',
          dest: './vistas'
        },
        {
          src: './cursos/*.html',
          dest: './cursos'
        },
        {
          src: './img/**/*',
          dest: './img'
        },
        {
          src: './video/**/*',
          dest: './video'
        }
      ]
    })
  ]
});