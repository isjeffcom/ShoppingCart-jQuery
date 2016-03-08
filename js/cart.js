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
		var qty = [];
		var price = [];
		var names = [];
		var pprice =[];
	
		var mpriceAll= localStorage.getItem('mPrice');
		var mqtyAll= localStorage.getItem('mQty')
		var cartAll = localStorage.getItem('name');
        var priceAll = localStorage.getItem('price');
        
        var totalPrice = 0;
		
		/*ADD BY Andreea.Molnar
		 * for fix the Items array
		 * empty after refresh
		 * 2016/03/08*/
		 

		
		//Get value from localStorage
		if (cartAll != null) {
			//Count Products Number
			names = JSON.parse(cartAll);
			price=JSON.parse(mpriceAll);
			pprice = JSON.parse(priceAll);
			qty = JSON.parse(mqtyAll);
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
								
				
				
				qty.push(mQty);
				localStorage.setItem ('mQty', JSON.stringify(qty));
				
				price.push(mPriceCal);
				localStorage.setItem ('mPrice', JSON.stringify(price));
				
				names.push(mName);
				localStorage.setItem ('name', JSON.stringify(names));
									
				pprice.push(mPriceCal);
				localStorage.setItem ('price', JSON.stringify(pprice));

				//Alert to costumer
				alert("You Add " + mName + " in cart successful " + " Price: " + mPrice + "  You already have ");

		});
		
		
		//Display Cart Function
		$(function(){
		
		    //Cal Total price  
		    var TPrice;
			if(names[0] !== undefined){
				console.log('price calculate info ' + pprice + priceAll);
	            var ppprice = JSON.parse(priceAll);
	            console.log(names[0]);
	
				for(var i = 0; i < ppprice.length; i++){
					totalPrice += parseFloat(ppprice[i]);
					TPrice = totalPrice.toFixed(2);
					}	
		
			}else{
				
				//if No item...
				TPrice = 0;
				
		    }
			

			//Display Cart 2Front
	        
			if(cartAll != null){
			
				$(".cartItem").html("Cart Product: " + cartAll);
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
				for(var btnNum = 0; btnNum < JSON.parse(cartAll).length; btnNum++){
				
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
				

			
			
			//remove item function
			console.log(names);
			$(".removeBtn").click(function(){
			    
				//Restore array number from button
			    var thisNum = $(this).html();
				thisNum = thisNum.slice(-1) -1;
				
				//Delete element from array
				names.splice(thisNum,1);
				pprice.splice(thisNum,1);
				price.splice(thisNum,1);
				qty.splice(thisNum,1);
				
				
				//Update localStorage after Delete
				localStorage.setItem ('price', JSON.stringify(pprice));
				localStorage.setItem ('mPrice', JSON.stringify(price));
				localStorage.setItem ('mQty', JSON.stringify(qty));
				localStorage.setItem ('name', JSON.stringify(names));
				
				console.log(names);
			});

		
		});
		

        
			

		
		//Check if localStorage oException
		try {
		    localStorage.setItem(key, value);
		}catch(oException){
			if(oException.name == 'QuotaExceededError'){
				console.log("!!!Exceed Maximum Storage Limit!!!");
				localStorage.clear();
			}
		}
		
	});

})(jQuery);