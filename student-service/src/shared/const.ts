export const PROFILE_DATA = {
  fullName: "Димитрий Сергеевич Овечкин",
  photo:
    "https://static.vecteezy.com/system/resources/thumbnails/033/168/339/small_2x/a-young-black-man-in-a-suit-and-tie-ai-generative-free-photo.jpg",
  name: "Димитрий",
  surname: "Сергеевич",
  patronymic: "Овечкин",
  ["job-title"]: "Frontend разработчик",
  skills: ["React", "Angular", "Vue", "English B2"],
  university:
    "Уральский федеральный университет имени первого Президента России Б. Н. Ельцина",
  institute: "Институт радиоэлектроники и информационных технологий - РТФ",
  direction: "Прикладная информатика",
  about:
    "Привет! Я Дима, учусь на 3 курсе прикладной информатики в УрФУ.  Фронтенд - это моё любимое занятие. Недавно начал изучать React.js, пока что только первые шаги, но уже интересно! ",
  phone: "+ 7 (900) 800-70-60",
  email: "dima123@urfu.ru",
}

export const PRACTICES_LIST = [
  {
    id: "1",
    title: "Практикант Frontend-разработчик",
    isSent: true,
    competencies: [
      "React",
      "Vue",
      "GraphQL",
      "NextJs",
      "SQL / NoSQL",
      "Сode-review",
    ],
    organization: {
      name: "Вконтакте",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfwXG8zZZlo-9CwAhxMXDQgIHs74_SlidPg&s",
    },
  },
  {
    id: "2",
    isSent: false,
    title: "Практикант Backend-разработчик",
    competencies: ["Go", "SQL"],
    organization: {
      name: "Авито",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTMVi5RXHTZRVlGD7EnaUgzXow8h-nfvg5A&s",
    },
  },
]

export const PRACTICE_DATA = {
  title: "Практикант Frontend-разработчик",
  available: 10,
  left: 3,
  requirementsDescription:
    "— Проектировать API и работать с GraphQL;\n" +
    "— Участвовать в разработке веб-приложения на NextJs / React;\n" +
    "— Работать в моно-репозиториях с сабмодулями;\n" +
    "— Работать с SQL / NoSQL базами (Postgres, Redis);\n" +
    "— Писать аккуратный, читаемый и поддерживаемый код;\n" +
    "— Проходить и проводить code-review, архитектурное review.",
  directions: ["Информационные технологии, системная интеграция, интернет"],
  competencies: [
    "React",
    "Vue",
    "GraphQL",
    "NextJs",
    "SQL / NoSQL",
    "Сode-review",
  ],
  company: {
    id: 1,
    name: "Вконтакте",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfwXG8zZZlo-9CwAhxMXDQgIHs74_SlidPg&s",
  },
  format: "Офис",
  address: "г. Екатеринбург, ул. Розы Люксембург, 43",
  schedule: {
    title: "По договоренности",
    description: "Преимущественно первая половина дня, пн-пт",
  },
  contacts: [
    {
      name: "Иванов Иван Иванович",
      description: "Руководитель практики",
      phone: "+ 7 (900) 800-70-60",
      email: "hello@gmail.com",
    },
  ],
}

export const ORGANIZATION_DATA = {
  name: "Вконтакте",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfwXG8zZZlo-9CwAhxMXDQgIHs74_SlidPg&s",
  description:
    "VK помогает миллионам людей решать повседневные задачи онлайн. Сервисами компании пользуются больше 95% аудитории рунета.",
  address: "Екатеринбург, ул. Розы Люксембург, 43",
  contacts: [
    {
      name: "Иванов Иван Иванович",
      description: "Hr-менеджер",
      email: "hr-email@gmail.com",
      phone: "+ 7 (900) 800-70-60",
    },
  ],
  reviews: [
    {
      name: "Иван Т.",
      stars: 5,
      comment:
        "Крупная компания, управляют которой профессионалы.    Плюсы: располагается в центре города, возможность работать удаленно с гибридным началом дня. Современная техника и оборудование. Потрясающий коллектив, с которым невероятно комфортно взаимодействовать и решать задачи.",
    },
    {
      name: "Данил М. ",
      stars: 5,
      comment:
        "Крупная компания, управляют которой профессионалы.    Плюсы: располагается в центре города, возможность работать удаленно с гибридным началом дня. Современная техника и оборудование. Потрясающий коллектив, с которым невероятно комфортно взаимодействовать и решать задачи.",
    },
  ],
}
