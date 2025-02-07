let soldierCount = 0;
let soldierTier = 1;
let power = 0;

function trainSoldier() {
    soldierCount++;
    updatePower();
    document.getElementById('soldier-count').innerText = `兵士数: ${soldierCount}`;
}

function updatePower() {
    power = soldierCount * soldierTier;
    document.getElementById('power-value').innerText = power;
}

function researchSoldierTraining() {
    if (resources >= 50) {
        resources -= 50;
        alert("兵士訓練の研究が完了しました！一度に訓練できる兵士の数が増えます。");
        document.getElementById('research-result').innerText = "兵士訓練の研究が完了しました！";
    } else {
        alert("資源が不足しています。");
    }
}

function researchSoldierTier() {
    if (resources >= 50) {
        resources -= 50;
        soldierTier++;
        updatePower();
        alert("兵士ティアの研究が完了しました！兵士のティアが上がります。");
        document.getElementById('research-result').innerText = "兵士ティアの研究が完了しました！";
    } else {
        alert("資源が不足しています。");
    }
}

function sendEmail(emailContent) {
    alert(`メールが送信されました: ${emailContent}`);
}
