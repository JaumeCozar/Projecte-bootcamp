import { Button, Checkbox, Label, TextInput, Select, Textarea } from "flowbite-react";
import {Link} from "react-router-dom";
import contactImage from '../img/contacto.png'
export function FormularioContacto() {
  return (
    <div className="containerForm pt-20 flex flex-col md:flex-row justify-around 2xl:justify-center items-center gap-8 px-2 py-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="flex flex-col gap-2 items-center md:items-start">
        <img src={contactImage} className="imagen w-40 h-40 md:w-60 md:h-60 object-contain"/>
        <p className="italic text-lg dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 dark:text-white">Contactanos</p>
      </div>
      <div className="w-full max-w-lg">
        <form className="flex flex-col gap-4 w-full">

          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="asuntos">Selecciona un Asunto</Label>
            </div>
            <Select id="asuntos" required className="w-full">
              <option>Demo de Producto</option>
              <option>Test</option>
              <option>Test</option>
              <option>Test</option>
            </Select>
          </div>

          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="email">E-mail*</Label>
            </div>
            <TextInput id="email" type="email" placeholder="name@flowbite.com" required shadow className="w-full" />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="name">Nombre*</Label>
            </div>
            <TextInput id="name" type="text" required shadow className="w-full" />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="lastname">Apellidos</Label>
            </div>
            <TextInput id="lastname" type="text" required shadow className="w-full" />
          </div>

          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="comment">Mensaje</Label>
            </div>
            <Textarea id="comment" placeholder="Escriba su mensaje..." required rows={4} className="w-full" />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link to="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button type="submit" className="w-full md:w-20 h-10 text-black bg-white border border-gray-200 hover:bg-blue-700 hover:text-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">Enviar</Button>
        </form>
      </div>
    </div>
  );
}
