function membership(){
    let amount = 30000;
    let function_membership = "gold"
    switch (true) {
        case (function_membership === "gold"):
            let gold_discount = 10;
            let gold_discount_amount = (amount * gold_discount) / 100;
            console.log(`${function_membership} ${gold_discount_amount} discount apply total amount ${amount - gold_discount_amount}`);


        case (function_membership === "bronze"):
            let bronze_discount = 20;
            let bronze_discount_amount = (amount * bronze_discount) / 100;
            console.log(` ${function_membership}  ${bronze_discount_amount} discont apply total amount
${amount - bronze_discount_amount}`);

        case (function_membership === "silver"):
            let silver_discount = 30;
            let silver_discount_amount = (amount * silver_discount) / 100;
            console.log(` ${function_membership}  ${silver_discount_amount} discont apply total amount
${amount - silver_discount_amount}`);



        case (function_membership === "platinum"):
            let platinum_discount = 40;
            let platinum_discount_amount = (amount * platinum_discount) / 100;
            console.log(` ${function_membership}  ${platinum_discount_amount} discont apply total amount
${amount - platinum_discount_amount}`);

default:
    console.log(`inavalid medals`);

    }
}
membership() 



function seeason(){
    let month=12;
    switch(true){
        case(month === 1 ):
        console.log(`${month} for january as a winter season`)
        break;

        case(month === 2):
        console.log(`${month} for feburary as a winter season`);
        break;

        case(month === 3):
        console.log(`${month} for march as a monsoon`);
        break;

        
        case(month === 4):
        console.log(`${month} for april as a monsoon`);
        break;

        
        case(month === 5):
        console.log(`${month} for may as a hot season`);
        break;


        case(month === 6):
        console.log(`${month} for june as a hot season`);
        break;

        
        case(month === 7):
        console.log(`${month} for july as a hot season`);
        break;


        case(month === 8):
        console.log(`${month} for august as a autmn season`);
        break;


        case(month === 9):
        console.log(`${month} for september as a monsoon season`);
        break;


        case(month === 10):
        console.log(`${month} for october as a winter season`);
        break;



        case(month === 11):
        console.log(`${month} for november as a winter season`);
        break;


        case(month === 12):
        console.log(`${month} for december as a winter season`);
        break;


        default:
            console.log(`invalid month`);
        
    }
}
seeason()



function tyre(){

    let wheels=3;

    switch(true){
        case(wheels===1):
        console.log(`${wheels} there is a bicylce`);
        break;

        
        case(wheels===2):
        console.log(`${wheels} there is a car`);
        break;

        
        case(wheels===3):
        console.log(`${wheels} there is a lorry`);
        break;


        
        case(wheels===4):
        console.log(`${wheels} there is a truck`);
        break;

        
default:
    console.log(`not avaliable `);
        
    }


}
    tyre()



function hotel(){
    let option= 4;
switch(true){

    case(option===1):
    console.log(`${option} its a non-veg hotel and chicken dish available is here`);
    break;
 
    
    case(option===2):
    console.log(`${option} its a veg hotel and only variety is available`);
    break;


case(option===3):
console.log(`${option} its a barbeqe hotel and is a full of buffai items non-veg and veg is available`);
break;


case(option===4):
console.log(`${option} its a  chinese hotel and all chinese varierty available `);
break;


default:
    console.log(`not available hotel`);
    


}
}
hotel()


function weekplan(){
let week=4;
switch(true){

case(week===1):
console.log(`${week} first week way to ooty trip `);
break;


    
case(week===2):
console.log(`${week} second week way to munnar  `);
break;


    
case(week===3):
console.log(`${week} third week way to kodaikanal trip `);
break;

    
case(week===4):
console.log(`${week} fourth week way to bluestar `);
break;

default:
    console.log("rest day");
    

}
}

weekplan()










































