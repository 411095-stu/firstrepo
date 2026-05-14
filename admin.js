// 管理頁面邏輯

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addWordForm');
    form.addEventListener('submit', handleAddWord);
    displayCustomWords();
});

// 處理新增單字
function handleAddWord(event) {
    event.preventDefault();

    const newWord = {
        word: document.getElementById('newWord').value.trim(),
        meaning: document.getElementById('newMeaning').value.trim(),
        pos: document.getElementById('newPos').value,
        example: document.getElementById('newExample').value.trim(),
        root: document.getElementById('newRoot').value.trim()
    };

    // 驗證單字是否已存在
    const allWords = getAllWords();
    const wordExists = allWords.some(w => w.word.toLowerCase() === newWord.word.toLowerCase());

    if (wordExists) {
        alert('此單字已存在，請輸入新的單字！');
        return;
    }

    // 新增單字
    addCustomWord(newWord);

    // 顯示成功訊息
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);

    // 重設表單
    document.getElementById('addWordForm').reset();

    // 重新顯示自訂單字列表
    displayCustomWords();
}

// 顯示自訂單字列表
function displayCustomWords() {
    const customWords = getCustomWords();
    const listContainer = document.getElementById('customWordsList');

    if (customWords.length === 0) {
        listContainer.innerHTML = '<p class="empty-message">尚無自訂單字</p>';
        return;
    }

    let html = '<ul class="word-items">';
    customWords.forEach((word, index) => {
        html += `
            <li class="word-item">
                <div class="word-item-content">
                    <h3>${word.word}</h3>
                    <p><strong>解釋：</strong> ${word.meaning}</p>
                    <p><strong>詞性：</strong> ${word.pos}</p>
                    <p><strong>例句：</strong> ${word.example}</p>
                    <p><strong>字根：</strong> ${word.root}</p>
                </div>
                <button class="btn btn-delete" onclick="deleteWord(${index})">刪除</button>
            </li>
        `;
    });
    html += '</ul>';
    listContainer.innerHTML = html;
}

// 刪除單字
function deleteWord(index) {
    if (confirm('確定要刪除此單字嗎？')) {
        deleteCustomWord(index);
        displayCustomWords();
    }
}
