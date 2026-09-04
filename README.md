# Guau & Miau 🐾

**Tienda y espacio de confianza para el cuidado, alimentación y bienestar de tus mascotas.**

Proyecto web de una tienda de mascotas que permite a los usuarios registrarse, iniciar sesión y gestionar la información de sus mascotas. Desarrollado como trabajo académico por un equipo de desarrolladores amateurs.

## Características

- **Página de inicio** con presentación del negocio
- **Sistema de registro** de usuarios con información del dueño y mascotas (1 a 5 mascotas)
- **Inicio de sesión** con validación de credenciales
- **Validación de contraseñas** con requisitos de seguridad
- **Formulario dinámico** que genera campos según la cantidad de mascotas

## Estructura del proyecto

```
guauymiau/
├── index.html          # Página de inicio
├── login.html          # Formulario de inicio de sesión
├── registro.html       # Formulario de registro
├── assets/
│   ├── style.css       # Estilos personalizados
│   ├── logo.png        # Logo del proyecto
│   └── favicon.png     # Icono del navegador
└── js/
    ├── login.js        # Lógica de autenticación
    └── registro.js     # Lógica de registro
```

## Tecnologías utilizadas

- **HTML5** - Estructura de las páginas
- **CSS3** - Estilos y diseño
- **JavaScript** - Lógica del lado del cliente
- **Bootstrap 5.3** - Framework CSS para diseño responsive
- **Map (JavaScript)** - Estructura de datos para almacenar usuarios

## Usuarios de ejemplo (Hard Coded)

Los siguientes usuarios están predefinidos en `js/login.js` para pruebas:

| Correo electrónico | Contraseña | Nombre | Teléfono | Mascotas |
|-------------------|------------|--------|----------|----------|
| felip.fernandez@duocuc.cl | ColoColo | Felipe Fernandez | +56912345678 | Lala (perro), Lolo (gato) |
| felip.moya@duocuc.cl | fmoyam | Felipe Moya | +56932161549 | Crema (gato) |
| javiera.banares@duocuc.cl | jbanares | Javiera Banares | +56911223344 | Toto (hamster), Ninja (rata), Cachupin (perro) |

### Detalles de las mascotas por usuario

**Felipe Fernandez:**
- Lala - Perro
- Lolo - Gato

**Felipe Moya:**
- Crema - Gato

**Javiera Banares:**
- Toto - Hamster
- Ninja - Rata
- Cachupin - Perro

## Requisitos de contraseña

La contraseña debe cumplir con los siguientes requisitos:
- Mínimo 8 caracteres
- Al menos una letra mayúscula
- Al menos una letra minúscula
- Al menos un número
- Al menos un carácter especial: `@#$!%*?&`

## Validaciones del formulario de registro

- **Nombre completo:** Solo caracteres alfabéticos y espacios, máximo 50 caracteres
- **Correo electrónico:** Debe terminar en `@duoc.cl`
- **Contraseña:** Debe cumplir los requisitos mencionados arriba
- **Confirmación de contraseña:** Debe coincidir con la contraseña
- **Mascotas:** entre 1 y 5, cada una con nombre (máx. 50 caracteres) y tipo (Perro/Gato/Otro)

## Cómo usar

1. Abre `index.html` en tu navegador
2. Haz clic en "Iniciar Sesión" o "Crear Cuenta"
3. Para iniciar sesión, usa uno de los usuarios de ejemplo mostrados arriba
4. Para registrar un nuevo usuario, completa el formulario con tus datos

## Notas para el equipo

- Los usuarios están almacenados en un `Map` de JavaScript (no se persisten en localStorage o base de datos)
- El registro guarda los datos en memoria durante la sesión actual
- Este es un proyecto educativo, no está diseñado para producción

## Licencia

Proyecto académico - 2026 Guau & Miau
