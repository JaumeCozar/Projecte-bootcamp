import React, { useState } from "react";

const initialState = {
  empresa: "",
  contacto: "",
  email: "",
  telefono: "",
  mensaje: "",
};

export default function EmpresaContacto() {
  const [form, setForm] = useState(initialState);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes hacer el fetch a tu backend o enviar el email
    setEnviado(true);
    setForm(initialState);
  };

  return (
    <section className="py-8 px-2 min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <form
        className="bg-white p-4 rounded-xl shadow-lg max-w-md w-full border-2 border-blue-400"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700 drop-shadow">Contacto para Empresas</h2>
        {enviado && (
          <div className="mb-4 text-green-600 text-center font-semibold text-base">
            ¡Mensaje enviado correctamente!
          </div>
        )}
        <div className="mb-3">
          <label className="block mb-1 font-medium text-sm">Nombre de la empresa</label>
          <input
            type="text"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            required
            className="w-full border border-blue-200 rounded px-2 py-2 text-base focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-medium text-sm">Persona de contacto</label>
          <input
            type="text"
            name="contacto"
            value={form.contacto}
            onChange={handleChange}
            required
            className="w-full border border-blue-200 rounded px-2 py-2 text-base focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-medium text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-blue-200 rounded px-2 py-2 text-base focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-medium text-sm">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            className="w-full border border-blue-200 rounded px-2 py-2 text-base focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-sm">Mensaje</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            rows={3}
            className="w-full border border-blue-200 rounded px-2 py-2 text-base focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-base shadow transition-all duration-200"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
