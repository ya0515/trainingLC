<?php
// フォームデータの取得
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

// メール送信先と件名
$to = "htykenshin3939@icloud.com"; // 受け取りたいメールアドレスに変更
$subject = "お問い合わせフォームからのメッセージ";

// メール本文
$body = "お名前: $name\n";
$body .= "メールアドレス: $email\n";
$body .= "メッセージ:\n$message\n";

// メールヘッダー
$headers = "From: $email";

// メール送信
if (mail($to, $subject, $body, $headers)) {
    echo "メールが送信されました。";
} else {
    echo "メール送信に失敗しました。";
}
?>

