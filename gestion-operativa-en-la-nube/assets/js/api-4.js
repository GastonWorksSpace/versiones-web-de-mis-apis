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

contenido2: `<div class="contenido"> 
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
  contenido3: ` <div class="contenido">
                        
                        <h2 class="titulo-contenido">Consignas </h2>
                        
                        <p> 1. Implementación práctica con AWS Academy  - Sandbox Environment </p>
                        <p> PARTE A. Comparar despliegues con Monolítica y Microservicios. 
                        [ACCLFO]-Lab - Sandbox Environment: AWS Academy Cloud Foundations - Sandbox </p>
                        
                        <ul>
                            <li> Despliega una aplicación sencilla monolítica en una instancia EC2 </li>

                            <li> Luego, simula una arquitectura de microservicios creando 2 instancias EC2 que simulan servicios diferentes
                             (por ejemplo, frontend y backend).</li>

                            <li> Documenta los pasos para desplegar y cómo se accede a cada componente, 
                            con captura de pantalla de cada procedimiento.</li>

                            <li>Qué ventajas viste en el despliegue de microservicios frente al monolítico?
                             ¿Qué desafíos te surgieron al administrar más servicios?</li>

                        </ul>

                        <p> Parte B. Crear servicios desde la CLI [ACCLFO]-Lab - Sandbox Environment: AWS Academy Cloud Foundations - Sandbox </p>
                        
                        <ul>
                            <li> Ingresa a CloudShell desde la consola web de AWS o utiliza una terminal con AWS CLI configurado. </li>
                            <li>  Ejecuta comandos para crear servicios: </li>
                               <ul>
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
                        <ul>
                          <li> Evalúa la arquitectura bajo los 6 pilares: Excelencia operativa (Operational Excellence), 
                          Seguridad (Security), Fiabilidad (Reliability), Eficiencia en el rendimiento (Performance Efficiency), 
                          Optimización de costos (Cost Optimization) y Sostenibilidad (Sustainability)</li>
                          <li> Describe qué mejoras implementarías en cada pilar.</li>
                        </ul>
                        <p>3. Transformación Digital y Migración</p>
                        <ul>
                          <li> Lee y completa la tabla para los siguientes casos reales de TecnoPlus: </li>
                          <img class="imagen-contenido src="../assets/img/img-api-4/tabla-actividad-api-4-gestion-operativa-en-la-nube.png" 
                          alt="tabla-actividad-api-4-gestion-operativa-en-la-nube" />
                        </ul>

                        `,
contenido4: `<div class="contenido">
                        <h2 class="titulo-contenido"> Respuestas </h2>
                        
                        <p> 1.	Implementación práctica con AWS Academy - Sandbox Environment </p>
                        <p> PARTE A. Comparar despliegues con Monolítica y Microservicios. </p>
                        
                        <ul>
                          <li> Capturas de despliegue de aplicación sencilla monolítica en una instancia EC2</li>

                          <img  class="imagen-contenido" src="../assets/img/img-api-4/captura-1-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2.png"
                          alt ="captura-1-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2" />

                          <img  class="imagen-contenido" src="../assets/img/img-api-4/captura-2-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2.png"
                          alt ="captura-2-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2" />

                          <img  class="imagen-contenido" src="../assets/img/img-api-4/captura-3-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2.png"
                          alt ="captura-3-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2" />

                          <img  class="imagen-contenido"src="../assets/img/img-api-4/captura-4-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2.png"
                          alt ="captura-4-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2" />

                          <img  class="imagen-contenido" src="../assets/img/img-api-4/captura-5-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2.png"
                          alt ="captura-5-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2" />

                          <img class="imagen-contenido" src="../assets/img/img-api-4/captura-6-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2.png"
                          alt ="captura-6-despliegue-de-aplicacion-sencilla-monolitica-en-una-instancia-ec2" />

                          
                            <li> Captura del lanzamiento correcto de instancia EC2 que simula aplicación monolítica </li>
                            <img class="imagen-contenido" src="../assets/img/img-api-4/captura-del-lanzamiento-correcto-de-instancia-ec2-que-simula-aplicacion-monolitica.png"
                          alt ="captura-del-lanzamiento-correcto-de-instancia-ec2-que-simula-aplicacion-monolitica" />
                          </ul>
                          <li> Despliegue de instancias EC2 simulando 2 servicios diferencias 
                          (por ejemplo, frontend y backend) para una arquitectura de microservicios.</li>
                          <ul>
                             <li> Frontend</li>
                             <img class="imagen-contenido" src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-frontend.png" alt ="Despliegue-de-instancias-EC2-simulando-frontend" />
                             <img class="imagen-contenido" src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-frontend-1.png" alt ="Despliegue-de-instancias-EC2-simulando-frontend-1" />
                             <img class="imagen-contenido" src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-frontend-2.png" alt ="Despliegue-de-instancias-EC2-simulando-frontend-2" />
                             <img class="imagen-contenido"src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-frontend-3.png" alt ="Despliegue-de-instancias-EC2-simulando-frontend-3" />
                              <ul>
                                <img class="imagen-contenido" class="imagen-contenido"src="../assets/img/img-api-4/captura-lanzamiento-correcto-del-ec2-frontend.png" alt ="captura-lanzamiento-correcto-del-ec2-frontend" />
                              </ul>


                              <li> Backend</li>
                              <img class="imagen-contenido"src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-backend.png" alt ="Despliegue-de-instancias-EC2-simulando-backend" />
                              <img class="imagen-contenido"src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-backend-1.png" alt ="Despliegue-de-instancias-EC2-simulando-backend-1" />
                              <img class="imagen-contenido" src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-backend-2.png" alt ="Despliegue-de-instancias-EC2-simulando-backend-2" />
                              <img class="imagen-contenido"src="../assets/img/img-api-4/Despliegue-de-instancias-EC2-simulando-backend-3.png" alt ="Despliegue-de-instancias-EC2-simulando-backend-3" />
                              <ul>
                                <li> Captura del lanzamiento correcto del EC2-backend</li>
                                <img class="imagen-contenido" src="../assets/img/img-api-4/captura-lanzamiento-correcto-del-ec2-backend.png" alt ="captura-lanzamiento-correcto-del-ec2-backend" />
                              </ul>
                          </ul>

                          <li> Captura de instancias  creadas(backend/frontend/aplicación monolítica sencilla) </li>
                          <img class="imagen-contenido"src="../assets/img/img-api-4/captura-del-lanzamiento-correcto-de-instancia-ec2-que-simula-aplicacion-monolitica.png" alt =" captura-del-lanzamiento-correcto-de-instancia-ec2-que-simula-aplicacion-monolitica" />
                         <li> Pasos para acceder a las instancias creadas (aplicación monolitica sencilla/backend/frontend) seleccionando el id correspondiente de la instancia a acceder</li>
                          <ul>
                            <li> Aplicación monolitica </li>
                            <img class="imagen-contenido" src="../assets/img/img-api-4/accediendo-a-aplicacion-monolitica.png" alt ="accediendo-a-aplicacion-monolitica" />
                               <ul>
                                 <li>Conectarse a la instancia (presionando el botón “conectar”)</li>
                                 <img class="imagen-contenido" src="../assets/img/img-api-4/conectarse-a-instancia-monolitica.png" alt ="conectarse-a-instancia-monolitica" />
                                 <li> Elegir tipo de conexión (Por ejemplo: conectarse a través de una ip publica) luego apretar el botón “conectar”.</li>
                                 <img class="imagen-contenido" src="../assets/img/img-api-4/elegir-tipo-de-conexion-app-monolitica.png" alt ="elegir-tipo-de-conexion-app-monolitica" />
                                 <li>Captura de interfaz de instancia creada</li>
                                 <img class="imagen-contenido"src="../assets/img/img-api-4/captura-interfaz-de-app-monolitica-creada.png" alt ="captura-interfaz-de-app-monolitica-creada" />
                                </ul>

                          </ul>
                          <li>Frontend</li>
                           <img class="imagen-contenido" src="../assets/img/img-api-4/conectarse-a-instancia-frontend.png" alt ="conectarse-a-instancia-frontend" />
                           <ul>
                             <li> Conectarse a la instancia frontend</li>
                             <img class="imagen-contenido"src="../assets/img/img-api-4/conectarse-a-instancia-frontend-2.png" alt ="conectarse-a-instancia-frontend-2" />
                             <li>Tipo de conexión a travez de una ip publica </li>
                             <img class="imagen-contenido" src="../assets/img/img-api-4/tipo-de-conexion-instancia-frontend.png" alt ="tipo-de-conexion-instancia-frontend" />
                             <li> Captura de interfaz frontend</li>
                             <img class="imagen-contenido" src="../assets/img/img-api-4/captura-interfaz-frontend.png" alt ="captura-interfaz-frontend" />
                            </ul>
                          <li>Backend</li>
                          <img class="imagen-contenido"src="../assets/img/img-api-4/backend-captura-1.png" alt ="backend-captura-1" />
                          <ul>
                             <li> Conectarse a la instancia backend </li>
                             <img class="imagen-contenido"src="../assets/img/img-api-4/conexion-instancia-backend.png" alt ="conexion-instancia-backend" />
                             <li> Tipo de conexión a través de una ip publica </li>
                             <img class="imagen-contenido" src="../assets/img/img-api-4/tipo-de-conexion-en-backend.png" alt ="tipo-de-conexion-en-backend" />
                             <li> Captura visual backend</li>
                             <img class="imagen-contenido" src="../assets/img/img-api-4/captura-visual-backend.png" alt ="captura-visual-backend" />

                          </ul>
                          <li> Las  ventajas apreciadas en el despliegue de microservicios frente al monolítico así como sus desventajas serian las siguientes: </li>
                            <p> Ventajas </p>
                            <ul>
                              <li> Autonomia  y simpleza: Pueden ser desplegados/editarlos sin comprometer u depender del servicio instanciado anteriormente 
                              (Ej: Al lanzar la instancia backend e editarla sin tener que desplegar antes la frontend). </li>
                             
                            </ul>
                            <p> Desventajas</p>
                            <ul>
                               <li> Mayor tiempo invertido en administración:  Requiere un lapso de paciencia/experiencia mayor para manejarlos
                               teniendo que abrirlos en distintas pestañas para administrar a cada uno 
                              (mientras en la aplicación monolítica ya se tiene un panorama global debido a que todo forma parte de un mismo archivo) 
                              factor que puede molestar en algunos casos.</li>
                            </ul>
                          </ul>
                          <p> Parte B. Crear servicios desde la CLI [ACCLFO]-Lab - Sandbox Environment: AWS Academy Cloud Foundations - Sandbox</p>
                          <ul>
                             <li> Ingresado a CloudShell desde la consola web de AWS</li>
                             <img class="imagen-contenido"src="../assets/img/img-api-4/ingreso-a-cloudShell-desde-consola-aws.png" alt ="ingreso-a-cloudShell-desde-consola-aws" />
                             <li> Captura de comandos ejecutados para crear los servicios:</li>
                             <ul>
                                <li> S3 x 2. Con diferentes nombres</li>
                                  <p>Para realizar este paso es necesario (luego de ingresar a la consola CloudShell)
                                   escribir el siguiente comando el cual será utilizado para crear las los volúmenes S3 </p>
                                  <img class="imagen-contenido"src="../assets/img/img-api-4/comando-para-crear-servicios.png" alt ="comando-para-crear-servicios" />
                                 <ul>
                                   <li> Captura del primer servicio s3 (“servicio-s3-1”)</li>
                                   <img class="imagen-contenido" src="../assets/img/img-api-4/captura-servicio-s3-1.png" alt ="captura-servicio-s3-1" />
                                   <li> Captura del segundo servicio s3 (“servicio-s3-2”)</li>
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
                                  <ul>
                                    <li> Captura de la instancia “EC2-desde-CLI-1”</li>
                                   <img class="imagen-contenido" src="../assets/img/img-api-4/captura-de-instancia-ec2-desde-cli-1.png" alt ="captura-de-instancia-ec2-desde-cli-1" />
                                   <img class="imagen-contenido"src="../assets/img/img-api-4/captura-de-instancia-ec2-desde-cli-1-b.png" alt ="captura-de-instancia-ec2-desde-cli-1-b" />
                                   <img class="imagen-contenido"src="../assets/img/img-api-4/captura-de-instancia-ec2-desde-cli-1-c.png" alt ="captura-de-instancia-ec2-desde-cli-1-c" />
                                  </ul>
                                   <h3 class ="titulo-aclaracion"> Aclaracion: </h3>
                                   <p> Con el pasar del tiempo, el estado de la misma por consola no cambio. 
                                   Sin embargo, en la interfaz visual de EC2, se muestra la instancia correctamente creada y en estado running. 
                                   Esto puede deberse a una desincronización entre la consola y la interfaz visual EC2 debido a que se volvió a consultar en reiteradas ocasiones y mostro el mismo resultado. </p>
                                 
                                   <p> Para ir verificando el estado de la instancia se ejecuta el siguiente comando  </p>
                                  <img class="imagen-contenido" src="../assets/img/img-api-4/comando-para-verificar-el-estado-de-la-instancia.png" alt ="comando-para-verificar-el-estado-de-la-instancia" />
                                  <p> A continuación, se muestra una captura que corrobora la correcta implementación y funcionamiento de la instancia creada </p>
                                  <img class="imagen-contenido" src="../assets/img/img-api-4/captura-que-corrobora-correcta-implementacion-y-funcionamiento-de-instancia-ec2.png" alt ="captura-que-corrobora-correcta-implementacion-y-funcionamiento-de-instancia-ec2" />
                                  <p> Creando segunda instancia EC2 llamada en este caso “EC2-desde-CLI-2”</p>
                                  <img class="imagen-contenido" src="../assets/img/img-api-4/comando-para-crear-segunda-instancia-ec2.png" alt ="comando-para-crear-segunda-instancia-ec2" />
                                  <ul>
                                    <li>Captura de la instancia “EC2-desde-CLI-2” </li>
                                     <img class="imagen-contenido" src="../assets/img/img-api-4/captura-de-la-instancia-EC2-desde-CLI-2.png" alt ="captura-de-la-instancia-EC2-desde-CLI-2" />
                                     <img class="imagen-contenido" src="../assets/img/img-api-4/captura-de-la-instancia-EC2-desde-CLI-2-b.png" alt ="captura-de-la-instancia-EC2-desde-CLI-2-b" />
                                     <img class="imagen-contenido"src="../assets/img/img-api-4/captura-de-la-instancia-EC2-desde-CLI-2-c.png" alt ="captura-de-la-instancia-EC2-desde-CLI-2-c" />
                                    
                                     <p>Como en el caso anterior al insertar el comando para verificar el estado de la instancia esta en la consola se muestra en estado pending 
                                     (como muestra en la captura)</p>

                                     <p>Sin embargo, en la sección EC2 se muestra correctamente creada y en ejecución. </p>
                                     <img class="imagen-contenido"src="../assets/img/img-api-4/captura-que-corrobora-correcta-implementacion-y-funcionamiento-de-instancia-ec2-b.png" alt ="captura-que-corrobora-correcta-implementacion-y-funcionamiento-de-instancia-ec2-b" />
                                     
                                  </ul>
                                  <li> EBS Para crear un EBS mediante la consola AWS PowerShell se ejecuta el siguiente comando </li>
                                   <img class="imagen-contenido"src="../assets/img/img-api-4/comando-para-crear-ebs.png" alt ="comando-para-crear-ebs" />
                                  <ul>
                                    <li>	Captura de creación de EBS  desde la consola </li>
                                     <img class="imagen-contenido" src="../assets/img/img-api-4/Captura-de-creación-de-EBS-desde-la-consola.png" alt ="Captura-de-creación-de-EBS-desde-la-consola" />
                                  </ul>
                                  <li> Capturas sobre los pasos a seguir para acceder a cada componente</li>
                                     <p>Para acceder a los diversos servicios creados usando la consola, se puede hacer mediante la interfaz visual y en la CLI misma. 
                                     A continuación se mostraran capturas en ambos formatos </p>
                                     <ul>
                                       <li> Acceso a los EC2</li>
                                       <ul> 
                                          <li>Usando la interfaz visual</li>
                                            <ul>
                                              <li> Buscando el servicio EC2 en la barra de búsqueda de AWS y seleccionando el mismo </li>
                                              <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-los-ec2-desde-interfaz-visual-1.png" alt ="acceso-a-los-ec2-desde-interfaz-visual-1" />
                                              <li> Seleccionar la instancia de interés </li>
                                              <img class="imagen-contenido"src="../assets/img/img-api-4/acceso-a-los-ec2-desde-interfaz-visual-2.png" alt ="acceso-a-los-ec2-desde-interfaz-visual-2" />


                                            </ul>
                                          <li>Usando la consola </li>
                                           <ul>
                                            <li> Para hacerlo debe realizarse el siguiente comando, 
                                            especificando en el mismo el id de la instancia EC2 que se quiere acceder.</li>
                                            <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-los-ec2-desde-la-consola-1.png" alt ="acceso-a-los-ec2-desde-la-consola-1" />
                                            
                                            <li> Captura accediendo a la instancia EC2-Desde-CLI-1 </li>
                                            <img class="imagen-contenido"src="../assets/img/img-api-4/Captura-accediendo-a-la-instancia-EC2-Desde-CLI-1.png" alt ="Captura-accediendo-a-la-instancia-EC2-Desde-CLI-1" />
                                            <li> Captura accediendo la instancia EC2-Desde-CLI-2 </li>
                                            <img class="imagen-contenido" src="../assets/img/img-api-4/Captura-accediendo-la-instancia-EC2-Desde-CLI-2.png" alt ="Captura-accediendo-a-la-instancia-EC2-Desde-CLI-2" />
                                            
                                           </ul>
                                          <li> Acceso a los S3 creados </li>
                                           <ul>
                                            <li> Usando la interfaz visual </li>
                                             <ul>
                                               <li> Buscando el servicio S3 en la barra de búsquedas de AWS y luego seleccionándolo.</li>
                                               <img class="imagen-contenido"src="../assets/img/img-api-4/acceso-a-los-s3-creados-usando-la-interfaz-visual-1.png" alt ="acceso-a-los-s3-creados-usando-la-interfaz-visual-1" />
                                               <li>Elegir el S3 que se quiere acceder </li>
                                               <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-los-s3-creados-usando-la-interfaz-visual-2.png" alt ="acceso-a-los-s3-creados-usando-la-interfaz-visual-2" />
                                               
                                              </ul>
                                            <li> Usando la consola.</li>
                                             <ul>
                                               <li> Se realiza el siguiente comando </li>
                                               <img class="imagen-contenido"src="../assets/img/img-api-4/comando-acceder-s3-desde-consola-1.png" alt ="comando-acceder-s3-desde-consola-1" />
                                               <img class="imagen-contenido "src="../assets/img/img-api-4/comando-acceder-s3-desde-consola-2.png" alt ="comando-acceder-s3-desde-consola-2" />
                                             </ul>
      
                                            <li> Acceso al EBS mostrado </li>
                                             <ul>
                                               <li> Usando la interfaz visual </li>
                                               <ul>
                                                 <li> Buscando el servicio de EC2 mediante la barra de búsquedas de AWS y seleccionando el mismo.</li>
                                                 <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-ebs-desde-la-interfaz-visual-1.png" alt ="acceso-a-ebs-desde-la-interfaz-visual-1.png" />
                                                 <li> Luego se elige la opción volúmenes que esta dentro de la sección “Elastic Block Store”</li>
                                                 <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-ebs-desde-la-interfaz-visual-2.png" alt ="acceso-a-ebs-desde-la-interfaz-visual-2.png" />
                                                 <li> Seleccionado el EBS deseado </li>
                                                 <img class="imagen-contenido" src="../assets/img/img-api-4/acceso-a-ebs-desde-la-interfaz-visual-3.png" alt ="acceso-a-ebs-desde-la-interfaz-visual-3.png" />
                                                </ul>
                                              <li> Usando la consola </li>
                                               <ul>
                                                <li> Mediante la consola se aplica el siguiente comando </li>
                                                <img class="imagen-contenido" src="../assets/img/img-api-4/comando-acceder-ebs-desde-consola-1.png" alt ="comando-acceder-ebs-desde-consola-1.png" />
                                                <li> Captura de los resultados obtenidos </li>
                                                <img  class="imagen-contenido"src="../assets/img/img-api-4/captura-ebs-obtenidos-desde-consola.png" alt ="captura-ebs-obtenidos-desde-consola.png" />

                                                </ul>
                                             </ul>
                                             
                                           </ul>
                                        </ul>
                                     </ul>
                                </ul>
                          </ul>
                        <p> 2- Pilares del AWS Well-Architected Framework</p>
                         <ul> 
                           <li> Evaluando la instancia EC2-adesde-CLI-1 bajo los 6 pilares 
                           (Excelencia operativa, seguridad, fiabilidad, eficiencia en el rendimiento, 
                           optimización de costos y sostenibilidad)</li>
                           <ul>
                              <li> Excelencia operativa: La instancia fue creada a través de CLI permitiendo un rápido despliegue con unos pocos comandos, 
                              sin necesidad de pasar por la interfaz visual. 
                              Como mejora se podría integrar el servicio CloudWatch para anticiparse ante fallos
                               y crear alarmas de interés.</li>
                              <li> Seguridad: Se podría implementar los roles usando el servicio IAM para limitar los accesos 
                              y facilitar la auditoria. </li>
                              <li> Fiabilidad: La instancia no tiene balanceo ni recuperación automática, así como también no esta implementada en otra zona de disponibilidad (solamente se encuentra en us-east-1d. Por lo tanto, más allá de sumar otra zona de disponibilidad, 
                              es recomendable aplicar snapshot regulares y el servicio de autoScaling correctamente configurado.</li>
                              <li>Eficacia en el rendimiento: Para esta ocasión se opto por “t2.micro” ideal para cargas pruebas de la aplicación, siendo recomendado aumentar la capacidad de cómputo de ser necesario.</li>
                              <li>Optimización de costos: Aunque la versión de cómputo “t2.micro” es económica, se recomienda configurar el apagado automático para momentos de menor uso, 
                              así optimizar los costos al final del mes de la instancia.</li>
                              <li>Sostenibilidad: No posee configuraciones para eficiencia energética. 
                              Como mejora seria recomendado migrar a instancias con un consumo menor de energía
                               (por ejemplo:  las que utilizan procesadores ARM (basadas en Gravitón)</li>
                            </ul>

                         </ul>
                        <p>3. Transformación Digital y Migración</p>
                        <table>
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
                           <th>
                           <td>Sistema de gestión contable usado hace 10 años, sin posibilidad de modificar código.</td>
                           <td>lift-and-shift</td>
                           </th>
                         </tbody>
                        </table>

                      
                      
                      
                      
                      
                      
                      
                      
                      `})


export default api4;