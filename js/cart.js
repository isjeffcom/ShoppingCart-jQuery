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
	
		//Statement Ready
		var items = [];
		var names = [];
		var pprice =[];
		var totalPrice = 0;
		var itemsAll= localStorage.getItem('item');
		var namesAll = localStorage.getItem('name');
        var priceAll = localStorage.getItem('price');
		
		/*items: temp array for storage all items info (name, qty, price with qty)
		* names: temp array for storage item names in cart
		* pprice: temp array for storage price
		* itemsAll: localStorage array for storage all items info (name, qty, price with qty)
		* namesAll: localStorage array for storage item names in cart
		* priceAll: localStorage array for storage all price
		*/
		
		/*ADD BY Andreea.Molnar
		 * for fix the Items array
		 * empty after refresh
		 * 2016/03/08*/
		 
		//Count Products Number
		
        if(itemsAll !== null){
        	var proNum = JSON.parse(namesAll).length;
			items=JSON.parse(itemsAll);
        }else{
        	proNum = 0;
        }
		if (priceAll != null) {
			pprice = JSON.parse(priceAll);
		}
		
		if (namesAll != null) {
			names = JSON.parse(namesAll);
		}
		
        //Add2Cart function
		
		$(".add").click(function(){
		
		        
				//DOM the name and price from the HTML
				var mName = $(this).parent().children('.name').html();
				var mPrice = $(this).parent().children('.price').html();
				var mQty = $(this).parent().children('.qty').val();
				// Change type of data to integer forcibly
				mQty = parseInt(mQty);  
	
				
				//Check if items repeat
				if(names != null){
					for(var i=0; i<names.length;i++){
						if(mName == names[i]){
							alert('Item repeat');
							console.log(names);
							return;
						}
					}
				}

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
				
				names.push(mName);
				localStorage.setItem ('name', JSON.stringify(names));
									
				pprice.push(mPriceCal);
				localStorage.setItem ('price', JSON.stringify(pprice));

				//Alert to costumer
				alert("You Add " + mName + " in cart successful " + " Price: " + mPrice + "  You already have " +proNum + " products");
				
				
			
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
				TPrice = 0;
				
		    }
			

			//Display Cart 2Front
	        
			if(namesAll != null){
			
				$(".cartItem").html("Cart Product: " + namesAll);
				$(".totalPrice").html("All Price: " + TPrice + " $ ");

			}
		

			
			$('.updateCart').click(function(){
			console.log('Start UpdateCart // refresh the page');
			
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
			    
				names.splice(btnNum,1);
				
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