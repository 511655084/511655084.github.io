// 页面加载时设置延迟弹窗
window.addEventListener('load', function () {
    setTimeout(() => {
        alert('你好，我是星辰iyun。');
    }, 3000); // 延迟 3 秒显示弹窗
});

// 获取第二个模块的链接
const secondModuleLink = document.getElementById('second-module-link');

// 为第二个模块链接添加点击事件监听器
secondModuleLink.addEventListener('click', function (e) {
    e.preventDefault();
    // 直接打开网站
    window.open('http://www.98qy.com/sjbz/api.php', '_blank');
});    
