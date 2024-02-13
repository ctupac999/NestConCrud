<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 
## <span style="color: white; background-color: black;">Meetup Crud con Nest.js conectado a una ddbb de MongoDB Atlas (nube) </span>

### 🎤 <span style="color: white; background-color: black;">Introducción del MeetUp:</span>


Bienvenidos a una jornada de aprendizaje intensivo, donde explicaremos la estructura de Nest.js, Desentrañaremos la historia del CRUD y aplicaremos nuestros conocimientos en la creación práctica de una API-REST (servidor) para gestionar una base de datos de Álbumes de música, utilizando MongoDB atlas en la nube.

<span style="color: white; background-color: black;">1. Introducción a Nest.js y su Historia:</span>
Nos sumergiremos en el fascinante mundo de Nest.js, un marco de trabajo para Node.js que ha revolucionado la forma en que construimos aplicaciones del lado del servidor. Descubriremos la historia detrás de su creación y cómo se ha convertido en una opción preferida para muchos desarrolladores.

<span style="color: white; background-color: black;">2. Introducción al CRUD:</span>

Explicaremos los fundamentos del CRUD. Analizaremos cómo simplificar las operaciones básicas de manipulación de datos: Crear, Leer, Actualizar y Eliminar.

<span style="color: white; background-color: black;">3. Arquitectura de Nest.js - Modular y Basada en Controladores:</span>
Mostraremos la arquitectura modular de Nest.js, que se fundamenta en controladores. Aprenderemos cómo esta estructura proporciona una base sólida para el desarrollo escalable y mantenible de aplicaciones. Exploramos la esencia de la inyección de dependencias y cómo contribuye a la creación de componentes flexibles y reutilizables.

<span style="color: white; background-color: black;">4. Creación de una API con MongoDB Atlas:</span>
¡Llegó el momento de poner manos a la obra! Juntos, configuraremos una API REST utilizando Nest.js y aplicaremos los principios del CRUD para interactuar con una base de datos de álbumes de música la cual estará alojada en MongoDB Atlas.

<span style="color: white; background-color: black;">5. Desarrollo de Endpoints Específicos:</span>
Nos adentraremos en la creación de endpoints específicos para nuestra API de series. Veremos cómo manejar operaciones CRUD sobre los datos de los álbumes, desde la creación hasta la actualización y eliminación de registros existentes.

<span style="color: white; background-color: black;">6. Integración con MongoDB Atlas:</span>
Descubriremos la magia de la integración de Nest.js con MongoDB Atlas. Aprenderemos a interactuar eficientemente con esta base de datos NoSQL, aprovechando sus características únicas para almacenar y recuperar información de nuestros álbumes.

<span style="color: white; background-color: black;">7. Aprenderemos a solucionar errores:</span>

Utilizaremos técnicas y estrategias para identificar y solucionar errores comunes durante el desarrollo de aplicaciones con Nest.js, CRUD y MongoDB Atlas. Estas habilidades son fundamentales para mantener el buen funcionamiento de nuestras aplicaciones y garantizar una experiencia fluida para los usuarios.

<span style="color: white; background-color: black;">8. Creación de un Cluster en MongoDB Atlas: </span>
Guiaremos a los participantes a través del proceso de creación y configuración de un clúster en MongoDB Atlas. Aprenderemos cómo conectarnos a nuestro clúster desde una aplicación Nest.js.

Al final de esta clase, los participantes no sólo comprenderán la teoría detrás de Nest.js, el CRUD y la inyección de dependencias, sino que también tendrán los conocimientos básicos para crear su propio servidor (API - REST) funcional para gestionar una base datos en la nube con  MongoDB Atlas. Prepárense para dar vida a sus proyectos con esta experiencia práctica y enriquecedora. ¡Nos vemos en el mundo de Nest.js y la creación de APIs!


### 🚨 <span style="color: white; background-color: black;">Aplicaciones que deberan estan instaladas para el MeetUp</span>

[Visual Studio Code](https://code.visualstudio.com/Download) (tambien version online)
[NodeJs](https://nodejs.org/en/download/) npm viene incluido.
[Postman](https://www.postman.com/downloads/) (opcional, tambien version online)


### 💾 <span style="color: white; background-color: black;">Instalacion  y creacion del proyecto (lo haremos juntos)</span>


```bash
# Instalacion de CLI (Command Line Interface, se instala 1 sola vez).
npm i -g @nestjs/cli

# Creamos el proyecto, entramos en el mismo y lo corremos.
nest new nombreProyecto (en nuestro caso lo nombraremos API-MUSIC)
cd nombreProyecto
npm run start:dev

# Si visitas en tu explorador, nos dará un mensaje de bienvenida: 
http://localhost:3000/

# Generamos los componentes: 
nest generate module nombreModulo 
nest generate controller nombreControlador 
nest generate service nombreServicio 

(en nuestro proyecto cada componente los nombraremos como album, ya que nuestro proyecto es de música. Quedando los archivos conformados de la siguiente manera: album.module.ts, album.controller.ts y album.service.ts).

# Instalamos la libreria Mongoose, con estos configuramos MongoDB para que funcione con nuestro proyecto:
npm install --save @nestjs/mongoose mongoose

# Importamos Mongoose en nuestro archivo del modulo de la aplicacion, para comunicarnos con el proyecto y con MongoDB:
Dirigete a: app.module.ts y veras la configuracion del modulo.

# Contruccion de los schemas:
Los schemas especificaran como se representa los datos en nuestra base de datos. Si te vas a nuestro schema, veras como es nuestra estructura.

# Creacion del DTO:
Como sus siglas lo indican: Objeto de Transferencia de Datos, definiremos como se enviarán o pasaran los datos de objeto a objeto a través de la red.
Para esto crearemos un archivo al cual llamaremos en nuestro proyecto: create-album.dto.ts

# Configuracion del modelo/servicio:
El archivo de servicio es el responsable de interacturar y comunicarse con la ddbb, en nuestro caso será con MongoDB. Se utiliza para: crear, recuperar, actualizar y eliminar registros del schema que creamos anteriormente. Si te diriges a nuestro archivo: album.service.ts, podras entender que el fragmento de codigo expuesto, representa una aplicacion CRUD.

# Configurar los controladores
El controlador es el responsable de manejar las solicitudes de ingreso y enviar las respuestas al cliente.
Para manejar el sistema de enrutamiento del framework proporcionamos diferentes anotaciones correspondientes a cada ruta (@Put(), @Delete(), @Post(), @Get()). Si te diriges a nuestro controller, podras ver la estructura del mismo.

# Probaremos la API con Postman
En este caso Postman hara la veces de la parte del Front-end, enviando peticiones http a nuestro base de datos. Mostraremos algunos ejemplos en nuestra clase.
```


### 📝 <span style="color: white; background-color: black;">Conceptos Basicos</span>
##### <span style="color: white; background-color: black;">CRUD</span> 
{Es un acrónimo que se refiere a las operaciones básicas que se pueden realizar sobre los datos en una aplicación o sistema:
Create (Crear): La operación de crear implica la creación de nuevos registros o datos en una base de datos o sistema.
Read (Leer): La operación de leer implica la recuperación de datos existentes de una base de datos o sistema. Es la capacidad de acceder a la información almacenada.
Update (Actualizar): La operación de actualizar implica modificar o actualizar los datos existentes en una base de datos o sistema.
Delete (Eliminar): La operación de eliminar implica la eliminación de datos existentes en una base de datos o sistema.
Estas operaciones forman la base del acceso y manipulación de datos en muchas aplicaciones y sistemas de software. El CRUD proporciona una forma estándar y simplificada de interactuar con los datos, y es utilizado ampliamente en el desarrollo de aplicaciones web, sistemas de gestión de bases de datos, sistemas de gestión de contenidos y muchas otras aplicaciones.}

##### <span style="color: white; background-color: black;">Que relacion tienen los componentes con el Modelo | Vista | Controlador (MVC)? </span> 

{El modelo es la entidad que representa los datos de la aplicación y las reglas de negocio que los manipulan. El modelo se comunica con una base de datos o una fuente de datos externa para realizar las operaciones CRUD.

La vista es la entidad que muestra los datos del modelo al usuario en una interfaz gráfica. La vista puede tener diferentes formatos, como páginas web, formularios, tablas, etc. La vista solicita los datos al controlador y los actualiza según los cambios del modelo.

El controlador es la entidad que coordina las acciones entre el modelo y la vista. El controlador recibe las peticiones del usuario, las procesa y las envía al modelo. El controlador también recibe los datos del modelo y los envía a la vista. El controlador actúa como intermediario entre el modelo y la vista.}

##### <span style="color: white; background-color: black;">Inyeccion de dependencias en NestJs</span> 

{En Nest.js, la inyección de dependencias (DI) es fundamental para proporcionar instancias de servicios a otros componentes de la aplicación. A través de la DI, puedes conectar diferentes partes de tu aplicación de manera eficiente y modular. Permíteme explicarte cómo se relaciona la inyección de dependencias en Nest.js:

Fundamentos de la Inyección de Dependencias:
La inyección de dependencias es una técnica de inversión de control (IoC). En lugar de crear manualmente instancias de clases o servicios, delegamos esta responsabilidad al contenedor de IoC (que en nuestro caso es el sistema de tiempo de ejecución de NestJS).
En resumen, NestJS maneja la creación y administración de las dependencias de tus componentes.}


### ❓ <span style="color: white; background-color: black;">FAQ´s</span>

#### <span style="color: white; background-color: black;">Cual es la diferencia entre una API, y una API REST?</span>
La diferencia entre una API y una API REST radica principalmente en su arquitectura y en la forma en que se comunican los sistemas.

##### <span style="color: white; background-color: black;">API (Interfaz de Programación de Aplicaciones):</span>
Una API es un conjunto de definiciones y protocolos que permiten que diferentes componentes de software se comuniquen entre sí.
Puede usar varios protocolos para la comunicación, como HTTP, TCP/IP, WebSocket, etc.

No está necesariamente ligada a un estilo arquitectónico específico.
Puede ser diseñada para una variedad de propósitos, desde la integración de sistemas hasta la exposición de funcionalidades de software.

##### <span style="color: white; background-color: black;">API REST (Transferencia de Estado Representacional):</span>
{Una API REST es un estilo de arquitectura para la creación de APIs que se basa en los principios de REST.

Utiliza el protocolo HTTP para la comunicación entre el cliente y el servidor.
Se basa en el concepto de recursos (que pueden ser identificados mediante URLs) y en las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre esos recursos.

Utiliza los métodos estándar de HTTP (GET, POST, PUT, DELETE) para realizar estas operaciones.
Es sin estado (stateless), lo que significa que cada solicitud contiene toda la información necesaria para procesarla, y no se mantiene estado de sesión en el servidor entre solicitudes.

En resumen, mientras que una API es un término general que abarca cualquier interfaz de programación entre sistemas, una API REST es un tipo específico de API que sigue los principios y convenciones de la arquitectura REST, utilizando HTTP como protocolo de comunicación y siguiendo un enfoque basado en recursos y operaciones estándar.}

#### <span style="color: white; background-color: black;">NestJs, es una libreria o un framework?</span>

{No, NestJS no es una librería, es un framework de desarrollo de aplicaciones web para Node.js. Aunque la diferencia entre una librería y un framework puede ser sutil, en general:
Una librería es un conjunto de funciones o clases que pueden ser importadas y utilizadas en un proyecto para realizar tareas específicas. Por ejemplo, una librería de fechas puede proporcionar funciones para manipular fechas y horas en un programa.
Un framework, por otro lado, proporciona una estructura y una arquitectura para el desarrollo de aplicaciones. Un framework establece las reglas y convenciones que los desarrolladores deben seguir, y generalmente proporciona funcionalidades predefinidas para tareas comunes, como manejo de rutas, inyección de dependencias, etc.

NestJS, en particular, es un framework completo que se basa en TypeScript y proporciona una arquitectura modular y escalable para el desarrollo de aplicaciones web y de servidor en Node.js. Ofrece características como inyección de dependencias, controladores, servicios, middleware, soporte para APIs RESTful, GraphQL, WebSockets y más. Por lo tanto, es más que una simple librería; es una estructura que guía y facilita el desarrollo de aplicaciones robustas en Node.js.}

#### <span style="color: white; background-color: black;">Un servidor es una API REST?</span>

{No, una API REST no es un servidor en sí misma, sino más bien una interfaz que define cómo se pueden comunicar los sistemas de software a través de internet. La API REST establece un conjunto de reglas y convenciones sobre cómo los clientes (como aplicaciones web, móviles u otros servicios) pueden solicitar y manipular recursos en un servidor.

El servidor que implementa la API REST es el componente que responde a las solicitudes realizadas por los clientes, procesa esas solicitudes y proporciona las respuestas correspondientes. Este servidor puede ser una aplicación web, un servicio en la nube u otro tipo de sistema de software que cumpla con los principios de la arquitectura REST.

En resumen, la API REST define la forma en que los clientes pueden interactuar con el servidor a través de solicitudes HTTP, mientras que el servidor es el componente que implementa la lógica de la aplicación y proporciona acceso a los recursos solicitados.}

#### <span style="color: white; background-color: black;">Que es backend?</span>
{El backend es la parte no visible de un sistema de software, aplicación o sitio web. Se le conoce como la “parte trasera” y se encarga de procesar la lógica, gestionar datos, garantizar la seguridad y comunicarse con el servidor y las bases de datos. En resumen, el backend es el motor que hace que todo funcione detrás de la interfaz visible para los usuarios.
Algunas características clave del backend son:

Procesamiento de información: El backend procesa toda la información que alimenta al frontend (la parte visible). Esto incluye la lógica de negocio, la gestión de datos y la seguridad.

Bases de datos: El backend se comunica con bases de datos para almacenar y recuperar datos.

Seguridad: Maneja la autenticación, autorización y protección de datos sensibles.

Comunicación con el servidor: El backend se encarga de las solicitudes y respuestas entre el cliente (navegador o aplicación) y el servidor.

En resumen, el backend es esencial para que una aplicación o sitio web funcione correctame.}

#### <span style="color: white; background-color: black;">Un backend es un servidor?</span>

{En el contexto de desarrollo de software, especialmente en aplicaciones web y móviles, el término "backend" se refiere a la parte de una aplicación que se encarga de la lógica del negocio, el procesamiento de datos y la interacción con la base de datos. Sí, en muchos casos, el backend de una aplicación se ejecuta en un servidor, pero el backend en sí mismo no es un servidor.

El backend consiste en el conjunto de componentes, como aplicaciones, servicios y bases de datos, que trabajan juntos para admitir la funcionalidad de la aplicación desde el lado del servidor. Esta lógica y funcionalidad del backend es accesible para los clientes a través de una API, que puede ser una API REST, GraphQL u otro tipo de interfaz.

Por lo tanto, el backend es la parte de la aplicación que reside en el servidor y que procesa las solicitudes de los clientes, realiza operaciones en la base de datos y devuelve respuestas a los clientes. Es importante tener en cuenta que el backend puede ser desplegado en un servidor físico, en la nube o en un entorno de contenedores, pero la distinción principal es que se encarga de la lógica y procesamiento del lado del servidor.}

#### <span style="color: white; background-color: black;">Origen y Fundador</span>
Nest.js fue creado por Kamil Myśliwiec, un desarrollador polaco.
Kamil se inspiró en varios conceptos y patrones de diseño, incluidos los de Angular, Express y Spring Framework.

### 📖 <span style="color: white; background-color: black;">Glosario</span>

#### //Git// 
{Sistema de control de versiones distribuido ampliamente utilizado en el desarrollo de software. Fue creado por Linus Torvalds en 2005 para el desarrollo del kernel de Linux, pero ahora es utilizado en una variedad de proyectos de software en todo el mundo.
El propósito principal de Git es permitir que los desarrolladores trabajen en un mismo proyecto de manera colaborativa y controlar los cambios realizados en el código fuente a lo largo del tiempo. Esto se logra mediante la gestión de repositorios de código que contienen el historial completo de cambios realizados en el proyecto.
Algunas de las características clave de Git incluyen:
Control de versiones distribuido: Cada desarrollador tiene una copia completa del repositorio en su máquina local, lo que permite trabajar de manera descentralizada y sin necesidad de estar conectado a internet todo el tiempo.
Historial de cambios: Git almacena un registro detallado de todos los cambios realizados en el proyecto a lo largo del tiempo, lo que permite revertir cambios, comparar versiones y entender cómo evolucionó el código.
Ramificación (Branching) y Fusionado (Merging): Git permite crear ramas independientes del código para trabajar en nuevas características o solucionar problemas sin afectar el código principal. Posteriormente, esas ramas pueden fusionarse de nuevo con el código principal de manera controlada.
Velocidad y eficiencia: Git está diseñado para ser rápido y eficiente, permitiendo a los desarrolladores trabajar de manera fluida incluso en proyectos grandes con muchos archivos y colaboradores.
En resumen, Git es una herramienta fundamental en el desarrollo de software moderno que facilita la colaboración, el seguimiento de cambios y la gestión del código fuente de manera eficiente y controlada.}

#### //GitHub// 
{Plataforma de desarrollo colaborativo que permite a los equipos de programadores trabajar juntos en proyectos de software. Proporciona herramientas para gestionar y compartir código, realizar seguimiento de problemas y solicitudes de características (issues y pull requests), colaborar en la documentación, y mucho más.
En GitHub, los desarrolladores pueden alojar sus repositorios de código, ya sean proyectos de software libre o privados, y colaborar con otros miembros del equipo a través de la funcionalidad de control de versiones proporcionada por Git.
Además de ser una plataforma para alojar proyectos de código abierto y privados, GitHub ofrece características adicionales como integración continua, despliegue automático, administración de equipos y permisos, seguimiento de problemas, y wikis para la documentación del proyecto.
En resumen, GitHub es una plataforma esencial para el desarrollo de software colaborativo, que facilita la colaboración, el control de versiones y la gestión de proyectos de software.}

#### //JavaScript// 
{Lenguaje de programación ampliamente utilizado que se utiliza principalmente para crear interactividad en páginas web. Es un lenguaje de scripting del lado del cliente, lo que significa que se ejecuta en el navegador web del usuario final. JavaScript se utiliza para agregar funcionalidades dinámicas a las páginas web, como validar formularios, crear efectos visuales, interactuar con el usuario, enviar y recibir datos del servidor, y mucho más.
Además de su uso en el desarrollo web, JavaScript también se puede utilizar en otros entornos, como en el desarrollo de aplicaciones móviles, servidores web (Node.js), aplicaciones de escritorio, y en la creación de juegos y aplicaciones empresariales.
JavaScript es un lenguaje interpretado, lo que significa que el código se ejecuta línea por línea en tiempo de ejecución, lo que lo hace bastante flexible y adaptable. Es un lenguaje de programación de alto nivel y multi-paradigma que admite programación orientada a objetos, programación funcional y programación imperativa.}

#### //La terminal// 
{Interfaz de línea de comandos que te permite interactuar con tu sistema operativo utilizando comandos de texto. Sirve para realizar diversas tareas, como la gestión de archivos y directorios, la ejecución de programas, la instalación de paquetes, la administración del sistema, y muchas otras operaciones.
Algunas de las funciones comunes que puedes realizar en la terminal incluyen:
Navegar por el sistema de archivos.
Ejecutar programas y scripts.
Instalar, actualizar y administrar paquetes y dependencias.
Configurar y administrar servicios del sistema.
Realizar tareas de administración de red.
Automatizar tareas mediante scripts y programación de comandos.
En resumen, la terminal es una herramienta poderosa que te brinda control y acceso directo a tu sistema operativo a través de comandos de texto.}

#### //MongoDB// 
{Sistema de base de datos NoSQL (No solo SQL) de código abierto y orientado a documentos. En lugar de almacenar datos en tablas, como lo hace una base de datos relacional, MongoDB utiliza un formato de almacenamiento flexible tipo JSON llamado BSON (Binary JSON) que permite la representación y el intercambio eficientes de datos. 
MongoDB es altamente escalable y flexible, lo que lo hace adecuado para una amplia gama de aplicaciones, desde pequeñas hasta grandes empresas y aplicaciones web. Además, ofrece características como la indexación, la replicación, la tolerancia a fallos y la consulta avanzada que lo convierten en una opción popular para el desarrollo de aplicaciones modernas.}

#### //MongoDB Atlas// 
{Servicio de base de datos en la nube ofrecido por MongoDB, Inc. Es una plataforma completamente gestionada que permite a los usuarios implementar, operar y escalar bases de datos MongoDB en la nube de manera sencilla y eficiente, sin necesidad de administrar la infraestructura subyacente.
Algunas de las características principales de MongoDB Atlas incluyen:
Escalabilidad automática: Permite escalar horizontalmente la base de datos de manera automática según las necesidades del usuario, lo que garantiza un rendimiento óptimo y una alta disponibilidad.
Seguridad avanzada: Ofrece características de seguridad avanzadas, como el cifrado de datos en reposo y en tránsito, el control de acceso basado en roles y la integración con servicios de autenticación como LDAP y Active Directory.
Respaldo y recuperación: Proporciona opciones integrales de respaldo y recuperación para proteger los datos contra pérdidas y corrupción, con la capacidad de programar y automatizar los procesos de respaldo.
Monitorización y alertas: Permite monitorizar el rendimiento de la base de datos en tiempo real y configurar alertas para notificar sobre posibles problemas o eventos importantes.
En resumen, MongoDB Atlas simplifica la gestión de bases de datos MongoDB al ofrecer una solución completamente gestionada y escalable en la nube, lo que permite a los desarrolladores centrarse en la construcción de aplicaciones sin preocuparse por la infraestructura subyacente.}

#### //MongoDB Compass// 
{Herramienta gráfica de interfaz de usuario diseñada para interactuar con bases de datos MongoDB. Proporciona una manera intuitiva de explorar y manipular datos en las bases de datos MongoDB, permitiendo a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar), ejecutar consultas y visualizar resultados de una manera visual y fácil de entender. MongoDB Compass también ofrece características avanzadas como la visualización de la estructura de datos, la optimización de consultas y la administración de índices, lo que facilita el desarrollo y la administración de aplicaciones basadas en MongoDB.}

#### //Mongoose// 
{Biblioteca de modelado de objetos para Node.js y MongoDB que proporciona una solución elegante para organizar y trabajar con datos en una aplicación. Permite definir esquemas de datos con tipos de datos específicos, validación de datos, consultas flexibles y métodos de abstracción para interactuar con la base de datos MongoDB.
En resumen, Mongoose simplifica la interacción con MongoDB al proporcionar una capa de abstracción que facilita la definición de modelos de datos, la validación de datos y las operaciones de base de datos en aplicaciones Node.js.}

#### //NestJs// 
{Framework de desarrollo del lado del servidor que se centra en la creación de aplicaciones web y APIs escalables y mantenibles utilizando Node.js y TypeScript. Proporciona una arquitectura modular y basada en módulos que facilita la organización del código y la implementación de patrones de diseño sólidos. Con Nest.js, los full stackers pueden aprovechar la inyección de dependencias, el enrutamiento, los controladores, los decoradores y otros conceptos avanzados de TypeScript para crear aplicaciones robustas y eficientes tanto en el backend como en el frontend. Además, Nest.js se integra perfectamente con herramientas y tecnologías populares, lo que lo convierte en una opción poderosa para el desarrollo full stack.}

#### //NodeJs// 
{Entorno de ejecución de JavaScript del lado del servidor que utiliza el motor V8 de Google Chrome. Permite a los desarrolladores crear aplicaciones web altamente escalables y eficientes, aprovechando la naturaleza asincrónica y orientada a eventos de JavaScript. Con Node.js, los desarrolladores pueden construir servidores web, aplicaciones de red, APIs y aplicaciones en tiempo real de manera rápida y eficiente. Su ecosistema incluye el registro de paquetes NPM, que ofrece una amplia gama de módulos y bibliotecas de código abierto para facilitar el desarrollo. Node.js se ha convertido en una opción popular para el desarrollo web debido a su rendimiento, escalabilidad y capacidad para manejar grandes cantidades de conexiones simultáneas.}

#### //Postman// 
{Herramienta de colaboración para el desarrollo de APIs (Application Programming Interfaces) que permite a los desarrolladores crear, probar, documentar y compartir APIs de manera eficiente. Proporciona una interfaz de usuario amigable que facilita el envío de solicitudes HTTP a través de diferentes métodos (GET, POST, PUT, DELETE, etc.) y la visualización de las respuestas correspondientes.
Algunas de las características principales de Postman incluyen:
1) Entorno de desarrollo colaborativo: Permite a los equipos de desarrollo colaborar en el diseño y la implementación de APIs, compartiendo colecciones de solicitudes y respuestas.
2) Pruebas automatizadas: Permite crear y ejecutar scripts de pruebas automatizadas para validar el comportamiento de las APIs, incluyendo pruebas de regresión y pruebas de carga.
3) Documentación de APIs: Facilita la creación de documentación detallada para las APIs, incluyendo descripciones de endpoints, parámetros, y ejemplos de uso.
4) Colecciones y entornos: Permite organizar solicitudes relacionadas en colecciones, lo que facilita la gestión y la reutilización de las mismas. Además, permite definir entornos para gestionar variables de entorno y configuraciones específicas para diferentes escenarios.
5) Monitoreo y métricas: Ofrece capacidades de monitoreo y generación de métricas para evaluar el rendimiento y la disponibilidad de las APIs en producción.
En resumen, Postman es una herramienta versátil y poderosa que simplifica el proceso de desarrollo, pruebas y documentación de APIs, permitiendo a los equipos de desarrollo construir y mantener APIs de manera eficiente y efectiva.}

#### //TypeScript// 
{Lenguaje de programación desarrollado por Microsoft que se basa en JavaScript y agrega características adicionales como tipado estático, clases, interfaces y otros constructos propios de la programación orientada a objetos.
Una de las características principales de TypeScript es su capacidad para detectar y señalar errores durante el tiempo de compilación gracias al tipado estático. Esto permite a los desarrolladores atrapar errores comunes antes de ejecutar el código, lo que conduce a un código más robusto y menos propenso a errores.
TypeScript se compila en JavaScript puro, lo que significa que puede ser interpretado y ejecutado por cualquier navegador web o entorno que admita JavaScript. Se utiliza ampliamente en el desarrollo de aplicaciones web, especialmente en proyectos grandes y complejos, donde la tipificación estática y las características adicionales de TypeScript pueden mejorar la mantenibilidad y escalabilidad del código.}

#### //Visual Studio Code// 
{Editor de código fuente desarrollado por Microsoft que está disponible de forma gratuita y es compatible con Windows, macOS y Linux. Es altamente personalizable y está diseñado para ser ligero pero potente, con una amplia gama de extensiones que permiten a los desarrolladores personalizar su entorno de desarrollo según sus necesidades.
Algunas de las características clave de Visual Studio Code incluyen:
Edición de código inteligente: Ofrece resaltado de sintaxis, finalización automática, refactorización de código, y otras características que facilitan la escritura y edición de código.
Integración con Git: Viene integrado con herramientas de control de versiones como Git, lo que permite a los desarrolladores gestionar fácilmente el control de versiones de sus proyectos.
Depuración integrada: Proporciona un potente depurador integrado que permite depurar aplicaciones directamente desde el editor, con soporte para varios lenguajes de programación y plataformas.
Soporte para múltiples lenguajes: Es compatible con una amplia variedad de lenguajes de programación, incluyendo JavaScript, TypeScript, Python, Java, C#, entre otros, gracias a su amplia comunidad de extensiones.
Extensiones y personalización: Permite a los usuarios ampliar la funcionalidad del editor instalando extensiones desde el marketplace de Visual Studio Code, lo que les permite personalizar su entorno de desarrollo según sus necesidades específicas.
En resumen, Visual Studio Code es un editor de código ligero pero altamente funcional que ofrece una experiencia de desarrollo moderna y flexible para programadores de todo tipo}

### 📩 <span style="color: white; background-color: black;">Contacto</span>

- Ponentes: 
[Cristian Delgado](https://www.linkedin.com/in/cristiansalas999/)
[Wilfredo Liñan](https://www.linkedin.com/in/wilfredolinan/)