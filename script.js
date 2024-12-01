// 名画のリスト
const artworks = [
    { src: '"C:\Users\takuy\Documents\Project-TP\12314684-1-5.jpg"', alt: '日本名景画集 其1' },
    { src: '"C:\Users\takuy\Documents\Project-TP\12314684-1-8.jpg"', alt: '日本名景画集 其1' },
    { src: '"C:\Users\takuy\Documents\Project-TP\12314684-1-13.jpg"', alt: '日本名景画集 其1' },
    // ... 他の名画も追加
];

// 毎日のランダムな名画を選択
const getRandomArtwork = () => {
    const today = new Date().getDate();
    const artworkIndex = today % artworks.length; // 日にちに基づいて名画を選択
    return artworks[artworkIndex];
};

// 名画を表示
const displayArtwork = () => {
    const artwork = getRandomArtwork();
    const artImage = document.getElementById('art-image');
    artImage.src = artwork.src;
    artImage.alt = artwork.alt;
};

// ウィンドウが読み込まれた時に名画を表示
window.onload = displayArtwork;
