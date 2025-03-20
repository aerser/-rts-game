function startBattle() {
    document.getElementById('matchmaking-status').innerText = "マッチメイキング中...";
    setTimeout(() => {
        let result = Math.random() > 0.5 ? "あなたの勝ちです！" : "あなたの負けです。";
        document.getElementById('battle-result').innerText = result;
        document.getElementById('matchmaking-status').innerText = "マッチメイキング完了";
    }, Math.random() * 3000 + 2000); // ランダムなマッチメイキング時間
}

// オンラインユーザー数を表示するためのダミー関数
function updateOnlineUsers() {
    document.getElementById('online-users').innerText = `オンラインユーザー数: ${Math.floor(Math.random() * 100)}`;
}

setInterval(updateOnlineUsers, 5000); // 5秒ごとにオンラインユーザー数を更新