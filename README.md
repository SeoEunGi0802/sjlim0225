-------
# 개인프로젝트 "WIMP"가 맘에 들지 않아서 다시 만들어보는 프로젝트
> [WIMP](http://3.36.239.49/WIMP)

## PHP에서 SNS로그인 API를 CURL방식으로 사용하는 각 코드를 좌측 메뉴에서 선택하면 해당 코드 출력방식
-------
### 2021-06-13
 + 06-14 기말고사 공부
 + readme.md 색상적용 실패....
### 2021-06-12
+ 메인페이지(index.html), css, js(현재까지 jquery만 사용), img(favicon 제작 후 적용)
+ Naver API Call_back코드까지 작성완료
    + 남은 목록
        - login(해당 어플리케이션에 네이버 아이디로 로그인 시작) : Kakao
        - callback(사용자의 로그인 동작 후 실행된 함수, 코드 등이 포함) : Kakao
        - get token(접근 토근 생성) : Naver, Kakao
        - get profile info(발급받은 접근 토큰을 이용하여 네이버에 등록한 사용자의 정보를 받아온다. 여기서 받아오는 정보는 개발자가 무엇을 받아오도록 했는지에따라 코드가 추가된다.) : Naver, Kakao
        - refresh access token(발급받은 접근 토큰의 생명주기가 다 했을 경우 새로 업데이트 해줌 ≒ 새로고침?) : Naver, Kakao
        - delete access token(발급받은 접근 토큰 삭제 -> API남용, 오용 방지) : Naver, Kakao
