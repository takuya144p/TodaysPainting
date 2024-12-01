// 名画のリスト
const artworks = [
    { src: 'images/art1.jpg', alt: 'Takahashi Shōtei nihon meikei gashu Vol.1' },
    { src: 'images/art2.jpg', alt: 'Takahashi Shōtei nihon meikei gashu Vol.1' },
    { src: 'images/art3.jpg', alt: 'Takahashi Shōtei nihon meikei gashu Vol.1' },
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

// 現在の日付を表示する関数
const displayCurrentDate = () => {
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // 月を2桁にフォーマット
    const day = ('0' + today.getDate()).slice(-2); // 日を2桁にフォーマット
    dateElement.textContent = `${year}/${month}/${day}`; // YYYY/MM/DD形式で表示
};

// ウィンドウが読み込まれた時に日付を表示
window.onload = () => {
    displayArtwork(); // 名画を表示
    displayCurrentDate(); // 日付を表示
};
