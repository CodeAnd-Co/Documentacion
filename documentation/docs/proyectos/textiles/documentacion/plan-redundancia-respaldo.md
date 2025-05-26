# Plan de Redundancia y Sistemas de Respaldo - ALTERTEX

## Objetivo

Asegurar la **alta disponibilidad** y la **recuperación confiable de datos** para el sistema ALTERTEX ante fallas técnicas, errores humanos o eventos inesperados. Este plan cumple el requerimiento funcional:


---

## Componentes del Sistema Cubiertos

| Componente        | Tecnología              |
| ----------------- | ----------------------- |
| Frontend          | React + AWS Amplify     |
| Backend           | Node.js + Express (EC2) |
| Base de datos     | MySQL (Amazon RDS)      |
| Imágenes/archivos | Amazon S3               |

---



### 1. **Base de Datos (RDS)**

#### 1.1. **Backups automáticos de RDS**
-  Ya están activos por defecto al crear una instancia RDS.
-  **Por qué**: Permiten recuperar la base de datos a cualquier momento dentro del período de retención.
-  **Frecuencia**: Diarios incrementales.
-  **Costo**: Gratis si el tamaño del backup ≤ tamaño de la DB.

#### 1.2. **Snapshots manuales de RDS**
-  **Cuándo**: Antes de un cambio crítico o despliegue importante.
-  **Por qué**: Evita pérdida irreversible si el despliegue causa corrupción o eliminación de datos.
-  **Costo**: Aproximadamente \$0.095/GB-mes.

#### 1.3. **Restauración desde snapshot**
1. AWS Console > RDS > Snapshots.
2. Selecciona el snapshot más reciente.
3. Click en “Restore Snapshot”.
4. Crea una nueva instancia RDS.
5. Actualiza `.env` en backend con el nuevo endpoint si es necesario.

#### 1.4. **Single-AZ vs Multi-AZ**

#####  **Single-AZ (zona única de disponibilidad)**
- **Qué es**: La instancia RDS se implementa en una sola zona de disponibilidad.
- **Por qué se usa**: Es más económico y suficiente para entornos de desarrollo o pruebas donde una caída temporal es aceptable.
- **Limitaciones**: Si la zona de disponibilidad falla, la base de datos no estará disponible hasta que se recupere manualmente o se restaure desde backup.
- **Costo**: Incluido en el precio estándar de RDS.

#####  **Multi-AZ (alta disponibilidad)**
- **Qué es**: Configuración opcional que crea automáticamente una réplica sincronizada en una segunda zona de disponibilidad (AZ) dentro de la misma región.
- **Por qué se usa**: Garantiza alta disponibilidad. Si la instancia primaria falla, RDS conmuta automáticamente a la réplica sin pérdida de datos ni intervención manual.
- **Costo**: Aproximadamente el doble del costo de una instancia Single-AZ, ya que se mantienen dos instancias sincronizadas.
- **Recomendado para**: Entornos de producción donde la continuidad del servicio es crítica.



---

### 2. **Imágenes y Archivos (S3)**

#### 2.1. **Redundancia interna de S3**
-  Siempre está activa.
-  **Por qué**: Amazon S3 replica los objetos automáticamente en múltiples zonas de disponibilidad para evitar pérdida de datos.

#### 2.2. **Activar versionado del bucket**
-  Cómo:
  1. AWS Console > S3 > Tu bucket > Properties.
  2. Activar **Bucket Versioning**.
-  **Por qué**: Permite recuperar versiones anteriores de imágenes si se borran o modifican erróneamente.
-  **Costo**: ~\$0.023/GB por almacenamiento adicional de versiones antiguas.

---

### 3. **Backend**

#### 3.1. **Snapshots manuales de EC2**
-  **Dónde**: EC2 > Volúmenes > Crear Snapshot.
-  **Por qué**: Evita reinstalaciones completas en caso de que el servidor EC2 falle.
-  **Costo**: ~\$0.05/GB-mes.

#### 3.2. **Automatizar snapshots diarios con Lambda + EventBridge**
-  Pasos:
  1. Crear función Lambda que ejecute `createSnapshot()`.
  2. Programar trigger diario con EventBridge.
-  **Por qué**: Garantiza respaldos automáticos sin depender de intervenciones manuales.
-  **Costo**:
  - Lambda: Gratis hasta 1M invocaciones/mes.
  - EventBridge: Gratis hasta 1M eventos/mes.

---

### 4. **Monitoreo, Logs y Alertas**

#### 4.1. **Logs del backend con CloudWatch**
-  Configurar redirección de logs de PM2 a CloudWatch.
-  **Por qué**: Permite auditoría remota de errores y fallos sin necesidad de entrar al servidor.
-  **Costo**: Gratis hasta 5GB/mes. Luego, ~\$0.50/GB.

#### 4.2. **Alarmas con CloudWatch Alarms**
-  Configurar alertas como:
  - CPU de EC2 > 80%
  - Errores 500 en logs
  - Conexiones fallidas a RDS
-  **Por qué**: Permite detectar fallos en tiempo real y tomar decisiones rápidas.
-  **Costo**: Gratis las primeras 10 alarmas métricas estándar.

#### 4.3. **Notificaciones con SNS**
-  Asociar alarmas con un **SNS Topic** que envíe correos al equipo.
-  **Por qué**: Permite alertas inmediatas sin necesidad de estar monitoreando manualmente.
-  **Costo**: Gratis hasta 1 millón de notificaciones al mes.

---

### 5. **Frontend (Amplify)**

#### 5.1. **Backups automáticos de builds**
-  AWS Amplify guarda historial de builds por defecto.
-  **Por qué**: Si una nueva build rompe la aplicación, puedes volver rápidamente a la anterior.
-  Restaurar build previa y volver a desplegar desde consola de Amplify.
-  **Costo**: Incluido en el plan gratuito de Amplify (hasta cierto límite de uso mensual).

---


## Costos Estimados Fuera del Free Tier

| Servicio        | Costo mensual estimado     | Detalles                                                |
| --------------- | -------------------------- | ------------------------------------------------------- |
| RDS Backups     | \$0                        | Gratis si no se excede el tamaño base.                  |
| S3 Versionado   | ~\$0.023/GB                | Se cobra por versiones antiguas.                        |
| EC2 Snapshots   | ~\$0.05/GB                 | Costo mensual de almacenamiento.                        |
| Lambda + Events | \$0 - \$1                  | Gratis hasta 1M ejecuciones/eventos.                    |
| CloudWatch Logs | ~\$0.50/GB después de 5GB  | Almacenamiento mensual de logs adicionales.             |
| SNS             | Gratis                     | Hasta 1M notificaciones al mes.                         |

---

Historial
| **Tipo de Versión** | **Descripción** | **Fecha** | **Colaborador** |
| ------------------- | --------------| ---------- | --------------- |
| **1.0** | Crear plan de redundancia y respaldo | 20/05/2025 | Arturo Sánchez |
| **2.0** | Actualizacion AZ y multi AZ para RDS | 21/05/2025 | Arturo Sánchez |

