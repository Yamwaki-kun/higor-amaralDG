<template>
  <!-- Refined Navigation -->
    <nav class="nav">
        <div class="nav-items">
            <a href="#home" class="nav-item">Home</a>
            <a href="#projects" class="nav-item">Work</a>
            <a href="#about" class="nav-item">About</a>
            <a href="#contact" class="nav-item">Contact</a>
        </div>
    </nav>
</template>

<style scoped>
/* Refined Liquid Glass Navigation */
        .nav {
            position: fixed;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
            backdrop-filter: blur(24px) saturate(180%);
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 100px;
            padding: 16px 32px;
            box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.04),
                0 1px 2px rgba(0, 0, 0, 0.02),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .nav:hover {
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 
                0 12px 40px rgba(0, 0, 0, 0.08),
                0 2px 8px rgba(0, 0, 0, 0.04),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        .nav-items {
            display: flex;
            gap: 40px;
            align-items: center;
        }

        .nav-item {
            color: #2d3748;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            letter-spacing: -0.01em;
            transition: all 0.3s ease;
            position: relative;
            padding: 8px 0;
        }

        .nav-item::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background: #1a1a1a;
            transition: width 0.3s ease;
        }

        .nav-item:hover::after {
            width: 100%;
        }

        .nav-item:hover {
            color: #1a1a1a;
        }
        /* Navigation Active State */
        .nav-item.active {
            color: #1a1a1a;
        }

        .nav-item.active::after {
            width: 100%;
        }

        /* Scroll Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
</style>