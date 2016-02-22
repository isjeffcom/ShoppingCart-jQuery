/*
    
	Easy Shopping Cart 
    Create By Jeff WU
	from 2016/02/15 to ...
	for University of Portsmouth
	unfinished
	
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
		
		        

				//DOM the name and price from the HTML
				var mName = $(this).parent().children('.name').html();
				var mPrice = $(this).parent().children('.price').html();
				var mQty = $(this).parent().children('.qty').val();
				// Change type of data to integer forcibly
				mQty = parseInt(mQty);  
				


				//Calculate the price with quantity
				if(mQty >=0 ){
						
					var mPriceCal = mPrice * mQty;
					mPriceCal = parseFloat(mPriceCal).toFixed(2);  //Fix the calculate issue.
							
				}else{
							
					//verity input number
					alert("Please input a right number");
					mQty = 1;
					mPriceCal = mPrice * mQty;
					
				};
				
				//Add item to HTML localStorage 
								
				items.push(mName,mQty,mPriceCal);
				localStorage.setItem ('item', JSON.stringify(items));
									
				pprice.push(mPriceCal);
				localStorage.setItem ('price', JSON.stringify(pprice));

				//Alert to costumer
				alert("You Add " + mName + " in cart successful " + " Price: " + mPrice + "  You already have " +proNum + " products");
				console.log('array items: ' + items);
                console.log('array pprice: ' + pprice);
				console.log('array cartAll: ' + cartAll);
                console.log('array priceAll: ' + pprice);
			
		});
		
		//Display Cart Function
		$(function(){
		
		    //Cal Total price  
			if(priceAll !== null){
	            var ppprice = JSON.parse(priceAll);
				
			
				console.log(ppprice.length);
				for(var i = 0; i < ppprice.length; i++){
					totalPrice += parseFloat(ppprice[i]);
					TPrice = totalPrice.toFixed(2);
					}	
		
			}else{
				
				//if No item...
				ppprice = 0;
				
		    }
			
		
			//Display Cart 2Front
	        
			if(cartAll != null){
			
				$(".cartItem").html("Cart Product: " + cartAll);
				$(".totalPrice").html("All Price: " + TPrice + " $ ");

			}
		

			
			$('.updateCart').click(function(){
			
				location.reload(true)
			
			});
		

			//Clear Cart
		
			$(".clearCart").click(function(){
				
				alert("Clear Cart");
				localStorage.clear();
				
			});
			
			
			
			
			//Remove item from Cart
			
			if(JSON.parse(priceAll) !== null){
			
			    //Button create function
				for(var btnNum = 0; btnNum < JSON.parse(priceAll).length; btnNum++){
				
					var btnRealNum = btnNum + 1;	//Display real item number
					var removeBtn = document.createElement('button');    //Create Button
					removeBtn.className = "removeBtn";  //Add className
					var bottonValue = document.createTextNode('Remove Item' + btnRealNum);  //Give Button Value
					removeBtn.appendChild(bottonValue);  //Add Child
					document.body.appendChild(removeBtn);  
					
					
					
					}

			}else{
			
			    //return null
				
			    }
				

			
			
			//remove item function !!! NEED FIX !!!
			$(".removeBtn").click(function(){
			    console.log(JSON.parse(cartAll));

			
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