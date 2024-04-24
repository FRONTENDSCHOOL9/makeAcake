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
    user: [
      {
        _id: await nextSeq('user'),
        email: 'seller@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '판매자 케이크',
        phone: '01011112222',
        address: '서울특별시 종로구 종로3길 17 광화문 D타워 17층',
        type: 'seller',
      },
      {
        _id: await nextSeq('user'),
        email: 'user@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '구매자',
        phone: '01011111234',
        address: '서울시 강남구 역삼동 123',
        type: 'user',
      },
      {
        _id: await nextSeq('user'),
        email: 'user2@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '박까치',
        phone: '01022221234',
        address: '서울시 중구 퇴계로 12',
        type: 'user',
      },
      {
        _id: await nextSeq('user'),
        email: 'user3@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '이해목',
        phone: '01033331234',
        address: '부산시 해운대구 구남로 24번길 8',
        type: 'user',
      },
      {
        _id: await nextSeq('user'),
        email: 'user4@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '김대동',
        phone: '01044441234',
        address: '경남 김해시 대동면 동남로 45번길 8',
        type: 'user',
      },
      {
        _id: await nextSeq('user'),
        email: 'user5@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '윤상옥',
        phone: '01055551234',
        address: '부산 사상구 광장로 81번길 37',
        type: 'user',
      },
      {
        _id: await nextSeq('user'),
        email: 'user6@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '최돈까스',
        phone: '01066661234',
        address: '부산 금정구 금강로 247-10',
        type: 'user',
      },
      {
        _id: await nextSeq('user'),
        email: 'user7@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '이한진',
        phone: '01011111234',
        address: '서울시 강동구 구천면로 247-1',
        type: 'user',
      },
    ],
    // 상품
    product: [ // 상품 등록하고 시작
      {
        _id: await nextSeq('product'),
        price: 10000,
        quantity: 10,
        buyQuantity: 5,
        name: "심플 레터링 케이크 - 초코",
        mainImages: [
          {
            name: 'cakeImage01.jpeg',
            path: 'cakeImage01.jpeg'
          }
        ],
        content: `
              <div class="product-content">
                <p>
                  심플 레터링 케이크 - 초코 시트 + 가나슈 & 초코크림 맛입니다.
                  모든 심플 레터링 케이크의 겉면은 크림치즈버터로 동일합니다.
                </p>
                <p>
                  가장 무난한 디자인으로 많이 선호하시고, 그만큼 실패 확률도 없답니다!
                  디자인이 너무 많아 고민이시라면, 심플한 레터링 케이크는 어떠세요?
                </p>
                <p>
                  size별 가격대는 상이합니다. 유심히 보시고 선택해주세요!
                </p>
                <ul>
                  <li>도시락 케이크: 지름 약 10cm - 1.5인분</li>
                  <li>미니 케이크: 지름 약 12cm - 2인분</li>
                  <li>1호: 지름 약 15cm - 3-4인분</li>
                  <li>2호: 지름 약 20cm - 5인분 이상</li>
                </ul>
              </div>
          `,
        extra: {
          isBest: true,
          depth: 1,
          category: {
            "type": "type_lettering",
            "taste": "taste_chocolate",
          }
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        },
      },

      // 1번 상품의 하위 상품
      {
        _id: await nextSeq('product'), 
        price: 20000,
        quantity: 3,
        name: "심플 레터링 케이크 - 초코 도시락",
        extra: {
          depth: 2,
          parent: 1,
          size: "도시락",
          category: ['size', 'size_xSmall'] // 사이즈 > 도시락
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 27000,
        quantity: 1,
        name: "심플 레터링 케이크 - 초코 미니 케이크",
        extra: {
          depth: 2,
          parent: 1,
          size: "미니",
          category: ['size', 'size_mini']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 30000,
        quantity: 3,
        name: "심플 레터링 케이크 - 초코 1호 케이크",
        extra: {
          depth: 2,
          parent: 1,
          size: "1호",
          category: ['size', 'size_1']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 35000,
        quantity: 3,
        name: "심플 레터링 케이크 - 초코 2호 케이크",
        extra: {
          depth: 2,
          parent: 1,
          size: "2호",
          category: ['size', 'size_2']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 10000,
        quantity: 10,
        buyQuantity: 1,
        name: "심플 레터링 케이크 - 녹차",
        mainImages: [
          {
            name: 'cakeImage01.jpeg',
            path: 'cakeImage01.jpeg'
          }
        ],
        content: `
              <div class="product-content">
                <p>
                  심플 레터링 케이크 - 바닐라 시트 + 녹차 크림 맛입니다.
                  모든 심플 레터링 케이크의 겉면은 크림치즈버터로 동일합니다.
                </p>
                <p>
                  가장 무난한 디자인으로 많이 선호하시고, 그만큼 실패 확률도 없답니다!
                  디자인이 너무 많아 고민이시라면, 심플한 레터링 케이크는 어떠세요?
                </p>
                <p>
                  size별 가격대는 상이합니다. 유심히 보시고 선택해주세요!
                </p>
                <ul>
                  <li>도시락 케이크: 지름 약 10cm - 1.5인분</li>
                  <li>미니 케이크: 지름 약 12cm - 2인분</li>
                  <li>1호: 지름 약 15cm - 3-4인분</li>
                  <li>2호: 지름 약 20cm - 5인분 이상</li>
                </ul>
              </div>
          `,
        extra: {
          isBest: true,
          depth: 1,
          category: {
            "type": "type_lettering",
            "taste": "taste_greentea",
          }
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        },
      },
      {
        _id: await nextSeq('product'), 
        price: 20000,
        quantity: 3,
        name: "심플 레터링 케이크 - 녹차 도시락",
        extra: {
          depth: 2,
          parent: 6,
          size: "도시락",
          category: ['size', 'size_xSmall'] // 사이즈 > 도시락
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 27000,
        quantity: 1,
        name: "심플 레터링 케이크 - 녹차 미니 케이크",
        extra: {
          depth: 2,
          parent: 6,
          size: "미니",
          category: ['size', 'size_mini']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 30000,
        quantity: 3,
        name: "심플 레터링 케이크 - 녹차 1호 케이크",
        extra: {
          depth: 2,
          parent: 6,
          size: "1호",
          category: ['size', 'size_1']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 35000,
        quantity: 3,
        name: "심플 레터링 케이크 - 녹차 2호 케이크",
        extra: {
          depth: 2,
          parent: 6,
          size: "2호",
          category: ['size', 'size_2']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 15000,
        quantity: 10,
        buyQuantity: 1,
        name: "짱구 캐릭터 케이크 - 딸기",
        mainImages: [
          {
            name: 'cakeImage02.jpg',
            path: 'cakeImage02.jpg'
          }
        ],
        content: `
          <div class="product-content">
            <p>
              짱구 캐릭터 케이크 - 딸기 시트 + 가나슈 & 딸기크림 맛입니다.
              모든 짱구 캐릭터 케이크의 겉면은 크림치즈버터로 동일합니다.
            </p>
            <p>
              너무 귀여워서 요즘 인기 급부상한 케이크 디자인이에요~
              케이크 박스를 열자마자 웃음이 터질만큼 귀여워요!
            </p>
            <p>
              size별 가격대는 상이합니다. 유심히 보시고 선택해주세요!
            </p>
            <ul>
              <li>도시락 케이크: 지름 약 10cm - 1.5인분</li>
              <li>미니 케이크: 지름 약 12cm - 2인분</li>
              <li>1호: 지름 약 15cm - 3-4인분</li>
              <li>2호: 지름 약 20cm - 5인분 이상</li>
            </ul>
          </div>
        `,
        extra: {
          depth: 1,
          category: {
            "type": "type_charactor",
            "taste": "taste_strawberry",
          }
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        },
      },
      {
        _id: await nextSeq('product'),
        price: 20000,
        quantity: 3,
        name: "짱구 캐릭터 케이크 - 딸기 도시락",
        extra: {
          depth: 2,
          parent: 11,
          size: "도시락",
          category: ["size", "size_xsmall"]
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 30000,
        quantity: 1,
        name: "짱구 캐릭터 케이크 - 딸기 미니 케이크",
        extra: {
          depth: 2,
          parent: 11,
          size: "미니",
          category: ["size", "size_mini"]
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 45000,
        quantity: 3,
        name: "짱구 캐릭터 케이크 - 딸기 1호 케이크",
        extra: {
          depth: 2,
          parent: 11,
          size: "1호",
          category: ["size", "size_1"]
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 50000,
        quantity: 3,
        name: "짱구 캐릭터 케이크 - 딸기 2호 케이크",
        extra: {
          depth: 2,
          parent: 11,
          size: "2호",
          category: ["size", "size_2"]
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 16000,
        quantity: 10,
        buyQuantity: 1,
        name: "그림일기 레터링 케이크",
        mainImages: [
          {
            name: 'cakeImage03.jpg',
            path: 'cakeImage03.jpg'
          }
        ],
        content: `
              <div class="product-content">
                <p>
                  그림일기 레터링 케이크 - 바닐라 시트 + 우유 생크림 고정입니다.
                  위 그림 부분은 모두 크림치즈가 사용됩니다.
                </p>
                <p>
                  요즘 유행하는 그림일기 케이크에요. 너무 귀엽지 않나요?
                </p>
                <p>
                  size별 가격대는 상이합니다. 유심히 보시고 선택해주세요!
                </p>
                <ul>
                  <li>도시락 케이크: 지름 약 10cm - 1.5인분</li>
                  <li>미니 케이크: 지름 약 12cm - 2인분</li>
                  <li>1호: 지름 약 15cm - 3-4인분</li>
                  <li>2호: 지름 약 20cm - 5인분 이상</li>
                </ul>
              </div>
          `,
        extra: {
          isNew: true,
          depth: 1,
          category: {
            "type": "type_lettering",
            "taste": "taste_vanilla",
          }
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        },
      },
      {
        _id: await nextSeq('product'), 
        price: 20000,
        quantity: 3,
        name: "그림일기 레터링 케이크 - 도시락",
        extra: {
          depth: 2,
          parent: 16,
          size: "도시락",
          category: ['size', 'size_xSmall'] // 사이즈 > 도시락
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 25000,
        quantity: 3,
        name: "그림일기 레터링 케이크 - 미니",
        extra: {
          depth: 2,
          parent: 16,
          size: "미니",
          category: ['size', 'size_mini'] 
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 35000,
        quantity: 1,
        name: "그림일기 레터링 케이크 - 1호",
        extra: {
          depth: 2,
          parent: 16,
          size: "1호",
          category: ['size', 'size_1']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 45000,
        quantity: 3,
        name: "그림일기 레터링 케이크 - 2호",
        extra: {
          depth: 2,
          parent: 16,
          size: "2호",
          category: ['size', 'size_2']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 20000,
        quantity: 10,
        buyQuantity: 1,
        name: "포토 케이크",
        mainImages: [
          {
            name: 'cakeImage04.png',
            path: 'cakeImage04.png'
          }
        ],
        content: `
              <div class="product-content">
                <p>
                  포토 케이크 - 바닐라 시트 + 우유 생크림 고정입니다.
                </p>
                <p>
                  세상에 단 하나뿐인 케이크를 원하신다면 포토 케이크 추천드립니다.
                </p>
                <p>
                  주문 후, 원하시는 사진은 seller@market.com으로 보내주셔야 합니다.
                  메일 확인까지 완료된 후 작업이 진행됩니다. 참고해주세요 😁
                </p>
                <p>
                  size별 가격대는 상이합니다. 유심히 보시고 선택해주세요!
                </p>
                <ul>
                  <li>도시락 케이크: 지름 약 10cm - 1.5인분</li>
                  <li>미니 케이크: 지름 약 12cm - 2인분</li>
                  <li>1호: 지름 약 15cm - 3-4인분</li>
                  <li>2호: 지름 약 20cm - 5인분 이상</li>
                </ul>
              </div>
          `,
        extra: {
          isNew: true,
          depth: 1,
          category: {
            "type": "type_photo",
            "taste": "taste_vanilla",
          }
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        },
      },
      {
        _id: await nextSeq('product'), 
        price: 10000,
        quantity: 3,
        name: "포토 케이크 - 도시락",
        extra: {
          depth: 2,
          parent: 21,
          size: "도시락",
          category: ['size', 'size_xSmall'] // 사이즈 > 도시락
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 17000,
        quantity: 3,
        name: "포토 케이크 - 미니",
        extra: {
          depth: 2,
          parent: 21,
          size: "미니",
          category: ['size', 'size_mini'] 
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 25000,
        quantity: 1,
        name: "포토 케이크 - 1호",
        extra: {
          depth: 2,
          parent: 21,
          size: "1호",
          category: ['size', 'size_1']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 40000,
        quantity: 3,
        name: "포토 케이크 - 2호",
        extra: {
          depth: 2,
          parent: 21,
          size: "2호",
          category: ['size', 'size_2']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 18000,
        quantity: 10,
        buyQuantity: 1,
        name: "소주 케이크",
        mainImages: [
          {
            name: 'cakeImage05.jpg',
            path: 'cakeImage05.jpg'
          }
        ],
        content: `
              <div class="product-content">
                <p>
                  소주 케이크 - 바닐라 시트 + 우유 생크림 고정입니다.
                </p>
                <p>
                  재미있지만 특별하게! 소주 케이크는 어떠세요?
                </p>
                <p>
                  레터링 이름은 ㅇㅇ처럼에 들어가야 하므로, 장문은 삼가해 주세요. (안예뻐요 ㅠㅠ)
                  밑에 들어가야 할 문구는 요청 사항란에 작성 부탁드립니다.
                </p>
                <p>
                  size별 가격대는 상이합니다. 유심히 보시고 선택해주세요!
                </p>
                <ul>
                  <li>도시락 케이크: 총 길이 약 10cm - 1.5인분</li>
                  <li>미니 케이크: 총 길이 약 12cm - 2인분</li>
                  <li>1호: 총 길이 약 15cm - 3-4인분</li>
                  <li>2호: 총 길이 약 20cm - 5인분 이상</li>
                </ul>
              </div>
          `,
        extra: {
          isNew: true,
          depth: 1,
          category: {
            "type": "type_funny",
            "taste": "taste_vanilla",
          }
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        },
      },
      {
        _id: await nextSeq('product'), 
        price: 15000,
        quantity: 3,
        name: "소주 케이크 - 도시락",
        extra: {
          depth: 2,
          parent: 26,
          size: "도시락",
          category: ['size', 'size_xSmall'] // 사이즈 > 도시락
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 23000,
        quantity: 3,
        name: "소주 케이크 - 미니",
        extra: {
          depth: 2,
          parent: 26,
          size: "미니",
          category: ['size', 'size_mini'] 
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 30000,
        quantity: 1,
        name: "소주 케이크 - 1호",
        extra: {
          depth: 2,
          parent: 26,
          size: "1호",
          category: ['size', 'size_1']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 40000,
        quantity: 3,
        name: "소주 케이크 - 2호",
        extra: {
          depth: 2,
          parent: 26,
          size: "2호",
          category: ['size', 'size_2']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 30000,
        quantity: 10,
        buyQuantity: 1,
        name: "티아라 케이크",
        mainImages: [
          {
            name: 'cakeImage06.jpg',
            path: 'cakeImage06.jpg'
          }
        ],
        content: `
              <div class="product-content">
                <p>
                  티아라 케이크 - 바닐라 시트 + 우유 생크림 고정입니다.
                </p>
                <p>
                  브라이덜 샤워 용으로 많이 찾아주시는 상품입니다.
                  심플하지만 고급진 디자인이에요~
                </p>
                <p>
                  위 티아라는 크기별로 알맞게 제작해서 보내드립니다.
                  식용이 아니니 따로 섭취는 불가하세요. 섭취 시 잘못되어도 저희는 책임지지 않습니다. 🙏
                </p>
                <p>
                  따로 레터링은 불가합니다. 
                  요청사항이나 레터링 기입란에 작성하셔도 적용 못해리는 점 참고해주세요. 🥺
                </p>
                <p>
                  size별 가격대는 상이합니다. 유심히 보시고 선택해주세요!
                </p>
                <ul>
                  <li>도시락 케이크: 지름 약 10cm - 1.5인분</li>
                  <li>미니 케이크: 지름 약 12cm - 2인분</li>
                  <li>1호: 지름 약 15cm - 3-4인분</li>
                  <li>2호: 지름 약 20cm - 5인분 이상</li>
                </ul>
              </div>
          `,
        extra: {
          isBest: true,
          isNew: true,
          depth: 1,
          category: {
            "type": "type_etc",
            "taste": "taste_vanilla",
          }
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        },
      },
      {
        _id: await nextSeq('product'), 
        price: 15000,
        quantity: 3,
        name: "티아라 케이크 - 도시락",
        extra: {
          depth: 2,
          parent: 31,
          size: "도시락",
          category: ['size', 'size_xSmall'] // 사이즈 > 도시락
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 23000,
        quantity: 3,
        name: "티아라 케이크 - 미니",
        extra: {
          depth: 2,
          parent: 31,
          size: "미니",
          category: ['size', 'size_mini'] 
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 35000,
        quantity: 1,
        name: "티아라 케이크 - 1호",
        extra: {
          depth: 2,
          parent: 31,
          size: "1호",
          category: ['size', 'size_1']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 45000,
        quantity: 3,
        name: "티아라 케이크 - 2호",
        extra: {
          depth: 2,
          parent: 31,
          size: "2호",
          category: ['size', 'size_2']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 15000,
        quantity: 10,
        buyQuantity: 1,
        name: "그라데이션 오로라 레터링 케이크",
        mainImages: [
          {
            name: 'cakeImage07.jpg',
            path: 'cakeImage07.jpg'
          }
        ],
        content: `
              <div class="product-content">
                <p>
                  그라데이션 오로라 케이크 - 초코 시트 + 크림 치즈 고정입니다.
                </p>
                <p>
                  깔끔하고 예쁜 그라데이션 디자인입니다!
                  <br>감성있는 오로라 레터링 케이크 어떠세요?
                </p>
                <p>
                  글자 수는 20자 이내가 가장 예쁘답니다! 참고해주세요 ✨
                </p>
                <p>
                  size별 가격대는 상이합니다. 유심히 보시고 선택해주세요!
                </p>
                <ul>
                  <li>도시락 케이크: 지름 약 10cm - 1.5인분</li>
                  <li>미니 케이크: 지름 약 12cm - 2인분</li>
                  <li>1호: 지름 약 15cm - 3-4인분</li>
                  <li>2호: 지름 약 20cm - 5인분 이상</li>
                </ul>
              </div>
          `,
        extra: {
          isBest: true,
          isNew: true,
          depth: 1,
          category: {
            "type": "type_lettering",
            "taste": "taste_chocolate",
          }
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        },
      },
      {
        _id: await nextSeq('product'), 
        price: 20000,
        quantity: 3,
        name: "그라데이션 오로라 레터링 케이크 - 도시락",
        extra: {
          depth: 2,
          parent: 36,
          size: "도시락",
          category: ['size', 'size_xSmall'] // 사이즈 > 도시락
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 25000,
        quantity: 3,
        name: "그라데이션 오로라 레터링 케이크 - 미니",
        extra: {
          depth: 2,
          parent: 36,
          size: "미니",
          category: ['size', 'size_mini'] 
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 35000,
        quantity: 1,
        name: "그라데이션 오로라 레터링 케이크 - 1호",
        extra: {
          depth: 2,
          parent: 36,
          size: "1호",
          category: ['size', 'size_1']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 45000,
        quantity: 3,
        name: "그라데이션 오로라 레터링 케이크 - 2호",
        extra: {
          depth: 2,
          parent: 36,
          size: "2호",
          category: ['size', 'size_2']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 18000,
        quantity: 10,
        buyQuantity: 1,
        name: "발레코어 레터링 레터링 케이크",
        mainImages: [
          {
            name: 'cakeImage08.jpg',
            path: 'cakeImage08.jpg'
          }
        ],
        content: `
              <div class="product-content">
                <p>
                  발레코어 레터링 케이크 - 바닐라 시트 + 딸기잼 고정입니다.
                </p>
                <p>
                  요즘 핫한 발레코어!
                  <br>케이크도 심플하게 발레코어 어떠세요? 🎀
                </p>
                <p>
                  리본 색은 변경 불가하나 시트 색은 변경 가능합니다!
                  <br> 이 점 참고하셔서 요청사항에 적어주세요 🥰
                </p>
                <p>
                  size별 가격대는 상이합니다. 유심히 보시고 선택해주세요!
                </p>
                <ul>
                  <li>도시락 케이크: 지름 약 10cm - 1.5인분</li>
                  <li>미니 케이크: 지름 약 12cm - 2인분</li>
                  <li>1호: 지름 약 15cm - 3-4인분</li>
                  <li>2호: 지름 약 20cm - 5인분 이상</li>
                </ul>
              </div>
          `,
        extra: {
          isBest: true,
          isNew: true,
          depth: 1,
          category: {
            "type": "type_lettering",
            "taste": "taste_strawberry",
          }
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        },
      },
      {
        _id: await nextSeq('product'), 
        price: 20000,
        quantity: 3,
        name: "발레코어 레터링 케이크 - 도시락",
        extra: {
          depth: 2,
          parent: 41,
          size: "도시락",
          category: ['size', 'size_xSmall'] // 사이즈 > 도시락
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 25000,
        quantity: 3,
        name: "발레코어 레터링 케이크 - 미니",
        extra: {
          depth: 2,
          parent: 41,
          size: "미니",
          category: ['size', 'size_mini'] 
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 35000,
        quantity: 1,
        name: "발레코어 레터링 케이크 - 1호",
        extra: {
          depth: 2,
          parent: 41,
          size: "1호",
          category: ['size', 'size_1']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 45000,
        quantity: 3,
        name: "발레코어 레터링 케이크 - 2호",
        extra: {
          depth: 2,
          parent: 41,
          size: "2호",
          category: ['size', 'size_2']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 20000,
        quantity: 10,
        buyQuantity: 1,
        name: "손그림 케이크 - 우유",
        mainImages: [
          {
            name: 'cakeImage09.jpg',
            path: 'cakeImage09.jpg'
          }
        ],
        content: `
              <div class="product-content">
                <p>
                  손그림 케이크 - 바닐라 시트 + 우유 생크림 맛 입니다.
                </p>
                <p>
                  나만의 손그림 케이크는 어떠세요?
                  <br>어른들께도 인기 만점이랍니다 😋 효도점수 100점~!
                </p>
                <p>
                  참고할 사진은 seller@market.com으로 보내주세요!
                  <br> 메일 확인 후 작업이 진행됩니다. 사진이 없다면 요청사항에 자세히 적어주세요~
                  <br> 요청사항 미기재 시 작업은 진행되지 않습니다. 이 점 유의해주세요 🙏
                </p>
                <p>
                  size별 가격대는 상이합니다. 유심히 보시고 선택해주세요!
                </p>
                <ul>
                  <li>도시락 케이크: 지름 약 10cm - 1.5인분</li>
                  <li>미니 케이크: 지름 약 12cm - 2인분</li>
                  <li>1호: 지름 약 15cm - 3-4인분</li>
                  <li>2호: 지름 약 20cm - 5인분 이상</li>
                </ul>
              </div>
          `,
        extra: {
          isBest: true,
          depth: 1,
          category: {
            "type": "type_character",
            "taste": "taste_vanilla",
          }
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        },
      },
      {
        _id: await nextSeq('product'), 
        price: 20000,
        quantity: 3,
        name: "손그림 케이크(우유) - 도시락",
        extra: {
          depth: 2,
          parent: 46,
          size: "도시락",
          category: ['size', 'size_xSmall'] // 사이즈 > 도시락
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 25000,
        quantity: 3,
        name: "손그림 케이크(우유) - 미니",
        extra: {
          depth: 2,
          parent: 46,
          size: "미니",
          category: ['size', 'size_mini'] 
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 35000,
        quantity: 1,
        name: "손그림 케이크(우유) - 1호",
        extra: {
          depth: 2,
          parent: 46,
          size: "1호",
          category: ['size', 'size_1']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 45000,
        quantity: 3,
        name: "손그림 케이크(우유) - 2호",
        extra: {
          depth: 2,
          parent: 46,
          size: "2호",
          category: ['size', 'size_2']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'),
        price: 20000,
        quantity: 10,
        buyQuantity: 1,
        name: "손그림 케이크 - 녹차",
        mainImages: [
          {
            name: 'cakeImage09.jpg',
            path: 'cakeImage09.jpg'
          }
        ],
        content: `
              <div class="product-content">
                <p>
                  손그림 케이크 - 바닐라 시트 + 녹차 크림이 올라가 있어요~
                </p>
                <p>
                  나만의 손그림 케이크는 어떠세요?
                  <br>어른들께도 인기 만점이랍니다 😋 효도점수 100점~!
                </p>
                <p>
                  참고할 사진은 seller@market.com으로 보내주세요!
                  <br> 메일 확인 후 작업이 진행됩니다. 사진이 없다면 요청사항에 자세히 적어주세요~
                  <br> 요청사항 미기재 시 작업은 진행되지 않습니다. 이 점 유의해주세요 🙏
                </p>
                <p>
                  size별 가격대는 상이합니다. 유심히 보시고 선택해주세요!
                </p>
                <ul>
                  <li>도시락 케이크: 지름 약 10cm - 1.5인분</li>
                  <li>미니 케이크: 지름 약 12cm - 2인분</li>
                  <li>1호: 지름 약 15cm - 3-4인분</li>
                  <li>2호: 지름 약 20cm - 5인분 이상</li>
                </ul>
              </div>
          `,
        extra: {
          depth: 1,
          category: {
            "type": "type_character",
            "taste": "taste_greentea",
          }
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        },
      },
      {
        _id: await nextSeq('product'), 
        price: 20000,
        quantity: 3,
        name: "손그림 케이크(녹차) - 도시락",
        extra: {
          depth: 2,
          parent: 51,
          size: "도시락",
          category: ['size', 'size_xSmall'] // 사이즈 > 도시락
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 25000,
        quantity: 3,
        name: "손그림 케이크(녹차)- 미니",
        extra: {
          depth: 2,
          parent: 51,
          size: "미니",
          category: ['size', 'size_mini'] 
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 35000,
        quantity: 1,
        name: "손그림 케이크(녹차)- 1호",
        extra: {
          depth: 2,
          parent: 51,
          size: "1호",
          category: ['size', 'size_1']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
      {
        _id: await nextSeq('product'), 
        price: 45000,
        quantity: 3,
        name: "손그림 케이크(녹차)- 2호",
        extra: {
          depth: 2,
          parent: 51,
          size: "2호",
          category: ['size', 'size_2']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: getTime(-4, -60* 60 * 3),
        updatedAt: getTime(-4, -60* 60 * 3),
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          log5nType: "email",
          cre5tedAt: getTime(-5, -60 * 60 * 3),
          updatedAt: getTime(-5, -60 * 60 * 3)
        }
      },
    ],
    // 주문
    order: [
      {
        _id: await nextSeq('order'),
        user_id: 2,
        products: [
          {
            _id: 4,
            seller_id: 1,
            name: '심플 레터링 케이크 - 초코 1호 케이크',
            image: "/files/04-makeAcake/YmxREu-Se.jpeg",
            quantity: 1,
            price: 45000,
          }
        ],
        cost: {
          products: 45000,
          total: 45000
        },
        createdAt: getTime(-3, -60 * 60 * 3),
        updatedAt: getTime(-3, -60 * 60 * 3)
      },
    ],
    // 후기
    reply: [],
    // 장바구니
    cart: [],
    // 즐겨찾기/북마크
    bookmark: [
      {
        _id: await nextSeq('bookmark'),
        user_id: 2,
        type: 'product',
        target_id: 1,
        memo: '',
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 2,
        type: 'product',
        target_id: 6,
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 2,
        type: 'product',
        target_id: 11,
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 2,
        type: 'product',
        target_id: 16,
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 4,
        type: 'product',
        target_id: 21,
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 4,
        type: 'product',
        target_id: 26,
        createdAt: getTime(-3, -60 * 60 * 2),
      },
    ],
    // QnA, 공지사항, 게시판
    post: [],
    // 코드
    code: [
      {
        _id: 'productCategory',
        title: '상품 카테고리',
        codes: [
          {
            code: 'type',
            value: '모양',
            depth: 1
          },
          {
            code: 'type_lettering',
            value: '레터링 케이크',
            depth: 2,
            parent: 'type'
          },
          {
            code: 'type_character',
            value: '캐릭터 케이크',
            depth: 2,
            parent: 'type'
          },
          {
            code: 'type_photo',
            value: '포토 케이크',
            depth: 2,
            parent: 'type'
          },
          {
            code: 'type_funny',
            value: '엽기 케이크',
            depth: 2,
            parent: 'type'
          },
          {
            code: 'type_etc',
            value: '기타 케이크',
            depth: 2,
            parent: 'type'
          },
          {
            code: 'taste',
            value: '맛',
            depth: 1
          },
          {
            code: 'taste_chocolate',
            value: '초코맛',
            depth: 2,
            parent: 'taste'
          },
          {
            code: 'taste_strawberry',
            value: '딸기맛',
            depth: 2,
            parent: 'taste'
          },
          {
            code: 'taste_vanilla',
            value: '바닐라맛',
            depth: 2,
            parent: 'taste'
          },
          {
            code: 'taste_greentea',
            value: '녹차맛',
            depth: 2,
            parent: 'taste'
          },
          {
            code: 'size',
            value: '사이즈',
            depth: 1
          },
          {
            code: 'size_xSmall',
            value: '도시락 사이즈',
            depth: 2,
            parent: 'size'
          },
          {
            code: 'size_mini',
            value: '미니 사이즈',
            depth: 2,
            parent: 'size'
          },
          {
            code: 'size_1',
            value: '1호',
            depth: 2,
            parent: 'size'
          },
          {
            code: 'size_2',
            value: '2호',
            depth: 2,
            parent: 'size'
          }
        ]
      }
    ],
    // 설정
    config: [],
  };
};
