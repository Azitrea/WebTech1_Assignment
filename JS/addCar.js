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
                },
                error: function () {
                    alert("oops");
                }
            })
    })
})
