---
title: Anonymous Chatroom
layout: page
icon: fas fa-comments
order: 6
permalink: /chat/
---

<!-- 这里的引号必须是英文的直引号 -->
<link rel="stylesheet" href="https://unpkg.com/@waline/client@v2/dist/waline.css" />

<style>
  /* 隐藏多余元素 */
  .wl-header, .wl-power, .wl-reaction, .wl-sort { display: none !important; }
  
  /* 聊天框样式 */
  .wl-cards { 
      height: 60vh; 
      overflow-y: auto; 
      border: 1px solid #eaeaea; 
      padding: 10px; 
      border-radius: 8px; 
      margin-bottom: 20px; 
      background-color: var(--card-bg); /* 适配 Chirpy 的夜间模式 */
  }
  
  /* 输入框高度 */
  .wl-editor { min-height: 60px; max-height: 100px; }
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
    placeholder: 'Talk anonymously...',
  });
</script>
