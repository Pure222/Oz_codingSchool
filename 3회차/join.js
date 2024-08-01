const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    let userId = form.elements.id.value
    let userPw1 = form.elements.pw1.value
    let userPw2 = form.elements.pw2.value
    let userName = form.elements.name.value
    let userPhone = form.elements.phone.value
    let userPosition = form.elements.position.value
    let userGender = form.elements.gender.value
    let userEmail = form.elements.email.value
    let userIntro = form.elements.intro.value
    
    if(userId.length < 6){
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.")
        return 
    }

    if(userPw1 !== userPw2){
        alert("비밀번호가 일치하지 않습니다.")
        return
    }

    document.body.innerHTML = ""
    document.write(`
        <p>${userId}님 환영합니다</p> 
        <p>회원 가입 시 입력하신 내역은 다음과 같습니다.</p> 
        <p>아이디: ${userId}</p>
        <p>이름: ${userName}</p>
        <p>전화번호: ${userPhone}</p>
        <p>원하는 직무: ${userPosition}</p>
    `)
})
