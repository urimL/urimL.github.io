function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    // 경로 앞에 ./를 붙여 현재 폴더임을 명시합니다.
    console.log("클릭된 프로젝트: ", projectId );
    
    fetch(`./${projectId}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('파일을 찾을 수 없습니다: ' + projectId + '.html');
            }
            return response.text();
        })
        .then(html => {
            modalBody.innerHTML = html;
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        })
        .catch(error => {
            console.error('Error:', error);
            alert('파일 로드 실패! 콘솔(F12)을 확인하세요.');
        });
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    // 클릭된 대상이 모달 배경(modal)일 경우에만 닫기
    if (event.target == modal) {
        closeModal();
    }
};

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) closeModal();
}