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
		var products = [];
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
					
				}
				
            	//Add item to HTML localStorage 
				items.push(mName,mQty,mPriceCal);
				localStorage.setItem ('item', JSON.stringify(items));
					
				pprice.push(mPriceCal);
				localStorage.setItem ('price', JSON.stringify(pprice));

				//Alert to costumer
				alert("You Add " + mName + " in cart successful " + " Price: " + mPrice + "  You already have " +proNum + " products");
				
		    
			}else{
			
				alert("Sorry, can not add more item");
			
			}
		});
		
		//Display Cart Function
		$(function(){
		
			if(priceAll !== null){
	            var ppprice = JSON.parse(priceAll);
				
				//Total price  
				for(var i = 0; i < ppprice.length; i++){
					totalPrice += parseFloat(ppprice[i]);
					totalPrice = parseFloat(totalPrice).toFixed(2);
					}
					console.log(totalPrice);		
		
			}else{
				
				//if No item...
				ppprice = 0;
				
		    }
			
		


			//Display Cart 2Front
	        
			if(cartAll != null){
				$(".cartItem").html("Cart Product: " + cartAll);
				$(".totalPrice").html("All Price: " + totalPrice + " $ ");

			}
		

			//Clear Cart
		
			$(".clearCart").click(function(){
				
				alert("Clear Cart");
				localStorage.clear();
				
			});
			
			
			
			
			//Remove item from Cart
			
			if(JSON.parse(priceAll) !== null){
			
				for(var btnNum = 0; btnNum < JSON.parse(priceAll).length; btnNum++){
				
					var btnRealNum = btnNum + 1;	
					var removeBtn = document.createElement('button');
					removeBtn.className = "removeBtn"
					var bottonValue = document.createTextNode('Remove Item' + btnRealNum);
					removeBtn.appendChild(bottonValue);
					document.body.appendChild(removeBtn);
					
					}

			}else{
			
			    //return null
				
			    }
			
			
			//remove item function !!! NEED FIX !!!
			/*$(".removeBtn").click(function(){
			
			    this.cartAll.splice(btnNum,3);
				this.priceAll.splice(btnNum,1);
			
			});*/
			
		
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