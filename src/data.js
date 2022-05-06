import avatar1 from "./components/componentsImage/user.jpg"
import avatar2 from "./components/componentsImage/admin.jpg"
import avatar3 from "./components/componentsImage/user2.jpg"
import avatar4 from "./components/componentsImage/user3.jpg"
import avatar5 from "./components/componentsImage/user4.jpg"

let profileData = {
  name: "Роман Панин",
  avatar: avatar1,
}

let dialog = [
  {
    avatar: avatar1,
    message: "Жду фул у себя на столе через 5 минут",
  },
  {
    avatar: avatar2,
    message: "Через пару дней будет готова проявка",
  },
  {
    avatar: avatar2,
    message: "Потом буду сканировать",
  },
  {
    avatar: avatar2,
    message: "Подождать совсем немного нужно. Плёнка долгий, методичный и аккуратный процесс"
  },
  {
    avatar: avatar1,
    message: "Тогда напишу ещё чего-нибудь, чтобы этот блок мог поскролиться",
  },
  {
    avatar: avatar2,
    message: "Тогда напишу ещё чего-нибудь, чтобы этот блок мог поскролиться",
  },
  {
    avatar: avatar2,
    message: "Тогда напишу ещё чего-нибудь, чтобы этот блок мог поскролиться",
  },
];

let orders = [
  {
    name: `Заказ № 1 от 14.04.2022`,
    status: true,
  },
  {
    name: `Заказ № 2 от 14.04.2022`,
    status: false,
  },
  {
    name: `Заказ № 3 от 14.04.2022`,
    status: false,
  },
  {
    name: `Заказ № 4 от 14.04.2022`,
    status: true,
  },
  {
    name: `Заказ № 5 от 14.04.2022`,
    status: false,
  },
  {
    name: `Заказ № 6 от 14.04.2022`,
    status: true,
  },
  {
    name: `Заказ № 7 от 14.04.2022`,
    status: true,
  },
  {
    name: `Заказ № 8 от 14.04.2022`,
    status: true,
  },
  {
    name: `Заказ № 9 от 14.04.2022`,
    status: true,
  },
];

let users = [
  {
    avatar: avatar1,
    name: "Роман Панин",
  },
  {
    avatar: avatar3,
    name: "Martha Doval",
  },
  {
    avatar: avatar4,
    name: "Антон",
  },
  {
    avatar: avatar5,
    name: "Эд Гарикович",
  },
]

export function getDialog() {
  return dialog;
}

export function getProfileData() {
  return profileData
}

export function getOrders() {
  return orders;
}

export function getUsers() {
  return users;
}
