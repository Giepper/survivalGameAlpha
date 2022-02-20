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

function disableButtons(){
    mapButton.setAttribute('disabled','');
    eqButton.setAttribute('disabled','');
    searchBtn.setAttribute('disabled','');
}
function enableButtons(){
    mapButton.removeAttribute('disabled');
    eqButton.removeAttribute('disabled');
    searchBtn.removeAttribute('disabled');
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
            newEl.classList.add('elementJustify');
            eqContainer.appendChild(newEl);

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
            eqContainer.appendChild(newEl);

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
            //Attach event
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
var pipe=weapon('pipe',0,5,5,'bat-svgrepo-com.svg');
var knife=weapon('knife',150,10,15,'knife-svgrepo-com.svg');
var axe=weapon('axe',300,17,17,'axe-svgrepo-com.svg');
var gun=weapon('gun',700,30,30,'gunWeapon-svgrepo-com.svg');
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
var cap=clothes('cap','head',0,1,'capArmor-svgrepo-com.svg');
var shirt=clothes('shirt','body',0,1,'shirtArmor-svgrepo-com.svg');
var jeans=clothes('jeans','legs',0,1,'jeans-svgrepo-com.svg');
var shoes=clothes('shoes','foot',0,1,'shoesArmor-svgrepo-com.svg');
var helmet=clothes('helmet','head',300,3,'helmet-svgrepo-com.svg');
var ballisticCam=clothes('vest','body',350,4,'kevlar-vest-svgrepo-com.svg');
var militaryTrousers=clothes('military trousers','legs',200,2,'trousers-pants-svgrepo-com.svg');
var militaryShoes=clothes('military shoes','foot',200,2,'boots-svgrepo-com.svg');
// cap.foundItem();
// shirt.foundItem();
// jeans.foundItem();
// shoes.foundItem();
// helmet.foundItem();
// ballisticCam.foundItem();
// militaryTrousers.foundItem();
// militaryShoes.foundItem();

//Enemies
function enemy(name,hp,damage,type,photo){
    return{
        name: name,
        hp: hp,
        damage: damage,
        type: type,
        photo: photo,
        battle: function(){}
    }
}

var oneEnemy=enemy('One enemy',100,5,'oneEnemy');

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

//Equipment Items
var eqButton=document.querySelector('.eqButton');
var eqModal=document.querySelector('.eqModal');
var eqContainer=document.querySelector('.eqContainer');
var eqClose=document.querySelector('.eqClose');

function openEq(){
    //Hide Items
    hideItems();
    //Hide Map
    hideMap();

    //Open Eq
    eqModal.style.setProperty('display','block');
}

eqButton.addEventListener('click',openEq);

//Map Items
var mapButton=document.querySelector('.mapButton');
var mapModal=document.querySelector('.mapModal');
var mapPoint=document.querySelectorAll('.mapPoint');
var mapClose=document.querySelector('.mapClose');

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
                    // dangerModal.style.setProperty('display','block');
                    // dangerTxt=document.createTextNode('You found armed man');
                    // dangerModal.appendChild(dangerTxt);
                    oneManDanger();
                }if((howDanger>5)&&(howDanger<7)){
                    // dangerModal.style.setProperty('display','block');
                    // dangerTxt=document.createTextNode('You found group of armed men');
                    // dangerModal.appendChild(dangerTxt);
                    //someManDanger();
                    sniperModal.style.setProperty('display','block');
                    setTimeout(sniperDanger,5000);
                }if((howDanger>7)&&(howDanger<10)){
                    // dangerModal.style.setProperty('display','block');
                    // dangerTxt=document.createTextNode('You found enemy army patrol');
                    // dangerModal.appendChild(dangerTxt);
                    //enemyArmyDanger();
                    sniperModal.style.setProperty('display','block');
                    setTimeout(sniperDanger,5000);
                }if(howDanger>9){
                    sniperModal.style.setProperty('display','block');
                    setTimeout(sniperDanger,5000);
                }
            }else{
                alert('You didnt found any danger');
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

//Attack buttons
var wpnDmg=itemDamage.getAttribute('value')
var fastAttack=document.querySelector('.fastAttack');
var powerAttack=document.querySelector('.powerAttack');
var defend=document.querySelector('.defend');
var run=document.querySelector('.run');
var enemyOneManHp=100;
var attack=Math.random()*10*wpnDmg;
function fastAttackFunction(){
    attack=Math.random()*10*itemDamage.getAttribute('value');
}

fastAttack.addEventListener('click',fastAttackFunction);

//Danger Functions
var atk=document.querySelector('.atk');