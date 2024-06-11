const addBtn = document.todoForm.addBtn;

addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const todo = document.todoForm.todo;
    const todoList = document.getElementById('todo-list');

    let li = document.createElement('li');
    let txt = document.createTextNode(todo.value);

    let button = document.createElement('button');
    let txt2 = document.createTextNode('삭제');

    button.appendChild(txt2);

    li.appendChild(txt);
    li.appendChild(button);

    todoList.appendChild(li);

    //삭제버튼을 모두 찾은 후 삭제기능 구현
    // - 삭제할 요소의 부모노드가 누구인지 알고 있어야 한다!
    removeElement(todoList);
});

const removeElement = (todoList) => {
    //1.삭제버튼요소를 모두 찾기
    const removeBtns = document.getElementsByTagName('button');
    console.log(removeBtns);

    //2.삭제버튼에 이벤트 적용하기
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', (event) => {

            //부모노드.removeChild(): 자식노드를 삭제하는 메소드
            todoList.removeChild(event.target.parentNode);
            console.log(event.target.parentNode);
        });
    }
}