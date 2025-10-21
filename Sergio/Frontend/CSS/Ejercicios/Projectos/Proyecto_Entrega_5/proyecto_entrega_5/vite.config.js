import { defineConfig } from 'vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: "/CSS-HTML-Proyect/",
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        // Blogs
        blog_innovadora: path.resolve(__dirname, 'blogs/Blog_Innovadora.html'),
        blog_junior: path.resolve(__dirname, 'blogs/Blog_Junior.html'),
        blog_saber: path.resolve(__dirname, 'blogs/Blog_Saber.html'),
        // Vistas
        aviso_legal: path.resolve(__dirname, 'vistas/Aviso_Legal.html'),
        blog: path.resolve(__dirname, 'vistas/Blog.html'),
        contacto: path.resolve(__dirname, 'vistas/Contacto.html'),
        cursos: path.resolve(__dirname, 'vistas/Cursos.html'),
        login: path.resolve(__dirname, 'vistas/Login.html'),
        quienes_somos: path.resolve(__dirname, 'vistas/Quienes_somos.html'),
        registro: path.resolve(__dirname, 'vistas/Registro.html'),
        // Cursos
        blockchain: path.resolve(__dirname, 'cursos/Blockchain.html'),
        inteligencia_artificial: path.resolve(__dirname, 'cursos/Inteligencia_Artificial.html'),
        ciberseguridad: path.resolve(__dirname, 'cursos/Ciberseguridad.html'),
        full_stack: path.resolve(__dirname, 'cursos/Full-Stack.html')
      },
      output: {
        entryFileNames: 'assets/js/[name].[hash].js',
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: ({name}) => {
          const ext = path.extname(name);
          if (/\.(jpg|jpeg|png|gif|svg|webp)$/.test(ext)) {
            return 'img/[name].[hash][extname]';
          }
          if (/\.(mp4|webm|ogg)$/.test(ext)) {
            return 'video/[name].[hash][extname]';
          }
          if (/\.(css)$/.test(ext)) {
            return 'assets/css/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@img': path.resolve(__dirname, './img'),
      '@video': path.resolve(__dirname, './video')
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'img/**/*',
          dest: './img'
        },
        {
          src: 'video/**/*',
          dest: './video'
        },
      ]
    })
  ]
});