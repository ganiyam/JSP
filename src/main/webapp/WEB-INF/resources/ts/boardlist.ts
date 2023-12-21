//@ts-nocheck
// Ajax는 두종류의 명칭으로 쓰인다.
// Ajax라는 기본 통신형 대분류 명칭 
// Jquery의 Ajax 기술의 명칭이 Ajax

// XMLHttpRequest -> 클래스  new XMLHttpRequest()
// fetch -> 함수 fetch(url)

// fetch는 url과 options 을 넣으면 해당하는 url로 request를 보내고 response를 받는 일방형 통신 기술
// 페이지 이동이 특별히 필요하지 않으면 없다

// fetch는 결과값으로 무엇을 돌려주는가?
// 결과값을 Promise 형태로 받아오기 때문

async function ajax(url:string, option?:any){
    return fetch(url, option).then((res)=> res.json());
} 

// form -> submit
// formdata가 파일을 전송할때 자동적으로 boundary 작업 -> 경계선 

// Encrypt Data -> 암호화 정보

// AjaxFilter에 password로 Hello를 보내면
// Hello+EncodedData 를 전송
// AjaxFilter는 +EncodeData를 떼고 Hello만 출력

let form:FormData=new FormData();
form.append("password", "Hello+EncodeData");

ajax("/api/boardlist",{
    method: "POST",
    body: form,
    // headers:{
    //     "Content-Type": "application/json",
    //     "Authorization": "ABCD",
    //     // "User-Agent": "robots" // IOS, WINDOW, ANDROID 환경을 모두 맞추고 싶을때
    // },
    // // body:new FormData() 
    // mode:"cors",
    // cache:"default",
    //     // no-store :저장x 캐시를 만들지마 , reload : 캐시가 남아있어도 다시 요청, no-cache : 검사용 캐시를 쓰지 않을 거야, force-cache : 저장한 다음 유효성 검사x,
    //     // only-if-cached : 제일 처음에 한번 요청하고 그 이후엔 절대 바꾸지 않음 (고정값 쓰겠다)
    // redirect:"follow", // 페이지 막을때 
    //     //follow : 서버에서 가라고 하면 가, error: 서버에서 가라고 하면 error띄우기, menual : 안가는게 맞는데 안가고 수동으로 이동해
    // referrer:"no-referrer", //어디에서 왔는지 정보를 알려줌 
    // // no-referrer : 알려주지 않을거야, strict-origin : 같은 도메인이면 보내줄거야, unsafe:다 보낼거야
}).then((json) => {
    let boards: HTMLElement =  document.querySelector("#boards");
    let template: HTMLTemplateElement = 
        document.querySelector("#boards template");
    if(template) {
        for(let data of json.data){
            template.content.querySelector(".id").innerHTML = data.id;
            template.content.querySelector(".title").innerHTML = data.title;
            template.content.querySelector(".author").innerHTML = data.boardUser.name;
            let div: HTMLElement | null = document.createElement("div");
            div.innerHTML = template.innerHTML;
            if(boards) {
                boards.appendChild(div);
            }
        } 
    }
});

// filter

// fetch("/api/boardlist", {
//     method: "POST",
// })
// .then((res) => res.json())
// .then((json) => {
//     console.log(json);
// });