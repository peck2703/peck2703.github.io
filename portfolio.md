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
    excerpt: "Employed deep architectural enhancements to a previous Full-Stack Development project, successfully replacing static local data frameworks with dynamic, real-time external API endpoints and robust routing layers."
    url: "https://github.com"
    btn_label: "View on GitHub"
    btn_class: "btn--primary"

  - image_path: "https://placeholder.com"
    alt: "(Project) Data Structures & Algorithms"
    title: "Data Structures & Algorithms"
    excerpt: "Optimized complex algorithmic complexity models by refactoring a traditional Binary Search Tree structure into a high-performance B+ Tree, coupled with an integrated Trie text-prediction engine."
    url: "https://github.com"
    btn_label: "View on GitHub"
    btn_class: "btn--primary"

  - image_path: "https://placeholder.com"
    alt: "(Project) Databases"
    title: "Databases"
    excerpt: "Engineered scalability into a native mobile application environment by transitioning local device datasets over to a secure external cloud database model, complete with a local cached synchronization backup layer."
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



# Selected Works

Welcome to my portfolio showcase. Here you will find structural project highlights spanning software engineering, system architecture, and media analysis.

---

<div class="video-callout-box">
  <h4>Code Self-Review Walkthrough</h4>
  <p>A video walkthrough where I systematically review existing code architectures across three projects and discuss technical pathways for future enhancement.</p>
  <a href="https://youtu.be" class="btn btn--danger">View Video on YouTube</a>
</div>

---

---

### Technical Enhancements & Implementations
The following collection highlights executed optimizations focused on algorithmic complexity, database scalability, and decoupled full-stack architectural design patterns.

<div class="portfolio-slider-container">
  {% include feature_row id="feature_row_technical" %}
</div>
