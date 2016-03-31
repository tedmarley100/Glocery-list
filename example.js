var  myObj=[
{
	 name:"Bread",
     price:3.50
},
     
    {
    	 name:"Ground beef",
         price:8.50
    },
 
    {
    	name:"rice",
    	price:11.99
    },
{
	    name:"milk",
         price:2.50    
},

{        name:"yogurt",
         price:3.50

} ]   
	  
// var myObj =["Bread","rice","milk","yogurt"];
// var myObj =["3.50","8.50","11.99","2.50","3.50"];
myObj.forEach(function(items){
console.log(items.name + " $" + items.price)    
})


















