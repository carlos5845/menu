# Plan de desarrollo profesional – Carta Manolo

**Proyecto:** Carta Manolo – Carta digital para Cevichería Manolo's  
**Ubicación:** Puno, Perú  
**Objetivo:** evolucionar la carta digital actual hacia una aplicación dinámica y administrable, manteniendo como prioridad la experiencia de los clientes.

---

## 1. Visión general del proyecto

El objetivo es que Carta Manolo siga siendo principalmente una **carta digital visual e interactiva**. Se incorporará un panel privado y sencillo para que el propietario pueda mantener actualizado el menú sin depender de un desarrollador ni modificar código.

El sistema tendrá dos partes:

1. **Carta digital pública:** interfaz donde los clientes consultan categorías, platos, precios, ingredientes, fotografías y detalles, además de acceder a WhatsApp y a la ubicación del establecimiento.
2. **Panel de administración privado:** herramienta para que el propietario pueda crear, editar, actualizar, ordenar, publicar u ocultar categorías y platos.

La administración será una funcionalidad de soporte. No se pretende convertir el proyecto en un sistema de inventario, facturación o gestión integral de restaurantes.

## 2. Arquitectura general propuesta

```text
                 PROPIETARIO
                      |
                      v
          PANEL DE ADMINISTRACIÓN
       Categorías · Platos · Fotografías
                      |
                      v
             BACKEND / SERVICIOS
       Autenticación · Validaciones · API
                      |
             +--------+--------+
             |                 |
             v                 v
        PostgreSQL        Almacenamiento
       Categorías y       de fotografías
          platos
             |                 |
             +--------+--------+
                      |
                      v
              CARTA DIGITAL
       Clientes · Menú · Búsqueda · Detalles
```

### Stack tecnológico propuesto

| Tecnología | Responsabilidad |
|---|---|
| Next.js 16 | Aplicación, rutas y renderizado |
| React 19 | Componentes e interfaces |
| TypeScript | Tipado y mantenimiento |
| Tailwind CSS 4 | Diseño y responsividad |
| Supabase Auth | Autenticación del propietario |
| PostgreSQL | Almacenamiento de categorías y platos |
| Supabase Storage | Almacenamiento de fotografías |

Se recomienda mantener el stack actual y evitar una reconstrucción innecesaria. La arquitectura definitiva se confirmará después de revisar el repositorio. Supabase es una opción adecuada porque integra PostgreSQL, autenticación y almacenamiento de archivos.

---

# 3. Desarrollo por fases

## Fase 1. Análisis y preparación del proyecto

**Objetivo:** conocer la estructura actual de Carta Manolo y preparar su evolución sin afectar la carta existente.

### Actividades

1. Revisar la estructura de carpetas y archivos.
2. Analizar `app/page.tsx`.
3. Revisar `lib/data.ts` y la estructura actual de los platos.
4. Identificar los componentes reutilizables:
   - `Carrusel.tsx`
   - `SmartNavigation.tsx`
   - `MenuShowcase.tsx`
5. Revisar cómo se gestionan actualmente las imágenes.
6. Revisar dependencias y configuraciones de Next.js.
7. Identificar cómo se despliega actualmente la aplicación.
8. Definir la estructura de datos que utilizará el sistema.
9. Preparar una estrategia de migración desde `lib/data.ts`.

### Entregables

- Diagnóstico técnico del proyecto.
- Inventario de componentes y funcionalidades que se conservarán.
- Arquitectura acordada.
- Modelo de datos preliminar.
- Plan de migración de los datos existentes.

**Duración estimada:** 1–2 días.

## Fase 2. Diseño e implementación de la base de datos

**Objetivo:** establecer una fuente centralizada de información para las categorías y los platos.

### Actividades

1. Crear y configurar el proyecto de Supabase.
2. Configurar PostgreSQL.
3. Diseñar la tabla `categories`.
4. Diseñar la tabla `dishes`.
5. Definir la relación entre categorías y platos.
6. Añadir campos para estado, visibilidad y orden.
7. Crear restricciones e índices necesarios.
8. Migrar los datos actuales de `lib/data.ts`.
9. Comprobar que los registros migrados sean correctos.

### Modelo inicial de datos

#### Tabla `categories`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | UUID | Identificador |
| `name` | TEXT | Nombre de la categoría |
| `slug` | TEXT | Identificador para URL |
| `description` | TEXT | Descripción opcional |
| `image_url` | TEXT | Ruta de la imagen |
| `position` | INTEGER | Orden de presentación |
| `is_active` | BOOLEAN | Estado de la categoría |
| `created_at` | TIMESTAMPTZ | Fecha de creación |
| `updated_at` | TIMESTAMPTZ | Última modificación |

#### Tabla `dishes`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | UUID | Identificador |
| `category_id` | UUID | Categoría asociada |
| `name` | TEXT | Nombre del plato |
| `slug` | TEXT | Identificador para URL |
| `description` | TEXT | Descripción del plato |
| `ingredients` | TEXT o JSONB | Ingredientes |
| `price` | NUMERIC(10,2) | Precio en soles |
| `image_url` | TEXT | Ruta de la fotografía |
| `label` | TEXT | Etiqueta: recomendado, nuevo, especial |
| `is_available` | BOOLEAN | Disponibilidad |
| `is_published` | BOOLEAN | Visibilidad pública |
| `position` | INTEGER | Orden dentro de la categoría |
| `created_at` | TIMESTAMPTZ | Fecha de creación |
| `updated_at` | TIMESTAMPTZ | Última modificación |

#### Relación

```text
categories (1) -------- (N) dishes
```

Una categoría puede contener varios platos y cada plato pertenece a una categoría.

### Consideraciones técnicas

- Utilizar UUID como identificadores.
- Guardar precios como `NUMERIC(10,2)`, evitando tipos de punto flotante.
- Almacenar los archivos de imagen en Storage y sus rutas en PostgreSQL.
- Evitar categorías duplicadas mediante restricciones adecuadas.
- Definir qué sucede con los platos cuando se desactiva o elimina una categoría.
- Validar los datos tanto en el servidor como en la base de datos.

### Entregables

- Base de datos configurada.
- Tablas y relaciones creadas.
- Datos actuales migrados.
- Consultas básicas verificadas.

**Duración estimada:** 2 días.

## Fase 3. Autenticación y seguridad

**Objetivo:** permitir que únicamente el propietario autorizado pueda administrar la carta.

### Actividades

1. Configurar Supabase Auth.
2. Crear la cuenta del propietario.
3. Diseñar la pantalla de inicio de sesión.
4. Implementar cierre de sesión.
5. Proteger las rutas administrativas.
6. Configurar políticas RLS en PostgreSQL.
7. Definir permisos de lectura y escritura.
8. Proteger las operaciones del servidor.
9. Verificar que las credenciales privilegiadas nunca se expongan al navegador.

### Reglas de seguridad

- Los visitantes pueden consultar categorías y platos publicados.
- Los visitantes no pueden crear, modificar ni eliminar información.
- Solo el propietario autorizado puede acceder a la administración.
- Cada operación administrativa debe validar los permisos en el servidor.
- Las políticas RLS deben proteger las tablas y los archivos.
- No basta con ocultar enlaces o botones: el acceso debe estar protegido realmente.

### Entregables

- Inicio y cierre de sesión funcionales.
- Rutas administrativas protegidas.
- Permisos de base de datos configurados.
- Pruebas de acceso autorizado y no autorizado.

**Duración estimada:** 2 días.

## Fase 4. Desarrollo del panel administrativo

**Objetivo:** construir una interfaz sencilla para que el propietario pueda gestionar el contenido de la carta.

El panel tendrá tres secciones principales: Dashboard, Categorías y Platos.

### 4.1. Dashboard

Mostrar información resumida:

- Total de categorías.
- Total de platos.
- Platos publicados.
- Platos no disponibles.
- Accesos rápidos a las secciones principales.

El dashboard será informativo y ligero. No se desarrollarán estadísticas comerciales complejas en esta primera versión.

### 4.2. Gestión de categorías

El propietario podrá:

- Crear categorías.
- Editar nombres y descripciones.
- Cambiar imágenes de portada.
- Modificar el orden de presentación.
- Activar o desactivar categorías.
- Eliminar categorías, previa validación de los platos asociados.

### 4.3. Gestión de platos

El propietario podrá:

- Registrar nuevos platos.
- Editar nombres.
- Modificar descripciones e ingredientes.
- Actualizar precios.
- Cambiar fotografías.
- Seleccionar categorías.
- Asignar etiquetas como recomendado, nuevo o especial.
- Controlar la disponibilidad.
- Publicar u ocultar platos.
- Cambiar el orden de presentación.

### 4.4. Experiencia de administración

Para facilitar el uso al propietario, se incluirán:

- Buscador de platos.
- Filtros por categoría.
- Formularios claros e intuitivos.
- Vista previa de fotografías.
- Confirmación antes de eliminar.
- Mensajes de éxito y error.
- Diseño adaptable a computadoras y celulares.
- Acciones rápidas para cambiar disponibilidad.

### Entregables

- Dashboard funcional.
- CRUD de categorías.
- CRUD de platos.
- Formularios validados.
- Interfaz adaptable a dispositivos móviles.

**Duración estimada:** 5–7 días.

## Fase 5. Gestión de imágenes

**Objetivo:** facilitar la actualización de fotografías de platos y categorías desde el panel.

### Actividades

1. Configurar Supabase Storage.
2. Crear una estructura de almacenamiento para las fotografías.
3. Permitir seleccionar imágenes desde computadora o celular.
4. Mostrar una vista previa antes de guardar.
5. Validar formatos permitidos y tamaño de archivos.
6. Optimizar las imágenes para la carta pública.
7. Guardar o actualizar las referencias en PostgreSQL.
8. Gestionar la eliminación de fotografías reemplazadas cuando ya no estén en uso.
9. Comprobar que las imágenes sean accesibles desde la carta pública.

### Consideraciones

- Definir formatos permitidos, por ejemplo JPG, PNG y WebP.
- Establecer un límite razonable de tamaño.
- Utilizar nombres de archivo seguros y únicos.
- Evitar eliminar una imagen que todavía esté siendo utilizada por otro registro.
- Mantener una estrategia de carga y visualización eficiente.

### Entregables

- Carga de imágenes funcional.
- Vista previa.
- Sustitución de fotografías.
- Almacenamiento organizado.
- Visualización correcta en la carta pública.

**Duración estimada:** 2–3 días.

## Fase 6. Integración con la carta digital pública

**Objetivo:** conectar la carta actual con la nueva base de datos, conservando su diseño y funcionalidades.

### Actividades

1. Sustituir `lib/data.ts` como fuente definitiva por consultas dinámicas.
2. Conectar las categorías con PostgreSQL.
3. Conectar los platos con PostgreSQL.
4. Mantener el buscador predictivo.
5. Mantener la navegación entre categorías.
6. Mantener el carrusel de platos destacados.
7. Mostrar únicamente las categorías y platos publicados.
8. Incorporar los estados de disponibilidad.
9. Implementar revalidación de caché para reflejar los cambios.
10. Verificar el funcionamiento en dispositivos móviles.

### Comportamiento esperado

Cuando el propietario modifique un plato:

1. El servidor valida la información.
2. Se guardan los cambios en PostgreSQL.
3. Se actualiza la información correspondiente.
4. Se revalida la caché cuando corresponda.
5. La carta pública muestra los datos actualizados.

No debe ser necesario modificar código ni realizar un nuevo despliegue para actualizar el contenido.

### Entregables

- Carta pública conectada a la base de datos.
- Búsqueda y navegación funcionando con datos dinámicos.
- Cambios del panel reflejados en la carta.
- Diseño visual original conservado.

**Duración estimada:** 2–3 días.

## Fase 7. Pruebas y despliegue

**Objetivo:** garantizar que el sistema funcione correctamente antes de entregarlo al propietario.

### Actividades

1. Probar inicio y cierre de sesión.
2. Probar creación y edición de categorías.
3. Probar creación y edición de platos.
4. Verificar la carga y sustitución de imágenes.
5. Probar disponibilidad y publicación.
6. Comprobar permisos y políticas de seguridad.
7. Probar la carta en computadoras y celulares.
8. Verificar rendimiento y carga de imágenes.
9. Configurar variables de entorno de producción.
10. Realizar el despliegue.
11. Comprobar el funcionamiento con el dominio.
12. Preparar instrucciones básicas para el propietario.

### Entregables

- Aplicación desplegada.
- Panel administrativo operativo.
- Carta pública funcionando.
- Pruebas funcionales y de seguridad realizadas.
- Guía breve de uso para el propietario.

**Duración estimada:** 2–3 días.

---

# 4. Segunda etapa de evolución: detalles de los platos

Esta etapa se desarrollará después de completar el panel administrativo y la integración con la carta.

**Objetivo:** mejorar la experiencia del cliente permitiéndole seleccionar un plato y consultar información ampliada.

### Funcionalidades

1. Hacer clic sobre una tarjeta de plato.
2. Abrir una página individual con su información.
3. Mostrar fotografía en mayor resolución.
4. Mostrar nombre, descripción e ingredientes.
5. Mostrar precio y etiquetas.
6. Incorporar un botón de consulta por WhatsApp.
7. Permitir compartir el enlace del plato.
8. Crear URLs amigables para cada producto.
9. Incorporar metadatos SEO para cada plato.

### Ejemplos de URL

```text
/menu/ceviches/ceviche-clasico
/menu/mariscos/chicharron-de-pulpo
/menu/combinados/combinado-manolo
```

Se recomienda utilizar páginas individuales en lugar de depender únicamente de ventanas modales, para permitir compartir enlaces directos y facilitar la indexación en buscadores.

### Entregables

- Tarjetas de platos interactivas.
- Páginas de detalle.
- URLs amigables.
- Metadatos y SEO.
- Integración con WhatsApp.

**Duración estimada:** 3–4 días.

---

# 5. Cronograma general

Estimación para una persona desarrollando el proyecto:

| Fase | Duración |
|---|---:|
| 1. Análisis y preparación | 1–2 días |
| 2. Base de datos | 2 días |
| 3. Autenticación y seguridad | 2 días |
| 4. Panel administrativo | 5–7 días |
| 5. Gestión de imágenes | 2–3 días |
| 6. Integración con carta pública | 2–3 días |
| 7. Pruebas y despliegue | 2–3 días |
| 8. Detalles de platos | 3–4 días |
| **Total estimado** | **19–26 días** |

Los tiempos son aproximados y pueden variar según la estructura del código actual, el alojamiento y las configuraciones existentes.

---

# 6. Criterios de aceptación

El desarrollo de la primera versión se considerará satisfactorio cuando se puedan verificar estos escenarios:

| Escenario | Resultado esperado |
|---|---|
| Cambiar nombre de un plato | Se actualiza en la carta |
| Cambiar fotografía | Se muestra la nueva imagen |
| Modificar precio | Se refleja el precio actualizado |
| Agregar un plato | Aparece en su categoría |
| Crear categoría | Se incorpora a la navegación |
| Ocultar un plato | Deja de aparecer públicamente |
| Marcar como agotado | Se muestra su estado de disponibilidad |
| Eliminar un plato | Se elimina de forma controlada |
| Visitante intenta administrar | El acceso es rechazado |
| Propietario actualiza información | Los cambios se reflejan sin desplegar nuevamente |

---

# 7. Alcance de la primera versión (MVP)

Para mantener el proyecto enfocado, se establece el siguiente alcance:

### Incluido

- Carta digital actual.
- Panel privado para un propietario.
- Gestión de categorías.
- Gestión de platos.
- Carga y sustitución de fotografías.
- Gestión de precios y descripciones.
- Disponibilidad y publicación.
- Integración entre panel y carta pública.
- Diseño adaptable a dispositivos móviles.
- Autenticación y protección de operaciones.

### Para futuras versiones

- Múltiples usuarios administrativos.
- Historial de modificaciones.
- Gestión de promociones.
- Estadísticas de visitas.
- Gestión de pedidos.
- Integración con pagos.

Estas funcionalidades no forman parte del objetivo inicial y no deben retrasar la entrega del panel básico.

---

# 8. Estrategia de implementación

El desarrollo debe realizarse de forma incremental para reducir riesgos y conservar el funcionamiento de la carta actual.

Orden de trabajo recomendado:

1. Analizar el repositorio completo.
2. Aprobar la arquitectura y el modelo de datos.
3. Configurar la base de datos y la autenticación.
4. Implementar cada módulo del panel.
5. Probar cada módulo antes de continuar.
6. Conectar la carta pública con la nueva fuente de datos.
7. Validar los cambios de extremo a extremo.
8. Desplegar la versión actualizada.

Es recomendable utilizar control de versiones con Git y realizar commits por cada funcionalidad terminada. También se debe mantener una copia de seguridad de los datos originales antes de la migración.

---

# 9. Primer paso concreto

Antes de comenzar la implementación, se debe revisar el proyecto actual para adaptar el plan a su estructura real.

Compartir el proyecto en un archivo ZIP, incluyendo:

- `package.json`
- `app/`
- `components/`
- `lib/`
- `public/`
- Archivos de configuración relevantes.

**Excluir:** `node_modules/`, `.next/`, archivos `.env`, credenciales, claves privadas y cualquier secreto.

Con el repositorio se podrá:

- Identificar los componentes que deben conservarse.
- Revisar la estructura actual de los platos.
- Definir los cambios archivo por archivo.
- Confirmar el modelo de datos.
- Preparar el orden de implementación.

---

## Resultado final esperado

Al completar las fases, **Carta Manolo será una carta digital dinámica y administrable**.

Los clientes conservarán una experiencia visual atractiva para explorar los platos, mientras que el propietario contará con un panel sencillo desde el cual podrá actualizar nombres, precios, descripciones, categorías y fotografías sin conocimientos de programación.

El panel será una herramienta de mantenimiento de la carta; la experiencia del cliente seguirá siendo el centro del proyecto.
