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

function ManufacturerNames() {
    $.getJSON('manufacturerNames', function (data) {
        var output = [];

        $.each(data, function (key, value) {
            output.push('<option value="' + value + '">' + value + '</option>');
        });

        $("#ManufacturerNameList").html(output);
    });
}

$(ManufacturerNames());

$($('input').change(function () {
        var n = $('#YearInput').val();
        if (n !== null) {
            if (n < 1900) {
                $('#YearInput').val(1900);
            }
            if (n > 2018) {
                $('#YearInput').val(2018);
            }
        }
    })
);