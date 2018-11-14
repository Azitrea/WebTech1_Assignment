$(function () {
    $('form').on("submit", function (e) {
        e.preventDefault();

        $.ajax(
            {
                type: 'post',
                url: 'addCar',
                data: $('form').serialize(),
                success: function () {
                    openCar();
                    clearInputFields();
                },
                error: function () {
                    alert("oops");
                }
            })
    })
})

$(openCar());

function clearInputFields() {
    $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    $(':checkbox, :radio').prop('checked', false);

}