let word;

function submit() {
    word = document.getElementById("advice").value;
    if (word == "") {
        alert("請輸入你想問的問題或想說的話～");
        return;
    }

    //new

    alert("謝謝您的提問 / 回饋！");
    document.getElementById("advice").value = "";
    word = "";
    return;
}