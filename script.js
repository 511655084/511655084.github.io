// 页面加载完成后显示弹窗
window.onload = function() {
    document.getElementById('myModal').style.display = 'block';
};

// 关闭弹窗函数
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// 点击蒙层关闭弹窗
document.getElementById('myModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
