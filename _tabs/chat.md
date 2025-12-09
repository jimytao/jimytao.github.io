---
title: Anonymous Chatroom
layout: page
icon: fas fa-comments
order: 6
permalink: /chat/
---

{% raw %}

<!-- 引入 Waline 样式 -->
<link rel="stylesheet" href="https://unpkg.com/@waline/client@v2/dist/waline.css" />

<style>
  /* --- 基础样式 --- */
  .wl-header, .wl-power, .wl-reaction, .wl-sort, .wl-meta-head { display: none !important; }
  
  .wl-cards { 
      height: 60vh; 
      overflow-y: auto; 
      border: 1px solid #eaeaea; 
      padding: 15px; 
      border-radius: 8px; 
      margin-bottom: 20px; 
  }
  
  .wl-editor { min-height: 60px; max-height: 100px; }

  /* --- 暗色模式适配 --- */
  html[data-mode="dark"] {
      --waline-bgcolor: #1e1e1e;
      --waline-bgcolor-light: #272727;
      --waline-border-color: #444;
      --waline-text-color: #c9d1d9;
      --waline-theme-color: #5bb396;
      --waline-info-bgcolor: #272727;
  }

  html[data-mode="dark"] .wl-editor,
  html[data-mode="dark"] .wl-input {
      background: #2b2b2b !important;
      color: #e0e0e0 !important;
  }
  
  html[data-mode="dark"] .wl-cards {
      background-color: #1e1e1e;
      border-color: #333;
  }
</style>

<div id="waline"></div>

<script type="module">
  import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

  init({
    el: '#waline',
    serverURL: 'https://comment.jimytao-chat.online', 
    login: 'disable',
    allowSignIn: false,
    search: false,
    imageUploader: false,
    pageSize: 50,
    placeholder: 'Speak freely, stay anonymous...',
  });
</script>

{% endraw %}
