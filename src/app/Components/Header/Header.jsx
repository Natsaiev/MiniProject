import s from './Header.module.scss';
import logo from '../../../assets/logo.svg';



export const Header = () => <div className={s.header}>
<div className='container'>
    <div className={s.header__container}>
        <div className={s.logo}>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </div>
        <ul className={s.menu}>
         <li className={s.menu__item}>
            <a href="/">Главная</a>
         </li>
         <li className={s.menu__item}>
            <a href="/">Музыка</a>
         </li>
         <li className={s.menu__item}>
            <a href="/">Сообщества</a>
         </li>
         <li className={s.menu__item}>
            <a href="/">Друзья</a>
         </li>
        </ul>
    </div>
</div>
</div>