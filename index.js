function showVideo(obj){
    $("#youtube").attr("src", $(obj).data("src"));
    $("#videoModal").on("hide.bs.modal", function () { 
        $("#youtube").removeAttr("src");
    }).modal('show');
}
