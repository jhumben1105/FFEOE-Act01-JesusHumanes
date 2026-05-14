import { useState } from "react";
import { z } from "zod";

const esquema = z.object({
  nombre: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
  email: z
    .string()
    .email({ message: "El email no tiene un formato válido." }),
  curso: z.enum(["1 DAM", "2 DAM"], {
    errorMap: () => ({ message: 'El curso debe ser exactamente "1 DAM" o "2 DAM".' }),
  }),
});

export default function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail]   = useState("");
  const [curso, setCurso]   = useState("");

  const handleValidar = () => {
    const datos = { nombre, email, curso };
    const resultado = esquema.safeParse(datos);

    if (resultado.success) {
      alert(
        "✅ Datos válidos. JSON generado:\n\n" +
        JSON.stringify(resultado.data, null, 2)
      );
    } else {
      const mensajes = resultado.error.errors
        .map((e) => e.message)
        .join("\n");
      alert("❌ Errores de validación:\n\n" + mensajes);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "60px auto", fontFamily: "sans-serif" }}>
      <h1>Formulario de Registro</h1>

      <label>Nombre</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Mínimo 3 caracteres"
        style={{ display: "block", width: "100%", marginBottom: 12, padding: 8 }}
      />

      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ejemplo@correo.com"
        style={{ display: "block", width: "100%", marginBottom: 12, padding: 8 }}
      />

      <label>Curso</label>
      <input
        type="text"
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
        placeholder="1 DAM  o  2 DAM"
        style={{ display: "block", width: "100%", marginBottom: 20, padding: 8 }}
      />

      <button
        onClick={handleValidar}
        style={{ padding: "10px 24px", cursor: "pointer" }}
      >
        Validar y guardar
      </button>
    </div>
  );
}