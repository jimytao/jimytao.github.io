---
title: 匿名聊天室
layout: page
icon: fas fa-comments
order: 6
permalink: /chat/
---

<!-- 下面这两个标签是 Jekyll 的护身符，千万别删 -->
{% raw %}

<link rel="stylesheet" href="https://unpkg.com/@waline/client@v2/dist/waline.css" />

<style>
  /* 隐藏多余元素 */
  .wl-header, .wl-power, .wl-reaction, .wl-sort { display: none !important; }
  
  /* 聊天框样式适配 */
  .wl-cards { 
      height: 60vh; 
      overflow-y: auto; 
      border: 1px solid #eaeaea; 
      padding: 10px; 
      border-radius: 8px; 
      margin-bottom: 20px; 
      background-color: var(--card-bg);
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
    placeholder: '匿名发言中...',
  });
</script>

{% endraw %}
