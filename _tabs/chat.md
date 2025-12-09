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
  
  /* 1. 这里的修改最关键：
     我把 .wl-header 从隐藏列表里删掉了，这样输入框就能显示出来。
     只隐藏版权信息(power)、表情(reaction)、排序(sort)等没用的。
  */
  .wl-power, .wl-reaction, .wl-sort, .wl-meta-head .wl-action { display: none !important; }
  
  /* 2. 更加彻底地隐藏邮箱和网址输入框
     虽然下面 JS 里配置了只显示昵称，但用 CSS 再次强制隐藏会更稳妥，
     防止加载瞬间闪烁。
  */
  .wl-meta-item:nth-child(2), /* 隐藏邮箱 */
  .wl-meta-item:nth-child(3)  /* 隐藏网址 */
  { display: none !important; }

  /* 聊天列表区域 */
  .wl-cards { 
      height: 60vh; 
      overflow-y: auto; 
      border: 1px solid #eaeaea; 
      padding: 15px; 
      border-radius: 8px; 
      margin-bottom: 20px; 
  }
  
  /* 输入框高度 */
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
    
    // ★★★ 核心修改在这里 ★★★
    // meta: 决定显示哪些输入框。
    // 我们只保留 'nick'，去掉 'mail' 和 'link'
    meta: ['nick'],
    
    // 选填配置：
    // requiredMeta: 决定哪些是必填的。
    // 如果你留空 []，那昵称就是选填的（不填就显示匿名）。
    // 如果写 ['nick']，那就强制必须填昵称才能发消息。
    // 建议留空，给大家自由。
    requiredMeta: [],

    login: 'disable',      // 依然禁用登录按钮（只让填昵称，不让注册）
    allowSignIn: false,
    search: false,
    imageUploader: false,
    pageSize: 50,
    placeholder: 'Nickname is optional...', // 提示语改一下
  });
</script>

{% endraw %}
