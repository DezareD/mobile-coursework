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
    faFutbol
 } from "@fortawesome/free-solid-svg-icons";

import { Alert } from 'react-native';


export const getIconByName = (name) => {

    return categories.find(item => item.name == name).icon
}

export const categories = [
    {
        id: '1',
        name: 'Покупки',
        icon: faShoppingBag
    },
    {
        id: '2',
        name: 'Еда',
        icon: faUtensils
    },
    {
        id: '3',
        name: 'Транспорт',
        icon: faBus
    },
    {
        id: '4',
        name: 'Работа',
        icon: faBriefcase
    },
    {
        id: '5',
        name: 'Кофе',
        icon: faCoffee
    },
    {
        id: '6',
        name: 'Путешествия',
        icon: faPlane
    },
    {
        id: '7',
        name: 'Аренда',
        icon: faHome
    },
    {
        id: '8',
        name: 'Красота и здоровье',
        icon: faSpa
    },
    {
        id: '9',
        name: 'Спорт',
        icon: faFutbol
    },
]