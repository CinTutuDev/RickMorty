#  ![10165892_0 - copia](https://user-images.githubusercontent.com/71487857/216372909-107e2824-dbda-436c-a15c-db62438a90b2.jpg) Rick & Morty
![Rick-And-Morty-Emblema800 - copia](https://user-images.githubusercontent.com/71487857/216371958-ef917f8c-4214-4b2c-ac92-1e72abe6bc1a.jpg)

## Realizado en ![angular](https://user-images.githubusercontent.com/71487857/212993270-3cf1454e-f0d7-4164-bc01-20d5fe6469cd.png)Angular
## Proyecto guiado por [Yandrak](https://www.youtube.com/watch?v=I6OBjvF41ZY&list=RDLVDNnj4yAo5-g&index=5&ab_channel=Yandrak)
### ✔Comienzo el proyecto desde cero con los comandos: 
```
 npm install -g @angular/cli
```
* Ver version
```
 ng version
 ```
* Crear proyecto 
```
 ng new Breaking-Bad
```

## ✔Componente main ![blackRicky](https://user-images.githubusercontent.com/71487857/216372377-6ae80cf6-8b60-4e64-8163-88839500ce7f.jpeg)

```
 ng g c pages/main 
 ```
* Lo enruto en app-routing.module
```
 const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },//si es vacia la ruta va a inicio
  {
    path:'**',
    redirectTo: '/',
  }
];
```
## ✔Crear carpeta Environment y los environments
```
  mkdir environments
  ng g e environment
  ng g e environment.prod
 ```
 ## ✔Creo mi interfaces en la url RyM - [URL JSON](https://app.quicktype.io/)
 
## 🎈Para stilos 
### Importo en el index el css de Boostrap - [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
### Para box-shadow - [box-shadow](https://getcssscan.com/css-box-shadow-examples)
```
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
 ```
 ## 🏎 Arrancar el servidor web

* Ir al directorio frontend y ejecutar el comando

```
npm start
    ó
ng serve    
```

Para acceder a la aplicación navegar a la URL:

https://localhost:4200
 
 **Free Software, Hell Yeah!🤘**
 
