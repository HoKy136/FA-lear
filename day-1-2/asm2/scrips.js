
function createHeader(){
    const secHeader = document.getElementById('containerHeader');
    const divHeader = document.createElement('div');
    divHeader.className = 'divHeader ';
    
    

    const navHeader = document.createElement('nav');
    navHeader.className = 'navHeader';

    const divBtnHeader = document.createElement('div');
    divBtnHeader.className = 'divBtnHeader';

    const h4Header = document.createElement('h6');
    h4Header.innerHTML = 'START BOOTSTRAP';
    h4Header.className ='hHeader';

    const a1Header = document.createElement('a');
    a1Header.innerHTML ='SIGN UP';
    a1Header.className ='a1Header';

    const a2Header = document.createElement('a');
    a2Header.innerHTML ='LOG IN';
    a2Header.className ='a2Header';

// ~~~~~~~~~~~~~Dropdown~~~~~~~~~~~~~

    var btnDropdown = document.createElement('button');
    btnDropdown.innerHTML ='&#9776;'
    btnDropdown.className = 'btnDropdown';
    
    
    var dropdownMenu = document.createElement('ul');
    dropdownMenu.className = 'dropdownMenu';
    dropdownMenu.id = 'idDropdownMenu';

    var menuList1 = document.createElement('li')
    menuList1.innerHTML = 'SIGN UP'
    var menuList2 = document.createElement('li')
    menuList2.innerHTML = 'LOGIN'
    dropdownMenu.style = 'display : none;'
    btnDropdown.addEventListener("click" , hamDropdown);
     function hamDropdown() {
        
        if(dropdownMenu.style.display == 'none'){
          dropdownMenu.style.display = 'block';
        }    else{
            dropdownMenu.style.display ='none';
        }
        
        
       }
       
   
   
    dropdownMenu.append(menuList1 ,menuList2);
    btnDropdown.append(dropdownMenu);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const divBodyHeader = document.createElement('div');
    divBodyHeader.className = 'divBodyHeader';

    const h3BodyHeader = document.createElement('h3');
    h3BodyHeader.innerHTML = 'One Page Wonder';
    h3BodyHeader.className ='h3BodyHeader';

    const h4BodyHeader = document.createElement('h4');
    h4BodyHeader.innerHTML = 'Will Rock Your Socks Off';
    h4BodyHeader.className ='h4BodyHeader';

    const btnBodyHeader = document.createElement('button');
    btnBodyHeader.innerHTML = 'LEARN MORE';
    btnBodyHeader.className ='btnBodyHeader';

    divBodyHeader.append(h3BodyHeader , h4BodyHeader ,btnBodyHeader);
    divBtnHeader.append(a1Header , a2Header );
    navHeader.append(h4Header , divBtnHeader , btnDropdown);
    divHeader.append(navHeader , divBodyHeader);
    secHeader.appendChild(divHeader);
    
}
createHeader();

function createMain(){
    const secMain = document.getElementById('containerMain');
    const divBody = document.createElement('div');

    const divBodyDesc1 = document.createElement('div');
    divBodyDesc1.className = 'divBodyDesc1';
    const divBodyContent1  = document.createElement('div');
    const hBodyContent1 = document.createElement('h1');
    hBodyContent1.style = 'font-weight: 800;';
    hBodyContent1.innerHTML = 'For those about to rock...';
    const pBodyContent1  = document.createElement('p');
    pBodyContent1.innerHTML = 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quod aliquild, ' +
    'mollitia odio veniam sit iste esse assumenda amet aperiam exer, '+
    'ea animi blanditiis recusandae!';
    const imgBody1 = document.createElement('img');
    imgBody1.src ='./resources/images/01.jpg';
    imgBody1.className = 'imgBody1';
    divBodyContent1.append(hBodyContent1 , pBodyContent1);
    divBodyDesc1.append(divBodyContent1 ,imgBody1);
    

    const divBodyDesc2 = document.createElement('div');
    divBodyDesc2.className ='divBodyDesc2';
    const divBodyContent2 = document.createElement('div');
    const hBodyContent2= document.createElement('h1');
    hBodyContent2.innerHTML = 'We salute you!';
    hBodyContent2.style = 'font-weight : 800;';
    const pBodyContent2 = document.createElement('p');
    pBodyContent2.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quod aliquild, ' +
    'mollitia odio veniam sit iste esse assumenda amet aperiam exer, '+
    'ea animi blanditiis recusandae!';
    const imgBody2 = document.createElement('img');
    imgBody2.src ='./resources/images/02.jpg';
    imgBody2.className = 'imgBody1';

    divBodyContent2.append(hBodyContent2 , pBodyContent2);
    divBodyDesc2.append(divBodyContent2 , imgBody2);


    const divBodyDesc3 = document.createElement('div');
    divBodyDesc3.className ='divBodyDesc3';
    const divBodyContent3 = document.createElement('div');
    const hBodyContent3= document.createElement('h1');
    hBodyContent3.innerHTML = 'Let there be rock!';
    hBodyContent3.style = 'font-weight : 800;';
    const pBodyContent3 = document.createElement('p');
    pBodyContent3.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quod aliquild, ' +
    'mollitia odio veniam sit iste esse assumenda amet aperiam exer, '+
    'ea animi blanditiis recusandae!';
    const imgBody3 = document.createElement('img');
    imgBody3.src ='./resources/images/03.jpg';
    imgBody3.className = 'imgBody1';

    divBodyContent3.append(hBodyContent3 , pBodyContent3);
    divBodyDesc3.append(divBodyContent3 , imgBody3);




    divBody.append(divBodyDesc1,divBodyDesc2,divBodyDesc3)
    secMain.appendChild(divBody);

}
createMain();

function createFooter(){
    const secFooter = document.getElementById('containerFooter');
    const navFooter = document.createElement('nav');
    navFooter.className = 'navFooter';

    const pFooter = document.createElement('p');
    pFooter.className = 'pFooter';
    pFooter.innerHTML = 'Copyright 	&#169 ' +' ' + 'Your Website 2020'
    
    
    navFooter.append(pFooter);
    secFooter.appendChild(navFooter)
}
createFooter();
