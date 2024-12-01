// 名画のリスト
const artworks = [
    { src: 'images/art1.jpg', alt: '名画1の説明' },
    { src: 'images/art2.jpg', alt: '名画2の説明' },
    { src: 'images/art3.jpg', alt: '名画3の説明' },
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

