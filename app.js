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
    const loadMemo = function() {
        console.log(`loadMemo`);
        
    }

    loadMemo();

    // .wrap-edit .div-memo 의 추가 버튼을 누르면 저장과 동시에 wrap-note 영역에 memo를 생성합니다
    const addMemo = function(id, txt) {
        // const memos = getMemos();
        const memoId = id;
        const memoTxt = txt;

        console.log(memoTxt);
        localStorage.setItem(`${memoId}`,memoTxt);
    }
    /*
<script>
    area.value = localStorage.getItem('area');
    area.oninput = () => {
      localStorage.setItem('area', area.value)
    };
</script>

*/

    // const contEditor = document.querySelector('.cont-editor');
    // contEditor.addEventListener('keydown', () => {
    //     console.log(contEditor);
    // })
    document.addEventListener('click', (e)=>{
        const btn = e.target.closest('button');
        const memoTxt = txtEditArea.textContent;
        if(!btn) return console.log('not btn');


        if(e.target.textContent === '추가'){
            console.log(e.target);
            const newMemoId = Math.random().toString(36).substring(2,11);
            divMemo.setAttribute("id",`${newMemoId}`);

            const memoSection = editorSection.cloneNode(true);
            memoSection.setAttribute("class","wrap-note");
            app.appendChild(memoSection);
            addMemo(newMemoId, memoTxt);

        }
        if(e.target.textContent === '삭제'){
            console.log('del');
            const targetId = e.target.closest('.div-memo');
            
            deleteMemo(targetId);
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
        console.log(target.parentElement);
        console.log(target.id);
        console.log('deleteMemo');
        localStorage.removeItem(target.id);
        // targetId.parentElement.remove();
    }
    const clearMemo = function() {
        txtEditArea.textContent = ''
    }

    const createMemo = function() {

    }

// 로컬스토리지에 저장된 메모 첫 로드시 불러오는 기능 추가햐ㅐ야함
