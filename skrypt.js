//Other Funtions And Variables
var main=document.querySelector('.main');
var foundItemInfo=document.querySelector('.foundItemInfo');
var cloneWeapon;
var cloneWeaponReverse=document.querySelector('.weaponAdd');

var cloneHeadArmor;
var cloneHeadArmorReverse=document.querySelector('.headArmorAdd');

var cloneBodyArmor;
var cloneBodyArmorReverse=document.querySelector('.bodyArmorAdd');

var cloneLegsArmor;
var cloneLegsArmorReverse=document.querySelector('.legsArmorAdd');

var cloneFootArmor;
var cloneFootArmorReverse=document.querySelector('.footArmorAdd');

var placeItem=document.querySelectorAll('.placeItem');

var myHealth=100;

//Add to Eq

//Human Items
//Human
var head=document.querySelector('.head');
var leftArm=document.querySelector('.leftArm');
var rightArm=document.querySelector('.rightArm');
var body=document.querySelector('.body');
var legs=document.querySelector('.legs');
//Deafult Item Squares
var defaultWeaponImg=document.querySelector('.defaultWeaponImg');
var defaultHeadArmorImg=document.querySelector('.defaultHeadArmorImg');
var defaultBodyArmorImg=document.querySelector('.defaultBodyArmorImg');
var defaultLegsArmorImg=document.querySelector('.defaultLegsArmorImg');
var defaultFootArmorImg=document.querySelector('.defaultFootArmorImg');
//Armor
var armor=document.querySelectorAll('.armor');
var headArmor=document.querySelector('.headArmor');
var bodyArmor=document.querySelector('.bodyArmor');
var legsArmor=document.querySelector('.legsArmor');
var footArmor=document.querySelector('.footArmor');
//Add Armor
var headArmorAdd=document.querySelector('.headArmorAdd');
var bodyArmorAdd=document.querySelector('.bodyArmorAdd');
var legsArmorAdd=document.querySelector('.legsArmorAdd');
var footArmorAdd=document.querySelector('.footArmorAdd');
//Weapon
var weaponSquare=document.querySelector('.weapon');
var weaponItem=document.querySelectorAll('.weaponItem');
var usingWeapon=document.querySelector('.usingWeapon');
var weaponAdd=document.querySelector('.weaponAdd');
//Item Stats
var itemDamage=document.querySelector('.itemDamage');
var dmg=document.querySelector('.dmg');
var cricitaclDmg=document.querySelector('.criticalDmg');
var itemCriticalChance=document.querySelector('.itemCriticalChance');
var itemArmor=document.querySelector('.itemArmor');
//Weapon Indicators
var weaponDamage;
var weaponCriticalChance;
var itemDamageTxt;
var itemCriticalChanceTxt;
//Armor Armor
var itemArmorTxt;
var headArmorArmor=0;
var bodyArmorArmor=0;
var legsArmorArmor=0;
var footArmorArmor=0;
//Armor Indicators
var headArmorTxt;
var bodyArmorTxt;
var legsArmorTxt;
var footArmorTxt;
var armorValue=document.querySelector('.armorValue');
//Armor Slots
var headArmorSlot=document.querySelector('.headArmorSlot');
var bodyArmorSlot=document.querySelector('.bodyArmorSlot');
var legsArmorSlot=document.querySelector('.legsArmorSlot');
var footArmorSlot=document.querySelector('.footArmorSlot');
//Armor 0 Value
var headArmorValue=document.querySelector('.armorHeadValue');
var bodyArmorValue=document.querySelector('.armorBodyValue');
var legsArmorValue=document.querySelector('.armorLegsValue');
var footArmorValue=document.querySelector('.armorFootValue');

//Map Items
var mapButton=document.querySelector('.mapButton');
var mapModal=document.querySelector('.mapModal');
var mapPoint=document.querySelectorAll('.mapPoint');
var mapClose=document.querySelector('.mapClose');

//Equipment Items
var eqButton=document.querySelector('.eqButton');
var eqModal=document.querySelector('.eqModal');
var eqContainer=document.querySelector('.eqContainer');
var eqClose=document.querySelector('.eqClose');

//Search Items
var pointBtn=document.querySelectorAll('.pointBtn');
var searchModal=document.querySelectorAll('.searchModal');
var searchBtn=document.querySelectorAll('.searchBtn');
var searchProgress=document.querySelectorAll('.searchProgress');
var foodChance=document.querySelectorAll('.foodChance');
var valChance=document.querySelectorAll('.valChance');
var weaponChance=document.querySelectorAll('.weaponChance');
var clothesChance=document.querySelectorAll('.clothesChance');
var dangerChance=document.querySelectorAll('.dangerChance');
var dangerModal=document.querySelector('.dangerModal');
var sniperModal=document.querySelector('.sniperModal');
var oneManModal=document.querySelector('.oneManModal');
var groupOfMenModal=document.querySelector('.groupOfMenModal');
var enemyPatrolModal=document.querySelector('.enemyPatrolModal');

//Attack Buttons
var wpnDmg=itemDamage.getAttribute('value')
var fastAttack=document.querySelector('.fastAttack');
var powerAttack=document.querySelector('.powerAttack');
var defend=document.querySelector('.defend');
var run=document.querySelector('.run');
var enemyOneManHp=100;
var attack=Math.random()*10*wpnDmg;

//Health Items
var healthIndicator=document.querySelector('.healthIndicator');
var myHealthWidth;
var enemyContainer=document.querySelector('.enemyContainer');
var enemyHealthBar=document.querySelector('.enemyHealthBar');
var winModal=document.querySelector('.winModal');
var deadModal=document.querySelector('.deadModal');
var health;
var healthWidth;
var damage;
var damageReduct;
var realDamage;

//Home Items
var homeModal=document.querySelectorAll('.homeModal');
var trader=document.querySelector('.trader');
var traderModal=document.querySelector('.traderModal');
var hospital=document.querySelector('.hospital');
var hospitalModal=document.querySelector('.hospitalModal');
var cureButton=document.querySelector('.cureButton');
var bed=document.querySelector('.bed');

function hideHome(){
    hospitalModal.style.setProperty('display','none');
    traderModal.style.setProperty('display','none');
}

//Cure Functions
function enableCure(){
    cureButton.removeAttribute('disabled');
}
function openHospital(){
    hideHome();
    hospitalModal.style.setProperty('display','block');
    cureButton.style.setProperty('display','block');
}
function cureNow(){
    for(let x=0;x<searchProgress.length;x++){
        searchProgress[x].style.setProperty('display','block');
    }

    var healSound=new Audio('healSound.mp3');
    healSound.volume=0.5;
    healSound.play();
    cureButton.setAttribute('disabled','');
    setTimeout(enableCure,5000);
    setTimeout(cureNowNow,5000);
}
function cureNowNow(){
    for(let x=0;x<searchProgress.length;x++){
        searchProgress[x].style.setProperty('display','none');
    }

    head.classList.remove('humanDamaged');
    head.classList.add('square');

    leftArm.classList.remove('humanDamaged');
    leftArm.classList.add('square');

    rightArm.classList.remove('humanDamaged');
    rightArm.classList.add('square');

    body.classList.remove('humanDamaged');
    body.classList.add('square');

    legs.classList.remove('humanDamaged');
    legs.classList.add('square')
}

hospital.addEventListener('click',openHospital);
cureButton.addEventListener('click',cureNow);

//Shop Scripts
var elementJustify=document.querySelectorAll('.elementJustify');
var cloneEq;
var cloneEqItems;
var sellItem=document.querySelectorAll('.sellItem');;
var money=document.querySelector('.money');
var moneyValue=document.querySelector('.moneyValue');
var buyButton=document.querySelector('.buyButton');
var sellButton=document.querySelector('.sellButton');
var removeClass=document.querySelectorAll('.removeClass');
var buyModal=document.querySelector('.buyModal');
var buyContainer=document.querySelector('.buyContainer');
var buyItem=document.querySelectorAll('.buyItem');
var allValue=0;

function sell(e){
    if(e.target.classList.contains('sellItem')){
        moneyValue.remove();
        var createChild=document.createElement('span');
        e.target.onclick=null
        var moneyGet=parseInt(e.target.getAttribute('value'));
        allValue+=moneyGet;
        money.setAttribute('value',allValue);
        var allMoneyValue=money.getAttribute('value');
        var moneyTxt=document.createTextNode(allMoneyValue);
        createChild.appendChild(moneyTxt);
        createChild.classList.add('removeClass');
        money.innerHTML='Money: '+allMoneyValue;
        e.target.remove();
    }
}
var buyClone;
function buy(e){
    if(e.target.classList.contains('buyItem')){
        // buyClone=e.target.cloneNode(true);
        // buyClone.classList.remove('buyItem');
        // buyClone.appendChild(eqContainer);
        if(allValue>=e.target.getAttribute('value')){
            allValue-=e.target.getAttribute('value');;
            money.innerHTML='Money: '+allValue;
            if(e.target.classList.contains('helmetBuy')){
                helmet.foundItem();
            }
            if(e.target.classList.contains('kevlarBuy')){
                ballisticCam.foundItem();
            }
            if(e.target.classList.contains('trousersBuy')){
                militaryTrousers.foundItem();
            }
            if(e.target.classList.contains('bootsBuy')){
                militaryShoes.foundItem();
            }
        }else{
            alert("You need $"+e.target.getAttribute('value'));
        }
    }
}
function openBuy(){
    hideHome();
    hideItems();
    buyModal.style.setProperty('display','block');
    for(let x=0;x<elementJustify.length;x++){
        elementJustify[x].classList.add('buyItem');
    }
}
function openTrader(){
    traderModal.style.setProperty('display','block');
    cureButton.style.setProperty('display','none');
}
function openSell(){
    hideHome();
    hideItems();
    eqModal.style.setProperty('display','block');
    for(let x=0;x<elementJustify.length;x++){
        elementJustify[x].classList.add('sellItem');
    }
}
function hideTrader(){
    for(let x=0;x<elementJustify.length;x++){
        elementJustify[x].classList.remove('sellItem');
    }
    for(let x=0;x<homeModal.length;x++){
        homeModal[x].style.setProperty('display','none');
    }
    buyModal.style.setProperty('display','none');
}

trader.addEventListener('click',openTrader);
sellButton.addEventListener('click',openSell);
buyButton.addEventListener('click',openBuy);
for(let x=0;x<buyItem.length;x++){
    buyItem[x].addEventListener('click',buy);
}

//Danger Functions
var atk=document.querySelectorAll('.atk');
function attackEnable(){
    for(let x=0;x<atk.length;x++){
        atk[x].removeAttribute('disabled');
    }
}
function attackDisable(){
    for(let x=0;x<atk.length;x++){
        atk[x].setAttribute('disabled','');
    }
}


function disableButtons(){
    mapButton.setAttribute('disabled','');
    eqButton.setAttribute('disabled','');
}
function enableButtons(){
    mapButton.removeAttribute('disabled');
    eqButton.removeAttribute('disabled');
}
function sniperDanger(){
    sniperModal.style.setProperty('display','none');
}
function oneManDanger(){
    oneManModal.style.setProperty('display','none');
}
function groupOfMenDanger(){
    groupOfMenModal.style.setProperty('display','none');
}
function enemyPatrolDanger(){
    enemyPatrolModal.style.setProperty('display','none');
}

//Hide Items
function hideItems(){
    //Hide City
    city.style.setProperty('display','none');
    for(let x=0;x<cityPoint.length;x++){
        cityPoint[x].style.setProperty('display','none');
    }

    //Hide Suburbs
    suburbs.style.setProperty('display','none');
    for(let x=0;x<suburbsPoint.length;x++){
        suburbsPoint[x].style.setProperty('display','none');
    }

    //Hide Forest
    forest.style.setProperty('display','none');
    for(let x=0;x<forestPoint.length;x++){
        forestPoint[x].style.setProperty('display','none');
    }

    //Hide Home
    home.style.setProperty('display','none');
    for(let x=0;x<homePoint.length;x++){
        homePoint[x].style.setProperty('display','none');
    }
    hideTrader();

    //Hide Eq
    eqModal.style.setProperty('display','none');

    //Hide search
    hideSearch();
}
function hideMap(){
    //Hide Map
    mapModal.style.setProperty('display','none');
    for(let x=0;x<mapPoint.length;x++){
        mapPoint[x].style.setProperty('display','none');
    }
}
console.log(chance.guid());
//Objects
//Food
function food(foodName,price,nutrition,photo){
    return{
        foodName: foodName,
        price: price,
        nutrition: nutrition,
        photo: photo,
        foundItem: function(){
            //Add To Eq
            var newEl=document.createElement('img');
            newEl.setAttribute('src',this.photo);
            newEl.setAttribute('value',this.price);
            newEl.setAttribute('id',chance.guid());
            newEl.setAttribute('nutrition',this.nutrition);
            newEl.classList.add('elementJustify');
            newEl.classList.add('foodItem');
            eqContainer.appendChild(newEl);
            elementJustify=document.querySelectorAll('.elementJustify');
            newEl.addEventListener('click',sell);
            newEl.onclick=eatFood;

            //Add To Info
            var newBr=document.createElement('br');
            var newTxtName=document.createTextNode('You found '+this.foodName);
            foundItemInfo.appendChild(newTxtName);
            foundItemInfo.appendChild(newBr);
            foundItemInfo.style.setProperty('display','block');
            setTimeout(closeFoundItemInfo,5000);
            function closeFoundItemInfo(){
                newBr.remove();
                newTxtName.remove();
                foundItemInfo.style.setProperty('display','none');
            }
        },
        didntFound: function(){
            var newEl=document.createElement('br');
            var newTxt=document.createTextNode("didn't found any food");
            foundItemInfo.appendChild(newTxt);
            foundItemInfo.appendChild(newEl);
            foundItemInfo.style.setProperty('display','block');
            setTimeout(closeFoundItemInfo,5000);
            function closeFoundItemInfo(){
                newEl.remove();
                newTxt.remove();
                foundItemInfo.style.setProperty('display','none');
            }
        }
    };
}

function eatFood(e){
        var txt=document.createTextNode('You have too much hp');
        var hlth=parseInt(healthIndicator.getAttribute('value'))+parseInt(e.target.getAttribute('value'));
        var hlthRel=hlth+'%';
        if(parseInt(healthIndicator.getAttribute('value'))<100){
                healthIndicator.style.setProperty('width',hlthRel);
                healthIndicator.setAttribute('value',hlthRel);
                e.target.remove();
        }else{
            foundItemInfo.appendChild(txt);
            foundItemInfo.style.setProperty('display','block');
            setTimeout(closeIt,5000);
            function closeIt(){
                foundItemInfo.style.setProperty('display','none');
                foundItemInfo.removeChild(txt);
            }
        }
}
var can=food('can',10,5,'can-svgrepo-com.svg');
var water=food('water',5,2,'water-svgrepo-com.svg');
var bread=food('bread',15,10,'bread-svgrepo-com.svg');
var juice=food('juice',13,7,'juice-svgrepo-com.svg');
// can.foundItem();
// water.foundItem();
// bread.foundItem();
// juice.foundItem();

//Valuable Items
function valItems(itemName,price,photo){
    return{
        itemName: itemName,
        price: price,
        photo: photo,
        foundItem: function(){
            //Add To Eq
            var newEl=document.createElement('img');
            newEl.setAttribute('src',this.photo);
            newEl.setAttribute('value',this.price);
            newEl.setAttribute('id',chance.guid());
            newEl.classList.add('elementJustify');
            newEl.classList.add('valuableItem');
            eqContainer.appendChild(newEl);
            elementJustify=document.querySelectorAll('.elementJustify');
            newEl.addEventListener('click',sell);

            //Add To Info
            var newBr=document.createElement('br');
            var newTxtName=document.createTextNode('You found '+this.itemName);
            foundItemInfo.appendChild(newTxtName);
            foundItemInfo.appendChild(newBr);
            foundItemInfo.style.setProperty('display','block');
            setTimeout(closeFoundItemInfo,5000);
            function closeFoundItemInfo(){
                newBr.remove();
                newTxtName.remove();
                foundItemInfo.style.setProperty('display','none');
            }
        },
        didntFound: function(){
            var newEl=document.createElement('br');
            var newTxt=document.createTextNode("didn't found any valuable items");
            foundItemInfo.appendChild(newTxt);
            foundItemInfo.appendChild(newEl);
            foundItemInfo.style.setProperty('display','block');
            setTimeout(closeFoundItemInfo,5000);
            function closeFoundItemInfo(){
                newEl.remove();
                newTxt.remove();
                foundItemInfo.style.setProperty('display','none');
            }
        }
    }
}
var cigaretes=valItems('cigaretes',30,'cigarette-tobacco-svgrepo-com.svg');
var vodka=valItems('vodka',45,'vodka-svgrepo-com.svg');
// cigaretes.foundItem();
// vodka.foundItem();

//Weapons
function weapon(itemName,price,damage,criticalChance,photo){
    return{
        itemName: itemName,
        price: price,
        damage: damage,
        criticalChance: criticalChance,
        photo: photo,
        foundItem: function(){
            //Add To Eq
            var newEl=document.createElement('img');
            newEl.setAttribute('src',this.photo);
            newEl.setAttribute('value',this.price);
            newEl.setAttribute('id',chance.guid());
            newEl.setAttribute('damage',this.damage);
            newEl.setAttribute('criticalChance',this.criticalChance);
            newEl.classList.add('elementJustify');
            newEl.classList.add('weaponItem');
            eqContainer.appendChild(newEl);
            elementJustify=document.querySelectorAll('.elementJustify');
            //Attach event
            newEl.addEventListener('click',sell);
            newEl.onclick=addWeaponToEq;

            //Add To Info
            var newBr=document.createElement('br');
            var newTxtName=document.createTextNode('You found '+this.itemName);
            foundItemInfo.appendChild(newTxtName);
            foundItemInfo.appendChild(newBr);
            foundItemInfo.style.setProperty('display','block');
            setTimeout(closeFoundItemInfo,4999);
            function closeFoundItemInfo(){
                newBr.remove();
                newTxtName.remove();
                foundItemInfo.style.setProperty('display','none');
            }
        },
        didntFound: function(){
            var newEl=document.createElement('br');
            var newTxt=document.createTextNode("didn't found any weapons");
            foundItemInfo.appendChild(newTxt);
            foundItemInfo.appendChild(newEl);
            foundItemInfo.style.setProperty('display','block');
            setTimeout(closeFoundItemInfo,5000);
            function closeFoundItemInfo(){
                newEl.remove();
                newTxt.remove();
                foundItemInfo.style.setProperty('display','none');
            }
        },
    }
}
var pipe=weapon('bat',1,5,5,'bat-svgrepo-com.svg');
var knife=weapon('knife',150,7,15,'knife-svgrepo-com.svg');
var axe=weapon('axe',300,9,17,'axe-svgrepo-com.svg');
var gun=weapon('gun',700,11,30,'gunWeapon-svgrepo-com.svg');
// pipe.foundItem();
// knife.foundItem();
// axe.foundItem();
// gun.foundItem();
//Clothes
function clothes(itemName,type,price,armor,photo){
    return{
        itemName: itemName,
        type: type,
        price: price,
        armor: armor,
        photo: photo,
        foundItem: function(){
            //Add To Eq
            var newEl=document.createElement('img');
            newEl.setAttribute('src',this.photo);
            newEl.setAttribute('value',this.price);
            newEl.setAttribute('id',chance.guid());
            newEl.setAttribute('armor',this.armor);
            newEl.classList.add('elementJustify');
            newEl.classList.add('clothesItem');
            newEl.addEventListener('click',sell);
            if(this.type=='head'){
                newEl.onclick=addHeadArmorToEq;
            }
            if(this.type=='body'){
                newEl.onclick=addBodyArmorToEq;
            }
            if(this.type=='legs'){
                newEl.onclick=addLegsArmorToEq;
            }
            if(this.type=='foot'){
                newEl.onclick=addFootArmorToEq;
            }
            eqContainer.appendChild(newEl);
            elementJustify=document.querySelectorAll('.elementJustify');

            //Add To Info
            var newBr=document.createElement('br');
            var newTxtName=document.createTextNode('You found '+this.itemName);
            foundItemInfo.appendChild(newTxtName);
            foundItemInfo.appendChild(newBr);
            foundItemInfo.style.setProperty('display','block');
            setTimeout(closeFoundItemInfo,5000);
            function closeFoundItemInfo(){
                newBr.remove();
                newTxtName.remove();
                foundItemInfo.style.setProperty('display','none');
            }
        },
        didntFound: function(){
            var newEl=document.createElement('br');
            var newTxt=document.createTextNode("didn't found any clothes");
            foundItemInfo.appendChild(newTxt);
            foundItemInfo.appendChild(newEl);
            foundItemInfo.style.setProperty('display','block');
            setTimeout(closeFoundItemInfo,5000);
            function closeFoundItemInfo(){
                newEl.remove();
                newTxt.remove();
                foundItemInfo.style.setProperty('display','none');
            }
        }
    }
}
var cap=clothes('cap','head',1,2,'capArmor-svgrepo-com.svg');
var shirt=clothes('shirt','body',1,3,'shirtArmor-svgrepo-com.svg');
var jeans=clothes('jeans','legs',1,2,'jeans-svgrepo-com.svg');
var shoes=clothes('shoes','foot',1,1,'shoesArmor-svgrepo-com.svg');
var helmet=clothes('helmet','head',300,5,'helmet-svgrepo-com.svg');
var ballisticCam=clothes('vest','body',350,6,'kevlar-vest-svgrepo-com.svg');
var militaryTrousers=clothes('military trousers','legs',200,4,'trousers-pants-svgrepo-com.svg');
var militaryShoes=clothes('military shoes','foot',200,3,'boots-svgrepo-com.svg');
// cap.foundItem();
// shirt.foundItem();
// jeans.foundItem();
// shoes.foundItem();
// helmet.foundItem();
// ballisticCam.foundItem();
// militaryTrousers.foundItem();
// militaryShoes.foundItem();

function winModalClose(){
    winModal.style.setProperty('display','none');
}

//Enemies
function enemy(name,hp,damage,type,photo){
    return{
        name: name,
        hp: hp,
        damage: damage,
        type: type,
        photo: photo,
        oneManBattle: function(){
            attackItemsDefault()
            main.style.setProperty("background","url('oneMan.jpg')");
            main.style.setProperty('background-size','cover');

            oneManModal.style.setProperty('display','block');
            setTimeout(oneManDanger,5000);

            health=this.hp;
            damage=this.damage;

            attackListeners();
            run.addEventListener('click',runFunction);
        },
        groupOfMenBattle: function(){
            attackItemsDefault()
            main.style.setProperty("background","url('groupOfMen.jpg')");
            main.style.setProperty('background-size','cover');

            groupOfMenModal.style.setProperty('display','block');
            setTimeout(groupOfMenDanger,5000);

            health=this.hp;
            damage=this.damage;

            attackListeners();
            run.addEventListener('click',runFunction);
        },
        enemyPatrolBattle: function(){
            attackItemsDefault()
            main.style.setProperty("background","url('enemyPatrol.jpg')");
            main.style.setProperty('background-size','cover');

            enemyPatrolModal.style.setProperty('display','block');
            setTimeout(enemyPatrolDanger,5000);

            health=this.hp;
            damage=this.damage;

            attackListeners();
            run.addEventListener('click',runFunction);
        }
    }
}
var oneMan=enemy('Armed man',100,5,'oneMan','oneMan.jpg');
var groupOfMen=enemy('Group of armed men',300,10,'groupOfMen','groupOfMen.jpg');
var enemyPatrol=enemy('Enemy patrol',450,15,'enemyPatrol','enemyPatrol.jpg');

function attackListeners(){
    fastAttack.addEventListener('click',fastAttackFunction);
    powerAttack.addEventListener('click',powerAttackFunction);
    
}
function attackItemsDefault(){
    for(let x=0;x<placeItem.length;x++){
        placeItem[x].style.setProperty('display','none');
    }
    disableButtons();
    attackEnable();
    enemyContainer.style.setProperty('display','block');
}

function fastAttackFunction(){
    var fastAttakSound;
    var rand=Math.random()*10;
    if(rand<3){
        fastAttakSound=new Audio('gunSound.mp3');
    }
    if((rand>2)&&(rand<7)){
        fastAttakSound=new Audio('gun2Sound.mp3');
    }
    if(rand>6){
        fastAttakSound=new Audio('gun3Sound.mp3');
    }
    fastAttakSound.volume=0.25;
    fastAttakSound.play();

    attack=(Math.random()*10*itemDamage.getAttribute('value')).toFixed(0);

    if(rightArm.classList.contains('humanDamaged')){
        attack=(Math.random()*5*itemDamage.getAttribute('value')).toFixed(0);
    }

    health-=attack;

    damage=(Math.random()*6).toFixed(0);
    damageReduct=parseInt(headArmorSlot.getAttribute('value'))+parseInt(bodyArmorSlot.getAttribute('value'))+parseInt(legsArmorSlot.getAttribute('value'))+parseInt(footArmorSlot.getAttribute('value'));
    damageItemsInfo();
}
function powerAttackFunction(){
    var fastAttakSound;
    var rand=Math.random()*10;
    var randAtk=Math.random()*10;
    if(rand<3){
        fastAttakSound=new Audio('powerSound.mp3');
    }
    if((rand>2)&&(rand<7)){
        fastAttakSound=new Audio('power2Sound.mp3');
    }
    if(rand>6){
        fastAttakSound=new Audio('power3Sound.mp3');
    }
    fastAttakSound.volume=0.25;
    fastAttakSound.play();

    if(randAtk<7){
        attack=(Math.random()*20*itemDamage.getAttribute('value')).toFixed(0);

        if(leftArm.classList.contains('humanDamaged')){
            attack=(Math.random()*10*itemDamage.getAttribute('value')).toFixed(0);
        }

        health-=attack;
    }

    damageItemsInfo();
}
var randRun=(Math.random()*10).toFixed(0);
function runFunction(){
    var runSound=new Audio('runSound.mp3');
    if(randRun<6){
        runSound.play();
        main.style.setProperty('background',"url('city.jpg')");
        enemyContainer.style.setProperty('display','none');
        attackDisable();
        enableButtons();
    }else{
        damageItemsInfo();
    }
}

var pointHumanRandom;
var pointHumanRandomDamage;

function damageItemsInfo(){
    pointHumanRandom=(Math.random()*10).toFixed(0);
    pointHumanRandomDamage=(Math.random()*10).toFixed(0);
    if(pointHumanRandom<2){
       if(pointHumanRandomDamage<2){
           body.classList.add('humanDamaged');
           body.classList.remove('square');
       } 
       if((pointHumanRandomDamage>1)&&pointHumanRandomDamage<5){
            leftArm.classList.add('humanDamaged');
            leftArm.classList.remove('square');
        }
        if((pointHumanRandomDamage>4)&&pointHumanRandomDamage<7){
            rightArm.classList.add('humanDamaged');
            rightArm.classList.remove('square');
        }
        if((pointHumanRandomDamage>6)&&pointHumanRandomDamage<9){
            legs.classList.add('humanDamaged');
            legs.classList.remove('square');
        }
        if(pointHumanRandomDamage>8){
            head.classList.add('humanDamaged');
            head.classList.remove('square');
        } 
    }
    if(head.classList.contains('humanDamaged')){
        powerAttack.setAttribute('disabled','');
    }//else{
        //powerAttack.removeAttribute('disabled');
    //}
    if(legs.classList.contains('humanDamaged')){
        run.setAttribute('disabled','');
    }//else{
    //     run.removeAttribute('disabled','');
    // }

    damage=(Math.random()*7).toFixed(0);

    if(body.classList.contains('humanDamaged')){
        damage=(Math.random()*10).toFixed(0);
    }

    damageReduct=parseInt(headArmorSlot.getAttribute('value'))+parseInt(bodyArmorSlot.getAttribute('value'))+parseInt(legsArmorSlot.getAttribute('value'))+parseInt(footArmorSlot.getAttribute('value'));
    if(damageReduct>damage){
        realDamage=damage;
    }else{
        realDamage=damage-damageReduct;
    }
    myHealth-=realDamage;

    console.log("damage "+damage);
    console.log("damage reduct "+damageReduct);
    console.log("real damage "+realDamage);
    console.log("health "+myHealth);

    healthIndicator.setAttribute('value',myHealth);
    myHealthWidth=myHealth+'%';
    healthIndicator.style.setProperty('width',myHealthWidth);

    enemyHealthBar.setAttribute('value',health);
    healthWidth=health+'%';
    enemyHealthBar.style.setProperty('width',healthWidth);

    console.log(health);
    console.log(myHealth);

    // if(health>0){
    //     attackDisable();
    //     setTimeout(attackEnable,500);
    // }

    winOrDead();
}

function winOrDead(){
    if(myHealth<=0){
        var deadSound=new Audio('dead.mp3');
        deadSound.play();
        deadModal.style.setProperty('display','block');
        setTimeout(reload,5000);
    }
    if(health<=0){
        winModal.style.setProperty('display','block');
        setTimeout(winModalClose,5000);
        enableButtons();
        main.style.setProperty("background","url('city.jpg')");
        main.style.setProperty('background-size','cover');
        attackDisable();
        enemyContainer.style.setProperty('display','none');
    }
}
function reload(){
    window.location.reload();
}

//Sound Items
var bodyClick=document.querySelector('body');
var musicSound=document.querySelector('.sound');
var soundImg=document.querySelector('.soundImg');

function clickSound(){
    let clickSnd=new Audio('clickCut.mp3');
    clickSnd.volume=0.75;
    clickSnd.play();
}
function themeMusic(){
    let themeMusic=new Audio('theme.mp3');
    themeMusic.loop=true;
    themeMusic.play();
    themeMusic.volume=0.25;
    musicSound.id='play';
    musicSound.setAttribute('disabled','');
}
function searchSound(){
    var searchAudio;
    var randMusic=Math.random()*10;
    if(randMusic<3){
        searchAudio=new Audio('search.mp3');
    }if((randMusic>3)&&randMusic<6){
        searchAudio=new Audio('search2.mp3');
    }if((randMusic>6)&&(randMusic<8)){
        searchAudio=new Audio('search3.mp3');
    }if(randMusic>8){
        searchAudio=new Audio('search4.mp3');
    }
    searchAudio.volume=0.5;
    searchAudio.play();
}
bodyClick.addEventListener('click',clickSound);
musicSound.addEventListener('click',themeMusic);

//Eq Sripts
function openEq(){
    //Hide Items
    hideItems();
    //Hide Map
    hideMap();

    //Open Eq
    eqModal.style.setProperty('display','block');
}

eqButton.addEventListener('click',openEq);

//Map Scripts
function openMap(){
    //Hide Items
    hideItems();
    
    //Open Map
    mapModal.style.setProperty('display','block');
    for(let x=0;x<mapPoint.length;x++){
        mapPoint[x].style.setProperty('display','block');
    }
}
function closeMap(){
    mapModal.style.setProperty('display','none');
    for(let x=0;x<mapPoint.length;x++){
        mapPoint[x].style.setProperty('display','none');
    }
}

mapButton.addEventListener('click',openMap);
mapClose.addEventListener('click',closeMap);

//City Items
var goCity=document.querySelector('.goCity');
var city=document.querySelector('.city');
var cityPoint=document.querySelectorAll('.cityPoint');

function openCity(){
    //Hide Map
    hideMap();

    //Open City
    city.style.setProperty('display','block');
    for(let x=0;x<cityPoint.length;x++){
        cityPoint[x].style.setProperty('display','block');
    }
}

goCity.addEventListener('click',openCity);

//Suburbs Items
var goSuburbs=document.querySelector('.goSuburbs');
var suburbs=document.querySelector('.suburbs');
var suburbsPoint=document.querySelectorAll('.suburbsPoint');

function openSuburbs(){
    //Hide Map
    hideMap();

    //Open Suburbs
    suburbs.style.setProperty('display','block');
    for(let x=0;x<suburbsPoint.length;x++){
        suburbsPoint[x].style.setProperty('display','block');
    }
}

goSuburbs.addEventListener('click',openSuburbs);

//Forest items
var goForest=document.querySelector('.goForest');
var forest=document.querySelector('.forest');
var forestPoint=document.querySelectorAll('.forestPoint');

function openForest(){
    //Hide Map
    hideMap();

    //Open Forest
    forest.style.setProperty('display','block');
    for(let x=0;x<forestPoint.length;x++){
        forestPoint[x].style.setProperty('display','block');
    }
}

goForest.addEventListener('click',openForest);

//Home Items
var goHome=document.querySelector('.goHome');
var home=document.querySelector('.home');
var homePoint=document.querySelectorAll('.homePoint');

function openHome(){
    //Hide Map
    hideMap();

    //Open Home
    home.style.setProperty('display','block');
    for(let x=0;x<homePoint.length;x++){
        homePoint[x].style.setProperty('display','block');
    }
}

goHome.addEventListener('click',openHome);

//Search Scripts
function hideSearch(){
    for(let x=0;x<searchModal.length;x++){
        searchModal[x].style.setProperty('display','none');
    }
}
function openSearch(e){
    if(e.target.classList.contains('flats')){
        hideSearch();
        searchModal[0].style.setProperty('display','block');
    }
    if(e.target.classList.contains('sniperSquare')){
        hideSearch();
        searchModal[1].style.setProperty('display','block');
    }
    if(e.target.classList.contains('market')){
        hideSearch();
        searchModal[2].style.setProperty('display','block');
    }
    if(e.target.classList.contains('frontline')){
        hideSearch();
        searchModal[3].style.setProperty('display','block');
    }
    if(e.target.classList.contains('oneFamilyHouse')){
        hideSearch();
        searchModal[4].style.setProperty('display','block');
    }
    if(e.target.classList.contains('shop')){
        hideSearch();
        searchModal[5].style.setProperty('display','block');
    }
    if(e.target.classList.contains('plot')){
        hideSearch();
        searchModal[6].style.setProperty('display','block');
    }
    if(e.target.classList.contains('highway')){
        hideSearch();
        searchModal[7].style.setProperty('display','block');
    }
    if(e.target.classList.contains('hunt')){
        hideSearch();
        searchModal[8].style.setProperty('display','block');
    }
    if(e.target.classList.contains('mushroms')){
        hideSearch();
        searchModal[9].style.setProperty('display','block');
    }
}

for(let x=0;x<pointBtn.length;x++){
    pointBtn[x].addEventListener('click',openSearch);
}

//Searching Script
function search(e){
    //Progress Bar
    searchSound();
    for(let x=0;x<searchProgress.length;x++){
        searchProgress[x].style.setProperty('display','block');
        searchProgress[x].style.setProperty('animation-name','progressBar');
    }
    var time=setTimeout(search2,5000);
    e.target.setAttribute('disabled','');

    function search2(){
        //Search Food
        e.target.removeAttribute('disabled');
        for(let x=0;x<searchProgress.length;x++){
            searchProgress[x].style.setProperty('display','none');
        }
        var foodPercent=parseFloat(foodChance[e.target.index].getAttribute('value'));
        var findFood=Math.random()*100;
        var howFood=Math.random()*10;
        console.log(findFood.toFixed(0));
        console.log(howFood.toFixed(0));
        if(findFood>0){
            if(findFood<=foodPercent){
                if(howFood<=3){
                    water.foundItem();
                }if((howFood>3)&&(howFood<7)){
                    can.foundItem();
                }if((howFood>7)&&(howFood<10)){
                    juice.foundItem();
                }if(howFood>9){
                    bread.foundItem();
                }
            }else{
                water.didntFound();
            }
        }else{
            search(e);
        }

        //Search Valuable Items
        var valPercent=parseFloat(valChance[e.target.index].getAttribute('value'));
        var findVal=Math.random()*100;
        var howVal=Math.random()*10;
        console.log(findVal.toFixed(0));
        console.log(howVal.toFixed(0));
        if(findVal>0){
            if(findVal<=valPercent){
                if(howVal<=3){
                    vodka.foundItem();
                }if(howFood>3){
                    cigaretes.foundItem();
                }
            }else{
                vodka.didntFound();
            }
        }else{
            search(e);
        }

        //Search Clothes
        var clothesPercent=parseFloat(clothesChance[e.target.index].getAttribute('value'));
        var findClothes=Math.random()*100;
        var howClothes=Math.random()*1000;
        console.log(findClothes.toFixed(0));
        console.log(howClothes.toFixed(0));
        if(findClothes>0){
            if(findClothes<=clothesPercent){
                if(howClothes<200){
                    cap.foundItem();
                }if((howClothes>199)&&(howClothes<401)){
                    shirt.foundItem();
                }if((howClothes>400)&&(howClothes<601)){
                    jeans.foundItem();
                }if((howClothes>600)&&(howClothes<801)){
                    shoes.foundItem();
                }if((howClothes>800)&&(howClothes<851)){
                    shirt.foundItem();
                }if((howClothes>850)&&(howClothes<901)){
                    jeans.foundItem();
                }if((howClothes>900)&&(howClothes<1000)){
                    shoes.foundItem();
                }
            }else{
                cap.didntFound();
            }
        }else{
            search(e);
        }

        //Search Weapons
        var weaponPercent=parseFloat(weaponChance[e.target.index].getAttribute('value'));
        var findWeapon=Math.random()*100;
        var howWeapon=Math.random()*10;
        console.log(findWeapon.toFixed(0));
        console.log(howWeapon.toFixed(0));
        if(findWeapon>0){
            if(findWeapon<=weaponPercent){
                if(howWeapon<=5){
                    pipe.foundItem();
                }if((howWeapon>5)&&(howWeapon<7)){
                    knife.foundItem();
                }if((howWeapon>7)&&(howWeapon<10)){
                    axe.foundItem();
                }if(howWeapon>9){
                    gun.foundItem();
                }
            }else{
                pipe.didntFound();
            }
        }else{
            search(e);
        }

        //Danger Chance
        var dangerTxt;
        var dangerPercent=parseFloat(dangerChance[e.target.index].getAttribute('value'));
        var findDanger=Math.random()*100;
        var howDanger=Math.random()*10;
        console.log(findDanger.toFixed(0));
        console.log(howDanger.toFixed(0));
        if(findDanger>0){
            if(findDanger<=dangerPercent){
                if(howDanger<=5){
                    oneMan.oneManBattle();
                }if((howDanger>5)&&(howDanger<7)){
                    groupOfMen.groupOfMenBattle();
                }if((howDanger>7)&&(howDanger<10)){
                    enemyPatrol.enemyPatrolBattle();
                }if(howDanger>9){
                    sniperModal.style.setProperty('display','block');
                    setTimeout(sniperDanger,5000);
                }
            }
        }else{
            search(e);
        }
    }
}

for(let x=0;x<searchBtn.length;x++){
    searchBtn[x].index=x;
    searchBtn[x].addEventListener('click',search);
}

//Weapon Scripts
function addWeaponToEq(e){
    if(cloneWeaponReverse.classList.contains('usingWeapon')){
        //If Weapon Is In Slot
        var txt=document.createTextNode('If you want place this weapon in slot, you have to remove previous');
        foundItemInfo.appendChild(txt);
        foundItemInfo.style.setProperty('display','block');
        setTimeout(closeFoundItemInfo,5000);
        function closeFoundItemInfo(){
            txt.remove();
            foundItemInfo.style.setProperty('display','none');
        }
    }else{
        //If Weapon Isn't In Slot
        cloneWeapon=e.target.cloneNode(true);
        cloneWeapon.style.setProperty('width','100%');
        cloneWeapon.classList.add('usingWeapon');
        cloneWeaponReverse=cloneWeapon.cloneNode(true);
        weaponAdd.after(cloneWeapon);
        defaultWeaponImg.style.setProperty('display','none');
        e.target.remove();
        weaponDamage=parseInt(cloneWeapon.getAttribute('damage'));
        weaponCriticalChance=parseInt(cloneWeapon.getAttribute('criticalchance'));

        //Damage Indicator
        itemDamageTxt=document.createTextNode(weaponDamage);
        itemCriticalChanceTxt=document.createTextNode(weaponCriticalChance);

        dmg.style.setProperty('display','none');
        cricitaclDmg.style.setProperty('display','none');

        itemDamage.appendChild(itemDamageTxt);
        itemDamage.setAttribute('value',weaponDamage);

        itemCriticalChance.appendChild(itemCriticalChanceTxt);
        itemCriticalChance.setAttribute('value',weaponCriticalChance);

        cloneWeapon.onclick=deleteWeaponFromEq;
    }
}
function deleteWeaponFromEq(e){
    if(e.target.classList.contains('usingWeapon')){
        cloneWeaponReverse=e.target.cloneNode(true);
        eqContainer.appendChild(cloneWeaponReverse);
        cloneWeaponReverse.style.setProperty('width','25%');
        cloneWeaponReverse.classList.remove('usingWeapon');
        cloneWeapon.remove();
        defaultWeaponImg.style.setProperty('display','block');

        //Damage Indicator Default
        dmg.style.setProperty('display','inline-block');
        itemDamage.removeChild(itemDamageTxt);
        itemDamage.setAttribute('value',1);

        cricitaclDmg.style.setProperty('display','inline-block');
        itemCriticalChance.removeChild(itemCriticalChanceTxt);
        itemCriticalChance.setAttribute('value',1);

        cloneWeaponReverse.onclick=addWeaponToEq;
    }
}

//Armor Scripts
function armorOverall(){
    itemArmorTxt=document.createTextNode(parseInt(headArmorArmor+bodyArmorArmor));
    itemArmor.appendChild(itemArmorTxt);
    armorValue.style.setProperty('display','none');
}
function armorOverallEnd(){
    armorValue.style.setProperty('display','inline-block');
    itemArmor.removeChild(itemArmorTxt);
    itemArmor.setAttribute('value',1);
}
//Head Armor
function addHeadArmorToEq(e){
    if(cloneHeadArmorReverse.classList.contains('usingHeadArmor')){
        //If Head Armor Is In Slot
        var txt=document.createTextNode('If you want place this cap in slot, you have to remove previous');
        foundItemInfo.appendChild(txt);
        foundItemInfo.style.setProperty('display','block');
        setTimeout(closeFoundItemInfo,5000);
        function closeFoundItemInfo(){
            txt.remove();
            foundItemInfo.style.setProperty('display','none');
        }
    }else{
        //If Head Armor Isn't In Slot
        cloneHeadArmor=e.target.cloneNode(true);
        cloneHeadArmor.style.setProperty('width','100%');
        cloneHeadArmor.classList.add('usingHeadArmor');
        cloneHeadArmorReverse=cloneHeadArmor.cloneNode(true);
        headArmorAdd.after(cloneHeadArmor);
        defaultHeadArmorImg.style.setProperty('display','none');
        e.target.remove();

        headArmorArmor=parseInt(cloneHeadArmor.getAttribute('armor'));

        //Armor Indicator
        headArmorTxt=document.createTextNode(headArmorArmor);
        headArmorSlot.appendChild(headArmorTxt);
        headArmorSlot.setAttribute('value',headArmorArmor);
        headArmorValue.style.setProperty('display','none');

        cloneHeadArmor.onclick=deleteHeadArmorFromEq;
    }
}
function deleteHeadArmorFromEq(e){
    if(e.target.classList.contains('usingHeadArmor')){
        cloneHeadArmorReverse=e.target.cloneNode(true);
        eqContainer.appendChild(cloneHeadArmorReverse);
        cloneHeadArmorReverse.style.setProperty('width','25%');
        cloneHeadArmorReverse.classList.remove('usingHeadArmor');
        cloneHeadArmor.remove();
        defaultHeadArmorImg.style.setProperty('display','block');

        //Armor Indicator Default
        headArmorValue.style.setProperty('display','inline-block');
        headArmorSlot.removeChild(headArmorTxt);
        headArmor.setAttribute('value',1);

        cloneHeadArmorReverse.onclick=addHeadArmorToEq;
    }
}
//Body Armor
function addBodyArmorToEq(e){
    if(cloneBodyArmorReverse.classList.contains('usingBodyArmor')){
        //If Body Armor Is In Slot
        var txt=document.createTextNode('If you want place this shirt in slot, you have to remove previous');
        foundItemInfo.appendChild(txt);
        foundItemInfo.style.setProperty('display','block');
        setTimeout(closeFoundItemInfo,5000);
        function closeFoundItemInfo(){
            txt.remove();
            foundItemInfo.style.setProperty('display','none');
        }
    }else{
        //If Body Armor Isn't In Slot
        cloneBodyArmor=e.target.cloneNode(true);
        cloneBodyArmor.style.setProperty('width','100%');
        cloneBodyArmor.classList.add('usingBodyArmor');
        cloneBodyArmorReverse=cloneBodyArmor.cloneNode(true);
        bodyArmorAdd.after(cloneBodyArmor);
        defaultBodyArmorImg.style.setProperty('display','none');
        e.target.remove();

        bodyArmorArmor=parseInt(cloneBodyArmor.getAttribute('armor'));

        //Armor Indicator
        bodyArmorTxt=document.createTextNode(bodyArmorArmor);
        bodyArmorSlot.appendChild(bodyArmorTxt);
        bodyArmorSlot.setAttribute('value',bodyArmorArmor);
        bodyArmorValue.style.setProperty('display','none');

        cloneBodyArmor.onclick=deleteBodyArmorFromEq;
    }
}
function deleteBodyArmorFromEq(e){
    if(e.target.classList.contains('usingBodyArmor')){
        cloneBodyArmorReverse=e.target.cloneNode(true);
        eqContainer.appendChild(cloneBodyArmorReverse);
        cloneBodyArmorReverse.style.setProperty('width','25%');
        cloneBodyArmorReverse.classList.remove('usingBodyArmor');
        cloneBodyArmor.remove();
        defaultBodyArmorImg.style.setProperty('display','block');

        //Armor Indicator Default
        bodyArmorValue.style.setProperty('display','inline-block');
        bodyArmorSlot.removeChild(bodyArmorTxt);
        bodyArmor.setAttribute('value',1);

        cloneBodyArmorReverse.onclick=addBodyArmorToEq;
    }
}
//Legs Armor
function addLegsArmorToEq(e){
    if(cloneLegsArmorReverse.classList.contains('usingLegsArmor')){
        //If Legs Armor Is In Slot
        var txt=document.createTextNode('If you want place this pants in slot, you have to remove previous');
        foundItemInfo.appendChild(txt);
        foundItemInfo.style.setProperty('display','block');
        setTimeout(closeFoundItemInfo,5000);
        function closeFoundItemInfo(){
            txt.remove();
            foundItemInfo.style.setProperty('display','none');
        }
    }else{
        //If Legs Armor Isn't In Slot
        cloneLegsArmor=e.target.cloneNode(true);
        cloneLegsArmor.style.setProperty('width','100%');
        cloneLegsArmor.classList.add('usingLegsArmor');
        cloneLegsArmorReverse=cloneLegsArmor.cloneNode(true);
        legsArmorAdd.after(cloneLegsArmor);
        defaultLegsArmorImg.style.setProperty('display','none');
        e.target.remove();

        legsArmorArmor=parseInt(cloneLegsArmor.getAttribute('armor'));

        //Armor Indicator
        legsArmorTxt=document.createTextNode(legsArmorArmor);
        legsArmorSlot.appendChild(legsArmorTxt);
        legsArmorSlot.setAttribute('value',legsArmorArmor);
        legsArmorValue.style.setProperty('display','none');

        cloneLegsArmor.onclick=deleteLegsArmorFromEq;
    }
}
function deleteLegsArmorFromEq(e){
    if(e.target.classList.contains('usingLegsArmor')){
        cloneLegsArmorReverse=e.target.cloneNode(true);
        eqContainer.appendChild(cloneLegsArmorReverse);
        cloneLegsArmorReverse.style.setProperty('width','25%');
        cloneLegsArmorReverse.classList.remove('usingLegsArmor');
        cloneLegsArmor.remove();
        defaultLegsArmorImg.style.setProperty('display','block');

        //Armor Indicator Default
        legsArmorValue.style.setProperty('display','inline-block');
        legsArmorSlot.removeChild(legsArmorTxt);
        legsArmor.setAttribute('value',1);

        cloneLegsArmorReverse.onclick=addLegsArmorToEq;
    }
}
//Foot Armor
function addFootArmorToEq(e){
    if(cloneFootArmorReverse.classList.contains('usingFootArmor')){
        //If Foot Armor Is In Slot
        var txt=document.createTextNode('If you want place this shirt in slot, you have to remove previous');
        foundItemInfo.appendChild(txt);
        foundItemInfo.style.setProperty('display','block');
        setTimeout(closeFoundItemInfo,5000);
        function closeFoundItemInfo(){
            txt.remove();
            foundItemInfo.style.setProperty('display','none');
        }
    }else{
        //If Foot Armor Isn't In Slot
        cloneFootArmor=e.target.cloneNode(true);
        cloneFootArmor.style.setProperty('width','100%');
        cloneFootArmor.classList.add('usingFootArmor');
        cloneFootArmorReverse=cloneFootArmor.cloneNode(true);
        footArmorAdd.after(cloneFootArmor);
        defaultFootArmorImg.style.setProperty('display','none');
        e.target.remove();

        footArmorArmor=parseInt(cloneFootArmor.getAttribute('armor'));

        //Armor Indicator
        footArmorTxt=document.createTextNode(footArmorArmor);
        footArmorSlot.appendChild(footArmorTxt);
        footArmorSlot.setAttribute('value',footArmorArmor);
        footArmorValue.style.setProperty('display','none');

        cloneFootArmor.onclick=deleteFootArmorFromEq;
    }
}
function deleteFootArmorFromEq(e){
    if(e.target.classList.contains('usingFootArmor')){
        cloneFootArmorReverse=e.target.cloneNode(true);
        eqContainer.appendChild(cloneFootArmorReverse);
        cloneFootArmorReverse.style.setProperty('width','25%');
        cloneFootArmorReverse.classList.remove('usingFootArmor');
        cloneFootArmor.remove();
        defaultFootArmorImg.style.setProperty('display','block');

        //Armor Indicator Default
        footArmorValue.style.setProperty('display','inline-block');
        footArmorSlot.removeChild(footArmorTxt);
        footArmor.setAttribute('value',1);

        cloneFootArmorReverse.onclick=addFootArmorToEq;
    }
}