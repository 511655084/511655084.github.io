// 页面加载时弹出欢迎信息
window.addEventListener('load', function () {
    alert('你好，我是星辰iyun。');
});

// 获取表单和输入框元素
const uploadForm = document.getElementById('upload-form');
const imageInput = document.getElementById('image-input');
const profileImage = document.getElementById('profile-image');

// 监听表单提交事件
uploadForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const file = imageInput.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('image', file);

        // 模拟文件上传
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
       .then(response => response.json())
       .then(data => {
            if (data.success) {
                // 更新头像显示
                profileImage.src = data.imageUrl;
            } else {
                alert('头像上传失败');
            }
        })
       .catch(error => {
            console.error('上传出错:', error);
            alert('上传时出现错误');
        });
    }
});    
