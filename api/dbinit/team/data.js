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
    ],
    // 상품
    product: [ // 상품 등록하고 시작
      {
        _id: await nextSeq('product'),
        price: 0,
        quantity: 10,
        buyQuantity: 1,
        name: "심플 레터링 케이크 - 초코",
        mainImages: [
          {
                originalname: "cakeImage01.jpeg",
                name: "YmxREu-Se.jpeg",
                path: "/files/04-makeAcake/YmxREu-Se.jpeg"
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
          depth: 1,
          category: ['type', 'type_lettering','taste', 'taste_choco'] // 모양 > 레터링, 맛 > 초코
        },
        show: true,
        seller_id: await nextSeq('user'),
        active: true,
        createdAt: "2024.04.17 15:05:21",
        updatedAt: "2024.04.17 15:05:21",
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          loginType: "email",
          createdAt: "2024.04.17 23:06:11",
          updatedAt: "2024.04.17 23:06:11"
        },
      },

      // 1번 상품의 하위 상품
      {
        _id: await nextSeq('product'), 
        price: 15000,
        quantity: 3,
        name: "심플 레터링 케이크 - 초코 도시락",
        extra: {
          depth: 2,
          parent: 1,
          size: "10cm",
          category: ['size', 'size_xSmall'] // 사이즈 > 도시락
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: "2024.04.17 16:43:26",
        updatedAt: "2024.04.17 16:43:26",
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          loginType: "email",
          createdAt: "2024.04.17 23:06:11",
          updatedAt: "2024.04.17 23:06:11"
        }
      },
      {
        _id: await nextSeq('product'),
        price: 30000,
        quantity: 1,
        name: "심플 레터링 케이크 - 초코 미니 케이크",
        extra: {
          depth: 2,
          parent: 1,
          size: "12cm",
          category: ['size', 'size_mini']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: "2024.04.17 16:43:26",
        updatedAt: "2024.04.17 16:43:26",
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          loginType: "email",
          createdAt: "2024.04.17 23:06:11",
          updatedAt: "2024.04.17 23:06:11"
        }
      },
      {
        _id: await nextSeq('product'),
        price: 45000,
        quantity: 3,
        name: "심플 레터링 케이크 - 초코 1호 케이크",
        extra: {
          depth: 2,
          parent: 1,
          size: "15cm",
          category: ['size', 'size_1']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: "2024.04.17 16:43:26",
        updatedAt: "2024.04.17 16:43:26",
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          loginType: "email",
          createdAt: "2024.04.17 23:06:11",
          updatedAt: "2024.04.17 23:06:11"
        }
      },
      {
        _id: await nextSeq('product'),
        price: 50000,
        quantity: 3,
        name: "심플 레터링 케이크 - 초코 2호 케이크",
        extra: {
          depth: 2,
          parent: 1,
          size: "20cm",
          category: ['size', 'size_2']
        },
        show: true,
        seller_id: 1,
        active: true,
        buyQuantity: 0,
        createdAt: "2024.04.17 16:43:26",
        updatedAt: "2024.04.17 16:43:26",
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          loginType: "email",
          createdAt: "2024.04.17 23:06:11",
          updatedAt: "2024.04.17 23:06:11"
        }
      },
      {
        _id: await nextSeq('product'),
        price: 0,
        quantity: 10,
        buyQuantity: 1,
        name: "짱구 캐릭터 케이크 - 딸기",
        mainImages: [
          {
            "originalname": "cakeImage02.jpg",
            "name": "QyHs9h1K0.jpg",
            "path": "/files/04-makeAcake/QyHs9h1K0.jpg"
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
          category: ['type', 'type_charactor','taste', 'taste_strawberry'] // 모양 > 캐릭터, 맛 > 딸기
        },
        show: true,
        seller_id: 1,
        active: true,
        createdAt: "2024.04.17 15:05:21",
        updatedAt: "2024.04.17 15:05:21",
        seller: {
          _id: 1,
          email: "seller@market.com",
          name: "판매자",
          phone: "01011112222",
          address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
          type: "seller",
          loginType: "email",
          createdAt: "2024.04.17 23:06:11",
          updatedAt: "2024.04.17 23:06:11"
        },
        options: {
          item: [
            {
              _id: await nextSeq('product'),
              price: 20000,
              quantity: 3,
              name: "짱구 캐릭터 케이크 - 딸기 도시락",
              extra: {
                depth: 2,
                parent: 5,
                size: "10cm",

              },
              show: true,
              seller_id: 1,
              active: true,
              buyQuantity: 0,
              createdAt: "2024.04.17 16:43:26",
              updatedAt: "2024.04.17 16:43:26",
              seller: {
                _id: 1,
                email: "seller@market.com",
                name: "판매자",
                phone: "01011112222",
                address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
                type: "seller",
                loginType: "email",
                createdAt: "2024.04.17 23:06:11",
                updatedAt: "2024.04.17 23:06:11"
              }
            },
            {
              _id: await nextSeq('product'),
              price: 30000,
              quantity: 1,
              name: "짱구 캐릭터 케이크 - 딸기 미니 케이크",
              extra: {
                depth: 2,
                parent: 5,
                size: "12cm"
              },
              show: true,
              seller_id: 1,
              active: true,
              buyQuantity: 0,
              createdAt: "2024.04.17 16:43:26",
              updatedAt: "2024.04.17 16:43:26",
              seller: {
                _id: 1,
                email: "seller@market.com",
                name: "판매자",
                phone: "01011112222",
                address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
                type: "seller",
                loginType: "email",
                createdAt: "2024.04.17 23:06:11",
                updatedAt: "2024.04.17 23:06:11"
              }
            },
            {
              _id: await nextSeq('product'),
              price: 45000,
              quantity: 3,
              name: "짱구 캐릭터 케이크 - 딸기 1호 케이크",
              extra: {
                depth: 2,
                parent: 5,
                size: "15cm"
              },
              show: true,
              seller_id: 1,
              active: true,
              buyQuantity: 0,
              createdAt: "2024.04.17 16:43:26",
              updatedAt: "2024.04.17 16:43:26",
              seller: {
                _id: 1,
                email: "seller@market.com",
                name: "판매자",
                phone: "01011112222",
                address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
                type: "seller",
                loginType: "email",
                createdAt: "2024.04.17 23:06:11",
                updatedAt: "2024.04.17 23:06:11"
              }
            },
            {
              _id: await nextSeq('product'),
              price: 50000,
              quantity: 3,
              name: "짱구 캐릭터 케이크 - 딸기 2호 케이크",
              extra: {
                depth: 2,
                parent: 5,
                size: "20cm"
              },
              show: true,
              seller_id: 1,
              active: true,
              buyQuantity: 0,
              createdAt: "2024.04.17 16:43:26",
              updatedAt: "2024.04.17 16:43:26",
              seller: {
                _id: 1,
                email: "seller@market.com",
                name: "판매자",
                phone: "01011112222",
                address: "서울특별시 종로구 종로3길 17 광화문 D타워 17층",
                type: "seller",
                loginType: "email",
                createdAt: "2024.04.17 23:06:11",
                updatedAt: "2024.04.17 23:06:11"
              }
            }
          ]
        },
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
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3)
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
        user_id: 1,
        product_id: 2,
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 1,
        product_id: 5,
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
            code: 'taste',
            value: '맛',
            depth: 1
          },
          {
            code: 'taste_choco',
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
            code: 'taste_milk',
            value: '우유맛',
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
