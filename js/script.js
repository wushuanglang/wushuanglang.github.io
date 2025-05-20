// DOM 元素加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const contactForm = document.getElementById('contactForm');
    
    // 移动端侧边栏切换功能
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    
    // 监听窗口大小变化，调整侧边栏
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
        }
    });
    
    // 处理联系表单提交（仅在联系页面）
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // 在实际应用中，这里应该发送数据到服务器
            // 这里仅做演示，打印数据并显示成功消息
            console.log('表单数据:', formData);
            
            // 显示提交成功消息
            alert('您的消息已成功发送！');
            
            // 清空表单
            contactForm.reset();
        });
    }
    
    // 技能条动画（仅在技能页面）
    const skillLevels = document.querySelectorAll('.skill-level');
    if (skillLevels.length > 0) {
        // 创建IntersectionObserver监听技能条是否进入视口
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 技能条进入视口时，恢复其宽度动画
                    entry.target.style.width = entry.target.style.width;
                    // 取消观察，避免重复动画
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        // 初始化技能条宽度为0，添加过渡动画
        skillLevels.forEach(skill => {
            const originalWidth = skill.style.width;
            skill.style.width = '0';
            
            // 添加过渡效果
            skill.style.transition = 'width 1s ease-in-out';
            
            // 延迟恢复原始宽度，形成动画效果
            setTimeout(() => {
                skill.style.width = originalWidth;
            }, 300);
            
            // 添加到观察列表
            observer.observe(skill);
        });
    }
    
    // 作品集项目交互（仅在作品集页面）
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    if (portfolioItems.length > 0) {
        portfolioItems.forEach(item => {
            item.addEventListener('click', (e) => {
                // 检查点击的是否是"查看详情"按钮
                if (!e.target.classList.contains('btn')) {
                    const overlay = item.querySelector('.portfolio-overlay');
                    if (overlay) {
                        overlay.style.transform = overlay.style.transform === 'translateY(0px)' ? 
                            'translateY(100px)' : 'translateY(0px)';
                    }
                }
            });
        });
    }
}); 