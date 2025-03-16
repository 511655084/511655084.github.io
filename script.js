// 页面加载时弹出欢迎信息
window.addEventListener('load', function () {
    alert('你好，我是星辰iyun。');
});

// 获取第二个模块的链接和图片显示区域
const secondModuleLink = document.getElementById('second-module-link');
const imageDisplay = document.getElementById('image-display');

// 为第二个模块链接添加点击事件监听器
secondModuleLink.addEventListener('click', function (e) {
    e.preventDefault();
    // 调用 API 获取图片
    const apiUrl = 'http://www.98qy.com/sjbz/api.php';
    fetch(apiUrl)
      .then(response => {
            if (!response.ok) {
                throw new Error('网络响应异常');
            }
            return response.blob();
        })
      .then(blob => {
            const imgUrl = URL.createObjectURL(blob);
            const img = document.createElement('img');
            img.src = imgUrl;
            // 清空之前的图片
            imageDisplay.innerHTML = '';
            imageDisplay.appendChild(img);
        })
      .catch(error => {
            console.error('获取图片时出错:', error);
        });
});    
