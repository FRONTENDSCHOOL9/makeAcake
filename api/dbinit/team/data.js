import moment from 'moment';

function getDay(day = 0) {
  return moment().add(day, 'days').format('YYYY.MM.DD');
}
function getTime(day = 0, second = 0) {
  return moment().add(day, 'days').add(second, 'seconds').format('YYYY.MM.DD HH:mm:ss');
}

export const initData = async (nextSeq) => {
  return {
    // 회원
    user: [],
    // 상품
    product: [ // 상품 등록하고 시작
      {
        "price": 50000,
        "quantity": 10,
        "name": "테스트 케이크",
        "mainImages": [
          {
            "originalname": "logo.svg",
            "name": "763abTR3Q.svg",
            "path": "https://market-lion.koyeb.app/api/files/04-makeAcake/763abTR3Q.svg"
          }
        ],
        "content": "<div class=\"product-detail\"><p>맛있는 테스트 케이크 드세요</p></div>",
        "extra": {
          "isNew": true,
          "isBest": true,
          "category": ["PC02", "PC0201"],
          "sort": 7,
          "depth": 2
        }
      }
    ],
    // 주문
    order: [],
    // 후기
    reply: [],
    // 장바구니
    cart: [],
    // 즐겨찾기/북마크
    bookmark: [],
    // QnA, 공지사항, 게시판
    post: [],
    // 코드
    code: [],
    // 설정
    config: [],
  };
};
