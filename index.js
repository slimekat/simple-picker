$(document).ready(function () {
    $("#copy-btn").click(function () {
        document.getElementById('color-toast').innerText = document.getElementById('rgb').innerHTML;
        var textArea = document.createElement("textarea");
        var text = document.getElementById('color-toast').innerHTML;
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        // var copyItem = document.querySelector('.rgb');
        // copyItem.focus();
        // copyItem.select();

        try {
            var success = document.execCommand('copy');
            var msg = success ? 'successful!' : 'unsuccessful';
            console.log('Copying text command was.. ' + msg);

        } catch (err) {
            console.log('Unable to copy');
        }
        document.body.removeChild(textArea);
        $(".toast").toast("show");
    });
});

var currentColor;

function changeColor() {
    var newColor = makeColor();
    var box = document.getElementById('box').style.backgroundColor = newColor;
    document.getElementById('rgb').innerHTML = newColor;
    // document.getElementById('color-toast').innerText = newColor;
}



function makeColor() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    var newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
    currentColor = newRgb;
    return newRgb;
}

function copyColor() {
    // document.getElementById('rgb').select();

    // var copyItem = document.querySelector('.rgb');
    // copyItem.focus();
    // copyItem.select();

    // try {
    //     var success = document.execCommand('copy');
    //     var msg = success ? 'successful!' : 'unsuccessful';
    //     console.log('Copying text command was.. ' + msg);

    // }catch(err){
    //     console.log('Unable to copy');
    // }
}

