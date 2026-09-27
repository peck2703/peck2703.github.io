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
/* 1. Global alignment overrides for the remaining technical grid */
.feature__item {
  height: 480px !important;
  max-height: 480px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 8px !important;
  padding: 20px !important;
}

.feature__item .btn {
  margin-top: auto !important;
}

/* 2. Custom Callout Box Styling for the single Code Review item */
.video-callout-box {
  background: #f8fafc;
  border-left: 4px solid #ea4335; /* YouTube Red Accent Line */
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
