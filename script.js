// 侧边栏切换功能
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
});

// 页面加载时弹出欢迎信息
window.addEventListener('load', function () {
    alert('你好，我是星辰iyun。');
});    