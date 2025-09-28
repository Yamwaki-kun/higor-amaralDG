<template>
  <!-- Subtle Geometric Elements -->
    <div class="geometric">
        <div class="geometric-line line-1"></div>
        <div class="geometric-line line-2"></div>
        <div class="geometric-line line-3"></div>
    </div>
    <Navbar />
    <!-- Elegant Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <div class="hero-label">Graphic Designer</div>
            <h1>Higor 
                Amaral</h1>
            <p class="hero-subtitle">
                Criando experiências visuais memoráveis através do design estratégico e inovação criativa.
            </p>
            <a href="#projects" class="hero-cta">Ver Trabalhos</a>
        </div>
    </section>

    <!-- Minimalist Projects Section -->
    <section id="projects" class="projects">
        <div class="section-header">
            <div class="section-label">Portfolio</div>
            <h2 class="section-title">Trabalhos Selecionados</h2>
        </div>

        <div class="projects-grid">
            <div class="project-card fade-in" data-project="branding">
                <div class="project-image">01</div>
                <div class="project-info">
                    <div class="project-title">Brand Identity</div>
                    <div class="project-desc">Sistema de identidade visual para startup de tecnologia sustentável</div>
                </div>
            </div>

            <div class="project-card fade-in" data-project="editorial">
                <div class="project-image">02</div>
                <div class="project-info">
                    <div class="project-title">Editorial Design</div>
                    <div class="project-desc">Redesign completo para revista de arquitetura contemporânea</div>
                </div>
            </div>

            <div class="project-card fade-in" data-project="packaging">
                <div class="project-image">03</div>
                <div class="project-info">
                    <div class="project-title">Packaging System</div>
                    <div class="project-desc">Embalagens premium e sustentáveis para linha de cosméticos</div>
                </div>
            </div>

            <div class="project-card fade-in" data-project="digital">
                <div class="project-image">04</div>
                <div class="project-info">
                    <div class="project-title">Digital Interface</div>
                    <div class="project-desc">Design de interface para aplicativo de produtividade</div>
                </div>
            </div>

            <div class="project-card fade-in" data-project="campaign">
                <div class="project-image">05</div>
                <div class="project-info">
                    <div class="project-title">Campaign Design</div>
                    <div class="project-desc">Campanha visual para lançamento de produto inovador</div>
                </div>
            </div>

            <div class="project-card fade-in" data-project="exhibition">
                <div class="project-image">06</div>
                <div class="project-info">
                    <div class="project-title">Exhibition Design</div>
                    <div class="project-desc">Identidade visual para exposição de arte contemporânea</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Clean About Section -->
    <section id="about" class="about">
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

    <!-- Sophisticated Contact Section -->
    <section id="contact" class="contact">
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

    <!-- Elegant Project Modal -->
    <div id="projectModal" class="modal">
        <div class="modal-content">
            <span class="modal-close">×</span>
            <h3 id="modalTitle"></h3>
            <div id="modalContent"></div>
        </div>
    </div>
    
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
   mounted() {
    // Smooth scrolling para nav links
    document.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

        // Project modal functionality
        const projectData = {
            branding: {
                title: 'Identidade Visual Moderna',
                content: `
                    <p>Este projeto envolveu o desenvolvimento completo da identidade visual para uma startup de tecnologia focada em soluções sustentáveis.</p>
                    <p><strong>Desafio:</strong> Criar uma marca que transmitisse inovação, confiabilidade e responsabilidade ambiental, diferenciando-se em um mercado competitivo.</p>
                    <p><strong>Solução:</strong> Desenvolvemos um sistema visual minimalista e moderno, com tipografia personalizada e paleta de cores que reflete os valores da sustentabilidade. O símbolo combina elementos geométricos que remetem ao crescimento e à tecnologia.</p>
                    <p><strong>Resultados:</strong> A nova identidade aumentou o reconhecimento da marca em 65% e gerou um impacto positivo na percepção dos investidores.</p>
                `
            },
            editorial: {
                title: 'Design Editorial',
                content: `
                    <p>Projeto gráfico completo para uma revista trimestral de arquitetura e design, focada em projetos contemporâneos brasileiros.</p>
                    <p><strong>Conceito:</strong> Criação de um sistema editorial que valoriza o conteúdo fotográfico e permite uma leitura fluida e envolvente.</p>
                    <p><strong>Características:</strong> Grid flexível, tipografia hierárquica bem definida, uso generoso de espaços em branco e integração harmoniosa entre texto e imagem.</p>
                    <p><strong>Impacto:</strong> A revista conquistou prêmios de design editorial e aumentou sua circulação em 40% após o redesign.</p>
                `
            },
            packaging: {
                title: 'Packaging Premium',
                content: `
                    <p>Desenvolvimento de embalagens sustentáveis para uma linha premium de cosméticos orgânicos.</p>
                    <p><strong>Desafio:</strong> Criar embalagens que reflitam os valores de sustentabilidade da marca sem comprometer o apelo premium do produto.</p>
                    <p><strong>Solução:</strong> Utilizamos materiais reciclados e biodegradáveis, com acabamentos especiais que conferem sofisticação. O design minimalista destaca a pureza dos ingredientes.</p>
                    <p><strong>Resultado:</strong> As vendas aumentaram 80% após o lançamento das novas embalagens, e o projeto recebeu certificação de sustentabilidade.</p>
                `
            },
            digital: {
                title: 'Interface Digital',
                content: `
                    <p>Design de UI/UX para um aplicativo de gestão empresarial voltado para pequenas e médias empresas.</p>
                    <p><strong>Objetivo:</strong> Simplificar processos complexos através de uma interface intuitiva e eficiente.</p>
                    <p><strong>Processo:</strong> Pesquisa de usuário, prototipagem, testes de usabilidade e refinamentos baseados em feedback real.</p>
                    <p><strong>Características:</strong> Design system escalável, microinterações intuitivas, hierarquia visual clara e otimização para diferentes dispositivos.</p>
                `
            },
            campaign: {
                title: 'Campanha Publicitária',
                content: `
                    <p>Desenvolvimento do conceito visual para campanha de lançamento de produto inovador no setor automotivo.</p>
                    <p><strong>Estratégia:</strong> Criar uma narrativa visual que conecte tecnologia e emoção, destacando os benefícios práticos do produto.</p>
                    <p><strong>Execução:</strong> Campanha multiplataforma incluindo materiais impressos, digitais, out-of-home e ativações em redes sociais.</p>
                    <p><strong>Resultados:</strong> A campanha gerou um reach de 2 milhões de pessoas e aumentou a intenção de compra em 45%.</p>
                `
            },
            exhibition: {
                title: 'Design de Exposição',
                content: `
                    <p>Identidade visual completa para mostra de arte contemporânea featuring artistas emergentes brasileiros.</p>
                    <p><strong>Conceito:</strong> Sistema visual que dialoga com as obras expostas sem competir por atenção, criando uma experiência coesa.</p>
                    <p><strong>Aplicações:</strong> Sinalização, catálogo, materiais promocionais, presença digital e merchandising.</p>
                    <p><strong>Impacto:</strong> A exposição recebeu 30% mais visitantes que a média e foi destacada pela mídia especializada.</p>
                `
            }
        };

        // Project card click handlers
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                const project = projectData[projectId];
                
                if (project) {
                    document.getElementById('modalTitle').textContent = project.title;
                    document.getElementById('modalContent').innerHTML = project.content;
                    document.getElementById('projectModal').classList.add('active');
                }
            });
        });

        // Modal close functionality
        document.querySelector('.modal-close').addEventListener('click', function() {
            document.getElementById('projectModal').classList.remove('active');
        });

        // Close modal when clicking outside
        document.getElementById('projectModal').addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });

        // Parallax effect for geometric shapes
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.geometric-shape');
            
            shapes.forEach((shape, index) => {
                const rate = scrolled * (0.1 + index * 0.05);
                shape.style.transform = `translateY(${rate}px) rotate(${rate * 0.1}deg)`;
            });
        });

        // Navigation highlighting based on scroll position
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.nav-item');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.style.opacity = '0.7';
                if (item.getAttribute('href').substring(1) === current) {
                    item.style.opacity = '1';
                }
            });
        });

        // Add intersection observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
      }
    };
</script>

<style >

</style>