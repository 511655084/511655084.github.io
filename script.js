// 原有弹窗功能保持不变...

// 次元美图功能
document.getElementById('anime-pic').addEventListener('click', async function() {
    const loading = this.querySelector('.loading');
    const existingGallery = document.querySelector('.gallery-container');
    
    // 移除旧内容
    if (existingGallery) {
        existingGallery.remove();
    }

    try {
        // 显示加载状态
        loading.style.display = 'block';
        this.style.pointerEvents = 'none';

        // 创建图片容器
        const gallery = document.createElement('div');
        gallery.className = 'gallery-container';
        document.body.insertBefore(gallery, document.querySelector('.poem'));

        // 调用API
        const response = await fetch('https://tk.illlt.com:759/api.php?type=手机二次元');
        const data = await response.json();

        // 创建图片元素
        data.forEach(item => {
            const container = document.createElement('div');
            container.className = 'gallery-item';

            const img = new Image();
            img.src = item.url;
            img.alt = '二次元美图';
            img.loading = 'lazy';

            // 图片加载完成后的处理
            img.onload = () => {
                container.style.background = 'none';
            };

            // 点击查看大图
            container.addEventListener('click', () => {
                const fullscreenHTML = `
                    <div class="fullscreen-modal">
                        <img src="${item.url}" class="fullscreen-img">
                        <span class="fullscreen-close">×</span>
                    </div>
                `;
                
                document.getElementById('fullscreen-container').innerHTML = fullscreenHTML;
                
                // 关闭大图
                document.querySelector('.fullscreen-close').addEventListener('click', () => {
                    document.getElementById('fullscreen-container').innerHTML = '';
                });
            });

            container.appendChild(img);
            gallery.appendChild(container);
        });

    } catch (error) {
        alert('图片加载失败，请稍后重试');
        console.error('API请求错误:', error);
    } finally {
        loading.style.display = 'none';
        this.style.pointerEvents = 'auto';
    }
});

// 点击蒙层关闭大图
document.getElementById('fullscreen-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('fullscreen-modal')) {
        document.getElementById('fullscreen-container').innerHTML = '';
    }
});
