---
title: Anonymous Chatroom
layout: page
icon: fas fa-comments
order: 6
permalink: /chat/
---

{% raw %}
<link rel="stylesheet" href="https://unpkg.com/@waline/client@v2/dist/waline.css" />

<style>
  .wl-power, .wl-reaction, .wl-sort, .wl-meta-head { display: none !important; }
  
  .wl-cards { 
      height: 60vh; 
      overflow-y: auto; 
      border: 1px solid #eaeaea; 
      padding: 15px; 
      border-radius: 8px; 
      margin-bottom: 20px; 
      position: relative;
  }
  
  .wl-editor { min-height: 60px; max-height: 100px; }

  #refresh-btn {
      position: fixed;
      bottom: 100px;
      right: 30px;
      width: 45px;
      height: 45px;
      background: #5bb396;
      color: white;
      border-radius: 50%;
      text-align: center;
      line-height: 45px;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      z-index: 999;
      transition: transform 0.2s;
  }
  #refresh-btn:active { transform: scale(0.9); }
  #refresh-btn:hover { background: #4a9e83; }

  html[data-mode="dark"] {
      --waline-bgcolor: #1e1e1e;
      --waline-bgcolor-light: #272727;
      --waline-border-color: #444;
      --waline-text-color: #c9d1d9;
      --waline-theme-color: #5bb396;
      --waline-info-bgcolor: #272727;
  }
  html[data-mode="dark"] .wl-editor,
  html[data-mode="dark"] .wl-input { background: #2b2b2b !important; color: #e0e0e0 !important; }
  html[data-mode="dark"] .wl-cards { background-color: #1e1e1e; border-color: #333; }
</style>

<div id="waline"></div>

<div id="refresh-btn" title="Refresh Messages">
  <i class="fas fa-sync-alt"></i>
</div>

<script type="module">
  import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

  const walineConfig = {
    el: '#waline',
    serverURL: 'https://comment.jimytao-chat.online', 
    meta: ['nick'],
    requiredMeta: [],
    login: 'disable',
    allowSignIn: false,
    search: false,
    imageUploader: false,
    pageSize: 50,
    placeholder: 'Nickname is optional...',
  };

  let walineInstance = null;

  function loadWaline() {
    walineInstance = init(walineConfig);
  }

  loadWaline();

  function autoRefresh() {
    const editor = document.querySelector('.wl-editor');
    if (editor && editor.value.trim().length > 0) {
      return;
    }
    loadWaline();
  }

  setInterval(autoRefresh, 30000);

  document.getElementById('refresh-btn').addEventListener('click', function() {
    loadWaline();
    this.style.transform = 'rotate(360deg)';
    setTimeout(() => { this.style.transform = 'none'; }, 500);
  });
</script>
{% endraw %}
