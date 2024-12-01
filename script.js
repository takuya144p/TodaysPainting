// 名画のリスト
const artworks = [
    { src: 'images/art1.jpg', alt: 'nihon meigei gashu Vol.1' },
    { src: 'images/art2.jpg', alt: 'nihon meigei gashu Vol.1' },
    { src: 'images/art3.jpg', alt: 'nihon meigei gashu Vol.1' },
];

// 毎日のランダムな名画を選択
const getRandomArtwork = () => {
    const today = new Date().getDate();
    const artworkIndex = today % artworks.length; 
    return artworks[artworkIndex];
};

// 名画を表示
const displayArtwork = () => {
    const artwork = getRandomArtwork();
    const artImage = document.getElementById('art-image');
    const artDescription = document.getElementById('art-description');
    artImage.src = artwork.src;
    artImage.alt = artwork.alt;
    artDescription.textContent = artwork.alt; // 説明を表示
};

// ウィンドウが読み込まれた時に名画を表示
window.onload = displayArtwork;

