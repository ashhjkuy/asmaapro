var btnFilter=document.getElementsByClassName("btn-filter"),
    imageFilter=document.getElementsByClassName("image-filter");

for(var i=0;i<btnFilter.length;i++){
    btnFilter[i].onclick=function(){

        for(var x=0;x<imageFilter.length;x++){

            if(imageFilter[x].getAttribute("data-target")==this.getAttribute("data-target") ||
             this.getAttribute('data-target')=='all'){
                imageFilter[x].classList.add('show');
                imageFilter[x].classList.remove('hide');

            }

            else{
                imageFilter[x].classList.add('hide');
                imageFilter[x].classList.remove('show');
            }
        }


    }

}



    
