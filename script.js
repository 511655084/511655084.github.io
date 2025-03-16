// 页面加载完成后显示弹窗
window.onload = function() {
    document.getElementById('myModal').style.display = 'block';
};

// 关闭弹窗函数（仅通过按钮触发）
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
