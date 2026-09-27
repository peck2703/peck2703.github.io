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

# Selected Works

Welcome to my portfolio showcase. Here you will find structural project highlights spanning software engineering, system architecture, and media analysis.

---

### Planning & Code Analysis
This initial phase establishes baseline code critiques, detailing software limitations and identifying target technical areas slated for core enhancements.

{% include feature_row id="feature_row_cr" %}

---

### Technical Enhancements & Implementations
The following collection highlights executed optimizations focused on algorithmic complexity, database scalability, and decoupled full-stack architectural design patterns.

<div class="portfolio-slider-container">
  {% include feature_row id="feature_row_technical" %}
</div>
