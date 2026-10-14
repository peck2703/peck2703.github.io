---
layout: single
title: "My Portfolio Projects"
permalink: /portfolio/
toc: false

# --- GRID ONE: Code Review (Kept Separate) ---
feature_row_cr:
  - image_path: "https://placeholder.com"
    alt: "(Video) Code Self-Review"
    title: "Code Self-Review"
    excerpt: "A video walkthrough where I systematically review existing code architectures across three projects and discuss technical pathways for future enhancement."
    url: "https://youtu.be/QK3JBomKwV8"
    btn_label: "View on YouTube"
    btn_class: "btn--danger" # Changed to red to visually match YouTube!

# --- GRID TWO: Unified Technical Artifact Showcase ---
feature_row_technical:
  - image_path: "https://placeholder.com"
    alt: "(Project) Software Engineering & Design"
    title: "Software Engineering & Design"
    excerpt: "A fully migrated MEAN stack application that demonstrates my mastery of Single Page Application (SPA) architecture, custom routing, and API integration."
    url: "https://github.com"
    btn_label: "View on GitHub"
    btn_class: "btn--primary"

  - image_path: "https://placeholder.com"
    alt: "(Project) Data Structures & Algorithms"
    title: "Data Structures & Algorithms"
    excerpt: "A complex data structures project where I refactored a standard binary search tree into a dual B+ Tree and Trie algorithm structure, stress-testing the system from 10 to 300 records to quantifiably prove search time optimizations."
    url: "https://github.com"
    btn_label: "View on GitHub"
    btn_class: "btn--primary"

  - image_path: "https://placeholder.com"
    alt: "(Project) Databases"
    title: "Databases"
    excerpt: "An ambitious Android mobile inventory application that transitions a local SQLite cache to a hosted PostgreSQL (Supabase) cloud backend, featuring secure CRUD API calls, SQL injection defenses, and direct hardware integration via device camera barcode scanning."
    url: "https://github.com"
    btn_label: "View on GitHub"
    btn_class: "btn--primary"
---

<style>
/* Dynamic Auto-Expanding Technical Grid */
.feature__wrapper {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important; /* Forces cards onto new lines instead of breaking columns */
  gap: 24px !important;
  width: 100% !important;
  align-items: stretch !important; /* Forces adjacent cards in a row to match heights automatically! */
}

/* Self-Correcting Layout Box Sizes */
.feature__item {
  display: flex !important;
  flex-direction: column !important;
  background: #ffffff !important; 
  border: 1px solid #e2e8f0 !important; 
  border-radius: 8px !important; 
  padding: 24px !important;
  margin-bottom: 0 !important;
  box-sizing: border-box !important;
  
  /* Swapped hard height limits for a smart baseline minimum */
  min-height: 480px !important; 
  height: 100% !important; 
}

/* High-Performance Text Space Auto-Expansion */
.feature__item-body {
  display: flex !important;
  flex-direction: column !important;
  flex-grow: 1 !important; 
  margin-bottom: 20px !important;
}

/* Keeps images perfectly shaped */
.feature__item-teaser {
  height: 160px !important; 
  width: 100% !important;
  object-fit: cover !important; 
  border-radius: 6px !important;
  margin-bottom: 15px !important;
}

/* Force Buttons to align perfectly at the absolute bottom */
.feature__wrapper .btn {
  margin-top: auto !important; 
  align-self: flex-start !important; 
}

/* Custom Callout Box Styling for the single Code Review item */
.video-callout-box {
  background: #f8fafc;
  border-left: 4px solid #ea4335; 
  padding: 24px;
  border-radius: 4px;
  margin: 20px 0 40px 0;
}
</style>



# Executive Summary

### My Capstone Journey

<p>Over the past twelve years, my educational and professional journeys have run in parallel, shaping me into a versatile software engineer with a deep foundation in full-stack architecture, game engines, and agile project management. My academic tenure at Southern New Hampshire University, specializing in Computer Science with a concentration in Software Engineering, allowed me to formalize my practical experience. I have mastered a diverse ecosystem of languages - including C#, C++, Java, Python, SQL, and JavaScript - while shifting my recent focus toward production-grade database administration, automated JUnit testing, and robust REST API design.</p>

### Team Collaboration / Stakeholder Communication

<p>My professional background heavily bridges engineering and leadership. For over a decade, I managed small teams of up to 14 developers delivering game projects. Currently, I serve as the lead for a cross-functional organization of over 100 volunteer developers and artists simulating a commercial studio environment. Operating via Discord, I run weekly sprint planning, manage strict milestone deadlines, and ensure seamless communication across self-organized sub-teams.</p>

### Software Engineering & Databases

<p> I specialize in modern application lifecycles and scalable data modeling. My design philosophy prioritizes transforming static architectures into dynamic, production-ready ecosystems using the MEAN stack (MongoDB, Express, Angular, Node.js) and relational platforms. I strictly adhere to industry standards like Third Normal Form (3NF) normalization to eliminate data redundancy and maximize schema integrity.</p>

### Data Structures & Algorithms

<p>I am highly proficient in algorithmic optimization and analyzing computational complexity. My approach relies on conducting performance benchmarking and stress-testing datasets to replace inefficient search patterns with advanced architectures, driving processing times down to optimal Big O time complexities.</p>

### Security

<p>Security is integrated directly into my development lifecycle rather than treated as an afterthought. I am adept at protecting data layers against critical vulnerabilities, ensuring that all database queries are rigorously parameterized or managed via secure backend APIs to completely mitigate SQL injection threats. I also focus on user authentication and implementing local data-caching protocols to protect mobile environments.</p>

---

<div class="video-callout-box">
  <h4>🎥 Code Self-Review Walkthrough</h4>
  <p>A video walkthrough where I systematically review existing code architectures across three projects and discuss technical pathways for future enhancement.</p>
  <!-- Click THE LINK BELOW TO THE FULL WATCH URL -->
  <a href="https://youtube.com" class="btn btn--danger" target="_blank" rel="noopener noreferrer">View Video on YouTube</a>
</div>

---

### Technical Enhancements & Implementations
The following collection highlights executed optimizations focused on algorithmic complexity, database scalability, and decoupled full-stack architectural design patterns.

<div class="portfolio-slider-container">
  {% include feature_row id="feature_row_technical" %}
</div>
