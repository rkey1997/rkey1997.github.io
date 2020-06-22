$(function(){
        
    $('.add').on('click' , function(){
        
        var valueAuthor = $('.author').val();
       
        
        var valueName = $('.name').val();
        var bookList = "<li>" + "<div class='author__value'>" + valueAuthor + "</div>" + "<div class='name__value'>" + valueName  + "</div>" + "<button class='delite'>" + "&#10008;" + "</button>"+ "<button class='edit'>" + "edit" + "</button>" +"</li>"

        if(!valueAuthor){
            $('.wrong__author').addClass('active');
            return false;
        }
        else if(valueAuthor){
            $('.wrong__author').removeClass('active');
        }
         if(!valueName){
            $('.wrong__name').addClass('active');
            return false;
        }
         else if(valueName){
            $('.wrong__name').removeClass('active');
        }

        $('.library__list').append(bookList);
        $('.book').val('');
        
        $('.delite').on('click', function(){
            var parent = $(this).parent();
            parent.remove();
        });
        $('.edit').on('click', function(){
            var editAuthor = $(this).siblings('.author__value').text();
            var editName = $(this).siblings('.name__value').text();
            $('.modal').addClass('active');
            $('.edit__author').val(editAuthor);
            $('.edit__name').val(editName);
    
             
             
                    
        
                    
           
                $('.edit__save').on('click', function(){
                    //   var importName = $('.edit__name').val();   ----->
                    //   var importAuthor = $('.edit__author').val();------> меняет все значения booklist
                    // $('.author__value').text(importAuthor);------>          а не один, на который кликнули,
                    // $('.author__value').text(importAuthor);------>             как сделать именно один , не смог разобраться
                    $('.modal').removeClass('active');
            });



           
        });
        $('.close__modal').on('click', function(){
            $('.modal').removeClass('active');

        });
    });
});