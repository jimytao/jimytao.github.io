(function () {
  // Only activate on pointer devices (mouse/trackpad) with hover support.
  // Sidebar is visible at >=992px, panel at >=1200px — check the lower bound here;
  // the panel toggle is further guarded by CSS (display:none below 1200px).
  // Chirpy's lg breakpoint is 850px (sidebar visible), xl is 1200px (panel visible)
  if (!window.matchMedia('(pointer: fine) and (hover: hover) and (min-width: 850px)').matches) return;

  var SIDEBAR_KEY = 'sidebar-collapsed';
  var PANEL_KEY = 'panel-hidden';

  var body = document.body;
  var sidebarToggle = document.getElementById('sidebar-toggle');
  var panelToggle = document.getElementById('panel-toggle');
  var panelWrapper = document.getElementById('panel-wrapper');
  var mainWrapper = document.getElementById('main-wrapper');
  var mainContent = document.querySelector('main[aria-label="Main Content"]');

  // ---------- Sidebar collapse ----------

  function setSidebarCollapsed(collapsed) {
    var icon = sidebarToggle ? sidebarToggle.querySelector('i') : null;
    if (collapsed) {
      body.classList.add('sidebar-collapsed');
      if (mainWrapper) mainWrapper.style.marginLeft = '3rem';
      if (icon) icon.classList.replace('fa-angle-double-left', 'fa-angle-double-right');
      if (sidebarToggle) sidebarToggle.title = '展开菜单';
      localStorage.setItem(SIDEBAR_KEY, '1');
    } else {
      body.classList.remove('sidebar-collapsed');
      if (mainWrapper) mainWrapper.style.marginLeft = '';
      if (icon) icon.classList.replace('fa-angle-double-right', 'fa-angle-double-left');
      if (sidebarToggle) sidebarToggle.title = '收起菜单';
      localStorage.setItem(SIDEBAR_KEY, '0');
    }
  }

  // ---------- Panel hide ----------

  function setPanelHidden(hidden) {
    var icon = panelToggle ? panelToggle.querySelector('i') : null;
    if (hidden) {
      body.classList.add('panel-hidden');
      if (panelWrapper) panelWrapper.classList.add('panel-hidden');
      if (mainContent) { mainContent.style.marginLeft = 'auto'; mainContent.style.marginRight = 'auto'; }
      if (icon) { icon.classList.remove('fa-eye'); icon.classList.add('fa-eye-slash'); }
      if (panelToggle) panelToggle.title = '显示右侧栏';
      localStorage.setItem(PANEL_KEY, '1');
    } else {
      body.classList.remove('panel-hidden');
      if (panelWrapper) panelWrapper.classList.remove('panel-hidden');
      if (mainContent) { mainContent.style.marginLeft = ''; mainContent.style.marginRight = ''; }
      if (icon) { icon.classList.remove('fa-eye-slash'); icon.classList.add('fa-eye'); }
      if (panelToggle) panelToggle.title = '隐藏右侧栏';
      localStorage.setItem(PANEL_KEY, '0');
    }
  }

  // ---------- Init ----------

  body.classList.add('layout-toggle-init');

  setSidebarCollapsed(localStorage.getItem(SIDEBAR_KEY) === '1');
  if (localStorage.getItem(PANEL_KEY) === '1' && panelWrapper) {
    setPanelHidden(true);
  }

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      body.classList.remove('layout-toggle-init');
    });
  });

  // ---------- Event listeners ----------

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function () {
      setSidebarCollapsed(!body.classList.contains('sidebar-collapsed'));
    });
  }

  if (panelToggle && panelWrapper) {
    panelToggle.addEventListener('click', function () {
      setPanelHidden(!body.classList.contains('panel-hidden'));
    });
  }
})();
