<template>
  <div class="project-detail">
    <NavbarInterna />

    <!-- Cabeçalho -->
    <section class="project-header scroll-reveal">
      <h1 class="project-title">{{ project.title }}</h1>
      <div
        class="project-desc"
        v-if="project.description"
        v-html="project.description"
      ></div>
    </section>

    <!-- Galeria com PhotoSwipe -->
    <section id="project-gallery" class="project-gallery">
      <a
        v-for="(image, index) in project.images"
        :key="index"
        :href="image.image_url"
        :data-pswp-width="image.width || 1600"
        :data-pswp-height="image.height || 900"
        target="_blank"
        rel="noreferrer"
        class="project-image-item scroll-reveal"
      >
        <img :src="image.image_url" :alt="project.title" loading="lazy" />
      </a>
    </section>

    <!-- Rodapé -->
    <section class="project-footer scroll-reveal">
      <a
        class="view-on-artstation"
        :href="project.url"
        target="_blank"
        rel="noopener"
      >
        Ver no ArtStation →
      </a>
    </section>
  </div>
</template>

<script>
import axios from "axios";

// ✅ Importa PhotoSwipe Lightbox
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import NavbarInterna from "../components/NavbarInterna.vue";

export default {
  components: { NavbarInterna },
  data() {
    return {
      project: {
        title: "",
        description: "",
        images: [],
        url: "",
      },
      lightbox: null,
    };
  },
  async mounted() {
    const projectId = this.$route.params.id;

    try {
      const response = await axios.get(
        `/cache/projects_details_cache/${projectId}.json`
      );
      const data = response.data;

      this.project = {
        title: data.title,
        description: data.description || "",
        images: data.assets || [],
        url: `https://www.artstation.com/artwork/${projectId}`,
      };
    } catch (error) {
      console.error("Erro ao carregar detalhes do projeto:", error);
    }

    // Scroll reveal
    this.$nextTick(() => {
      this.initScrollReveal();
      this.initPhotoSwipe();
    });
  },
  beforeUnmount() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {
    // Inicializa PhotoSwipe
    initPhotoSwipe() {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: "#project-gallery",
        children: "a",
        pswpModule: () => import("photoswipe"),
        showHideAnimationType: "fade",
        bgOpacity: 0.9,
      });
      this.lightbox.init();
    },

    // Animação de entrada suave
    initScrollReveal() {
      const revealElements = document.querySelectorAll(".scroll-reveal");
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      revealElements.forEach((el) => observer.observe(el));
    },
  },
};
</script>

<style scoped>
.project-detail {
  padding: 100px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Cabeçalho */
.project-header {
  text-align: center;
  margin-bottom: 60px;
}
.project-title {
  font-family: "DM Serif Display", serif;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #1a1a1a;
}
.project-desc {
  color: #555;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}
.project-desc p {
  margin-bottom: 16px;
  line-height: 1.8;
}
.project-desc strong {
  font-weight: 600;
  color: #111;
}

/* Galeria */
.project-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}
.project-image-item img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s ease;
  cursor: zoom-in;
}
.project-image-item:hover img {
  transform: scale(1.02);
}

/* Rodapé */
.project-footer {
  text-align: center;
  margin-top: 80px;
}
.view-on-artstation {
  font-weight: 500;
  text-decoration: none;
  background: #1a1a1a;
  color: white;
  padding: 16px 32px;
  border-radius: 100px;
  transition: all 0.3s ease;
}
.view-on-artstation:hover {
  background: #333;
}

/* Scroll reveal */
.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile */
@media (max-width: 768px) {
  .project-detail {
    padding: 80px 20px;
  }
  .project-title {
    font-size: 2.2rem;
  }
}
</style>
