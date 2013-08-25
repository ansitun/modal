  (function($)
   {
    
    $.fn.modalpopup = function(logo) {
    
    //to get the shade effect on click of an image. Initially, the shade is hidden.
    $('body').append("<div class=\"shade\"></div>");
    
    //this class is added to the div to add the style attributes to the div
    $(this).addClass("modalbox");
    $this=$(this);
        
    /*the below three variables hold the initial style positions of div,
     so that after animation is complete the elements go to their original positions */    
    var position=$this.css("position");
    var top=$this.css("top");
    var left=$this.css("left");
        
        //if the length, that is, the number of images is calculated. 
       var length=$(this).children().length;
       
       $("."+logo).show(500);
       
       // if there are more than one images in the div.
        if(length>1)
        {
            //the shade effect is in visible
            $(".shade").show();  
            
            //to check which image should be visible on click of any of the images.
            var present=1;
            $("img:nth-child("+present+")").css("display","block");
            
               //the remaining images are hidden.     
              for(i=1;i<=length;i++)
            {
                if(i!=present)
                $("img:nth-child("+i+")").css("display","none");
            }
            
         //to check the key strokes--left,right,upper,lower and escape.   
        document.onkeydown = checkKey;
         function checkKey(e) {

        e = e || window.event;
        
        //for left and upper arrow keys.
        if (e.keyCode == '37' || e.keyCode == '38') {
        --present;
        if(present==0)
           present=length;
        
            for(i=1;i<=length;i++)
            {
            if(i!=present)
            $("img:nth-child("+i+")").css("display","none");
             else
             $("img:nth-child("+present+")").css("display","block");
            }
            $("."+logo).show();
        }
        //for right and down arrow keys.
        else if (e.keyCode == '39'|| e.keyCode == '40') {
            ++present;
            if(present==length+1)
                present=1;
            
            for(i=1;i<=length;i++)
            {

            if(i!=present)
            $("img:nth-child("+i+")").css("display","none");
            else
            $("img:nth-child("+present+")").css("display","block");
            
            }
            $("."+logo).show();
                }
                
             //for escape arrow key.   
        else if (e.keyCode == '27') {
            $(".shade").hide();
        $this.css("position",position).css("top",top).css("left",left);
        
        $("."+logo).hide(500);    
        $this.removeAttr("class");
        for(i=1;i<=length;i++)
            {
                $("img:nth-child("+i+")").css("display","inline");
            }
        }
            
            
        }
        /*this function is called for logo.. to change the 
        opacity of the logo in a specific interval. Presently, its set to 1 second or 1000milliseconds */
            setInterval(function (){
                    var opacity=Math.random();
                    if(opacity<0.4)
                    opacity+=0.5;
                  $("."+logo).css("opacity",opacity)},1000);
              
    //for animation of images to the center
    $(this).css("position","fixed").animate({top: '30%' , left: '30%'},'slow');
    
    
    //on click on the shadded area, the elements must go to their initial position.
    $(".shade").bind("click",function (){
        $(".shade").hide();
        $this.css("position",position).css("top",top).css("left",left);
        
        $("."+logo).hide(500);    
        $this.removeAttr("class");
        for(i=1;i<=length;i++)
            {
                $("img:nth-child("+i+")").css("display","inline");
            }
        });
            
            
        
        }//end of if-------------------------------------------------
        
        else //this part is for the single image. 
        {
            //the shade is visible.
            $(".shade").show(); 
            //the image is brought to 30% of the screen 
            $(this).css("position","fixed").animate({top: '30%' , left: '30%'},'slow');
         
         // to ckeck the key strokes.
          document.onkeydown = checkKey2;
         function checkKey2(e2) {

        e2 = e2 || window.event;
          // For escape key... the elements are set to their initial position.
          if (e2.keyCode == '27') {
            $(".shade").hide();
        $this.css("position",position).css("top",top).css("left",left);
        $("."+logo).hide(500);    
        $this.removeAttr("class");
        
            }
        }
           /*this function is called for logo.. to change the 
        opacity of the logo in a specific interval. Presently, its set to 1 second or 1000milliseconds */ 
           setInterval(function (){
                    var opacity=Math.random();
                    if(opacity<0.3)
                    opacity+=0.5;
                  $("."+logo).css("opacity",opacity)},1000);
            
            //on click on the shaded area, the elements are set to their inital position.
            $(".shade").bind("click",function (){
            $(".shade").hide();
        $this.removeAttr("class");
        $this.css("position",position).css("top",top).css("left",left);    
        $("."+logo).hide(500);    
        });
             
        }//end of else....
            
    //the current id is returned.
    return $(this);
    };  
})(jQuery);      

 