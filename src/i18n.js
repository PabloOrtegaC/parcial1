// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      menu: "Menu",
      stores: "Stores",
      cart: "Cart",
      login: "Login",
      tooGoodToGo: "TOO GOOD TO GO",
      foodWastingSolution: "FOOD WASTING SOLUTION",
      forgotPassword: "Forgot Password?",
      username: "Username",
      password: "Password",
      carouselSlide: "Carousel slide"
    }
  },
  es: {
    translation: {
      menu: "Menú",
      stores: "Tiendas",
      cart: "Carrito",
      login: "Iniciar sesión",
      tooGoodToGo: "TOO GOOD TO GO",
      foodWastingSolution: "SOLUCIÓN CONTRA EL DESPERDICIO DE ALIMENTOS",
      forgotPassword: "¿Olvidaste tu contraseña?",
      username: "Nombre de usuario",
      password: "Contraseña",
      carouselSlide: "Diapositiva del carrusel"
    }
  },
  fr: {
    translation: {
      menu: "Menu",
      stores: "Magasins",
      cart: "Panier",
      login: "Connexion",
      tooGoodToGo: "TOO GOOD TO GO",
      foodWastingSolution: "SOLUTION CONTRE LE GASPILLAGE ALIMENTAIRE",
      forgotPassword: "Mot de passe oublié ?",
      username: "Nom d'utilisateur",
      password: "Mot de passe",
      carouselSlide: "Diapositive du carrousel"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
