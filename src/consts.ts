const GENRES = ['all', 'adventures', 'horror', 'mystic', 'detective', 'sci-fi'] as const;

const DIFFICULTY_LEVELS = ['all', 'easy', 'medium', 'hard'] as const;

const AppRoute = {
  Main: {
    Path: '/',
    Title: 'Escape Room',
    TitleLink: 'Перейти на Главную',
  },
  Contacts: {
    Path: '/contacts',
    Title: 'Escape Room: Контакты',
    TitleLink: 'К контактам',
  },
  Login: {
    Path: '/login',
    Title: 'Escape Room: Авторизация',
    TitleLink: 'К авторизации',
  },
  Quest: {
    Path: '/quest/:id',
    Title: 'Escape Room: @',
    TitleLink: 'К квесту: "@"',
  },
  Booking: {
    Path: '/quest/:id/booking',
    Title: 'Escape Room: Бронирование',
    TitleLink: 'К бронированию',
  },
  MyQuests: {
    Path: '/my-quests',
    Title: 'Escape Room: Мои бронирования',
    TitleLink: 'К моим бронированиям',
  }
} as const;

const NavigationSetting = {
  Main: {
    Name: 'Main',
    Title: 'Квесты',
    Link: AppRoute.Main,
    IsCheckAuthorization: false
  },
  Contacts: {
    Name: 'Contacts',
    Title: 'Контакты',
    Link: AppRoute.Contacts,
    IsCheckAuthorization: false
  },
  MyQuests: {
    Name: 'MyQuests',
    Title: 'Мои бронирования',
    Link: AppRoute.MyQuests,
    IsCheckAuthorization: true
  }
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN'
} as const;

export { GENRES, DIFFICULTY_LEVELS, AppRoute, NavigationSetting, AuthorizationStatus };
