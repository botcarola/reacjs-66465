# Welcome to StackEdit!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.

__hola esto es un texto de prueba__
**el mismo efecto que con asteriscos**

### Para usar itálica

*un solo asterisco para itálica*
_un solo guión bajo para itálica_

### Puedo combinar negrita con itálica

***sadasdsad negrita con itálica***
___slakdslakjdaskjdsad___

### Para poder hacer listas desordenadas
* Elemento 1
* Elemento 2
* Elemento 3
    * Sub elemento 1
    * Sub elemento 2
    * Sub elemento 3
* Elemento 4

### Para poder usar listas ordenadas
1. Primer elemento ordenado
2. Segundo elemento, etc
    1. sadadsad
    2. sadasd
    3. asdksjadad
3. sdaskjdasd

### Puedo incorporar enlaces

[Perfil de Linkedin](https://linkedin.com)

![Sailor moon](https://resizer.glanacion.com/resizer/v2/como-seria-serena-de-sailor-moon-en-la-vida-real-D7M5TLGRINGXBHTB36RBMXPDFA.jpg?auth=cbc0a994f8b484fb39afdd463496aa57440e6cb201d4a5c7a4fdb794cfbebbae&width=880&height=586&quality=70&smart=true)

### Podemos añadir citas textuales
> aslkdjlaskjdlksajdlkasdjlkasjdlkasjdlkasjdlkasjdsklajdklasjd
> sañdkasñldkañldkñlakdñlaskd
> asñdlkasñldkasñldkañsldkñslakdañsdkasd

### Podemos añadir código

```
  

const  SubtituloPerfil  = ({nombre}) =>  <h2>{saludar(nombre)}</h2>
const  DescripcionUsuario  = ({descripcion}) =>  <p>{descripcion}</p>
const  ListaIntereses  = ({intereses}) => (
<ul>
{
intereses.map((element) => (
<li  key={element.id}>
{
element.interes
}
</li>
))
}
</ul>
)

  

const  PerfilUsuario  = ({nombre, descripcion, intereses}) => {
return(
<>
<SubtituloPerfil  nombre={nombre}/>
<DescripcionUsuario  descripcion={descripcion}  />
<ListaIntereses  intereses={intereses}  />
</>
)
} 
export  default  PerfilUsuario;
```

### Podemos agregar hasta tablas

| Encabezado 1 | Encabezado 2 |
| ------------ | ------------ |
| Celda 1      | Celda 2      |
| Celda 3      | Celda 4      |


