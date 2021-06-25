$('.faqitem').click(function()
{
    var clickedFaqId = $(this).attr('id');
    console.log(clickedFaqId);
    $('#' + clickedFaqId).next().collapse('toggle');

    $('#' + clickedFaqId + ' > img').toggleClass('flipped')
});
