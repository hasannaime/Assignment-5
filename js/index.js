// donate add amount


// card-1

document.getElementById('btn-donate')
.addEventListener('click', function(){


    const donateMoney= document.getElementById('money-donate').value;
    console.log(donateMoney);

    const mainBalance=document.getElementById('minusBalance').innerText;
    console.log(mainBalance);

    


    if(donateMoney>0){

       const donateBalance=document.getElementById('balance').innerText;
       console.log(donateBalance);

       const balanceNumber=parseFloat(donateMoney);
       const donateBalanceNumber=parseFloat(donateBalance);
       const currentBalance=parseFloat(mainBalance);
       const newDonateBalance=balanceNumber+donateBalanceNumber;
       const newMainusBalance=currentBalance-newDonateBalance;
       console.log(newDonateBalance);
       console.log(newMainusBalance);

       document.getElementById('balance').innerText=newDonateBalance;
       document.getElementById('minusBalance').innerText=newMainusBalance;

       document.getElementById('my_modal_1').checked = true;
       my_modal_1.showModal();
    }
    else{
        alert('this not number')
    }


    


   const historyItem=document.createElement("div");
   historyItem.className= "bg-white rounded-md border-indigo-500";
 
   historyItem.innerHTML = `
   
     <p>${donateMoney}  Taka is Donated for at Noakhali, Bangladesh</p>
     <p>Date: ${new Date().toLocaleDateString()}</p>
    
   
   
   `;
     
    
       const historyList= document.getElementById("history-container");

        
        historyList.insertBefore(historyItem, historyList.firstChild );
        
        
   
});


// card-2



document.getElementById('btn-donate-1')
.addEventListener('click', function(){


    const donateMoney1= document.getElementById('money-donate-1').value;
    console.log(donateMoney1);

    const mainBalance=document.getElementById('minusBalance').innerText;
    console.log(mainBalance);

    if(donateMoney1>0){

       const donateBalance1=document.getElementById('balance-1').innerText;
       console.log(donateBalance1);

       const balanceNumber1=parseFloat(donateMoney1);
       const donateBalanceNumber1=parseFloat(donateBalance1);
       const currentBalance=parseFloat(mainBalance);
       const newDonateBalance1=balanceNumber1+donateBalanceNumber1;
       const newMainusBalance=currentBalance-newDonateBalance1;
       console.log(newDonateBalance1);
       console.log(newMainusBalance);

       document.getElementById('balance-1').innerText=newDonateBalance1;
       document.getElementById('minusBalance').innerText=newMainusBalance;

       document.getElementById('my_modal_2').checked = true;
       my_modal_2.showModal();

    }
    else{
        alert('this not number')
    }



    const historyItem=document.createElement("div");
   historyItem.className= "bg-white rounded-md border-indigo-500";

   historyItem.innerHTML = `
   
     <p>${donateMoney1}  Taka is Donated for at Noakhali, Bangladesh</p>
     <p>Date: ${new Date().toLocaleDateString()}</p>
   
   
   `;
     
       const historyList= document.getElementById("history-container");

        
        historyList.insertBefore(historyItem, historyList.firstChild );

   
})

// card-3

document.getElementById('btn-donate-2')
.addEventListener('click', function(){


    const donateMoney2= document.getElementById('money-donate-2').value;
    console.log(donateMoney2);

    const mainBalance=document.getElementById('minusBalance').innerText;
    console.log(mainBalance);

    if(donateMoney2>0){

       const donateBalance2=document.getElementById('balance-2').innerText;
       console.log(donateBalance2);

       const balanceNumber2=parseFloat(donateMoney2);
       const donateBalanceNumber2=parseFloat(donateBalance2);
       const currentBalance=parseFloat(mainBalance);
       const newDonateBalance2=balanceNumber2+donateBalanceNumber2;
       const newMainusBalance=currentBalance-newDonateBalance2;
       console.log(newDonateBalance2);
       console.log(newMainusBalance);

       document.getElementById('balance-2').innerText=newDonateBalance2;
       document.getElementById('minusBalance').innerText=newMainusBalance;

       document.getElementById('my_modal_3').checked = true;
       my_modal_3.showModal();
    }
    else{
        alert('this not number')
    }



    const historyItem=document.createElement("div");
   historyItem.className= "bg-white rounded-md border-indigo-500";

   historyItem.innerHTML = `
   
     <p>${donateMoney2}  Taka is Donated for at Noakhali, Bangladesh</p>
     <p>Date: ${new Date().toLocaleDateString()}</p>
   
   
   `;
     
       const historyList= document.getElementById("history-container");

        
        historyList.insertBefore(historyItem, historyList.firstChild );

   
})


// history tab functionality

const historyTab= document.getElementById('history-tab');
const donationTab= document.getElementById('donation-tab');
const footTab=document.getElementById('foot');
historyTab.addEventListener('click',function(){

    
    historyTab.classList.add(


        "bg-primary"


    );

    donationTab.classList.remove(

        "bg-primary"

    );


    
    

    document.getElementById("card-section").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");

    
    
    

     
});



donationTab.addEventListener('click',function(){

    
    donationTab.classList.add(


        "bg-primary"


    );

    historyTab.classList.remove(

        "bg-primary"

    );

     document.getElementById("history-section").classList.add("hidden");
    document.getElementById("card-section").classList.remove("hidden");

     
});



// footer section


