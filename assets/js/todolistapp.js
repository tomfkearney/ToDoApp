//toggle text decoration on click (task was completed)
$("ul").on("click", "li", function()
{
    $(this).toggleClass("completedTask");
});

$("ul").on("click", "span", function()
{
    $(this).parent().fadeOut(400, function()
    {
        $(this).remove();
    });
})

//add new todos when enter is pressed from input 
$("input[type='text']").keypress(function(event)
    {
        if(event.which === 13) //enter key hit
        {
            var todoText = $(this).val(); 
            $("ul").append("<li><span>X</span> " + todoText + "</li>");
            $(this).val("");
        }
    }
);
