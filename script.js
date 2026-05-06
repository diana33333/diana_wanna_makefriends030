document.addEventListener('DOMContentLoaded', () => {
    // 1. 抓取漢堡按鈕與選單 (使用 Class 選擇器)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // 2. 綁定漢堡選單點擊事件
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // 切換選單顯示/隱藏
            navLinks.classList.toggle('active');
            // 讓漢堡變換動畫 (三條線變 X)
            hamburger.classList.toggle('open');
            console.log("選單開關狀態切換中...");
        });
    }

    // 3. 抓取原本的測試按鈕 (如果有 ID 為 action-btn 的按鈕)
    const actionBtn = document.getElementById('action-btn');
    if (actionBtn) {
        actionBtn.addEventListener('click', function() {
            // 只保留彈窗提示，不再改動頁面標題
            alert('施工中 目前沒東西喔><');
        });
    }
});

// 簡單防盜：禁用右鍵與圖片拖動
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
});

document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
});

// 建立遮罩元素並加入 body
const overlay = document.createElement('div');
overlay.className = 'img-overlay';
overlay.innerHTML = '<img src="">';
document.body.appendChild(overlay);

const zoomImg = document.getElementById('zoom-img');
const overlayImg = overlay.querySelector('img');

if (zoomImg) {
    // 點擊圖片時放大
    zoomImg.addEventListener('click', () => {
        overlayImg.src = zoomImg.src;
        overlay.style.display = 'flex';
    });

    // 點擊遮罩任何地方縮小回去
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
}

function toggle(header) {
        const body = header.nextElementSibling;
        const chevron = header.querySelector('.chevron');
        const isOpen = body.classList.contains('open');
        body.classList.toggle('open', !isOpen);
        chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
}