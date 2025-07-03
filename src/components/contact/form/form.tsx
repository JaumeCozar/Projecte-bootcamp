import { Button, Checkbox, Label, TextInput, Select, Textarea } from "flowbite-react";
import { Link } from "react-router-dom";
import contactImage from "../img/contacto.png";

export function FormularioContacto() {
  return (
    <div className="containerForm mt-10 flex flex-col md:flex-row md:justify-around 2xl:justify-center items-center gap-8 p-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      
      {/* Imagen + texto */}
      <div className="flex flex-col items-center gap-2 text-center md:text-left">
        <img 
          src={contactImage} 
          alt="Contacto" 
          className="imagen max-w-[250px] w-full h-auto object-contain" 
        />
        <p className="italic text-lg dark:text-white">Contáctanos</p>
      </div>

      {/* Formulario */}
      <div className="w-full max-w-xl">
        <form className="flex flex-col gap-4 w-full">

          <div>
            <Label htmlFor="asuntos" className="mb-2 block">Selecciona un Asunto</Label>
            <Select id="asuntos" required className="w-full">
              <option>Demo de Producto</option>
              <option>Test</option>
              <option>Test</option>
              <option>Test</option>
            </Select>
          </div>

          <div>
            <Label htmlFor="email" className="mb-2 block">E-mail*</Label>
            <TextInput id="email" type="email" placeholder="name@flowbite.com" required shadow className="w-full" />
          </div>

          <div>
            <Label htmlFor="name" className="mb-2 block">Nombre*</Label>
            <TextInput id="name" type="text" required shadow className="w-full" />
          </div>

          <div>
            <Label htmlFor="lastname" className="mb-2 block">Apellidos</Label>
            <TextInput id="lastname" type="text" required shadow className="w-full" />
          </div>

          <div>
            <Label htmlFor="comment" className="mb-2 block">Mensaje</Label>
            <Textarea id="comment" placeholder="Escriba su mensaje..." required rows={4} className="w-full" />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex items-center">
              Acepto los{' '}
              <Link to="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                términos y condiciones
              </Link>
            </Label>
          </div>

          <Button 
            type="submit" 
            className="w-full md:w-32 h-10 text-black bg-white border border-gray-200 hover:bg-blue-700 hover:text-white dark:bg-gray-700 dark:text-white"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}
