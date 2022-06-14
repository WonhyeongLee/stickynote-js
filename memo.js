class Memos{
    constructor(){
        const app = document.querySelector("#app");
        const editorSection = document.createElement("section");
        const memoSection = document.createElement("section");
        const divMemo = document.createElement("div");
        const divButton = document.createElement("div");
        const addButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const saveButton = document.createElement("button");
        const txtEditArea = document.createElement("div");

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
    }
}