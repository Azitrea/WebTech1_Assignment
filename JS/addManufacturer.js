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
                    clearInputFields();
                    alert("Success");

                },
                error: function () {
                    alert("oops");
                }
            })
    })
})

$(openManufacturer());

function clearInputFields()
{
    $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    $(':checkbox, :radio').prop('checked', false);
}