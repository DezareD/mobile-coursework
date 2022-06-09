import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { 
    faShoppingBag,
    faUtensils,
    faBus,
    faBriefcase,
    faCoffee,
    faPlane,
    faHome,
    faSpa,
    faFutbol,
    faHandHoldingUsd,
    faPiggyBank,
    faWallet
 } from "@fortawesome/free-solid-svg-icons";

import { Alert } from 'react-native';


export const getIconByName = (name) => {
    var massive = categoriesEncome.concat(categoriesDecome);
    return massive.find(item => item.name == name).icon;
}

export const categoriesEncome = [
    {
        id: '1',
        name: 'Зарплата',
        icon: faHandHoldingUsd
    },
    {
        id: '2',
        name: 'Кэшбек',
        icon: faPiggyBank
    },
    {
        id: '3',
        name: 'Другие доходы',
        icon: faWallet
    }
]

export const categoriesDecome = [
    {
        id: '4',
        name: 'Покупки',
        icon: faShoppingBag
    },
    {
        id: '5',
        name: 'Еда',
        icon: faUtensils
    },
    {
        id: '6',
        name: 'Транспорт',
        icon: faBus
    },
    {
        id: '7',
        name: 'Работа',
        icon: faBriefcase
    },
    {
        id: '8',
        name: 'Кофе',
        icon: faCoffee
    },
    {
        id: '9',
        name: 'Путешествия',
        icon: faPlane
    },
    {
        id: '10',
        name: 'Аренда',
        icon: faHome
    },
    {
        id: '11',
        name: 'Красота и здоровье',
        icon: faSpa
    },
    {
        id: '12',
        name: 'Спорт',
        icon: faFutbol
    },
]