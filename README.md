#  Breaking-Bad 
![breaking](https://user-images.githubusercontent.com/71487857/216112770-05829518-e2f5-49af-902b-c096938b0042.png)
## Realizado en ![angular](https://user-images.githubusercontent.com/71487857/212993270-3cf1454e-f0d7-4164-bc01-20d5fe6469cd.png)Angular
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

## ✔Componente main![breakinBAdIco70px](https://user-images.githubusercontent.com/71487857/216269842-219c43fe-dd9d-4b03-875d-8356ce67dc5e.jpg) 
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
## 🎈Para stilos 
### Importo en el index el css de Boostrap - [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
```
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
 ```
 
 
 
 
