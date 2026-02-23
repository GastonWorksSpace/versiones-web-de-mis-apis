import { ContenidoPagina } from "./main.js";
const api4 = new ContenidoPagina ({
  contenido1: `<div class="contenido">
                 <h1 class ="titulo-api"> Actividad 4 Gestión Operativa en la Nube (Cloud Practitioner)</h1>
                 <h2 class="titulo-contenido"> Objetivo </h2>
     
                 <p> Aplicar de forma integrada los conocimientos sobre administración de costos (FinOps), 
                  tipos de arquitectura moderna, automatización con herramientas de línea de comandos, 
                  y diseño de soluciones resilientes basadas en los principios del AWS Well-Architected Framework, 
                  para tomar decisiones técnicas que optimicen el uso de recursos en la nube </p>
                </div>`, 

  contenido2: `<div class="contenido2"> 
                        <h2 class="titulo-contenido"> Contexto</h2>
                        <p> TecnoPlus S.A. sigue evolucionando su infraestructura cloud. 
                        En esta nueva fase, la empresa desea mejorar la eficiencia operativa, optimizar los costos, 
                        y tomar decisiones basadas en buenas prácticas de arquitectura AWS.
                        </p>
                        <p> También quiere incorporar el uso de herramientas profesionales
                         como la AWS CLI para reducir tareas manuales,
                          y necesita evaluar cuál es el modelo de arquitectura más conveniente para distintas aplicaciones.
                        </p>
                        <p>Tu rol como Cloud Engineer Junior será acompañar esta transformación
                        utilizando las herramientas aprendidas y dejando registro de cada paso </p>

                        <p> Para completar exitosamente está actividad deberás realizar el siguiente laboratorio 
                        dentro de la plataforma de AWS: </p>
                        <ul>
                            <li> [ACCLFO]-Lab - Sandbox Environment: AWS Academy Cloud Foundations  - Sandbox</li>
                        </ul>
                        <p>Antes de realizarlo, lee con atención este documento, 
                        ya que para que la entrega sea efectiva deberás tomar capturas de pantalla de las diferentes instancias 
                        que te enumeramos a continuación.</p>

                      

              </div>`, 
  contenido3: ` <div class="contenido3">
                        
                        <h2 class="titulo-contenido">Consignas </h2>
                        
                        <p> 1. Implementación práctica con AWS Academy  - Sandbox Environment </p>
                        <p> PARTE A. Comparar despliegues con Monolítica y Microservicios. 
                        [ACCLFO]-Lab - Sandbox Environment: AWS Academy Cloud Foundations - Sandbox </p>
                        
                        <ul class ="lista-consignas-de-actividad">
                            <li> Despliega una aplicación sencilla monolítica en una instancia EC2 </li>

                            <li> Luego, simula una arquitectura de microservicios creando 2 instancias EC2 que simulan servicios diferentes
                             (por ejemplo, frontend y backend).</li>

                            <li> Documenta los pasos para desplegar y cómo se accede a cada componente, 
                            con captura de pantalla de cada procedimiento.</li>

                            <li>Qué ventajas viste en el despliegue de microservicios frente al monolítico?
                             ¿Qué desafíos te surgieron al administrar más servicios?</li>
                        </ul>

                        <p> Parte B. Crear servicios desde la CLI [ACCLFO]-Lab - Sandbox Environment: AWS Academy Cloud Foundations - Sandbox </p>
                        <ul class= "lista-consignas-de-actividad">
                            <li> Ingresa a CloudShell desde la consola web de AWS o utiliza una terminal con AWS CLI configurado. </li>
                            <li>  Ejecuta comandos para crear servicios: </li>
                               <ul class ="lista-sub-apartados-de-actividad ">
                                 <li> S3 x 2. Con diferentes nombres. </li>
                                 <li> EC2 x 2. Con diferentes nombres. </li>
                                 <li> EBS.</li>
                               </ul>

                             <li> Documenta los pasos para desplegar y cómo se accede a cada componente, 
                            con captura de pantalla de cada procedimiento.</li>
                             <li >Qué ventajas viste en el despliegue de microservicios frente al monolítico?
                             ¿Qué desafíos te surgieron al administrar más servicios?</li>
                        </ul>
                        <p> 2. Pilares del AWS Well-Architected Framework.</p>
                        <p> Elige un servicio que hayas creado (ejemplo: instancia EC2 creada en Parte B). </p>
                        <ul class="lista-consignas-de-actividad">
                          <li> Evalúa la arquitectura bajo los 6 pilares: Excelencia operativa (Operational Excellence), 
                          Seguridad (Security), Fiabilidad (Reliability), Eficiencia en el rendimiento (Performance Efficiency), 
                          Optimización de costos (Cost Optimization) y Sostenibilidad (Sustainability)</li>
                          <li> Describe qué mejoras implementarías en cada pilar.</li>
                        </ul>
                        <p>3. Transformación Digital y Migración</p>
                        <ul class="lista-consignas-de-actividad">
                          <li> Lee y completa la tabla para los siguientes casos reales de TecnoPlus: </li>
                          <img class="imagen-contenido src="../assets/img/img-api-4/tabla-actividad-api-4-gestion-operativa-en-la-nube.png" 
                          alt="tabla-actividad-api-4-gestion-operativa-en-la-nube" />
                        </ul>

                        `,
  contenido4: `<div class="contenido4">
                        <h2 class="titulo-contenido"> Respuestas </h2>
                        
                        <h3> 1.	Implementación práctica con AWS Academy - Sandbox Environment </h3>
                        <h4> PARTE A. Comparar despliegues con Monolítica y Microservicios. </h4>
                        
                        <ul class="lista-respuestas-actividad">
                          <li> Capturas de despliegue de aplicación sencilla monolítica en una instancia EC2</li>

                          <img  class="imagen-contenido" src="../assets/img/img-api-4/captura-1-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2.png"
                          alt ="captura-1-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2" />

                          <img  class="imagen-contenido" src="../assets/img/img-api-4/captura-2-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2.png"
                          alt ="captura-2-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2" />

                          <img  class="imagen-contenido" src="../assets/img/img-api-4/captura-3-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2.png"
                          alt ="captura-3-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2" />


                          <img  class="imagen-contenido" src="../assets/img/img-api-4/captura-5-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2.png"
                          alt ="captura-5-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2" />

                          <img class="imagen-contenido" src="../assets/img/img-api-4/captura-6-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2.png"
                          alt ="captura-6-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2" />

                          
                          <li><u> Captura del lanzamiento correcto de instancia EC2 que simula aplicación monolítica </u> </li>
                          <img class="imagen-contenido" src="../assets/img/img-api-4/captura-del-lanzamiento-correcto-de-instancia-ec2-que-simula-aplicacion-monolitica.png"
                           alt ="captura-del-lanzamiento-correcto-de-instancia-ec2-que-simula-aplicacion-monolitica" />
                          
                          <li> Despliegue de instancias EC2 simulando 2 servicios diferentes 
                          (por ejemplo, frontend y backend) para una arquitectura de microservicios.</li>
                              <ul class="lista-apartados-de-actividad">
                                 <li>  <u>Frontend </u></li>
                                 <img class="imagen-contenido" src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-frontend.png" alt ="Despliegue-de-instancias-EC2-simulando-frontend" />
                                 <img class="imagen-contenido" src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-frontend-1.png" alt ="Despliegue-de-instancias-EC2-simulando-frontend-1" />
                                 <img class="imagen-contenido" src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-frontend-2.png" alt ="Despliegue-de-instancias-EC2-simulando-frontend-2" />
                                 <img class="imagen-contenido"src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-frontend-3.png" alt ="Despliegue-de-instancias-EC2-simulando-frontend-3" />
                                 
                                 <ul  class = "lista-sub-apartados-de-actividad">
                                    <li> <u> Captura del lanzamiento correcto del EC2-frontend </u></li>
                                    <img class="imagen-contenido" class="imagen-contenido"src="../assets/img/img-api-4/captura-lanzamiento-correcto-del-ec2-frontend.png" alt ="captura-lanzamiento-correcto-del-ec2-frontend" />
                                  </ul>

                                <li><u> Backend </u> </li>
                                    <img class="imagen-contenido"src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-backend.png" alt ="Despliegue-de-instancias-EC2-simulando-backend" />
                                    <img class="imagen-contenido"src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-backend-1.png" alt ="Despliegue-de-instancias-EC2-simulando-backend-1" />
                                    <img class="imagen-contenido" src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-backend-2.png" alt ="Despliegue-de-instancias-EC2-simulando-backend-2" />
                                    <img class="imagen-contenido"src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-backend-3.png" alt ="Despliegue-de-instancias-EC2-simulando-backend-3" />
                               </ul>
                               
                                <ul class="lista-consignas-de-actividad">
                                  <li> <u> Captura del lanzamiento correcto del EC2-backend </u> </li>
                                  <img class="imagen-contenido" src="../assets/img/img-api-4/captura-lanzamiento-correcto-del-ec2-backend.png" alt ="captura-lanzamiento-correcto-del-ec2-backend" />
                                </ul>
                              </ul>
              
                           <ul class ="listas-con-flecha">
                             <li> <u> Captura de instancias  creadas(backend/frontend/aplicación monolítica sencilla) </u> </li>
                             <img class="imagen-contenido"src="../assets/img/img-api-4/captura-del-lanzamiento-correcto-de-instancia-ec2-que-simula-aplicacion-monolitica.png" alt =" captura-del-lanzamiento-correcto-de-instancia-ec2-que-simula-aplicacion-monolitica" />
                           </ul>

                          <li> Pasos para acceder a las instancias creadas (aplicación monolitica sencilla/backend/frontend) seleccionando el id correspondiente de la instancia a acceder</li>
                          <ul class ="lista-apartados-de-actividad">

                            <li> <strong> Aplicación monolitica </strong> </li>
                            <img class="imagen-contenido" src="../assets/img/img-api-4/accediendo-a-aplicacion-monolitica.png" alt ="accediendo-a-aplicacion-monolitica" />
                               <ul class = "lista-sub-apartados-de-actividad">
                                 <li><u> Conectarse a la instancia </u> (presionando el botón “conectar”)</li>
                                 <img class="imagen-contenido" src="../assets/img/img-api-4/conectarse-a-instancia-monolitica.png" alt ="conectarse-a-instancia-monolitica" />
                                 <li> <u> Elegir tipo de conexión </u> (Por ejemplo: conectarse a través de una ip publica) luego apretar el botón “conectar”.</li>
                                 <img class="imagen-contenido" src="../assets/img/img-api-4/elegir-tipo-de-conexion-app-monolitica.png" alt ="elegir-tipo-de-conexion-app-monolitica" />
                                 <li>Captura de interfaz de instancia creada</li>
                                 <img class="imagen-contenido"src="../assets/img/img-api-4/captura-interfaz-de-app-monolitica-creada.png" alt ="captura-interfaz-de-app-monolitica-creada" />
                                </ul>
                          
                            <li> <strong>Frontend </strong></li>
                            <img class="imagen-contenido" src="../assets/img/img-api-4/conectarse-a-instancia-frontend.png" alt ="conectarse-a-instancia-frontend" />
                              <ul class ="lista-sub-apartados-de-actividad">
                               <li> <u> Conectarse a la instancia frontend </u></li>
                               <img class="imagen-contenido"src="../assets/img/img-api-4/conectarse-a-instancia-frontend-2.png" alt ="conectarse-a-instancia-frontend-2" />
                               <li> <u>Tipo de conexión </u> a traves de una ip publica </li>
                               <img class="imagen-contenido" src="../assets/img/img-api-4/tipo-de-conexion-instancia-frontend.png" alt ="tipo-de-conexion-instancia-frontend" />
                               <li>  Captura de interfaz frontend </li>
                               <img class="imagen-contenido" src="../assets/img/img-api-4/captura-interfaz-frontend.png" alt ="captura-interfaz-frontend" />
                              </ul>

                            <li><strong> Backend </strong></li>
                            <img class="imagen-contenido"src="../assets/img/img-api-4/backend-captura-1.png" alt ="backend-captura-1" />
                              <ul class ="lista-sub-apartados-de-actividad">
                               <li>  <u> Conectarse a la instancia backend </u></li>
                               <img class="imagen-contenido"src="../assets/img/img-api-4/conexion-instancia-backend.png" alt ="conexion-instancia-backend" />
                               <li>  <u> Tipo de conexión </u> a través de una ip publica </li>
                               <img class="imagen-contenido" src="../assets/img/img-api-4/tipo-de-conexion-en-backend.png" alt ="tipo-de-conexion-en-backend" />
                               <li> Captura visual backend  </li>
                               <img class="imagen-contenido" src="../assets/img/img-api-4/captura-visual-backend.png" alt ="captura-visual-backend" />
                             </ul>
                          <li> Las  ventajas apreciadas en el despliegue de microservicios frente al monolítico así como sus desventajas serian las siguientes: </li>
                           
                          <h5 class="titulo-ventajas"> Ventajas </h5>
                            <ul class ="lista-ventajas">
                              <li> Autonomia  y simpleza: Pueden ser desplegados/editarlos sin comprometer u depender del servicio instanciado anteriormente 
                              (Ej: Al lanzar la instancia backend e editarla sin tener que desplegar antes la frontend). </li>
                            </ul>

                            <h5 class = "titulo-desventajas"> Desventajas</h5>
                            <ul class ="lista-desventajas">
                               <li> Mayor tiempo invertido en administración:  Requiere un lapso de paciencia/experiencia mayor para manejarlos
                               teniendo que abrirlos en distintas pestañas para administrar a cada uno 
                              (mientras en la aplicación monolítica ya se tiene un panorama global debido a que todo forma parte de un mismo archivo) 
                              factor que puede molestar en algunos casos.</li>
                            </ul>
                          </ul>
                          <h4> Parte B. Crear servicios desde la CLI [ACCLFO]-Lab - Sandbox Environment: AWS Academy Cloud Foundations - Sandbox</h4>
                          <ul class="lista-respuestas-actividad">
                             <li> Ingresado a CloudShell desde la consola web de AWS</li>
                             <img class="imagen-contenido"src="../assets/img/img-api-4/ingreso-a-cloudShell-desde-consola-aws.png" alt ="ingreso-a-cloudShell-desde-consola-aws" />
                             <li> Captura de comandos ejecutados para crear los servicios:</li>

                             <ul class="lista-apartados-de-actividad">
                                <li> S3 x 2. Con diferentes nombres</li>
                                  <p> Para realizar este paso es necesario (luego de ingresar a la consola CloudShell)
                                   escribir el siguiente comando el cual será utilizado para crear las los volúmenes S3 </p>
                                  <img class="imagen-contenido"src="../assets/img/img-api-4/comando-para-crear-servicios.png" alt ="comando-para-crear-servicios" />
                                  <ul class ="listas-con-flecha">
                                    <li> <u> Captura del primer servicio s3 (“servicio-s3-1”) </u></li>
                                    <img class="imagen-contenido" src="../assets/img/img-api-4/captura-servicio-s3-1.png" alt ="captura-servicio-s3-1" />
                                    <li> <u> Captura del segundo servicio s3 (“servicio-s3-2”) </u></li>
                                    <img class="imagen-contenido" src="../assets/img/img-api-4/captura-segundo-servicio-s3-2.png" alt ="captura-segundo-servicio-s3-2" />
                                 </ul>
                                <li> EC2 x 2. Con diferentes nombres</li>
                                  <p>Antes de crearlas es necesario obtener la AMI y un par de llaves 
                                  para hacerlo se escribe el siguiente comando.</p>
                                  <img class="imagen-contenido" src="../assets/img/img-api-4/comando-para-obtener-las-ami-y-llaves-para-ec2.png" alt ="comando-para-obtener-las-ami-y-llaves-para-ec2" />
                                  <img class="imagen-contenido" src="../assets/img/img-api-4/captura-en-consola-comando-para-tener-ami-y-llaves-para-ec2.png" alt ="captura-en-consola-comando-para-tener-ami-y-llaves-para-ec2" />
                                 
                                  <p>Luego de haberlo realizado se debe obtener las key pair usadas en la cuenta 
                                  (que en este caso serian vockey). Dicha información se obtiene mediante la siguiente sentencia </p>
                                  <img class="imagen-contenido"src="../assets/img/img-api-4/comando-para-obenter-vockey-de-cuenta-ec2.png" alt ="comando-para-obtener-vockey-de-cuenta-ec2" />
                                  <img class="imagen-contenido"src="../assets/img/img-api-4/captura-en-consola-resultados-del-comando-para-obtener-vockey.png" alt ="captura-en-consola-resultados-del-comando-para-obtener-vockey" />
                                 
                                  <p> Para ver las instancias que corresponden con estas key pair se realiza el siguiente comando. </p>
                                  <img class="imagen-contenido" src="../assets/img/img-api-4/captura-codigo-consola-ver-instancias-con-esas-key-pair.png" alt ="captura-codigo-consola-ver-instancias-con-esas-key-pair" />
                                 
                                  <p> Con la información obtenida (el Id de la AMI y las pair keys)
                                  en los pasos anteriores se pueden crear las instancias EC2 por consola,
                                  mediante el comando mostrado a continuación. </p>
                                  <img class="imagen-contenido" src="../assets/img/img-api-4/comando-para-crear-instancias-ec2.png" alt ="comando-para-crear-instancias-ec2" />
                                  <p>Lo único que se editara sera el apartado para definir el nombre de la instancia nombrada
                                  (es decir Key=Name,Value=)</p>
                                  <ul class ="listas-con-flecha">
                                   <li> <u> Captura de la instancia “EC2-desde-CLI-1”</u></li>
                                   <img class="imagen-contenido" src="../assets/img/img-api-4/captura-de-instancia-ec2-desde-cli-1.png" alt ="captura-de-instancia-ec2-desde-cli-1" />
                                   <img class="imagen-contenido"src="../assets/img/img-api-4/captura-de-instancia-ec2-desde-cli-1-b.png" alt ="captura-de-instancia-ec2-desde-cli-1-b" />
                                   <img class="imagen-contenido"src="../assets/img/img-api-4/captura-de-instancia-ec2-desde-cli-1-c.png" alt ="captura-de-instancia-ec2-desde-cli-1-c" />
                                  </ul>

                                  <h3 class ="titulo-aclaracion"> Aclaracion: </h3>
                                  <ul class= "listas-aclaracion">
                                    <li> Con el pasar del tiempo, el estado de la misma por consola no cambio. 
                                    Sin embargo, en la interfaz visual de EC2, se muestra la instancia correctamente creada y en estado running. 
                                    Esto puede deberse a una desincronización entre la consola y la interfaz visual EC2 debido a que se volvió a consultar en reiteradas ocasiones y mostro el mismo resultado. </li>
                                 
                                   <p> Para ir verificando el estado de la instancia se ejecuta el siguiente comando  </p>
                                   <img class="imagen-contenido" src="../assets/img/img-api-4/comando-para-verificar-el-estado-de-la-instancia.png" alt ="comando-para-verificar-el-estado-de-la-instancia" />
                                   <p> A continuación, se muestra una captura que corrobora la correcta implementación y funcionamiento de la instancia creada </p>
                                   <img class="imagen-contenido" src="../assets/img/img-api-4/captura-que-corrobora-correcta-implementacion-y-funcionamiento-de-instancia-ec2.png" alt ="captura-que-corrobora-correcta-implementacion-y-funcionamiento-de-instancia-ec2" />
                                  </ul>
                                  
                                  <p> Creando segunda instancia EC2 llamada en este caso “EC2-desde-CLI-2”</p>
                                  <img class="imagen-contenido" src="../assets/img/img-api-4/comando-para-crear-segunda-instancia-ec2.png" alt ="comando-para-crear-segunda-instancia-ec2" />
                                  <ul class ="listas-con-flecha">
                                    <li> <u> Captura de la instancia “EC2-desde-CLI-2”</u> </li>
                                     <img class="imagen-contenido" src="../assets/img/img-api-4/captura-de-la-instancia-EC2-desde-CLI-2.png" alt ="captura-de-la-instancia-EC2-desde-CLI-2" />
                                     <img class="imagen-contenido" src="../assets/img/img-api-4/captura-de-la-instancia-EC2-desde-CLI-2-b.png" alt ="captura-de-la-instancia-EC2-desde-CLI-2-b" />
                                     <img class="imagen-contenido"src="../assets/img/img-api-4/captura-de-la-instancia-EC2-desde-CLI-2-c.png" alt ="captura-de-la-instancia-EC2-desde-CLI-2-c" />
                                    
                                     <p>Como en el caso anterior al insertar el comando para verificar el estado de la instancia esta en la consola se muestra en estado pending 
                                     (como muestra en la captura)</p>

                                     <p>Sin embargo, en la sección EC2 se muestra correctamente creada y en ejecución. </p>
                                     <img class="imagen-contenido"src="../assets/img/img-api-4/captura-que-corrobora-correcta-implementacion-y-funcionamiento-de-instancia-ec2-b.png" alt ="captura-que-corrobora-correcta-implementacion-y-funcionamiento-de-instancia-ec2-b" />
                                     
                                  </ul>
                                  <li> EBS</li>
                                  <p> Para crear un EBS mediante la consola AWS PowerShell se ejecuta el siguiente comando </p>
                                   <img class="imagen-contenido"src="../assets/img/img-api-4/comando-para-crear-ebs.png" alt ="comando-para-crear-ebs" />
                                  <ul class="listas-con-flecha">
                                    <li>	<u> Captura de creación de EBS  desde la consola </u> </li>
                                     <img class="imagen-contenido" src="../assets/img/img-api-4/Captura-de-creación-de-EBS-desde-la-consola.png" alt ="Captura-de-creación-de-EBS-desde-la-consola" />
                                  </ul>
                                <ul/>
                                <ul class ="lista-consignas-de-actividad">
                                  <li> Capturas sobre los pasos a seguir para acceder a cada componente</li>
                                     <p>Para acceder a los diversos servicios creados usando la consola, se puede hacer mediante la interfaz visual y en la CLI misma. 
                                     A continuación se mostraran capturas en ambos formatos </p>

                                     <ul class= "lista-apartados-de-actividad">
                                       <li>  Acceso a los EC2  </li>
                                         <ul class ="lista-sub-apartados-de-actividad"> 
                                            <li> <u> Usando la interfaz visual </u></li>
                                              <ul class="lista-sub-sub-apartados-de-actividad">
                                                <li> Buscando el servicio EC2 en la barra de búsqueda de AWS y seleccionando el mismo </li>
                                                <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-los-ec2-desde-interfaz-visual-1.png" alt ="acceso-a-los-ec2-desde-interfaz-visual-1" />
                                                <li> Seleccionar la instancia de interés </li>
                                                <img class="imagen-contenido"src="../assets/img/img-api-4/acceso-a-los-ec2-desde-interfaz-visual-2.png" alt ="acceso-a-los-ec2-desde-interfaz-visual-2" />
                                              </ul>

                                            <li> <u> Usando la consola </u> </li>
                                              <ul class="lista-sub-sub-apartados-de-actividad">
                                                <li> Para hacerlo debe realizarse el siguiente comando, 
                                                     especificando en el mismo el id de la instancia EC2 que se quiere acceder.</li>
                                                <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-los-ec2-desde-la-consola-1.png" alt ="acceso-a-los-ec2-desde-la-consola-1" />
                                                <li> Captura accediendo a la instancia EC2-Desde-CLI-1 </li>
                                                <img class="imagen-contenido"src="../assets/img/img-api-4/Captura-accediendo-a-la-instancia-EC2-Desde-CLI-1.png" alt ="Captura-accediendo-a-la-instancia-EC2-Desde-CLI-1" />
                                                <li> Captura accediendo la instancia EC2-Desde-CLI-2 </li>
                                                <img class="imagen-contenido" src="../assets/img/img-api-4/Captura-accediendo-la-instancia-EC2-Desde-CLI-2.png" alt ="Captura-accediendo-a-la-instancia-EC2-Desde-CLI-2" />
                                              </ul>
                                          </ul>

                                        <li>Acceso a los S3 creados </li>
                                          <ul class="lista-sub-apartados-de-actividad">
                                            <li> <u>Usando la interfaz visual </u></li>
                                              <ul class ="lista-sub-sub-apartados-de-actividad">
                                                <li> Buscando el servicio S3 en la barra de búsquedas de AWS y luego seleccionándolo.</li>
                                                <img class="imagen-contenido"src="../assets/img/img-api-4/acceso-a-los-s3-creados-usando-la-interfaz-visual-1.png" alt ="acceso-a-los-s3-creados-usando-la-interfaz-visual-1" />
                                                <li>Elegir el S3 que se quiere acceder </li>
                                                <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-los-s3-creados-usando-la-interfaz-visual-2.png" alt ="acceso-a-los-s3-creados-usando-la-interfaz-visual-2" />  
                                              </ul>
                                            <li> <u> Usando la consola. </u></li>
                                                 <ul class ="lista-sub-sub-apartados-de-actividad">
                                                   <li> Se realiza el siguiente comando </li>
                                                   <img class="imagen-contenido"src="../assets/img/img-api-4/comando-acceder-s3-desde-consola-1.png" alt ="comando-acceder-s3-desde-consola-1" />
                                                   <img class="imagen-contenido "src="../assets/img/img-api-4/comando-acceder-s3-desde-consola-2.png" alt ="comando-acceder-s3-desde-consola-2" />
                                                  </ul>
                                          </ul>
                                        <li> Acceso al EBS mostrado </li>
                                          <ul class="lista-sub-apartados-de-actividad">
                                            <li> <u> Usando la interfaz visual </u></li>
                                              <ul class ="lista-sub-sub-apartados-de-actividad">
                                                <li> Buscando el servicio de EC2 mediante la barra de búsquedas de AWS y seleccionando el mismo.</li>
                                                <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-ebs-desde-la-interfaz-visual-1.png" alt ="acceso-a-ebs-desde-la-interfaz-visual-1.png" />
                                                <li> Luego se elige la opción volúmenes que esta dentro de la sección “Elastic Block Store”</li>
                                                <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-ebs-desde-la-interfaz-visual-2.png" alt ="acceso-a-ebs-desde-la-interfaz-visual-2.png" />
                                                <li> Seleccionado el EBS deseado </li>
                                                <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-ebs-desde-la-interfaz-visual-3.png" alt ="acceso-a-ebs-desde-la-interfaz-visual-3.png" />
                                              </ul>
                                                <li> <u> Usando la consola </u> </li>
                                               <ul class ="lista-sub-sub-apartados-de-actividad">
                                                  <li> Mediante la consola se aplica el siguiente comando </li>
                                                  <img class="imagen-contenido" src="../assets/img/img-api-4/comando-acceder-ebs-desde-consola-1.png" alt ="comando-acceder-ebs-desde-consola-1.png" />
                                                  <li> Captura de los resultados obtenidos </li>
                                                  <img  class="imagen-contenido"src="../assets/img/img-api-4/captura-ebs-obtenidos-desde-consola.png" alt ="captura-ebs-obtenidos-desde-consola.png" />
                                                </ul>
                                             </ul>             
                              </ul>
                        </ul>
                        <p> 2- Pilares del AWS Well-Architected Framework</p>
                         <ul class = "lista-respuestas-actividad"> 
                           <li> Evaluando la instancia EC2-adesde-CLI-1 bajo los 6 pilares 
                           (Excelencia operativa, seguridad, fiabilidad, eficiencia en el rendimiento, 
                           optimización de costos y sostenibilidad)</li>
                           <ul class = "listas-con-flecha">
                              <li> <u> Excelencia operativa: </u> La instancia fue creada a través de CLI permitiendo un rápido despliegue con unos pocos comandos, 
                              sin necesidad de pasar por la interfaz visual. 
                              Como mejora se podría integrar el servicio CloudWatch para anticiparse ante fallos
                               y crear alarmas de interés.</li>
                              <li> <u> Seguridad:</u> Se podría implementar los roles usando el servicio IAM para limitar los accesos 
                              y facilitar la auditoria. </li>
                              <li> <u> Fiabilidad: </u> La instancia no tiene balanceo ni recuperación automática, así como también no esta implementada en otra zona de disponibilidad (solamente se encuentra en us-east-1d. Por lo tanto, más allá de sumar otra zona de disponibilidad, 
                              es recomendable aplicar snapshot regulares y el servicio de autoScaling correctamente configurado.</li>
                              <li> <u> Eficacia en el rendimiento: </u> Para esta ocasión se opto por “t2.micro” ideal para cargas pruebas de la aplicación, siendo recomendado aumentar la capacidad de cómputo de ser necesario.</li>
                              <li> <u> Optimización de costos:</u> Aunque la versión de cómputo “t2.micro” es económica, se recomienda configurar el apagado automático para momentos de menor uso, 
                              así optimizar los costos al final del mes de la instancia.</li>
                              <li> <u> Sostenibilidad: </u> No posee configuraciones para eficiencia energética. 
                              Como mejora seria recomendado migrar a instancias con un consumo menor de energía
                               (por ejemplo:  las que utilizan procesadores ARM (basadas en Gravitón)</li>
                            </ul>

                         </ul>
                        <p>3. Transformación Digital y Migración</p>
                        <table class="tabla-contenido">
                         <thead>
                           <tr>
                             <th>Escenario</th>
                             <th>Propuesta de migración (Lift-and-shift / Replatform / Refactor)</th>
                             <th>Modelo de arquitectura propuesto</th>
                             <th>Herramienta de migración (Web/CLI)</th>
                             <th>Justificación técnica</th>
                           </tr>

                         <thead>
                         <tbody>

                           <tr>
                             <td>Sistema de gestión contable usado hace 10 años, sin posibilidad de modificar código.</td>
                             <td>lift-and-shift</td>
                             <td>Aplicación monolítica sencilla. </td>
                             <td> web</td>
                             <td>Sera traslada de forma más rápida y simple posible a la plataforma AWS 
                             manteniendo la estructura y el código del sistema, 
                             pero con las capacidades que ofrece el servicio en la nube </td>

                           </tr>
                           <tr>
                             <td> Aplicación de turnos online que necesita escalar en horarios pico </td>
                             <td> Replatform</td>
                             <td> Microservicios </td>
                             <td> CLI </td>
                             <td> Implementaría la mejora del mismo mediante el sistema de auto-scaling 
                             con el fin de cubrir la demanda cambiante en horarios pico. </td>
                           </tr>
                           <tr>
                             <td>Herramienta interna para encuestas que se quiere modernizar con análisis automático.</td>
                             <td>Refactor</td>
                             <td>Microservicios</td>
                             <td>CLI</td>
                             <td>El código y arquitectura será propuesto a mejoría usando microservicios 
                             para ofrecer alta escalabilidad y modernidad que necesita la herramienta
                              así poder usarla tanto de forma independiente como ingresándola a otras del sistema.</td>
                           </tr>
                         </tbody>
                        </table>

                      
                       <div class="box-links-de-api">
                        <h2> Descargar API</h2>
                        
                          <div>
                            <i class="fa-solid fa-file-arrow-down"> </i>
                            <a id="api-4-gestion-operativa-en-la-nube" href="https://drive.google.com/file/d/1Kpt5zvSPxyfPtXsZ0q-Hb6_pBAXAiUM1/view?usp=sharing"> GastonMelzi-APIM4 </a>
                          </div>
                       </div>
                      
                      
                      
                      
                      
                      `,
  contenido5:`<div class="contenedor-glosario"> 
                <h4 class ="titulo-glosario-y-fuentes"> Glosario </h4>
                <p> <strong> WS CloudTrail: </strong> Es un servicio de Amazon Web Services (AWS) que registra la actividad de los usuarios, 
                    las acciones realizadas por los servicios de AWS y los cambios en los recursos de una cuenta permitiendo saber cuándo, dónde y quien realizo x acción. </p>
                <p><strong> CloudWatch Logs: </strong> Permite centralizar los registros de todos los sistemas, aplicaciones y servicios de AWS como ES2, pudiendo buscar/filtrarlos 
                    y usar los mismos para configurar y crear alertas que se activen cuando aparezcan estos </p>
                <p> <strong> Autenticación Multifactor (MFA): </strong>  Método de seguridad que requiere dos o más formas de verificación de identidad para que los usuarios accedan a una cuenta, 
                    aplicación o sistema, agregando capas de protección más allá de una simple contraseña. 
                    Los factores comunes incluyen algo que sabes (contraseña), algo que tienes (teléfono, token) y algo que eres (huella dactilar, reconocimiento facial),
                    dificultando el acceso no autorizado incluso si las credenciales son robadas.</p>
                <p> <strong> Logs: </strong> son registros de actividades, eventos y operaciones
                    que ocurren dentro de sistemas informáticos, redes, aplicaciones y dispositivos.</p>
      </div> `,
contenido6: ` <div class ="contenedor-fuentes">
                <h4 class="titulo-glosario-y-fuentes">Fuentes </h4>
                <a  class ="link-fuentes" href="https://copilot.microsoft.com/chats/xhCMCmJW6SjBQ2ZKRtCe5"> Copilot</a>
                <a  class ="link-fuentes" href="https://aws.amazon.com/es/ebs/snapshots/">  Amazon AWS</a>
                <a  class ="link-fuentes" href="https://www.google.com/search?client=firefox-b-d&q=Autenticaci%C3%B3n+multifactor+%28MFA%29%3A"> Gemini (IA de Google)</a>
                <a  class ="link-fuentes" href="https://www.google.com/search?q=CloudWatch+Logs+que+es&client=firefox-b-d&sca_esv=0f9b108d57af51d0&sxsrf=AE3TifNnoXLdnn_CYGp0vGjGAMvbJvDlyA%3A1756854382610&ei=bni3aL2AJc3X1sQPmID0AQ&ved=0ahUKEwi975bLmLuPAxXNq5UCHRgAPQAQ4dUDCBA&uact=5&oq=CloudWatch+Logs+que+es&gs_lp=Egxnd3Mtd2l6LXNlcnAiFkNsb3VkV2F0Y2ggTG9ncyBxdWUgZXMyBRAhGKABSJcKULACWLUIcAF4AZABAJgBgAGgAYsGqgEDMS42uAEDyAEA-AEBmAIIoALxBsICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhkQLhiABBiwAxjRAxhDGMcBGMgDGIoF2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAcICBRAAGIAEwgIGEAAYFhgewgIHEAAYgAQYE8ICChAAGBMYFhgKGB7CAggQABgTGBYYHsICCBAAGBYYChgemAMAiAYBkAYSugYGCAEQARgJkgcDMS43oAewJLIHAzAuN7gH1wbCBwcyLTMuNC4xyAdM&sclient=gws-wiz-serp"> Gemini (IA de Google) </a>
                <a  class ="link-fuentes" href="https://www.google.com/search?client=firefox-b-d&q=Que+alertas+se+pueden+configurar+en+el+servicio+de+coludwatch "> Gemini (IA de Google) </a>
                <a  class ="link-fuentes" href="https://www.google.com/search?client=firefox-b-d&cs=1&sca_esv=0f9b108d57af51d0&sxsrf=AE3TifOE8oCshTpiuga-nt9uh86oyUvm5w%3A1756852195558&q=CloudWatch+Logs&sa=X&ved=2ahUKEwiqo-63kLuPAxWhPbkGHc04IVUQxccNegQIFBAB&mstk=AUtExfCXrLTPojrlK6RTaywnkP34OF5V7nGdqFlDrDmt9i2ilJ-7QEOd3Ux97NR0RFw61h8NePp6GK9Fep1IRWAJuLmPkpji2krLzZi6zGKMmLOPLI6MKWKcXsMz2-UfR7mitgYh6_MtOmOIFvZXMlHm7vwmHq8HiwTDjZ4Yt0eEoWhQv6IbYvtnoNWKuAp0_gLiI-MRXOqwgqz4GvKXuqRDsuU6N-v3-og_-Ro42gM9GzqgjBd5B4CV3HMzqjm83zXjEe5n-EHKqqxxmb-64Pz6ihs1&csui=3 "> Gemini (IA de Google) </a>
                <a  class ="link-fuentes" href="https://www.google.com/search?client=firefox-b-d&q=los+logs+son+registros  "> Gemini (IA de Google) </a>
                <a class="link-fuentes" href=" https://www.google.com/search?client=firefox-b-d&q=cloudtrail+que+es "> Gemini (IA de Google)</a>
                <a class="link-fuentes" href="https://docs.aws.amazon.com/es_es/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html">  Amazon AWS </a>
                <a class="link-fuentes" href="https://www.google.com/search?client=firefox-b-d&q=las+instantaneas+son+lo+mismo+que+las+copias+de+seguridad+en+AWS"> Gemini (IA de Google) </a>
                <a class="link-fuentes" href="https://docs.aws.amazon.com/es_es/ebs/latest/userguide/what-is-ebs.html "> Amazon AWS </a>
`,

contenido7: `<article>
              <div class="box-links-de-api">
                <h2> Descargar API</h2>
            
              <div>
                <i  class="fa-solid fa-file-arrow-down"> </i>
                <a id ="api-4-gestion-operativa-en-la-nube" class ="api-gestion-operativa-en-la-nube" href="https://drive.google.com/file/d/114usn_Ci0rbJ0gAcSALivkDF0Z9td0Ax/view"> GastonMelzi-APIM3</a>
            </div>
        </div>
        </article>`})


export default api4;