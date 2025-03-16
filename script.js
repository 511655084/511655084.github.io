// 侧边栏切换
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// 打开网页触发弹窗
window.onload = function () {
    alert('你好，我是星辰iyun。');
};    
