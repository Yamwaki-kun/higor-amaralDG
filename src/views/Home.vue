<template>
  <!-- Estrutura original intacta -->
  <div class="geometric">
    <div class="geometric-line line-1"></div>
    <div class="geometric-line line-2"></div>
    <div class="geometric-line line-3"></div>
  </div>

  <Navbar />

  <section id="home" class="hero scroll-reveal">
    <div class="hero-content">
      <div class="hero-label">Graphic Designer</div>
      <h1>Higor Amaral</h1>
      <p class="hero-subtitle">
        Criando experiências visuais memoráveis através do design estratégico e inovação criativa.
      </p>
      <a href="#projects" class="hero-cta">Ver Trabalhos</a>
    </div>
  </section>

  <section id="projects" class="projects scroll-reveal">
    <div class="section-header">
      <div class="section-label">Portfolio</div>
      <h2 class="section-title">Trabalhos Selecionados</h2>
    </div>

    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card scroll-reveal"
        @click="goToProject(project)"
      >
        <div class="project-image" :style="{ backgroundImage: `url(${project.thumb})` }"></div>
        <div class="project-info">
          <div class="project-title">{{ project.title }}</div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about scroll-reveal">
    <div class="about-content">
      <div class="section-header">
        <div class="section-label">Sobre</div>
        <h2 class="section-title">Filosofia & Processo</h2>
      </div>
      <p>
        Com mais de 8 anos de experiência, acredito que o design excepcional nasce da intersecção entre estratégia e criatividade.
      </p>
      <p>
        Cada projeto é uma oportunidade de criar conexões autênticas entre marcas e pessoas, através de soluções visuais que transcendem tendências e geram impacto duradouro.
      </p>
      <p>
        Especializado em identidade visual, design editorial e experiências digitais, trabalho sempre em busca da simplicidade elegante e da funcionalidade intuitiva.
      </p>
    </div>
  </section>

  <section id="contact" class="contact scroll-reveal">
    <div class="contact-content">
      <div class="section-header">
        <div class="section-label">Contato</div>
        <h2 class="section-title">Vamos Conversar</h2>
      </div>
      <p>
        Interessado em colaborar? Estou sempre aberto a novos projetos e oportunidades criativas.
      </p>
      <div class="contact-links">
        <a href="mailto:contato@alexandresantos.com" class="contact-link">Email</a>
        <a href="tel:+5511999999999" class="contact-link">Telefone</a>
        <a href="https://linkedin.com" class="contact-link" target="_blank">LinkedIn</a>
        <a href="https://instagram.com" class="contact-link" target="_blank">Instagram</a>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";

export default {
  components: { Navbar },
  data() {
    return {
      projects: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("/cache/projects_cache.json");
      this.projects = response.data.data.map((p) => ({
        id: p.hash_id,
        title: p.title,
        description: p.description || "Projeto publicado no ArtStation.",
        thumb: p.cover.thumb_url,
        url: `https://www.artstation.com/artwork/${p.hash_id}`,
      }));
    } catch (err) {
      console.error("Erro ao carregar projetos:", err);
    }

    this.$nextTick(() => {
      this.initScrollReveal();
    });

    // Scroll suave no menu
    document.querySelectorAll(".nav-item").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  },
  methods: {
    goToProject(project) {
    this.$router.push(`/project/${project.id}`);
  },
    initScrollReveal() {
      const revealElements = document.querySelectorAll(".scroll-reveal");

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // só anima uma vez
            }
          });
        },
        { threshold: 0.15 }
      );

      revealElements.forEach((el) => observer.observe(el));
    },
  },
};
</script>

<style scoped>
/* === 🌟 MELHORIAS VISUAIS E INTERATIVAS === */

/* Efeito de zoom e contraste ao passar o mouse */
.project-card {
  cursor: pointer;
  position: relative;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Zoom sutil e escurecimento da imagem no hover */
.project-card:hover .project-image {
  transform: scale(1.03);
  filter: brightness(0.85);
}

/* Overlay sutil sobre a imagem */
.project-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.4s ease;
  pointer-events: none;
  border-radius: 16px;
}
.project-card:hover::after {
  background: rgba(0, 0, 0, 0.05);
}

/* Destaque suave no título ao hover */
.project-card:hover .project-title {
  color: #000;
  transition: color 0.3s ease;
}

/* Delay progressivo nas animações de entrada */
.project-card:nth-child(odd) {
  transition-delay: 0.1s;
}
.project-card:nth-child(even) {
  transition-delay: 0.2s;
}

/* Animação gradiente do nome principal */
@keyframes gradientShift {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 100% 50%;
  }
}
.hero h1 {
  background-size: 200% 200%;
  animation: gradientShift 5s ease-in-out infinite alternate;
}
.hero {
  height: 100dvh;
  padding-top: 90px;
}

/* Separadores sutis entre seções */
.projects + .about,
.about + .contact {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

/* Ajuste do crop e centralização da imagem */
.project-image {
  width: 100%;
  height: 70%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f1f3f4;
  transition: transform 0.6s ease, filter 0.4s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

/* === ✨ SCROLL REVEAL ANIMATION === */
.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 📱 Ajustes Mobile */
@media (max-width: 768px) {
  .project-card {
    aspect-ratio: 1 / 1;
  }
  .project-desc {
    font-size: 13px;
  }
  .projects {
    padding: 80px 20px;
  }
  .hero {
  padding-top: 0px;
}
}
</style>
