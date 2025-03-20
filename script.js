document.addEventListener('DOMContentLoaded', function () {
    // 获取所有模块的链接元素
    const modules = document.querySelectorAll('.module a');

    // 为每个模块链接添加点击事件监听器
    modules.forEach(module => {
        module.addEventListener('click', function (e) {
            e.preventDefault();
            window.open(this.href, '_blank');
        });
    });
});
