let todo_list=[];
displayItem();
function addTodo(){

  let input_element=document.querySelector('#todo-input');
  let input_date=document.querySelector('#todo-date');
  let todo_item=input_element.value
  let tododate=input_date.value;
  todo_list.push({item: todo_item,duedate: tododate});
  input_element.value='';
  input_date=' ';
 
  displayItem();
 
}
function displayItem(){
  let container_element=document.querySelector('.todo-container');

  let newhtml='';

  
  for(let i=0;todo_list[i]!==undefined;i++){
    let item=todo_list[i].item;
    let duedate=todo_list[i].duedate;
    //let {item,duedate}=todo_list[i];
    newhtml+=`
    
        <span>${item}</span>
         <span>${duedate}</span>
        <button class="btn-delete" onclick="todo_list.splice(${i},1); displayItem();">Delete</button>
    `;
   
  }
 container_element.innerHTML=newhtml;


}
