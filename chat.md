---
title: 匿名聊天室
layout: page
permalink: /chat/
icon: fas fa-comments
---

<!-- 1. 引入 Waline 的样式文件 -->
<link rel="stylesheet" href="https://unpkg.com/@waline/client@v2/dist/waline.css" />

<!-- 2. 自定义 CSS：把评论区魔改成聊天室的样子 -->
<style>
  /* 隐藏掉没用的部分：比如登录框、表情反应、版权信息 */
  .wl-header, .wl-power, .wl-reaction { display: none !important; }
  
  /* 调整输入框，让它看起来更简洁 */
  .wl-editor { min-height: 60px; max-height: 150px; }
  
  /* 聊天列表区域：限制高度，允许滚动，加个边框 */
  .wl-cards { 
      height: 60vh; /* 占据屏幕高度的 60% */
      overflow-y: auto; 
      border: 1px solid #eaeaea;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
      background-color: #f9f9f9; /* 浅灰色背景 */
  }

  /* 针对暗色模式适配（如果你博客有暗色模式的话） */
  [data-theme="dark"] .wl-cards {
      background-color: #1e1e1e;
      border-color: #333;
  }
  
  /* 让每一条消息紧凑一点 */
  .wl-item { padding: 8px 0 !important; }
  
  /* 隐藏头像（如果你想要极致匿名，把下面这行注释取消掉） */
  /* .wl-user img { display: none !important; } */
</style>

<!-- 3. 放置聊天框的容器 -->
<div id="waline"></div>

<!-- 4. 引入 Waline 的 JS 脚本 -->
<script type="module">
  import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

  init({
    el: '#waline',
    
    // ★★★ 核心设置：填入你刚刚搞定的域名 ★★★
    // 注意：一定要是 https，且拼写要对（你的只有 1 个 m）
    serverURL: 'https://comment.jimytao-chat.online', 
    
    // 权限设置：完全匿名
    login: 'disable',      // 禁用登录
    allowSignIn: false,    // 不显示登录按钮
    
    // 界面设置
    pageSize: 50,          // 一次加载 50 条聊天记录
    search: false,         // 关闭搜索
    imageUploader: false,  // 关闭图片上传（省流，防滥用）
    emoji: true,           // 开启表情包
    
    // 提示文字
    placeholder: '无需登录，完全匿名。请文明发言...',
  });
</script>
