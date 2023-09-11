# tienda

1. Instalar Angular CLI npm install -g @angular/cli
2. Crear un Nuevo Proyecto de Angular ng new nombre-del-proyecto
3. Navegar al Directorio del Proyecto cd nombre del proyecto
4. Instala la biblioteca @ng-bootstrap/ng-bootstrap npm install --save @ng-bootstrap/ng-bootstrap
5. Iniciar el Servidor de Desarrollo ng serve

Crear una barra de navegacion

1. Crea un componente para la barra de navegación ng generate component navbar
2. Define las rutas en tu archivo de enrutamiento(app-routing.module.ts)
3. En el componente navbar, puedes utilizar la directiva routerLink para crear enlaces de navegación a tus rutas.
4. En tu archivo HTML principal, coloca la etiqueta <router-outlet></router-outlet> donde quieras que se muestren los componentes correspondientes a las rutas.
5. Asegúrate de que tu módulo principal (app.module.ts) tenga las importaciones y configuraciones necesarias para el enrutamiento y el módulo de navegación.
6. Asegúrate de que tus componentes y rutas estén configurados correctamente según tus necesidades. Puedes personalizar los estilos CSS y la estructura HTML de tu barra de navegación (NavbarComponent) según tus preferencias de diseño.
