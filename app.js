    const app = document.querySelector("#app");
    const editorSection = document.createElement("section");
    const divMemo = document.createElement("div");
    const divButton = document.createElement("div");
    const addButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const saveButton = document.createElement("button");
    const txtEditArea = document.createElement("div");

    // productCard.setAttribute("href", `/detail/${item.id}`);
    // productCard.setAttribute("class", "product-item");

    editorSection.setAttribute("class","wrap-edit");
    divMemo.setAttribute("class","div-memo");
    divButton.setAttribute("class","div-button");
    addButton.setAttribute("class","btn-add");
    deleteButton.setAttribute("class","btn-del");
    saveButton.setAttribute("class","btn-save");
    addButton.setAttribute("type","button");
    deleteButton.setAttribute("type","button");
    saveButton.setAttribute("type","button");
    txtEditArea.setAttribute("class","cont-editor");
    txtEditArea.setAttribute("contenteditable","true");

    app.appendChild(editorSection);
    editorSection.appendChild(divMemo);
    divMemo.appendChild(divButton);
    divMemo.appendChild(txtEditArea);
    divButton.appendChild(addButton);
    divButton.appendChild(deleteButton);
    divButton.appendChild(saveButton);

    addButton.textContent = "추가"
    deleteButton.textContent = "삭제"
    saveButton.textContent = "저장"

    let todo = [];
    let getMemo = function(){

    };

    optionButton.addEventListener('click', ()=>{
        if(textarea.value != ''){
            console.log('비어있지않음');
            localStorage.setItem(`메모${localStorage.length}`,text);
            
        }
        getMemo();
    });
