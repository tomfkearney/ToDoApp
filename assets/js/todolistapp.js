//toggle text decoration on click (task was completed)
$("li").click(function()
{
    $(this).toggleClass("completedTask");
});

$("span").click(function()
{
    $(this).parent().remove();
})