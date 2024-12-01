// 名画のリスト
const artworks = [
    { src: 'images/art(1)', alt: '日本名景画集 其1' },
    { src: 'images/art(2)', alt: '日本名景画集 其1' },
    { src: 'images/art(3)', alt: '日本名景画集 其1' },
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
