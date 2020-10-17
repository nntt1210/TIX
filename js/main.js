function displayModal(clicked_object){
    // var listButtons = document.getElementsByTagName("button");
    // for(var i=0; i<listButtons.length; ++i){
    //     listButtons[i].onclick = function(e){
    //         var src=this.firstElementChild.innerHTML;
    //         console.log(src);
    //         if(src!==undefined)
    //             document.getElementById("iframe").src=src;
    //     }
    // }
    var src=clicked_object.firstElementChild.innerHTML;
    console.log(src);
    if(src!==undefined)
        document.getElementById("iframe").src=src;
}
