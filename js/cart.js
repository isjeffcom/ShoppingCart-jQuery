/*
    
	Easy Shopping Cart 
    Create By Jeff WU
	2016/02/15
	for University of Portsmouth
	
*/



//Main Function 
(function($){

    //DOM ready for all
	$(document).ready(function(){
	    
		
		var proNum = 0;
		var items = [];
		var pprice =[];
		var cartAll = localStorage.getItem('item');
        var priceAll = localStorage.getItem('price');
		
		//createCart
		createCart: (function(){
		
		//Set LocalStorage Item
		if(typeof(Storage) !== 'undefined'){
		        

			
		    }else{
			
			    alert('Sorry to tell you that your broswer do not support our website.');
				
			}
		}),
		
		
        //Add function
		
		$(".add").click(function(){
		
		    if(proNum < 10){

			
				//DOM the name and price from the HTML
				var mName = $(this).parent().children('.name').html();
				var mPrice = $(this).parent().children('.price').html();
				//alert(pprice);
				
				//Product Number Count +1 when click the "add" button
				proNum++;
				
            	//Add item to HTML localStorage 
				items.push(mName);
				localStorage.setItem ('item', JSON.stringify(items));
					
				pprice.push(mPrice);
				localStorage.setItem ('price', JSON.stringify(pprice));

				//Test alert to check if the function work
				alert("You Add " + mName + " in cart successful " + " Price: " + mPrice + "  You already choose " +proNum + " products");
		    
			}else{
			
			alert("Sorry, can not add more item");
			
			}
		});
		
		$(function(){
            var ppprice = JSON.parse(priceAll);
			for(var i = 0; i < ppprice.length; i++){
				
				var totalPrice = 0;
				totalPrice += parseFloat(ppprice[i]);
				alert(totalPrice);
				
			}
			
		});


		//Cart Box
        
		if(cartAll != null){
			$(".cartItem").html(cartAll);
			$(".cartPrice").html(priceAll);
			//$(".totalPrice").html(totalPrice);
		}
		

		
		
		
		//Check if localStorage oException
		try {
		    localStorage.setItem(key, value);
		}catch(oException){
			if(oException.name == 'QuotaExceededError'){
				alert("!!!Exceed Maximum Storage Limit");
				localStorage.clear();
			}
		}
		
	});

})(jQuery);