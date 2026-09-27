import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">Hello, I'm</p>

          <h1>Rachman Forniandi</h1>

          <h2>Mobile Application Developer</h2>

          <p className="hero-description">
            I build modern, scalable, and maintainable mobile applications
            using Android, Kotlin, Jetpack Compose, Flutter, and Kotlin
            Multiplatform.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              View Projects
            </a>

            <a
              href="https://github.com/RachmanForniandi"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>

        <p>
          Mobile developer focused on building Android and cross-platform
          applications with modern architecture, clean code, and scalable
          solutions.
        </p>
      </section>

      <section className="section" id="skills">
        <h2>Tech Stack</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Android</h3>
            <p>Kotlin, Jetpack Compose, XML</p>
          </div>

          <div className="skill-card">
            <h3>Architecture</h3>
            <p>MVVM, Clean Architecture, Repository Pattern</p>
          </div>

          <div className="skill-card">
            <h3>Android Jetpack</h3>
            <p>Room, Paging 3, Navigation, DataStore, WorkManager</p>
          </div>

          <div className="skill-card">
            <h3>Networking</h3>
            <p>Retrofit, Ktor, REST API</p>
          </div>

          <div className="skill-card">
            <h3>Dependency Injection</h3>
            <p>Hilt, Dagger</p>
          </div>

          <div className="skill-card">
            <h3>Cross Platform</h3>
            <p>Flutter, Dart, Kotlin Multiplatform</p>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          <article className="project-card">
            <span>Android</span>

            <h3>Aero Space Flight News</h3>

            <p>
              Spaceflight news application built using Kotlin, Clean
              Architecture, MVVM, Paging 3, Room, and dependency injection.
            </p>

            <a
              href="https://github.com/RachmanForniandi/Aero-Space-Flight-News"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository →
            </a>
          </article>

          <article className="project-card">
            <span>Android</span>

            <h3>Movie TMDB Compose</h3>

            <p>
              Modern movie application built with Jetpack Compose and TMDB API.
            </p>

            <a
              href="https://github.com/RachmanForniandi/MovieTmDBCompose"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository →
            </a>
          </article>

          <article className="project-card">
            <span>Mobile Application</span>

            <h3>Culinary Hunt</h3>

            <p>
              Mobile application project focused on culinary discovery and user
              experience.
            </p>

            <a
              href="https://github.com/RachmanForniandi/Culinary_Hunt"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository →
            </a>
          </article>

          <article className="project-card">
            <span>Mobile Application</span>

            <h3>Circle Gathering</h3>

            <p>
              Mobile application designed around community and gathering
              functionality.
            </p>

            <a
              href="https://github.com/RachmanForniandi/CircleGathering"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository →
            </a>
          </article>

          <article className="project-card">
            <span>Android</span>

            <h3>Dicoding Events Tracker</h3>

            <p>
              Android application for discovering and tracking Dicoding events.
            </p>

            <a
              href="https://github.com/RachmanForniandi/Dicoding-Events-Tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository →
            </a>
          </article>
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>Let's Work Together</h2>

        <p>
          I'm interested in opportunities related to Android, Kotlin, Flutter,
          and modern mobile application development.
        </p>

        <a
          href="https://github.com/RachmanForniandi"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}