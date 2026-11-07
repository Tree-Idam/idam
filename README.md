# 아이담 카페 홈페이지 V1

GitHub Pages에서 작동하는 정적 원페이지 홈페이지입니다.

## 파일
- `index.html`: 안내 문구와 홈페이지 구조
- `style.css`: 디자인 및 반응형 스타일
- `script.js`: 모바일 메뉴, 상단 이동 버튼

## GitHub Pages 배포
1. GitHub에서 `idam-cafe` 이름으로 공개(Public) 저장소를 만듭니다.
2. 이 폴더의 파일 3개를 저장소 최상위(root)에 업로드합니다.
3. Settings → Pages → Build and deployment → Deploy from a branch를 선택합니다.
4. Branch `main`, Folder `/(root)`를 선택한 후 저장합니다.
5. 배포 후 `https://tree-idam.github.io/idam-cafe/` 형식으로 접속합니다. (계정명과 저장소명에 따라 달라짐)

## 실제 게시 전 필수 수정
- 소개 문구, 운영 시간, 이용 대상, 이용 방법, 이용 수칙
- 주소, 주차 안내, 문의 연락처
- 사진 자리표시를 실제 카페 사진으로 교체
- 운영 정보 확정 전에는 사이트를 공식 안내로 사용하지 마세요.

## 사진 교체 예시
`images/main.jpg` 파일을 넣고 `style.css`의 `.hero-art` 배경을 다음처럼 변경할 수 있습니다.
`background: url('images/main.jpg') center/cover no-repeat;`

사진은 직접 촬영했거나 사용 허락을 받은 이미지만 사용하세요.
