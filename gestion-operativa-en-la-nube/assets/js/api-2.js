// importa la clase  usada para crear la estructura que tendra el contenido a mostrar
import {ContenidoPagina} from"./main.js";

const api2 = new ContenidoPagina({ 
    contenido1:`<div class="contenido">
                     <h1 class ="titulo-api"> Actividad 2 Gestión Operativa en la Nube (Cloud Practitioner)</h1>
                        <h2 class="titulo-contenido"> Objetivo </h2>
                        
                        <p> Aplicar de forma integrada los principales servicios 
                        de redes, seguridad, secretos y monitorizacion AWS,
                        respondiendo a un caso practico real</p>
             </div>`,

   contenido2: `<div class="contenido">
                        
                        <h2 class="titulo-contenido"> Contexto</h2>
                        <p> TecnoPlus TecnoPlus S.A, una empresa en expansion
                            que brinda servicios tecnologicos, esta comenzando la migracion de su infraestructura en la nube.
                            El informe base que elaboraste permitio al equipo directivo comprender el funcionamiento de AWS,
                            sus beneficios y los primeros pasos recomendados para iniciar la migracion.
                            Tras analizar tu propuesta y evaluar el potencial de la computacion en la nube,
                            la empresa ha decidido avanzar con la implementacion de una infraestructura incial en AWS. </p>
                        
                        <p> Hasta hace poco, todos sus servicios se ejecutaban en servidores locales,
                            sin segmentacion de ambientes de monitoreo centralizado.</p>
                        
                        <p> Ahora como  Cloud Engineer Junior, tu nueva mision es crear y configurar los primeros
                            entornos  de AWS  para la empresa, aplicando los servicios fundamentales de computo,
                            almacenamiento, seguridad y monitoreo. Esta etapa inicial servira como base para futuras 
                            migraciones de los entornos completos de Desarrollo, QA y Produccion. </p>
                        
                        
                        <p> Para completar exitosamente esta actividad deberas realizar los siguientes laboratorios 
                            dentro de la plataforma de AWS: </p>
                        
                        <ol class="puntos-de-actividad"> <!-- lista que tiene los puntos necesarios para completar la actividad-->
                            <li> 
                                Laboratorio 3: Lanzamiento de una instancia EC2(-[ACCLFO]-Lab-3 Introduction to Amazon EC2)
                            </li>
                            <li>
                                Laboratorio 4: Asociar un EBS a una EC2 ([ACCLFO]-Lab-4 Working with EBS.)
                            </li>
                        </ol>
                        <p> Antes de realizarlo, lee con antencion este documento, ya que para que la entrega sea efectiva
                            deberas tomar capturas de pantalla de las diferentes instancias que te enumeramos a continuacion. </p>
                    </div>
 `,
    contenido3: ` <div class="contenido">
                        
                        <h2 class="titulo-contenido">Consignas </h2>
                        
                        <p> 1- Implementacion practica con laboratorios de AWS Academy </p>
                        
                        <ul>
                            <li> Usando el Laboratorio 3: Lanzamiento de una instancia EC2 </li>
                        </ul>
                        
                        <img class="imagen-contenido" src="../assets/img/img-api-2/amazon-ec2.png" alt = "imagen de ejemplo de amazon EC2" />
                        
                        <p> Crea una instancia EC2 con Amazon Linux 2. 
                            El nombre de la instancia debe tener la siguiente nomenglatura: tunombreapellido-servidor1 </p>
                        
                        <p> La instancia  debe tener seleccionado un par de claves, llamado vockey
                            (estas llaves ya se encuentran creadas) para que la conexion remota sea segura.</p>
                        
                        <p> Ademas, la instancia debe tener un grupo de seguridad nuevo, con el seguiente nombre
                            "tunombreapellido-GP1". Dejar las configuraciones por defecto.</p>
                        
                        <img class="imagen-contenido" src="../assets/img/img-api-2/ejemplo-instancia-ec2-creada.png" alt="ejemplo de instancia ec2 creada"/>
                        
                        <p> Captura de pantalla de todos los pasos realizados.
                            Teniendo en cuenta el ID de la instancia en la consola AWS </p>
                        
                        <ul>
                            <li> Usando el Laboratorio 4: Asociar un EBS a una EC2</li>
                        </ul>
                        
                        <img class="imagen-contenido" src="../assets/img/img-api-2/imagen-de-referencia-agregar-ebs-a-instancia-ec2.png"  alt="imagen de referencia agregando ebs a una instancia ec2"/> 
                        
                        <p> Crea un volumen EBS de 1GB. 
                            El nombre del recurso debe tener la siguiente nomenclatura:turnombreapellido-storage1 </p>
                        
                        <img class="imagen-contenido" src="../assets/img/img-api-2/ejemplo-volumen-ebs-1gb-creado.png" alt="ejemplo de volumen ebs de 1gb creado"/>
                       
                        <p> Asocia a la instancia EC2 creada (Esta instancia ya va a estar creada,se sugiere asociarlo al EC2 - "lab")</p>
                        
                        <img class="imagen-contenido" src="../assets/img/img-api-2/ejemplo-instancia-ec2-asociada-a-ebs-creado.png" alt="ejemplo de instancia ec2 asociada al ebs creado" />
                       
                        <p> Crear una snapshot(copia de seguridad) del volumen creado anteriormente.</p>
                        
                        <img class="imagen-contenido" src="../assets/img/img-api-2/ejemplo-captura-del-volumen-ebs-anteriormente-creado.png" alt="captura de ejemplo del volumen ebs anteriormente creado">
                        
                        <p> Captura de pantalla de todos los pasos realizados. Teniendo en cuenta el ID del volumen
                            y el snapshot en la consola AWS </p>
                        
                        <p> 2. Analisis reflexivo sobre la arquitectura, seguridad y monitoreo.</p>
                        <p> Responde brevemente las siguientes preguntas:</p>
                        <ul>
                            <li>
                                Explicacion de la arquitectura propuesta: ¿Que maquina virtual se va a utilizar?
                                ¿Que recursos tiene ? ¿Por que es necesario  "lanzar"  una MV  en la nube ?
                            </li>
                            <li>
                                ¿Por que es importante crear un servicio "EBS"  ¿Que ventajas tiene ?
                                ¿Que es un snapshot ? ¿Es util ?
                            </li>
                            <li>
                               ¿Que acciones tomarias para aplicar el principio Zero  Trust en este entorno de  nube?
                            </li>
                            <li>
                                ¿Por que seria importante habilitar CloudWatch para monitorear la EC2 ?
                               ¿Que alertas podrias configurar?
                            </li>
                            <li>
                                ¿Que buenas practicas aplicarias para asegurar los accesos y datos sensibles
                                de esta implementacion incial ?
                            </li>
                        </ul>
                    </div>`,

    contenido4:`<div class="contenido">
                        <h2 class="titulo-contenido"> Respuestas </h2>
                        
                        <p> 1- Creacion de instancia EC2 con Amazon Linux 2: </p>
                        <img class="imagen-contenido" src ="../assets/img/img-api-2/creacion-de-instancia-ec2-con-amazon-linux-2.png" alt ="creacion de una instancia EC2 con Amazon Linux 2" />
                        <img class="imagen-contenido" src="../assets/img/img-api-2/imagen-2-creacion-de-instancia-ec2-con-amazon-linux-2.png" alt ="captura que muestra el tipo de instancia elegida" />
                        
                        <p> <u> Colocando llaves vockey </u> </p>
                        <img class="imagen-contenido" src ="../assets/img/img-api-2/colocando-llaves-vockey.png" alt =" Captura que muestra colocacion de llaves Vockey " />
                        
                        <p> <u> Grupo de seguridad creado </u> </p>
                        <img class ="imagen-contenido" src="../assets/img/img-api-2/grupo-de-seguridad-creado.png" alt ="captura de creacion de grupo de seguridad" />
                        
                        <p> <u> Lanzamiento correcto de instancia EC2 </u> </p>
                        <img class="imagen-contenido" src="../assets/img/img-api-2/lanzamiento-correcto-de-instancia-ec2.png" alt ="Lanzamiento correcto de instancia ec2" />
                        
                        <p> <u> Creacion de volumen EBS de 1GB </u> </p>
                        <img class="imagen-contenido"src="../assets/img/img-api-2/creacion-de-EBS.png" alt =" captura de creacion de un volumen de EBS de 1GB" />  
                        
                        <p> <u> Asociando volumen EBS a instancia creada </u></p>
                        <img class="imagen-contenido" src="../assets/img/img-api-2/asociando-volumen-ebs-a-instancia-creada.png" alt="asociando volumen EBS a instancia creada" />
                       
                        <p> <u> Creando copia de seguridad(snapshot) del volumen anteriormente creado </u> </p>
                        <img src="../assets/img/img-api-2/creando-snapshot-de-volumen-anteriormente-creado.png" alt="captura de pantalla(snapshot) del volumen anteriormente creado"/>
                        
                        <p> 2- La maquina virtual creada seria la instancia de AMI lab (Amazon Linux 2023 AMI 2023.8.20250818.0 x86_64 HVM kernel-6.1) </p>
                      
                        <p> <u>Entre sus caracteristicas incluye: </u> </p>
                        <ul>
                            <li> Sistema operativo: Amazon Linux 2023 </li>
                            <li> Arquitectura:  64 bits (x86_64) </li>
                            <li> Kernel: Versión 6.1 del kernel de Linux </li>
                            <li> 
                                Almacenamiento: 2 volúmenes (vol-0201fdb8bd4c64599 de 8gb 
                                (ya creado con anterioridad)
                                gastonmelzi-storage1 de 1gb (instanciado en la actividad) 
                            </li>
                            
                        </ul>
                        <p> <b> --> </b> Es necesario lanzar una maquina virtual (VM) 
                            en la nube para que pueda utilizarse sus prestaciones a través de cualquier dispositivo conectado a internet 
                            que tenga los permisos para su acceso 
                            (Ej: a través un pc con menores prestaciones) </p>
                        
                        <p> B- Es importante crear un servicio EBS para almacenar los datos de las instancias EC2 de manera persistente.</p>
                        
                        <p> <u> Otro de los beneficios que dispone serían los mencionados a continuación:</u> </p>
                        <ul>
                            <li>	
                                <strong>Varios tipos de volúmenes:</strong> Permite elegir el tipo de almacenamiento deseado según la necesidad buscada, 
                                sea acceder/editar gran cantidad de datos (HDD) u para operaciones de baja latencia (SSD)
                            </li>
                            
                            <li>
                                <strong>Escalabilidad:</strong> Puede aumentar/disminuir la capacidad según la necesidad. 
                            </li>
                            
                            <li>
                                <strong> Crear copias de seguridad y recuperación:</strong> 
                                Crear una instantánea para copiar los datos guardados restaurarlos rápidamente en caso de fallo, 
                                así como también migrar los mismos a otras zonas de disponibilidad.
                            </li>
                        </ul>
    
                        <p> <b> --> </b> Las instantáneas(snapshot) permiten guardar los archivos que se realizaron cambios 
                           (el equivalente a sacar una foto, de allí su nombre) su utilidad radica que permite retornar de forma rápida 
                           a esa versión de los archivos en caso de errores/cambios que le ocurrieron posteriormente.</p>
                        
                        <p> C- Las acciones que tomaría aplicando el principio de Zero Trust en este entorno en la nube serían los siguientes:</p>
                        <ul>
                            <li> 
                                <strong> Aplicar privilegios mínimos con IAM: </strong> Configurar roles específicos para cada usuario o servicio, 
                                asegurando que solo accedan a lo estrictamente necesario.
                            </li>
                            
                            <li>
                                <strong> Verificación continua: </strong> No asumir que un usuario o dispositivo es confiable solo por haber accedido una vez. 
                                Usar herramientas que validen constantemente la identidad y el contexto.
                            </li>
                            
                            <li>
                                <strong> Monitorear y responder a comportamientos anómalos: </strong> Configurar alertas que detecten intentos de acceso sospechosos, 
                                cambios inesperados en configuraciones o patrones de uso inusuales.
                            </li>
                            
                            <li>
                                <strong> Crear instancia en 2 zonas de disponibilidad: </strong> Con el fin de asegurar que aplicación este en funcionamiento, 
                                aunque una de las zonas falle. 
                                  
                            </li>   
                        </ul>
                        <h3 class ="titulo-aclaracion"> Aclaracion: </h3>
                             <p> 
                                 Aunque la replicación en múltiples zonas de disponibilidad no es una práctica directamente asociada al modelo de Zero Trust, 
                                 la decisión de implementarla responde al mismo principio: no confiar ciegamente en la disponibilidad de una única zona.
                                 Por lo tanto, se verifica y se refuerza la continuidad del servicio ante fallos improbables pero posibles.
                             </p>
                             
                             <p>
                                 D- Es importante habilitar el servicio de CloudWatch para monitorear la instancia EC2 por que permite conocer su rendimiento 
                                 (consumo de CPU/memoria/red/operaciones de disco y estado de la instancia)
                                 para así detectar fallos y optimizar sus recursos de forma temprana.
                             </p>
                             
                             <p> <u> El servicio de CloudWatch pueden configurarse las siguientes alertas:</u> </p>
                             <ul>
                                 <li>
                                     <strong> Alertas básicas: </strong> Se activan al superar limite definido en el uso de CPU/
                                     actividad de red/operaciones de disco/estado de la instancia.
                                 </li>
                                 
                                 <li>
                                     <strong> Alarmas de facturación: </strong> Activada cuando el gasto de la instancia supera el valor delimitado.
                                 </li>
                                 
                                 <li>
                                     <strong> Alarmas de log: </strong> Se activan al detectar actividad coincidente con la guardada en los registros de CloudWatch Logs 
                                     según como se la haya configurado 
                                     (por ejemplo, errores HTTP 500 o intentos de acceso fallidos).
                                 </li>
                                 
                                 <li>
                                     <strong> Alarmas compuestas: </strong> Combinar factores de varias alarmas 
                                     (que se active al superar límite de CPU o aumento el uso de la red) 
                                     reduciendo las notificaciones (ruido) ocurridas al tener muchas alarmas.
                                 </li>
                                 
                                 <li>
                                     <strong> Alarmas personalizadas: </strong> Permiten monitorear secciones específicas de la aplicación 
                                     (Ej: monitoreo de memoria)
                                 </li>
                                
                             </ul>
                              <p> E- Las buenas prácticas que aplicaría para asegurar los accesos y datos sensibles de esta implementación inicial sería los siguiente: </p>
                                 <ul>
                                     <li> <strong> Aplicar el privilegio mínimo: </strong> Usar la herramienta de seguridad IAM para definir los distintos roles que interactuaran con la aplicación y sumarle el principio de Zero Trust
                                         para definir sus permisos necesarios para que cumplan su función. </li>
                                     
                                     <li><strong> Auditoria y chequeo continuo: </strong>  Habilitar registros en CloudTrail y CloudWatch Logs para auditar acciones realizadas por usuarios, servicios o scripts. 
                                         Detectando comportamientos anómalos o accesos no autorizados. </li>
                                     
                                     <li> <strong> Autenticacion multifactor(MFA): </strong> Solicitarle varias credenciales a los usuarios que tengan acceso a la consola 
                                         u recursos críticos evitando de esta que pueda acceder alguien ajeno 
                                         aunque haya obtenido una de las credenciales solicitadas </li>
                                     
                                     <li> <strong> Cifrado de datos en tránsito y en reposo: </strong> Usar HTTPS para comunicaciones seguras 
                                         y habilitar cifrado en servicios como S3, RDS o EBS, para proteger la confidencialidad e integridad de los datos sensibles.</li>
                                     
                                     <li><strong> Modelo de responsabilidad compartida: </strong> Tener presente que, en la nube, el proveedor (AWS) asegura la infraestructura, 
                                         pero el cliente es responsable de la configuración, accesos y protección de datos.</li>
                                 </ul>
                                 
                                 <h4 class ="titulo-glosario-y-fuentes"> Glosario </h4>
                                 <p> <strong> WS CloudTrail: </strong> Es un servicio de Amazon Web Services (AWS) que registra la actividad de los usuarios, 
                                     las acciones realizadas por los servicios de AWS y los cambios en los recursos de una cuenta permitiendo saber cuándo, dónde y quien realizo x acción.</p>
                                 
                                 <p> <strong> CloudWatch Logs: </strong> Permite centralizar los registros de todos los sistemas, aplicaciones y servicios de AWS como ES2, pudiendo buscar/filtrarlos 
                                     y usar los mismos para configurar y crear alertas que se activen cuando aparezcan estos </p>
                                 
                                 <p> <strong> Autenticación Multifactor (MFA): </strong>  Método de seguridad que requiere dos o más formas de verificación de identidad para que los usuarios accedan a una cuenta, 
                                     aplicación o sistema, agregando capas de protección más allá de una simple contraseña. 
                                     Los factores comunes incluyen algo que sabes (contraseña), algo que tienes (teléfono, token) y algo que eres (huella dactilar, reconocimiento facial),
                                     dificultando el acceso no autorizado incluso si las credenciales son robadas. </p>
                                 
                                 <p> <strong> Logs: </strong> son registros de actividades, eventos y operaciones
                                     que ocurren dentro de sistemas informáticos, redes, aplicaciones y dispositivos. </p>

                                 </div>
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
                                      
                    </div>
                    <article>
                    <div class="box-links-de-api">
                        <h2> Descargar API</h2>
                        
                        <div>
                            <i class="fa-solid fa-file-arrow-down"> </i>
                            <a  id ="api-2-gestion-operativa-en-la-nube" class ="api-gestion-operativa-en-la-nube" href="https://drive.google.com/file/d/1IvCTwaAItjeSXRbBL8b61-5s_D6W0eaI/view?usp=drive_link"> GastonMelzi-APIM2</a>
                        </div>
                    </div>
            </article>`

        });

export default api2


