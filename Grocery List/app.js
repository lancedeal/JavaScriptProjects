const add_field = document.getElementById('add');
const remove_field = document.getElementById('remove');

const add_btn = document.getElementById('btn-1');
const remove_btn = document.getElementById('btn-2');

const list = document.querySelector('.grocery-list')
var listItems = document.querySelectorAll('li');



add_btn.addEventListener('click',()=>{
    let val_pos=add_field.value;
    add_field.value='';
    let item = document.createElement('li');
    item.setAttribute('id',val_pos)
    item.appendChild(document.createTextNode(val_pos))
    list.appendChild(item);
    listItems = document.querySelectorAll('li');
    return listItems
})
remove_btn.addEventListener('click',()=>{
    var clean_items = [];

    let val_neg=remove_field.value;
    remove_field.value='';
    for(let i of listItems){
        if(i.innerText in clean_items){
            continue
        }
        else{
            clean_items.push(i.innerText);
        }
    }
    if(clean_items.includes(val_neg)){
        let trash = document.getElementById(val_neg);
        trash.parentElement.removeChild(trash);
    }
    else{
        console.log('Item not in list')
    }
})