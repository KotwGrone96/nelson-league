# Nelson's league
## Proyecto campeones League Of Legends

### Bienvenid@s

Este proyecto se realizó en un principio con el fin de poner en práctica todo lo aprendido con React utilizando Create-React-App.<br/>
Se hizo uso de React-Router para incorporar rutas al proyecto y me di con la sorpresa que esta librería en producción tiene un problema :sweat_smile: <br/>
Básicamente React-Router no genera las rutas en nuestra App, por lo que cuando se hace una petición GET a una ruta específica, ésta termina en un 404 porque no existe :disappointed_relieved: .<br/>
Para brindar una solución rápida a esto, React-Router nos brinda un componente llamado HashRouter que lo que hace es poner un "#" después del index path. De esta manera cada vez que se consulte a un path específico que por delante tenga un "#", el servidor nos responderá siempre con el mismo archivo HTML, por lo que estas rutas siguen sin existir para el servidor, pero al menos ya no responde con un 404.<br/>
Por último decidí mudar la App de Create-React-App a Vite ya que es mucho más rápido.

:arrow_double_down: :arrow_double_down: :arrow_double_down: Deploy de la App en Netlify

https://nelson-league.netlify.app/ <br/> <br/>

Una vez hecho el deploy no me sentí conforme con la salida rápida en relación al path, por lo que busqué conocimientos en Node js y Express js para poder montar un servidor que pueda responder a esas rutas específicas.<br/>
Finalmente lo conseguí gracias a express y su facilidad para manejar peticiones y servir archivos estáticos :grin: .

:arrow_double_down: :arrow_double_down: :arrow_double_down: Github del manejo de path con express 

https://github.com/KotwGrone96/nelson-league-server <br/>

:arrow_double_down: :arrow_double_down: :arrow_double_down: Finalmente el delpoy se hizo en la plataforma de Heroku 

https://nelson-league.herokuapp.com/

