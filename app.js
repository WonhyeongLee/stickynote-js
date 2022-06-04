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
    txtEditArea.setAttribute("class","cont-editor");
    txtEditArea.setAttribute("contenteditable","true");

    app.appendChild(editorSection);
    editorSection.appendChild(divMemo);
    divMemo.appendChild(divButton);
    divMemo.appendChild(txtEditArea);
    divButton.appendChild(addButton);
    divButton.appendChild(deleteButton);


    addButton.textContent = "추가"
    deleteButton.textContent = "삭제"

    let memos = [];
    let getMemo = function(){

    };

    // .wrap-edit .div-memo 의 추가 버튼을 누르면 저장과 동시에 wrap-note 영역에 memo를 생성합니다
    // 저장버튼은 필요없어짐, 추가와 동시에 localStorage에 저장
    addButton.addEventListener('click', ()=>{
        const memoSection = editorSection.cloneNode(true);
        memoSection.setAttribute("class","wrap-note");
        app.appendChild(memoSection);
        // 나중에 모듈처럼 빼서 작성
        console.log("addButton Clicked");
        // 섹션의 클래스명만 다르고 나머지는 똑같으니까 함수하나로 묶어보자
        console.log(memoSection);
    });

    const saveMemo = function(txt){
        console.log("localStorage에 메모 저장");
    }
