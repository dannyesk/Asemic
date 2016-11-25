var img
$('#SketchPad').sketch();

$('#file-input').change(function(e) {
    drawInMiddle(e.originalEvent.target.files[0])

})
$(".combine").click(function() {
    var canvas = $('#combined')[0]
    var ctx = canvas.getContext('2d')

    ctx.drawImage(img, canvas.width / 2 - img.width / 2,
        canvas.height / 2 - img.height / 2
    )
    ctx.drawImage($('#SketchPad')[0],0,0)



})

function drawInMiddle(file) {
    var canvas = $('#SketchPad')[0]
    var ctx = canvas.getContext('2d')
    img = new Image;
    img.src = URL.createObjectURL(file)
    var bgi = "url(" + img.src + ")"
    $("#SketchPad").css("background-image", bgi);


}
