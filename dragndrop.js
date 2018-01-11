// get elements 
var plxBetterMedia_f=document.getElementById('folder');//folder selection
var plxBetterMedia_s=document.getElementById('id_selection');//operation selection
var plxBetterMedia_t=document.getElementById('medias-table');//media table

// create the container of the folder view <ul>
var ulroot=document.createElement('ul');
ulroot.className=plxBetterMedia_f.className;
plxBetterMedia_f.parentNode.nextElementSibling.appendChild(ulroot);

// create folder items <li><button>...
var plxBetterMedia_ft=[];
ul_tree={};
li_tree={};

function  _construct_li(path){
  ulel=ulroot;
  if (path.length > 1){
    for (var i=0; i<path.length-1;i++){
      subp=path.slice(0,i+1).join('/');
      if (!li_tree.hasOwnProperty(subp)){
        //      console.log('create intermediate li for ',subp);
        newi=document.createElement('li');
        ulel.appendChild(newi);
        li_tree[subp]=newi;
      } 
      if (!ul_tree.hasOwnProperty(subp)){
        //      console.log('create intermediate ul for ',subp);
        newul=document.createElement('ul');
        li_tree[subp].className+=' sub';
        li_tree[subp].appendChild(newul);
        ul_tree[subp]=newul;
      }
      ulel=ul_tree[subp];
    }
  }
  subp=path.join('/');
  if (!li_tree.hasOwnProperty(subp)){
    //  console.log('create li for',subp);
    newi=document.createElement('li');
    ulel.appendChild(newi);
    li_tree[subp]=newi;
  } 
  return li_tree[subp];
}

function _construt_dir_btn(newi,it_f,name){
  newb=document.createElement('button');
  newb.innerHTML=name;
  newb.setAttribute('onclick',"plxBetterMedia_f.value='"+it_f.value+"'");
  newb.setAttribute('ondragover','event.preventDefault();');

  newd=document.createElement('div');
  newd.appendChild(newb);
  selected=it_f.getAttribute('selected');
  newd.className='directory '+(selected?'selected ':'')+it_f.className;

  // if not current dir, then make it dropable
  if (!selected){
    newb.setAttribute('ondragenter',
      'plxBetterMedia_ft['+plxBetterMedia_ft.length+'].className="isdragover";');
    newb.setAttribute('ondragleave',
      'plxBetterMedia_ft['+plxBetterMedia_ft.length+'].className="";');
    newb.setAttribute('ondrop',
      "event.preventDefault();"+
      "plxBetterMedia_s.value='move';" +
      "plxBetterMedia_f.value='"+ it_f.value+ "'; "+
      "document.getElementsByName('btn_ok').item(0).click();"
    );
  }
  newi.appendChild(newd);
  plxBetterMedia_ft.push(newb);
}

for (var it_f of plxBetterMedia_f.getElementsByTagName('option')){
  path=it_f.innerHTML.split('/').filter(function(i){return i.length > 0;});
  // make li element
  newi=_construct_li(path);
  // construct button
  _construt_dir_btn(newi,it_f,path[path.length-1]);
}

function plxBetterMedia_dragstart(){
  document.getElementById('files_manager').firstElementChild.setAttribute('style','display:none');
}

function plxBetterMedia_dragend(){
document.getElementById('files_manager').firstElementChild.removeAttribute('style');
}

//make elements draggable
var plxBetterMedia_it=[];
for (var it_t of plxBetterMedia_t.getElementsByTagName('tr')){
  it_t.setAttribute('ondragend', "plxBetterMedia_dragend();plxBetterMedia_it["+plxBetterMedia_it.length+"].checked=false;");
  it_t.setAttribute('ondragstart',
    "plxBetterMedia_dragstart();"+
    "plxBetterMedia_it["+plxBetterMedia_it.length+"].checked=true;");
  plxBetterMedia_it.push(it_t.getElementsByTagName('input').item(0));
}
