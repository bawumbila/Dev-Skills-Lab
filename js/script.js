$(".addskill").on('click', function () {
    $('.skill-list').append(`<div class="skill"><p><button class="btn btn-xs btn-danger">x</button> ${$('input').val()}</p></div>`);
    $('input').val('');
});


$('.skill-list').on('click', 'button', function () {

    $(this).closest('.skill').remove();
});






