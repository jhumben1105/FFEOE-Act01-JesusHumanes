# 📋 Formulario de Registro con Validación

Aplicación web desarrollada con React que simula un formulario de registro de alumnos.
Recoge el nombre, email y curso del usuario, valida los datos con la librería Zod
y muestra el objeto JSON resultante si la información es correcta.

## Tecnologías utilizadas

- React
- Vite
- Zod

## Despliegue

```bash
git clone https://github.com/jhumben1105/FFEOE-Act01-JesusHumanes.git
cd FFEOE-Act01-JesusHumanes
npm install
npm run dev
```

## Diccionario de datos

| Nombre del Campo | Tipo de Dato | Reglas de Validación                          |
|------------------|--------------|-----------------------------------------------|
| nombre           | String       | Obligatorio, mínimo 3 caracteres              |
| email            | String       | Obligatorio, formato de email válido          |
| curso            | String       | Obligatorio, valor exacto: "1 DAM" o "2 DAM" |

---

Desarrollado por **[Jesús Humanes](https://github.com/jhumben1105/FFEOE-Act01-JesusHumanes.git)**