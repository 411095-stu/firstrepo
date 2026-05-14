// 預設的 10 個國中英文單字
const defaultWords = [
    {
        word: "necessary",
        meaning: "必要的、必需的",
        pos: "形容詞 (adj.)",
        example: "It is necessary to study hard for the exam.",
        root: "ne- 表 not + -cess- 表 stop, give way + -ary 形容詞後綴"
    },
    {
        word: "believe",
        meaning: "相信、認為",
        pos: "動詞 (v.)",
        example: "I believe you can succeed if you work hard.",
        root: "be- 前綴 + -lieve 表 leave, allow"
    },
    {
        word: "different",
        meaning: "不同的、差異的",
        pos: "形容詞 (adj.)",
        example: "These two books are very different from each other.",
        root: "dis- 前綴 (分開) + -fer- 表 carry + -ent 形容詞後綴"
    },
    {
        word: "environmental",
        meaning: "環境的、環保的",
        pos: "形容詞 (adj.)",
        example: "We should protect environmental resources.",
        root: "environ- 表 surroundings + -ment 名詞後綴 + -al 形容詞後綴"
    },
    {
        word: "experience",
        meaning: "經驗、經歷、體驗",
        pos: "名詞 (n.) / 動詞 (v.)",
        example: "I had an amazing experience traveling in Japan.",
        root: "ex- 前綴 (出) + -per- 表 try, risk + -ience 名詞後綴"
    },
    {
        word: "immediate",
        meaning: "立即的、直接的、迫切的",
        pos: "形容詞 (adj.)",
        example: "The doctor needs an immediate response to this urgent case.",
        root: "im- 前綴 (進入) + -mediate 表 middle"
    },
    {
        word: "knowledge",
        meaning: "知識、學問、了解",
        pos: "名詞 (n.)",
        example: "With the knowledge she gained, she became an expert.",
        root: "know- 古英文 + -ledge 後綴 (表示狀態、事物)"
    },
    {
        word: "responsible",
        meaning: "負責的、有責任心的",
        pos: "形容詞 (adj.)",
        example: "A responsible person always completes their work on time.",
        root: "re- 前綴 (back) + -spond- 表 answer + -ible 形容詞後綴"
    },
    {
        word: "technology",
        meaning: "科技、技術",
        pos: "名詞 (n.)",
        example: "Modern technology has changed our daily life significantly.",
        root: "techno- 表 craft, skill + -logy 表 study, science"
    },
    {
        word: "traditional",
        meaning: "傳統的、習慣的",
        pos: "形容詞 (adj.)",
        example: "Many families still follow traditional customs during holidays.",
        root: "traditi- 表 hand down + -on 名詞後綴 + -al 形容詞後綴"
    }
];

// 從 localStorage 獲取自訂單字或初始化為空陣列
function getCustomWords() {
    const stored = localStorage.getItem('customWords');
    return stored ? JSON.parse(stored) : [];
}

// 獲取所有單字（預設 + 自訂）
function getAllWords() {
    return [...defaultWords, ...getCustomWords()];
}

// 新增自訂單字
function addCustomWord(word) {
    const customWords = getCustomWords();
    customWords.push(word);
    localStorage.setItem('customWords', JSON.stringify(customWords));
}

// 刪除自訂單字（僅限自訂單字）
function deleteCustomWord(index) {
    const customWords = getCustomWords();
    customWords.splice(index, 1);
    localStorage.setItem('customWords', JSON.stringify(customWords));
}
