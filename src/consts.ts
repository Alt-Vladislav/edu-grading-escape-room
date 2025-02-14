const QuestGenre = {
  'All': {
    Name: 'all',
    Title: 'Все квесты',
    Icon: {
      Link: '#icon-all-quests',
      Width: 26
    }
  },
  'Adventures': {
    Name: 'adventure',
    Title: 'Приключения',
    Icon: {
      Link: '#icon-adventure',
      Width: 36
    }
  },
  'Horror': {
    Name: 'horror',
    Title: 'Ужасы',
    Icon: {
      Link: '#icon-horror',
      Width: 30
    }
  },
  'Mystic': {
    Name: 'mystic',
    Title: 'Мистика',
    Icon: {
      Link: '#icon-mystic',
      Width: 30
    }
  },
  'Detective': {
    Name: 'detective',
    Title: 'Детектив',
    Icon: {
      Link: '#icon-detective',
      Width: 40
    }
  },
  'Sci-fi': {
    Name: 'sciFi',
    Title: 'Sci-fi',
    Icon: {
      Link: '#icon-sci-fi',
      Width: 28
    }
  }
} as const;

const DifficultyLevel = {
  'All': {
    Name: 'any',
    Title: 'Любой'
  },
  'Easy': {
    Name: 'easy',
    Title: 'Лёгкий'
  },
  'Medium': {
    Name: 'middle',
    Title: 'Средний'
  },
  'Hard': {
    Name: 'hard',
    Title: 'Сложный'
  }
} as const;

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

export { QuestGenre, DifficultyLevel, AppRoute, NavigationSetting, AuthorizationStatus };
