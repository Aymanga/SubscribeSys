let costprice = document.querySelectorAll('#cost input');
let bu = document.querySelector('#bu')
let dis = document.querySelector('#dis')


let getTotalprice = () => {

    let price = costprice[0].value;
    let Servies = costprice[1].value;
    let Discount = costprice[2].value;


    let costServies = +price * +Servies / 100;
    let priceafterServies = +costServies + +price;
    costprice[3].value = +priceafterServies - +Discount;

}


for (let i = 0; i < costprice.length; i++) {

    costprice[i].addEventListener('keyup', getTotalprice)
}

bu.addEventListener('click', function () {

    dis.style.display = 'inline';
   
 
})
bu.addEventListener('dblclick', function () {

    dis.style.display = 'none';
   
 
})

