const clickMe = () => {
    alert("Thanks for clicking me. Have a nice day!")
}

$(document).ready(function () {
    $('#addNumber').click(() => {
        $.ajax({
            url: "http://localhost:3000/addTwoNumber?n1=123&n2=456",
            success: function(result) {
                alert("Add two numbers: 123 + 456 = " + result.data);
            }
        })
    })

    $('#multiplyNumber').click(() => {
        $.ajax({
            url: "http://localhost:3000/multiplyTwoNumber?n1=123&n2=456",
            success: function(result) {
                alert("Multiply two numbers: 123 * 456 = " + result.data);
            }
        })
    })

    $('#clickMe').click(() => {
        clickMe();
    })
})