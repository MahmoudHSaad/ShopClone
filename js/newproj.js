var x=document.getElementById("one")
var y =document.getElementById("two");
var p1=document.getElementById("i");
var p2=document.getElementById("o");


// -------------------------------------------------------------
function pageOne(){
 p1.style.display="block";
 p2.style.display="none";
 x.style.borderBottom="3px solid #8f0093"
 y.style.border="none"

}

function pageTwo(){

    p1.style.display="none"
    p2.style.display="block"
    p2.style.zIndex="50"
    y.style.borderBottom="3px solid #8f0093"
   
    x.style.border="none"
   
   }

// /----------------------------------------------------------/ 

var more=document.getElementById("hide");
var comments=document.getElementById('hideC')
var comments1=document.getElementById('hideC1')
var comments2=document.getElementById('hideC2')
function ShowHideComment(){

    comments.style.display="block" ;
    comments1.style.display="block"
    comments2.style.display="block"
}


var ee = document.getElementById("exampleModal")
function sureMessage(){
    ee.style.display="block"
}
function sureMessagehide(){
    ee.style.display="none"
}
// -----------------------------------------------
var product=document.getElementById("product")
var delevary =document.getElementById("delv");
var shope=document.getElementById("shope");

var productDiv=document.getElementById("productDiv")
var delvDiv =document.getElementById("delvDiv");
var shopeDiv=document.getElementById("shopeDiv");

function showDelvDiv(){
    delvDiv.style.display="block"
    productDiv.style.display="none"
    shopeDiv.style.display="none"
    delevary.style.borderBottom="3px solid #8f0093"
    product.style.borderBottom="none"
    shope.style.borderBottom="none"
}
function showproductDiv(){
    delvDiv.style.display="none"
    productDiv.style.display="block"
    shopeDiv.style.display="none"
    delevary.style.borderBottom="none"
    product.style.borderBottom="3px solid #8f0093"
    shope.style.borderBottom="none"
}

function showShopeDiv(){
    delvDiv.style.display="none"
    productDiv.style.display="none"
    shopeDiv.style.display="block"
    delevary.style.borderBottom="none"
    product.style.borderBottom="none"
    shope.style.borderBottom="3px solid #8f0093"
}
// ------------------------------------------------------------------- fixed price 
$(document).ready(function(){
    $('i.fixed').click(function(e){
        var button_classes, value = +$('.cofixd').val();
        button_classes = $(e.currentTarget).prop('class');        
        if(button_classes.indexOf('up_countfix') !== -1){
            value = (value) + 1;            
        } else {
            value = (value) - 1;            
        }
        value = value < 0 ? 0 : value;
        $('.cofixd').val(value);
    });  
    $('.cofixd').click(function(){
        $(this).focus().select();
    });
});

// // -------------------------------------------------------------------  price with discount Card 

$(document).ready(function(){
    $('i.disCardd').click(function(e){
        var button_classes, value = +$('.disCardCount').val();
        button_classes = $(e.currentTarget).prop('class');        
        if(button_classes.indexOf('up_countdisCred') !== -1){
            value = (value) + 1;            
        } else {
            value = (value) - 1;            
        }
        value = value < 0 ? 0 : value;
        $('.disCardCount').val(value);
    });  
    $('.disCardCount').click(function(){
        $(this).focus().select();
    });
});
// // -------------------------------------------------------------------  price with discount Card 

$(document).ready(function(){
    $('i.disCardCount50').click(function(e){
        var button_classes, value = +$('.disCardCount50inp').val();
        button_classes = $(e.currentTarget).prop('class');        
        if(button_classes.indexOf('up_countdis50') !== -1){
            value = (value) + 1;            
        } else {
            value = (value) - 1;            
        }
        value = value < 0 ? 0 : value;
        $('.disCardCount50inp').val(value);
    });  
    $('.disCardCount50inp').click(function(){
        $(this).focus().select();
    });
});
// // -------------------------------------------------------------------  price with discount Card 

$(document).ready(function(){
    $('i.two').click(function(e){
        var button_classes, value = +$('.uptwo').val();
        button_classes = $(e.currentTarget).prop('class');        
        if(button_classes.indexOf('up_two') !== -1){
            value = (value) + 1;            
        } else {
            value = (value) - 1;            
        }
        value = value < 0 ? 0 : value;
        $('.uptwo').val(value);
    });  
    $('.uptwo').click(function(){
        $(this).focus().select();
    });
});

// -------------------------------------------------------------------  price with discount Card
// imag
function ImageSetter(input,target) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            target.attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$(".imgInp").change(function(){
  var imgDiv=$(this).data('id');  
       imgDiv=$('#' + imgDiv);    
    ImageSetter(this,imgDiv);
});