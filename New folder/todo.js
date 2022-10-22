var index = 0;
function renderTodo(){
    

    const input = document.createElement('input');
    input.id = 'inputTodo';
    const btnAdd = document.createElement('button');
    btnAdd.addEventListener('click' , handleAdd);
    btnAdd.classList.add('bi','bi-plus-circle');
    btnAdd.classList.add('btn-primary')

    document.getElementById('root').append(input , btnAdd);

}
renderTodo()
function handleAdd(value){
    let result;
    index +=1;

    console.log('clicked');
    const div = document.createElement('div')
    div.classList.add('d-flex', 'mb-3');
    div.id = 'item-' + index;
    div.onclick = handleToggle(div.id);
    const pList = document.createElement('span');
    pList.innerText = document.getElementById('inputTodo').value;
    
    
    const btnRemove = document.createElement('button');
    btnRemove.addEventListener('click' , handleRemove(div.id));
    btnRemove.classList.add('bi','bi-trash');
    btnRemove.classList.add( 'btn-danger');
    div.append(pList , btnRemove);

    document.getElementById('idList').appendChild(div)
    result = div;
    return result;
}

function handleRemove(id){
    return function(){
        const handleDel = document.getElementById(id);
        handleDel.remove();
    }
}

function handleToggle(id){
    return function(){
        const toggle = document.getElementById(id);
        if(toggle.style.backgroundColor === 'none'){
            toggle.style.backgroundColor = 'green' ;
        }else{
            toggle.style.backgroundColor = 'none'
        }
    }
    
}
