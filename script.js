// 主頁面翻頁卡片邏輯

let currentIndex = 0;
let words = [];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    words = getAllWords();
    loadCard(currentIndex);
    setupEventListeners();
    updateDisplay();
});

// 設定事件監聽器
function setupEventListeners() {
    const flashcard = document.getElementById('flashcard');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // 點擊卡片翻轉
    flashcard.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });

    // 上一個按鈕
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            loadCard(currentIndex);
            document.getElementById('flashcard').classList.remove('flipped');
        }
    });

    // 下一個按鈕
    nextBtn.addEventListener('click', function() {
        if (currentIndex < words.length - 1) {
            currentIndex++;
            loadCard(currentIndex);
            document.getElementById('flashcard').classList.remove('flipped');
        }
    });

    // 鍵盤快速鍵
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (event.key === 'ArrowRight') {
            nextBtn.click();
        } else if (event.key === ' ') {
            event.preventDefault();
            flashcard.click();
        }
    });
}

// 載入卡片
function loadCard(index) {
    const word = words[index];
    document.getElementById('word').textContent = word.word;
    document.getElementById('meaning').textContent = word.meaning;
    document.getElementById('pos').textContent = word.pos;
    document.getElementById('example').textContent = word.example;
    document.getElementById('root').textContent = word.root;
    updateDisplay();
}

// 更新顯示
function updateDisplay() {
    // 更新計數器
    document.getElementById('counter').textContent = `${currentIndex + 1} / ${words.length}`;
    document.getElementById('totalCount').textContent = words.length;

    // 更新進度條
    const progress = ((currentIndex + 1) / words.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // 更新按鈕狀態
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === words.length - 1;
}

// 監聽 localStorage 變化，當管理頁面添加新單字時自動更新
window.addEventListener('storage', function(event) {
    if (event.key === 'customWords') {
        words = getAllWords();
        loadCard(currentIndex);
    }
});
