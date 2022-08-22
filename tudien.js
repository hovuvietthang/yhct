const wrapper = document.querySelector(".wrapper"),
searchInput = wrapper.querySelector("input"),
volume = wrapper.querySelector(".word i"),
infoText = wrapper.querySelector(".info-text"),
synonyms = wrapper.querySelector(".synonyms .list"),
removeIcon = wrapper.querySelector(".search span");
let audio;

function data(result, word){
    if(result.title){
        infoText.innerHTML = `Chúng tôi không tìm thấy nghĩa của từ <span>"${word}"</span>. Mong bạn tra cứu lại với từ khác !`;
    }else{
        wrapper.classList.add("active");
        let definitions = result[0].meanings;
            document.querySelector(".word p").innerText = result[0].word;
      
        document.querySelector(".meaning span").innerText = definitions;

    }
}

function search(word){
    fetchApi(word);
    searchInput.value = word;
}

function fetchApi(word){
    wrapper.classList.remove("active");
    infoText.style.color = "#000";
    infoText.innerHTML = `Đang tìm kiếm nghĩa của từ : <span>"${word}"</span>`;
    let url = `https://sheetdb.io/api/v1/6szful0r3lqbu/search?word=${word}`;
    fetch(url).then(response => response.json()).then(result => data(result, word)).catch(() =>{
        infoText.innerHTML = `Chúng tôi không tìm thấy nghĩa của từ <span>"${word}"</span>. Mong bạn tra cứu lại với từ khác !`;
    });
}

searchInput.addEventListener("keyup", e =>{
    let word = e.target.value.replace(/\s+/g, ' ');
    if(e.key == "Enter" && word){
        fetchApi(word);
    }
});

volume.addEventListener("click", ()=>{
    volume.style.color = "#4D59FB";
    audio.play();
    setTimeout(() =>{
        volume.style.color = "#999";
    }, 800);
});

removeIcon.addEventListener("click", ()=>{
    searchInput.value = "";
    searchInput.focus();
    wrapper.classList.remove("active");
    infoText.style.color = "#9A9A9A";
    infoText.innerHTML = "Nhập từ bạn muốn tìm và chọn cụm từ đề xuất.";
});



