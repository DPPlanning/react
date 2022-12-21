export const SideBarList = [
  {
    title: '메인페이지',
    path: '/',
  },
  {
    title: '매체별 보고서 다운로드',
    path: '/stat',
    children: [
      {
        title: '네이버보고서',
        path: '/stat/naver',
      },
      {
        title: '페이스북보고서',
        path: '/stat/facebook',
      },
      {
        title: '구글보고서',
        path: '/stat/google',
      },
      {
        title: '종합보고서',
        path: '/stat/all',
      },
    ]
  },
  {
    title: 'API 등록',
    path: '/API',
    children: [
      {
        title: '네이버',
        path: '/API/naver',
      },
      {
        title: '페이스북',
        path: '/API/facebook',
      },
      {
        title: '구글',
        path: '/API/google',
      },
    ]
  },
  {
    title: '광고주 등록',
    path: '/client',
  },
  {
    title: '영업조회',
    path: '/lookup',
  },
]