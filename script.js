document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // デフォルトのリンク動作を無効化
    var aboutSection = document.getElementById('about');
    
    // セクションの表示・非表示を切り替える
    if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
});
// すべての画像にクリックイベントを追加
document.querySelectorAll('.clickable-image').forEach(function(image) {
    image.addEventListener('click', function() {
        var container = this.parentElement;

        // すでに概要が表示されている場合は非表示にする
        if (container.classList.contains('active')) {
            container.classList.remove('active');
        } else {
            // 他の画像の概要を非表示にして現在の画像のみ表示
            document.querySelectorAll('.image-container').forEach(function(otherContainer) {
                otherContainer.classList.remove('active');
            });
            container.classList.add('active');
        }
    });
});
document.querySelectorAll('.clickable-image').forEach(function(image) {
    image.addEventListener('click', function() {
        var container = this.parentElement;

        // すでに概要が表示されている場合は非表示にする
        if (container.classList.contains('active')) {
            container.classList.remove('active');
        } else {
            // 他の画像の概要を非表示にして現在の画像のみ表示
            document.querySelectorAll('.image-container').forEach(function(otherContainer) {
                otherContainer.classList.remove('active');
            });
            container.classList.add('active');
        }
    });
});
