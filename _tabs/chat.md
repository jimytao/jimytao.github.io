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
  
  /* 隐藏多余元素：头部、版权、排序等 */
  .wl-header, .wl-power, .wl-reaction, .wl-sort, .wl-meta-head { display: none !important; }
  
  /* 聊天列表区域样式 */
  .wl-cards { 
      height: 60vh; 
      overflow-y: auto; 
      border: 1px solid #eaeaea; 
      padding: 15px; 
      border-radius: 8px; 
      margin-bottom: 20px; 
  }
  
  /* 输入框高度限制 */
  .wl-editor { min-height: 60px; max-height: 100px; }

  /* --- 暗色模式适配 (专为 Chirpy 设计) --- */
  
  /* 当检测到 Chirpy 开启暗色模式时 */
  html[data-mode="dark"] {
      /* 重写 Waline 的颜色变量 */
      --waline-bgcolor: #1e1e1e;       /* 背景变黑 */
      --waline-bgcolor-light: #272727; /* 浅黑 */
      --waline-border-color: #444;     /* 边框变暗 */
      --waline-text-color: #c9d1d9;    /* 文字变灰白 */
      --waline-theme-color: #5bb396;   /* 主题色跟博客一致 */
      --waline-info-bgcolor: #272727;
  }

  /* 强制覆盖输入框的背景色 */
  html[data-mode="dark"] .wl-editor,
  html[data-mode="dark"] .wl-input {
      background: #2b2b2b !important;
      color: #e0e0e0 !important;
  }
  
  /* 暗色模式下卡片的背景 */
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
    login: 'disable',      // 禁用登录
    allowSignIn: false,    // 不显示登录按钮
    search: false,         // 关闭搜索
    imageUploader: false,  // 关闭图片上传
    pageSize: 50,          // 单页显示条数
    placeholder: 'Speak freely, stay anonymous...', // 英文提示语
  });
</script>

{% endraw %}
