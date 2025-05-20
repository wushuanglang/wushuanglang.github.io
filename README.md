# 响应式个人作品集网站

一个现代化的响应式个人作品集网站，适用于展示个人简介、工作经历、技能和项目作品。

## 特点

- **响应式设计**：适配桌面、平板和手机等各种设备
- **侧边栏导航**：桌面端固定显示，移动端可折叠
- **平滑滚动**：点击导航链接平滑滚动到对应部分
- **现代化界面**：简洁美观的设计风格
- **交互效果**：包含多种动画和交互效果
- **联系表单**：内置简单的联系表单功能

## 页面结构

网站包含以下几个主要部分：

1. **个人简介**：展示个人照片、姓名、职业和简短介绍
2. **工作经历**：以时间线形式展示工作经历
3. **技能展示**：使用进度条展示各种技能的熟练程度
4. **作品集**：展示个人项目作品
5. **联系方式**：展示联系信息并提供联系表单

## 技术实现

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (原生JS)
- Font Awesome 图标库

## 文件结构

```
├── index.html          # 主HTML文件
├── css/
│   └── styles.css      # 样式文件
├── js/
│   └── script.js       # JavaScript交互脚本
└── images/
    ├── avatar.jpg      # 个人头像
    ├── project1.jpg    # 项目1图片
    ├── project2.jpg    # 项目2图片
    ├── project3.jpg    # 项目3图片
    └── project4.jpg    # 项目4图片
```

## 如何使用

1. 下载或克隆此仓库到您的本地计算机
2. 替换 `images` 文件夹中的图片
   - 添加您的个人头像照片，命名为 `avatar.jpg`
   - 添加您的项目图片，分别命名为 `project1.jpg`、`project2.jpg` 等
3. 修改 `index.html` 中的内容，包括：
   - 个人信息（姓名、职业、简介）
   - 工作经历
   - 技能清单及熟练程度
   - 项目作品描述
   - 联系方式
4. 根据需要调整 `css/styles.css` 中的样式
5. 在浏览器中打开 `index.html` 预览效果
6. 将文件上传到您的网络服务器或托管服务

## 自定义指南

### 更改颜色方案

在 `css/styles.css` 文件开头的 `:root` 部分修改颜色变量：

```css
:root {
    --primary-color: #2563eb;    /* 主要颜色 */
    --secondary-color: #475569;  /* 次要颜色 */
    --dark-color: #1e293b;       /* 深色 */
    --light-color: #f1f5f9;      /* 浅色 */
    --danger-color: #ef4444;     /* 危险/强调色 */
    --success-color: #10b981;    /* 成功色 */
    /* 其他变量... */
}
```

### 修改侧边栏宽度

在 `css/styles.css` 文件中调整 `--sidebar-width` 变量：

```css
:root {
    /* 其他变量... */
    --sidebar-width: 250px;      /* 侧边栏宽度 */
}
```

### 添加更多社交媒体链接

在 `index.html` 文件中找到 `social-links` 类的 `div` 元素，添加更多社交媒体链接：

```html
<div class="social-links">
    <a href="https://github.com/您的用户名"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/您的用户名"><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/您的用户名"><i class="fab fa-twitter"></i></a>
    <!-- 添加更多社交媒体链接 -->
    <a href="https://instagram.com/您的用户名"><i class="fab fa-instagram"></i></a>
</div>
```

### 添加更多技能

在 `index.html` 文件中找到 `skills-container` 类的 `div` 元素，添加更多技能项：

```html
<div class="skill-item">
    <span class="skill-name">新技能名称</span>
    <div class="skill-bar">
        <div class="skill-level" style="width: 85%"></div>
    </div>
    <span class="skill-percentage">85%</span>
</div>
```

### 添加更多项目

在 `index.html` 文件中找到 `portfolio-grid` 类的 `div` 元素，添加更多项目：

```html
<div class="portfolio-item">
    <img src="images/project5.jpg" alt="项目5">
    <div class="portfolio-overlay">
        <h3>新项目标题</h3>
        <p>新项目描述...</p>
        <a href="#" class="btn">查看详情</a>
    </div>
</div>
```

### 自定义表单处理

默认情况下，表单提交会显示一个简单的成功提示。如果您需要实际处理表单数据，请修改 `js/script.js` 文件中的表单提交处理函数：

```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 获取表单数据
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // 发送数据到您的服务器
    fetch('您的服务器API地址', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('您的消息已成功发送！');
        contactForm.reset();
    })
    .catch(error => {
        console.error('发送失败:', error);
        alert('发送失败，请稍后再试！');
    });
});
```

## 浏览器兼容性

- Chrome
- Firefox
- Safari
- Edge
- Opera

## 注意事项

- 确保图片尺寸适当，以避免加载缓慢
- 定期更新您的作品集内容，展示最新项目
- 测试不同设备上的显示效果，确保响应式设计正常工作
- 如果您的网站将在公共环境中使用，请考虑添加隐私政策和Cookie声明

## 许可

此项目可自由使用和修改，推荐保留原作者署名。 