let soldierCount = 0;
let soldierTier = 1;
let power = 0;
let resources = 100;
let resourceGainRate = 1;
let soldierIncreasePerTraining = 1000;
const adminIP = '60.114.64.138';

function trainSoldier() {
    soldierCount += soldierIncreasePerTraining;
    updatePower();
    document.getElementById('soldier-count').innerText = `兵士数: ${soldierCount}`;
}

function updatePower() {
    power = soldierCount * soldierTier;
    document.getElementById('power-value').innerText = power;
}

function researchSoldierTraining() {
    const cost = 50;
    if (resources >= cost) {
        resources -= cost;
        soldierIncreasePerTraining += 500;
        alert("兵士訓練の研究が完了しました！一度に訓練できる兵士の数が増えます。");
        document.getElementById('research-result').innerText = "兵士訓練の研究が完了しました！";
    } else {
        alert(`資源が不足しています。必要資源: ${cost - resources}`);
    }
}

function researchSoldierTier() {
    const cost = 50;
    if (resources >= cost) {
        resources -= cost;
        soldierTier++;
        updatePower();
        alert("兵士ティアの研究が完了しました！兵士のティアが上がります。");
        document.getElementById('research-result').innerText = "兵士ティアの研究が完了しました！";
    } else {
        alert(`資源が不足しています。必要資源: ${cost - resources}`);
    }
}

function researchResourceGain() {
    const cost = 100;
    if (resources >= cost) {
        resources -= cost;
        resourceGainRate++;
        alert("資源増加の研究が完了しました！資源の増加量が増えます。");
    } else {
        alert(`資源が不足しています。必要資源: ${cost - resources}`);
    }
}

function sendEmail(emailContent) {
    alert(`メールが送信されました: ${emailContent}`);
    if (userIP === adminIP) {
        displayNotification(emailContent);
    }
}

function updateResources() {
    resources += resourceGainRate;
    document.getElementById('resources-value').innerText = resources;
}

setInterval(updateResources, 1000); // 資源を1秒ごとに増加
