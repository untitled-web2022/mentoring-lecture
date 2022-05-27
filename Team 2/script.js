/*
  window - 화면 그 자체(화면의 크기, 화면 내의 문서 정보)
  document - 문서 그 자체(문서 내용, HTML 요소, 스크립트, 스타일 등등)
  document -> window

  window - 뷰포트(화면 크기), document 가 바뀌어야 할 때
  document - 내용을 바꾸고 싶을 때
 */

/*
  # 오늘의 목표
  1. 투두 리스트의 목록을 체크하면 취소선이 뜨도록 한다
  2. 왼쪽 텍스트 입력칸에 입력을 하고 추가 버튼을 누르면 목록이 추가가 된다.
  3. 삭제 버튼을 만들어서 삭제 버튼을 누르면 목록이 삭제가 된다.
  4. 이런 투두 리스트를 저장해서 새로고침을 해도 값이 유지되도록 한다.
 */

window.addEventListener('DOMContentLoaded', () => { // window 객체에 DOMContentLoaded 이벤트를 리스닝 하여 콘텐츠 로드를 감지한다.
  const checkboxes = document.querySelectorAll("input[type='checkbox']") // 모든 체크박스 목록을 가져온다.
  console.log(checkboxes) // 체크박스 목록을 콘솔에 표시한다.
  checkboxes.forEach((checkbox) => { // 각 체크박스를 순회한다(for 문이랑 비슷함)
    checkbox.addEventListener('change', function () { // 각 체크박스에 change 이벤트 리스너를 등록한다.
      const id = this.id // 체크 상태가 바뀐 체크박스의 id 를 가져온다.
      const label = document.querySelector(`label[for="${id}"]`) // 체크 상태가 바뀐 체크박스의 id와 for 속성이 같은 label 하나를 가져온다.
      if(this.checked) { // 체크박스가 체크되었을 때
        label.classList.add('strike') // strike 클래스를 label 에 추가한다.
      } else { // 체크박스의 체크가 해제되었을 때
        label.classList.remove('strike') // strike 클래스를 labe에서 제거한다.
      }
    })
  })
})