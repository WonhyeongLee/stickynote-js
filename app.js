    const app = document.querySelector("#app");
    const editorSection = document.createElement("section");
    const divMemo = document.createElement("div");
    const divButton = document.createElement("div");
    const addButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const saveButton = document.createElement("button");
    const txtEditArea = document.createElement("div");
    const buttons = document.getElementsByTagName("button");
    // const memoKeys = [];
    // querySelectorAll 은 static collection 이라 나중에 생긴 메모의 버튼은 반영이 안되는 문제가 있었음. getElementsByTagName 으로 대체
    // + cloneNode 로 복사한 노드들으 이벤트 까지 복사해주지는 않음
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

    // 로컬스토리지에 저장된 메모들을 불러오는 함수
    window.onload = function() {
        loadMemo();
    }
    const loadMemo = function() {
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            let memoTxt = localStorage.getItem(key);
            console.log(`${key}: ${memoTxt}`);
            createMemo(key,memoTxt);
        }
    }
    

    // .wrap-edit .div-memo 의 추가 버튼을 누르면 저장과 동시에 wrap-note 영역에 memo를 생성합니다
    const addMemo = function(id, txt) {
        // const memos = getMemos();
        const memoId = id;
        const memoTxt = txt;
        console.log(memoTxt);
        localStorage.setItem(`${memoId}`,memoTxt);
    }

    document.addEventListener('click', (e)=>{
        const btn = e.target.closest('button');
        const memoTxt = txtEditArea.textContent;
        if(!btn) return;


        if(e.target.textContent === '추가'){
            console.log(e.target);
            // 랜덤id생성
            const newMemoId = Math.random().toString(36).substring(2,11);
            createMemo(newMemoId, memoTxt);
        }
        if(e.target.textContent === '삭제'){
            console.log('del');
            const targetId = e.target.closest('.div-memo');
            console.log(targetId);
            deleteMemo(targetId);
            memoIds.pop(targetId)
        }

        clearMemo();
    });

    document.addEventListener('input', (e)=>{
        const txtArea = e.target.closest('div .div-memo');
        const targetId = txtArea.id;
        const targetTxt = txtArea.childNodes[1].textContent;

        // 메모가 아닌 곳에 입력하면 null 반환
        if(!txtArea) return;

        // 처음 메모에 id가 저장되면서 밀리는 현상 처리
        // 아이디가 있는 타겟만 정저장해줌 (첫 메모는 아이디를 가지지 않기 때문에)
        if(targetId){
            addMemo(targetId,targetTxt);
        }else{
            console.log('targetId 없음');
        }

    })
    const deleteMemo = function(target) {
        console.log('deleteMemo');
        console.log(target.parentElement);
        console.log(target.id);
        if(target.id){
            localStorage.removeItem(target.id);
            target.parentElement.remove();
        }else {
            console.log('');
        }
    }
    const clearMemo = function() {
        txtEditArea.textContent = ''
    }

    const createMemo = function(id,txt){
        const memoSection = editorSection.cloneNode(true);
        const memoTxtArea = memoSection.lastChild.childNodes[1]
        memoSection.setAttribute("class","wrap-note");
        memoTxtArea.textContent = txt
        memoSection.childNodes[0].setAttribute("id",`${id}`)
        app.appendChild(memoSection);
        addMemo(id, txt);
    }

