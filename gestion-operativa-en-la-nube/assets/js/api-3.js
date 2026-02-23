// importa la clase  usada para crear la estructura que tendra el contenido a mostrar
import {ContenidoPagina} from "./main.js";

const api3 = new ContenidoPagina({
  contenido1:`<div class="contenido">
                        <h1 class ="titulo-api"> Actividad 3 Gestión Operativa en la Nube (Cloud Practitioner)</h1>
                        <h2 class="titulo-contenido"> Objetivo </h2>
                        
                        <p> Aplicar los conocimientos adquiridos sobre automatizacion,
                            alta disponibilidad y escalabilidad, utilizando practicas 
                            de infraestructura como codigo y herramientas 
                            de observabilidad para diseñar una arquitectura  resiliente en AWS. </p>
                            </div> `

                  , 
  contenido2:`<div class="contenido">
                        
                  <h2 class="titulo-contenido"> Contexto </h2>
                  
                  <p> Luego de realizar su primera implementacion en la nube y avanzar en la habilitacion
                      de entornos de trabajo distribuidos, TecnoPlus S.A ha decidido optimizar
                      su infraestructura con foco en automatizacion, disponibilidad y capacidad 
                      de respuesta ante picos de demanda. </p>
                  
                  <p> A partir del analisis tecnico y funcional realizado en los modulos anteriores,
                      la direccion del area de IT te ha asignado un nuevo desafio: construir 
                      una arquitectura base que se despliegue automaticamente,cuente con balanceo de carga,
                      ajuste dinamico de recursos y monitoreo eficiente. </p>
                  
                  <p> Tu rol como Cloud Engineer Junior sera crear esta solucion utilizando herramientas 
                      de infraestructura como codigo y validar que responda correctamente a los escritos 
                      de resiliencia y escalabilidad. Para completar exitosamente esta actividad deberas 
                      realizar el siguiente laboratorio dentro de la plataforma de AWS: </p>
                  
                  <p> 1.[ACCLFO]-Lab - Sandbox  Environment: AWS  Academy  Cloud  Foundations - Sandbox </p>
                  
                  <p> Antes de realizarlo, lee con atencion este documento, ya que para que la entrega sea efectiva 
                      deberas tomar capturas de pantalla de las diferentes instancias que te enumeramos a continuacion </p>
                 
              </div>`, 
 contenido3:` <div class="contenido">
                        
              <h2 class="titulo-contenido">Consignas </h2>
              
              <p> Implementacion practica con laboratorios de AWS Academy. 
                  Sandbox Evironment: AWS  Academy Cloud Foundations - Sandbox. </p>
              
              <p> <strong> Parte A - Infraestructura automatizada con CloudFormation </strong> </p>
              
              
              <p> 1. Accede a CloudFormation desde la  consola de AWS  Academy  </p>
              
              <ul>
                  <li> Carga un archivo YAML(Este archivo lo encontraras en la seccion de herramientas )</li>
                  
                    <ul>
                        <li> Una VPC con subredes. </li>
                        <li> Un Application Load Balancer </li>
                        <li> Un Auto Scaling Group con minimo 1 instancia EC2 y maximo 3  </li>
                    </ul>
                  
                  <li> Verifica que las instancias se distribuyen automaticamente con el balanceador. </li>
              </ul>
                                     
              <p> 2. Captura de pantalla de todos los pasos realizados. 
                  Teniendo en cuenta el ID de la instancia en la consola AWS: </p>
              
              <ul>
                  <li> Stack creado en CloudFormation. </li>
                  <li> EC2 creado y validado en el navegador web la instancia web. </li>
                  <li> Auto Scaling Group configurado. </li>
                  <li> Load Balancer activo con instancias conectadas </li>
              </ul>
              
              <p> <strong> Parte B - Observabilidad con CloudWatch </strong> </p>
         
              <p> 1. Ir s CloudWatch > Metricas y visualizar el uso de CPU de una de las instancias </p>
              
              <p> 2. Crear las siguientes alarmas: </p>
              
              <ol class="lista-ordenada-con-letras">
                  <li> Metrica: CPUUtilization. Condicion: Mayor a 80%. Periodo: 5 minutos </li>
                  <li> Metrica: CPUUtilization. Condicion: Menor a 20%. Periodo: 15 minutos </li>
                  <li> Metrica: StatusCheckFailed_Instance. Condicion: Mayor a 0. Periodo: 5 minutos </li>
              </ol>
              
              <p> 3. Verificar que la alarma queda configurada correctamente. </p>
              
              <p> 4. Captura de pantalla de todos los pasos realizados
              teniendo en cuenta el ID de la instancia en la consola AWS
              y de las alarmas configuradas en el estado OK o insufficient Data </p>
              
              <p> <strong> 2. Analisis reflexivo </strong> </p>
              
              <p> Responde brevemente las siguientes preguntas </p>
              
              <p> 1. ¿Que ventaja tiene usar CloudFormation para crear una arquitectura completa ?
              ¿Por que se recomienda en DevOps? </p>
              
              <p> 2. ¿Como ayudan el Auto Scaling Group y el Load Balancer a que tu aplicacion
              este siempre disponible? </p>
              
              <p> 3. ¿Que metricas podrian ayudarte a detectar problemas antes de que impacten a los usuarios ? </p>
              
              <p> 4. ¿Que beneficios aporta  trabajar con alarmas automaticas
                  (como las de CloudWatch) en un entorno real ?
             
              <p> 5. ¿Que buenas practicas de seguridad seguirias para automatizar sin comprometer la informacion ? </p>
                  
          </div>
          
          <div class="contenido">
              <h2 class="titulo-contenido"> Respuestas </h2>
              
              <p> <strong> Parte A – Infraestructura automatizada con CloudFormation </strong> </p>
              
              <p> 1-	Accediendo a CloudFormation desde la consola de AWS Academy.</p>
              
              <img class="imagen-contenido" src ="../assets/img/img-api-3/accediendo-a-cloudformation-desde-la-consola-AWS.png" alt ="Accediendo a cloudformation desde la consola AWS" />
              
              <ul>
                  <li> Carga del archivo YAML: </li>
                  
                  <p> En la sección Pilas (la mostrada en la imagen) 
                      posteriormente se selecciona la opción “Crear pila” y se selecciona la opción “con recursos nuevos (estándar)” </p>
                 
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/carga-del-archivo-YAML.png" alt ="Carga del archivo YAML" />
                  
                  <p> Se marca la opción “seleccione una plantilla existente” </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/paso-2-carga-del-archivo-YAML.png" alt ="Paso 2 para la carga del archivo YAML" />
                 
                  <p> Posteriormente (más abajo en la misma página) se marca la opción “Cargar un archivo de plantilla” 
                      y luego se carga el archivo “infra-scalling.yaml”.Después se presiona el botón “siguiente” </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/paso-3-carga-del-archivo-YAML.png" alt ="Paso 3 para la carga del archivo YAML" />
                  
                  <p> Se nombra la pila creada (en este caso se llamó “pila-scalling-gaston-melzi”) luego los parámetros se dejan por defecto y se finaliza apretando en “siguiente” </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/paso-4-carga-del-archivo-YAML.png" alt ="Paso 4 para la carga del archivo YAML" />
                  
                  <p> En la sección de configuraciones de la pila, se dejan los valores por defecto y se selecciona la opción “siguiente” </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/paso-5-carga-del-archivo-YAML.png" alt ="Paso 5 para la carga del archivo YAML" />
                  
                  <p> Se crea/da de alta la pila </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/paso-6-carga-del-archivo-YAML.png" alt ="Paso 6 para la carga del archivo YAML" />
                  
                  <li> <u> Capturas de servicios contenidos en la pilas </u> </li>
                  
                  <ul> 
                      <li> VPC creada (en este caso se opto por nombrarla “vpc-melzi-gaston”) 
                          con subredes (mostradas en la captura que le consigue a la siguiente)</li>
                      
                      <img class="imagen-contenido" src ="../assets/img/img-api-3/vpc-creada.png" alt ="imagen de la VPC creada" />
                      
                      <p> <b> ----> </b> <u> Subredes </u> </p>
                      
                      <img class="imagen-contenido" src ="../assets/img/img-api-3/sub-redes-de-la-vpc-creada.png" alt ="imagen que muestra las subredes de la VPC creada" />
                      
                      <li> <u> Un Application Load Balancer  </u> </li>
                      
                      <img class="imagen-contenido" src ="../assets/img/img-api-3/aplication-load-balancer-creado.png" alt ="imagen que muestra el Aplication Load Balancer creado" />
                      
                      <p> <b> ----> </b> <u> Tablas de enrutamiento </u> </p>
                      
                      <img class="imagen-contenido" src ="../assets/img/img-api-3/tabla-de-enrutamiento-de-vpc-creada.png" alt ="imagen que muestra la tabla de enrutamiento de la VPC creada" />
                      
                      <li> Auto Scaling  Group con mínimo 1 instancia EC2  y máximo 3  </li>
                      
                      <img class="imagen-contenido" src ="../assets/img/img-api-3/auto-scaling-group-con-mínimo-1-instancia-EC2-y-máximo-3.png" alt ="imagen que muestra el Auto Scaling Group creado configurado para que este cree minimo 1 copia de la instancia EC2 y maximo 3" />
                      
                      
                  </ul>
                  
                  <li> Captura que corrobora que las instancias se distribuyen automáticamente con el balanceador </li>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/instancias-se-distribuyen-automaticamente-con-el-balanceador.png" alt ="captura que prueba que las instancias se distribuyen automaticamente con el balanceador" />
                  
              </ul>
              
              <p> 2. Captura de pantalla de todos los pasos realizados. Teniendo en cuenta el ID de la instancia en la consola AWS </p>
              
              <ul>
                  <li> Stack(pila) creado en CloudFormation </li>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/stack-creado-en-cloudformation.png" alt ="captura de Stack(pila) creado en CloudFormation" />
                  
                  <li> Captura del EC2 creado y validado en el navegador web  </li>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/captura-del-ec2-creado-y-validado-en-el-navegador-web.png" alt ="Captura del EC2 creado y validado en el navegador web" />
                  
                  <li> Auto Scaling Group configurado </li>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/auto-scaling-group-configurado.png" alt ="Captura que muestrsa el Auto Scaling Group configurado " />
                  
                  <ul>
                      <li> <u> Verificando que el Auto Scaling Group fue creado a través del servicio AWS Auto Scaling </u> (seleccionado la opción Get started) </li>
                      
                      <img class="imagen-contenido" src ="../assets/img/img-api-3/chequeando-que-Auto-Scaling-Group-fue-creado-a-traves-del-servicio-AWS-Auto-Scaling.png" alt ="Verificadon que el Auto Scaling Group fue creado a traves del servicio AWS Auto Scaling" />
                      
                      <img class="imagen-contenido" src ="../assets/img/img-api-3/parte-2-chequeando-que-Auto-Scaling-Group-fue-creado-a-traves-del-servicio-AWS-Auto-Scaling.png" alt ="Pagina que aparece luego de haber seleccionado la opcion  'Get started' en el paso anterior" />
                      
                  </ul>
                  
                  <li> Load Balancer activo con instancias creadas</li>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/load-balancer-activo-con-instancias-creadas.png" alt ="Captura del Load Balancer activo con instancias creadas" />
                  
                  
              </ul>
              
              <p> <strong> B – Observabilidad con CloudWatch </strong> </p>
              
              <p> 1- Visualización del uso de CPU de una de las instancias 
                  (obtenida luego de dirigirse a CloudWatch > Métricas > EC2 y 
                  luego apretando en el botón métricas por instancia) </p>
              
              <img class="imagen-contenido" src ="../assets/img/img-api-3/visualizacion-de-una-de-las-instancias.png" alt ="Visualizacion de una de las instancias" />
              
              <img class="imagen-contenido" src ="../assets/img/img-api-3/-part-2-visualizacion-de-una-de-las-instancias.png" alt ="parte 2 de la imagen que muestra la visualizacion de una de las instancias" />
              
              <p> Uso del CPU de la instancia “ec2-melzi-gaston” </p>
              
              <img class="imagen-contenido" src ="../assets/img/img-api-3/uso-de-una-de-las-instancias.png" alt ="Uso de una de las instancias" />
              
              <p> 2- <u> Creación de las alarmas </u> (accediendo a  AWS CloudWatch > Alarmas > 
                  y apretando en el boton crear alarma) </p>
              
              <img class="imagen-contenido" src ="../assets/img/img-api-3/creacion-de-alarmas.png" alt ="Creacion de alarmas" />
              
              <p> La creación de una alarma consta de <strong> 4 pasos </strong> 
                  los cuales serán mostrados para las alarmas a declarar en la actividad. </p>
              
              <p> <strong> Paso 1: </strong> Especifique la métrica y las condiciones en esta sección se debe presionar 
                  el botón “seleccione una métrica” en este caso, las que están en la categoría de  EC2 </p>
              
              <img class="imagen-contenido" src ="../assets/img/img-api-3/especifique-metrica-y-las-condiciones.png" alt ="Seccion donde se especifica la metrica y las condiciones de la alarma" />
              
              <img class="imagen-contenido" src ="../assets/img/img-api-3/part-2-especifique-metrica-y-las-condiciones.png" alt ="Segunda captura de la seccion donde se especifica la metrica y las condiciones de la alarma" />
              
              <p> Se  elige métricas “Por grupo de Auto Scaling” </p>
              
              <img class="imagen-contenido" src ="../assets/img/img-api-3/seleccionar-grupo-auto-scaling.png" alt ="Captura que muestra la seccion grupo auto scaling que hay que elegir" />
              
              <p> Elegir el tipo de metrica </p>
              
              <img class="imagen-contenido" src ="../assets/img/img-api-3/elegir-tipo-de-metrica.png" alt ="Captura que muestra la seccion para elegir una metrica" />
              
              <h3 class ="titulo-aclaracion"> Aclaracion: </h3>
                   
              <p> En este apartado se debe buscar la métrica a utilizar en la creación de la alarma. 
                       (las cuales para esta actividad serian 2) [ CPUUtilization y StatusCheckFailed_Instance]
                       Por lo tanto en las capturas de cada una de ellas 
                       se partirá de la actualización de la imagen anterior.</p>
                   
                  <p> <u> CPUUtilization</u> </p>
                  
                  <p> A- Alarma activada cuando se cumpla la Condición: Mayor a 80%. Periodo: 5 minutos </p>
                       
                  <p> Se busca la metrica CPUUtilization y se da click en el botón “seleccionar metrica”.<p>
                           
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/CPUUtilization.png" alt ="Captura que muestra la metrica utilizada" />
                       
                  <p> Paso 1: <u> Especifique la métrica y las condiciones: </u>
                     En este apartado se aplica la condición que activa la alarma (en este caso Condición:
                     Mayor a 80%. Periodo: 5 minutos) luego se apreta en el botón “siguiente”.</p>
                       
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/especifique-las-condiciones.png" alt ="Captura que muestra el apartado donde hay que especificar las condiciones" />
                       
                  <p> <strong> Paso 2: </strong>  <u> Configurar acciones </u>. En este apartado se coloca el email
                           en donde se enviara el aviso cuando se active la alarma (por ejemplo melzigaston@gmail.com)
                           el resto de parámetros se deja por defecto. 
                           Después se presiona en la opción “siguiente” </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/seccion-configurar-acciones.png" alt ="Captura que muestra el apartado donde hay que configurar las acciones" />
                       
                  <p> <strong> Paso 3: </strong> <u> Agregar detalles a la alarma </u> . Apartado se coloca el nombre de la alarma 
                      (en este caso consumo de cpu mayor del 80%)los otros valores se dejarían por defecto 
                      y luego debe presionarse la opcion “siguiente" </p>
                 
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/seccion-agregar-detalles-a-la-alarma.png" alt ="Captura que muestra el apartado donde hay que agregar los detalles a la alarma" />
                  
                  <p> <strong> Paso 4: </strong> <u> Ver la vista previa y crear </u>. Se muestra un resumen de la configuraciones elegidas 
                      luego en la parte inferior se daría clic en el botón “crear alarma” </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/seccion-ver-vista-previa-y-crear.png" alt ="Captura que muestra la seccion de vista previa y crear" />
                  
                  <p> B- Alarma activada cuando se cumpla la Condición: Menor a 20%. Periodo: 15 </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/part-2-especifique-las-condiciones.png" alt ="muestra el apartado donde se seleccionan las condiciones esta vez orientado a la actividad B" />
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/part-2-especifique-metrica-y-las-condiciones.png" alt ="muestra el apartado donde se seleccionan las metricas y las condiciones esta vez orientado a la actividad B" />
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/part-2-metrica-seleccionada.png" alt ="muestra la metrica seleccionada esta vez orientada a la actividad  B" />
                  
                  <p> Captura de Métrica CPUUtilization declarando la condición: Menor a 20%. Periodo: 15 minutos. </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/captura-de-metrica-cpuutilization-condicion-menor-20%.png" alt ="muestra la metrica CPUUtilization   con la condicion Menor a 20%. Periodo: 15 minutos" />
                  
                  <p> Asignando un email donde recibir la notificación </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/Asignando-un-email-donde-recibir-la-notificacion.png" alt ="muestra cuando se asigna un email donde recibir la notificación " />
                  
                  <p> Declaración del nombre de la alarma (cuya elección fue uso del cpu < 20%) </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/declaracion-del-nombre-de-la-alarma.png" alt ="Declaración del nombre de la alarma (cuya elección fue uso del cpu <20%)" />
                  
                  <p> Vista previa de la alarma antes de crearla </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/vista-previa-antes-de-crear-la-alarma.png" alt ="Captura que muestra una vista previa de la alarma antes de crearla" />
                  
                  <p> C- Declaración de alarma <u> StatusCheckFailed_Instance </u> </p>
                  
                  <p> Paso 1: Se elige la métrica (al igual que el paso anterior EC2) 
                      y después por grupos de auto Scaling </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/especifique-las-condiciones-2.png" alt ="Captura que muestra de nuevo el apartado para especificar las metricas y las condiciones. Pero esta vez, enfocado en la actividad C" />
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/seleccionar-metrica-2.png" alt ="Captura que muestra de nuevo el apartado para elegir una metrica. Pero esta vez, enfocado en la actividad C" />
                  
                  <p> <u> Selección de la metrica StatusCheckFailed_Instance:</u>  </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/Selección-de-la-metrica-StatusCheckFailed-Instance.png" alt ="Captura que muestra  la metrica pedida en la actividad C" />
                  
                  <p> <u> Declarando condición que activara la alarma (Mayor a 0. Periodo: 5 minutos):</u> </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/declarando-condicion-mayor-a-0-periodo-de-5-min.png" alt ="Captura que muestra la condicion que activara la alarma pedida en la actividad C" />
                  
                  <p> <u> Agregando el email donde se enviara el aviso: </u> </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/agregando-email-donde-enviara-la-notificacion.png" alt ="Captura que muestra la colocacion del correo donde enviaran el mensaje que se activo la alarma pedida en la actividad C" />
                  
                  <p> - <u> Nombrando la alarma: </u> </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/nombrando-la-alarma.png" alt ="Captura que muestra el nombre de la alarma pedida en la actividad C" />
                  
                  <p> - <u> Vista previa de los parámetros aplicados: </u> </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/vista-previa-de-los-parametros-aplicados.png" alt ="Captura que muestra una vista previa de los parametros aplicados de la alarma pedida en la actividad C" />
                  
                  <p> - <u> Captura de las alarmas creadas: </u> </p>
                  
                  <img class="imagen-contenido" src ="../assets/img/img-api-3/captura-de-alarmas-creadas.png" alt ="Captura que muestra todas las alarmas creadas" />
                  
                  <p> <strong> 2. Análisis reflexivo </strong></p>
                  
                  <p> 1 - La ventaja que tiene utilizar CloudFormation es que permite definir la estructura de los 
                      servicios AWS (grupos de seguridad, redes, sub redes etc) mediante un archivo de código
                      (JSON/YAML) permitiendo que todas sus implementaciones sean iguales, reduciendo errores
                      manuales(similar los objetos en el paradigma orientado a objetos[POO]). </p>
                  
                  <p> Son importantes DevOps ya que acelera la creación de entornos de desarrollo, pruebas y producción, 
                      permitiendo a los equipos desplegar y escalar aplicaciones más rápido. 
                      Asi como tambien se integaran bien con las prácticas de integración 
                      y entrega continua (CI/CD) </p>
                  
                  <p> 2 – El Auto Scaling Group y el Load Balancer permiten que la aplicación 
                      este siempre disponible de la siguiente manera:</p>
                  
                  <p> AutoScaling Group -> Aumenta/disminuye la cantidad instancias 
                      donde esta alojada la aplicación según 
                      la demanda que le estén ejerciendo los usuarios </p>
                  
                  <p> Load Balancer -> Divide el trafico(peticiones) de los usuarios de la aplicación, 
                      haciendo que ninguna de estas este sobrecargada. </p>
                  
                  <p> Mediante esta conminación, el rendimiento de la aplicación
                      no será comprometido ante la cantidad de tráfico que reciba 
                      (encargándose de esto el Load Balancer) y los usuarios podrán seguir
                      accediendo a esta sin ser afectados ante la baja de una de las instancias 
                      (posible gracias al Load Balancer) </p>
                  
                  <p> 3 - Las métricas podrían ayudar a detectar problemas 
                      antes de que impacten a los usuarios serian las que monitorean el uso del CPU,red, disco. </p>
                 
                  <p> 4 - Los beneficios que aporta trabajar con alarmas automáticas 
                      (como las de CloudWatch) en un entorno real 
                      serian un monitoreo constante,
                      detectar anticipadamente problemas y la capacidad de crear acciones automáticas 
                      que se activen ante la ejecución de la alarma.</p>
                  
                  <p> 5 - Las buenas practicas de seguridad que se recomiendan para automatizar 
                      sin comprometer la información, serian: </p>
                  
                  <ul class="lista-con-flechas">
                      <li> Implementar la Autenticación Multifactor (MFA) en todas las cuentas, 
                          cifrar datos en reposo y en tránsito.</li>
                      
                      <li> Utilizar el Servicio de Acceso Múltiple (IAM) para el control de acceso granular.</li>
                      
                      <li> Configurar grupos de seguridad restrictivos </li>
                      
                      <li> Usar el cifrado en las copias de seguridad</li>
                      
                      <li> Establecer el registro </li>
                      
                      <li>Supervisar continuamente para detectar y responder rápidamente ante cualquier 
                          incidente de seguridad </li>
                  </ul>`,
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
                    <a id ="api-3-gestion-operativa-en-la-nube" class ="api-gestion-operativa-en-la-nube" href="https://drive.google.com/file/d/114usn_Ci0rbJ0gAcSALivkDF0Z9td0Ax/view"> GastonMelzi-APIM3</a>
                  </div>
               </div>
        </article>`});

export default api3;