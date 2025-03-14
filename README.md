# Para correr el proyecto
npm install

npm run dev

# Resumen del Proceso de Desarrollo
El proyecto fue desarrollado utilizando React como biblioteca principal para la creación de interfaces de usuario, aprovechando el ecosistema moderno de desarrollo con Vite como herramienta de empaquetado (bundler) por su rapidez y configuración sencilla. Se implementó la navegación entre páginas mediante React Router, y se usó ReactDOM para renderizar la aplicación en el DOM del navegador. Además, se incorporó Bootstrap para facilitar la creación de interfaces responsivas y estilizadas, lo que permitió un desarrollo más ágil y coherente en cuanto a diseño.

La internacionalización fue implementada con react-i18next, permitiendo que la aplicación soporte múltiples idiomas (inglés, español y francés) tanto para textos estáticos de la UI como para mensajes de error y etiquetas en formularios.

# Decisiones Técnicas y Herramientas Utilizadas

Vite y React:
Vite se seleccionó por su velocidad y facilidad de configuración, permitiendo un entorno de desarrollo muy eficiente.
React se utilizó como la biblioteca para la construcción de la interfaz de usuario, aprovechando componentes funcionales y hooks.

React Router y ReactDOM:
Se utilizó React Router para definir rutas y gestionar la navegación entre las diferentes vistas (Login, Home, Menu, Stores, Cart).
ReactDOM se usó para renderizar la aplicación en el nodo raíz del HTML mediante la función createRoot.
Bootstrap:

Bootstrap fue empleado para estructurar y estilizar los componentes de forma responsiva y consistente, utilizando sus clases predefinidas y componentes de React Bootstrap (como Cards, Carousel, Row, Col).

Internacionalización con react-i18next:
Se integró react-i18next para soportar tres idiomas: inglés, español y francés.
Se configuró un archivo i18n.js que define los recursos de traducción y se inicializó la librería en el punto de entrada de la aplicación.
Cada componente que contiene texto estático (como Header, Login, Menu, Stores y Cart) se actualizó para utilizar el hook useTranslation y así renderizar los textos mediante la función t('key').
Se añadió un LanguageSwitcher que se fija en la esquina inferior izquierda y permite cambiar el idioma de forma dinámica, garantizando que la interfaz se mantenga consistente en todas las páginas.

Organización de Componentes:
Componentes de Página: Se crearon vistas separadas para cada sección (Login, Home, Menu, Stores y Cart), cada una con su respectivo header (por ejemplo, Header para Menu/Home, Header2 para Stores, y Header3 para Cart) para reflejar iconografía y textos específicos.
Componentes Comunes: Se desarrollaron componentes reutilizables como los headers y el LanguageSwitcher, facilitando la consistencia en el diseño y la gestión de la internacionalización en toda la aplicación.
Uso de Hooks: Se aprovechó el hook useTranslation en cada componente para obtener y renderizar las traducciones, así como otros hooks propios (como useMenu) para manejar datos provenientes de Mockaroo.

# Proceso de Implementación

Configuración Inicial y Estructura del Proyecto:
Se inició el proyecto utilizando Vite con plantilla de React.
Se configuraron las dependencias básicas, incluyendo React, React Router, ReactDOM y Bootstrap, junto con react-i18next para la internacionalización.

Desarrollo de la Navegación y Componentes de Página:
Se definieron las rutas principales en el archivo App.jsx utilizando Routes y Route de React Router para dirigir al usuario a Login, Home, Menu, Stores y Cart.
Cada página se estructuró utilizando componentes de React Bootstrap para crear carruseles, tarjetas (Cards) y diseños responsivos con el sistema de rejilla (Grid).

Implementación de la Internacionalización:
Se creó el archivo i18n.js que configura los recursos en inglés, español y francés, y se inicializó react-i18next.
Se actualizó cada componente para sustituir textos estáticos por claves de traducción utilizando el hook useTranslation.
Se incorporó un componente LanguageSwitcher fijo en la esquina inferior izquierda, lo que permite al usuario cambiar el idioma de forma global y dinámica.
Ajustes y Refinamientos de la Interfaz:

Se realizaron ajustes en el layout, estilos y posicionamiento de elementos (por ejemplo, centrar las tarjetas en la página, redondear esquinas de las tarjetas y ajustar los headers).
Se verificó la correcta visualización de los iconos correspondientes en cada header (usando iconografía distinta para Menu, Stores y Cart).

