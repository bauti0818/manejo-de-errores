# Ejercicio de manejo de errores

## ¿Como empezar?

Para empezar deberás de forkear el repositorio, esto servirá para que tengas tu propio repositorio con el ejercicio. Para hacerlo puedes hacer click en el botón que dice `fork` en la parte superior derecha.

![Fork](https://i.imgur.com/WyCANjv.png?1)

Cuando hayas terminado, ingresa a tu repositorio que acabas de forkear, y desde la navegación ingresa a `Actions`, allí deberás activar los workflows dándole al botón (Esto le permitirá a los tutores ver los test de tu repositorio).

![Workflows](https://i.imgur.com/2VJex1q.png?1)

Ahora deberás clonar el repositorio a tu computador para poder empezar a trabajar en él. Para hacerlo deberás clickear en el botón que dice `Code`, ahí encontraras el URL para clonar el repositorio.

![URLClone](https://i.imgur.com/bzTh0OL.png)

Cuando ya hayas obtenido el link, podrás clonar el repositorio a tu computador desde la terminal mediante el comando `git clone URL_DEL_REPOSITORIO`

## ¿Como verificar tu código?

Ahora que ya tienes el repositorio en tu computador, puedes empezar a realizar el ejercicio. Para validar tu resolución con los test deberás abrir la terminal dentro de la carpeta raíz del proyecto, allí ejecutaras el comando `npm install`.

Cuando hayas terminado de instalar las dependencias, ya podrás correr los test desde tu terminal mediante el comando `npm test`

## ¿Como subo mi resolución del ejercicio?

Una vez que hayas terminado de realizar el ejercicio, puedes subir tu resolución al repositorio mediante un commit mediante los siguientes comandos:

`git add .` (Este comando agregará todos los cambios que realizaste en el proyecto)

`git commit` (Este comando creará el commit con los cambios que hayas subido)

`git push` (Este comando subirá tu commit al repositorio en la plataforma de GitHub)
