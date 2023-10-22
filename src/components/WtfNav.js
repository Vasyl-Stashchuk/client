import React, {useContext, useEffect, useState} from 'react';
import '../css/WtfNav.css';
import navKronkBig from '../assets/Kronk.svg';
import navKronkSmall from '../assets/NavKronk.png';
import {Nav, Navbar} from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    CONTACT_ROUTE,
    FACILITIES_ROUTE,
    LOGIN_ROUTE,
    PROJECTS_ROUTE,
    SHOP_ROUTE
} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode"; // Import your CSS file // <Navbar fixed="top" >


const WtfNav = observer(() => {
    const { user } = useContext(Context);  // Отримуємо дані про користувача з контексту додатка.
    const history = useHistory();  // Отримуємо історію браузера для переходу до інших сторінок.

    const [navExpanded, setNavExpanded] = useState(false); // 2. Додайте стан navExpanded

    const handleNavLinkClick = (route) => {
        history.push(route);
        setNavExpanded(false); // Закриваємо навігаційну панель
    };

    const token = localStorage.getItem('token');

    let userRole = '';

    if(token) {
        try {
            const decodedToken = jwt_decode(token);
            userRole = decodedToken.role;
        } catch(e) {
            console.error("Error decoding the token", e);
        }
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentImage, setCurrentImage] = useState(windowWidth > 1200 ? navKronkBig : navKronkSmall);
    const [imageDimensions, setImageDimensions] = useState({ width: 45, height: 40 });

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 1200) {
            setCurrentImage(navKronkBig);
            setImageDimensions({ width: 90, height: 80 }); // Двічі більший розмір, наприклад.
        } else {
            setCurrentImage(navKronkSmall);
            setImageDimensions({ width: 45, height: 40 });
        }
    }, [windowWidth]);


    // const logOut = () => {  // Функція для виходу користувача.
    //     user.setUser({});  // Очищаємо дані користувача в контексті.
    //     user.setIsAuth(false);  // Встановлюємо флаг авторизації в `false`.
    // }

    return (
        <Navbar
            sticky="top"
            className="bg-black navbar-dark responsive"
            expand="lg"
            expanded={navExpanded} // 3. Зв'яжіть стан navExpanded
            onToggle={(expanded) => setNavExpanded(expanded)} // Оновлюємо стан, коли панель розгортається або згортається
        >
            <Navbar.Brand href={SHOP_ROUTE}>
                <img
                    src={currentImage}
                    width={imageDimensions.width}
                    height={imageDimensions.height}
                    className="d-inline-block align-top"
                    alt="KronkStroy"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => handleNavLinkClick(SHOP_ROUTE)}>Головна</Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick(ABOUT_ROUTE)}>Про Нас</Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick(PROJECTS_ROUTE)}>Проекти</Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick(FACILITIES_ROUTE)}>Послуги</Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick(CONTACT_ROUTE)}>Контакти</Nav.Link>
                    {/*<Nav.Link onClick={() => history.push(PROJECTS_ROUTE)} >Проекти</Nav.Link>*/}
                    {user.isAuth ?  // Умова для перевірки, чи користувач авторизований
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            {userRole === 'ADMIN' && user.isAuth ? (
                                // Відображаємо кнопку адмін-панелі тільки для адміністраторів, які авторизовані
                                <Nav.Link
                                    variant={"outline-light"}
                                    onClick={() => handleNavLinkClick(ADMIN_ROUTE)}
                                >
                                    Адмін Панель
                                </Nav.Link>
                            ) : null}
                            {/*<Nav.Link variant={"outline-light"}*/}
                            {/*        onClick={() => logOut()}  // Виклик функції для виходу користувача*/}
                            {/*        className="ml-2"  // Відступ для другої кнопки*/}
                            {/*>*/}
                            {/*    Вийти*/}
                            {/*</Nav.Link>*/}
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{ color: 'white' }}>  {/* Навігаційне меню для гостей */}
                            {/*<Nav.Link variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Nav.Link>  /!* Перехід на сторінку авторизації *!/*/}
                        </Nav>
                    }
                </Nav>



            </Navbar.Collapse>
        </Navbar>
    );
});

export default WtfNav;
