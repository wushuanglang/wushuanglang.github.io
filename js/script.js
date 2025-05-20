// DOM 元素加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    const contactForm = document.getElementById('contactForm');
    
    // 移动端侧边栏切换功能
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    
    // 点击导航链接时关闭侧边栏 (仅在移动设备上)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
            
            // 平滑滚动到对应部分
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 监听窗口大小变化，调整侧边栏
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
        }
    });
    
    // 处理联系表单提交
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
    
    // 实现技能条动画
    const skillLevels = document.querySelectorAll('.skill-level');
    
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
    
    // 添加作品集项目点击处理
    const portfolioItems = document.querySelectorAll('.portfolio-item');
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
    
    // 滚动监听，高亮当前导航项
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('.section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}); 