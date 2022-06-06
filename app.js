    const app = document.querySelector("#app");
    const editorSection = document.createElement("section");
    const divMemo = document.createElement("div");
    const divButton = document.createElement("div");
    const addButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const saveButton = document.createElement("button");
    const txtEditArea = document.createElement("div");
    const buttons = document.getElementsByTagName("button");
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
    let memos = [];
    let getMemo = function(){

    };
    // 로컬스토리지에 저장된 메모들을 불러오는 함수
    const loadMemo = function() {
        console.log(`loadMemo`);
        const memoList = localStorage.getItem(memos)
    }

    loadMemo();

    // .wrap-edit .div-memo 의 추가 버튼을 누르면 저장과 동시에 wrap-note 영역에 memo를 생성합니다
    
    // document 로 했어야했는데 .......
    document.addEventListener('click', (e)=>{
        let btn = e.target.closest('button');
        let memoTxt = txtEditArea.textContent;
        if(!btn) return;
        if(e.target.textContent === '추가'){
            saveMemo(memoTxt);
        }
        if(e.target.textContent === '삭제'){
            console.log('del');
        }

        const memoSection = editorSection.cloneNode(true);
        memoSection.setAttribute("class","wrap-note");
        app.appendChild(memoSection);

        clearMemo();
        });

    const saveMemo = function(txt){
        let newId = function (){
            return Math.random().toString(36).substring(2,11);
        }
        console.log("localStorage에 메모 저장");
        console.log(`id : ${newId()}`);
        console.log(txt);
        localStorage.setItem(1,txt)
    }

    const clearMemo = function() {
        txtEditArea.textContent =''
    }

    class Memo {
        constructor(id, value) {
            this.memoId = id,
            this.txt = value;
        }

        showMemoInfo(){
            console.log(`ID : ${this.memoId}\n 
                        TXT : ${this.txt}`);
        }
    }
