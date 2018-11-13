$(function () {
    $('form').on("submit", function (e) {
        e.preventDefault();

        $.ajax(
            {
                type: 'post',
                url: 'addManufacturers',
                data: $('form').serialize(),
                success: function () {
                    openManufacturer();
                },
                error: function () {
                    alert("oops");
                }
            })
    })
})

$(openManufacturer());