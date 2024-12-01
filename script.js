<<<<<<< HEAD
// 名画のリスト
const artworks = [
    { src: 'images/art(1).jpg', alt: '日本名景画集 其1' },
    { src: 'images/art(2).jpg', alt: '日本名景画集 其1' },
    { src: 'images/art(3).jpg', alt: '日本名景画集 其1' },
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
=======
// 名画のリスト
const artworks = [
    { src: 'images/art(1).jpg', alt: '日本名景画集 其1' },
    { src: 'images/art(2).jpg', alt: '日本名景画集 其1' },
    { src: 'images/art(3).jpg', alt: '日本名景画集 其1' },
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
>>>>>>> 4a8e66e9b0c53487d61d47a240fa9bc8165047b8
