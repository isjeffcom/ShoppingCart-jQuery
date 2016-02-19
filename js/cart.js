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
	    
		//Statment Ready
		var items = [];
		var pprice =[];
		var totalPrice = 0;
		var cartAll= localStorage.getItem('item');
        var priceAll = localStorage.getItem('price'); 

        
        //check if cartAll == null
        if(cartAll !== null){
        	var proNum = JSON.parse(cartAll).length;
        }else{
        	proNum = 0;
        }
        console.log(proNum);
		

		
		
        //Add2Cart function
		
		$(".add").click(function(){
		    if(proNum < 10){

			
				//DOM the name and price from the HTML
				var mName = $(this).parent().children('.name').html();
				var mPrice = $(this).parent().children('.price').html();
				var mQty = $(this).parent().children('.qty').val();
				mQty = parseInt(mQty);
				console.log("qty: " + mQty);
				
				if(mQty >=0 ){
					var mPriceCal = mPrice * mQty;
				}else{
					alert("Please input a right number");
					mQty = 1;
					mPriceCal = mPrice * mQty;
				}
            	//Add item to HTML localStorage 
				items.push(mName,mQty,mPriceCal);
				localStorage.setItem ('item', JSON.stringify(items));
					
				pprice.push(mPriceCal);
				localStorage.setItem ('price', JSON.stringify(pprice));

				//Test alert to check if the function work
				alert("You Add " + mName + " in cart successful " + " Price: " + mPrice + "  You already have " +proNum + " products");
				
		    
			}else{
			
				alert("Sorry, can not add more item");
			
			}
		});
		
		//Display Cart
		$(function(){
			if(priceAll !== null){
	            var ppprice = JSON.parse(priceAll);
				for(var i = 0; i < ppprice.length; i++){
					totalPrice += parseFloat(ppprice[i]);
					totalPrice = totalPrice.toFixed(2);
					}
				console.log(totalPrice);		
		
		    }else{
				ppprice = 0;
		    }
			
		


			//Cart Box
	        
			if(cartAll != null){
				$(".cartItem").html("Cart Product: " + cartAll);
				//$(".cartPrice").html("Price: " + priceAll);
				$(".totalPrice").html("All Price: " + totalPrice + " $ ");

			}
		
		
		
		
		
			//Clear Cart
		
			$(".clearCart").click(function(){
				
				alert("clearcart");
				localStorage.clear();
				
			});

		
		});
		
		//Check if localStorage oException
		try {
		    localStorage.setItem(key, value);
		}catch(oException){
			if(oException.name == 'QuotaExceededError'){
				alert("!!!Exceed Maximum Storage Limit!!!");
				localStorage.clear();
			}
		}
		
	});

})(jQuery);