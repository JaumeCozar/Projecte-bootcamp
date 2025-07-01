import { Button, Checkbox, Label, TextInput, Select, Textarea } from "flowbite-react";
import {Link} from "react-router-dom";
import contactImage from '../img/contacto.png'
export function FormularioContacto() {
  return (
    <div className="containerForm mt-15 flex flex-col md:flex-row justify-around 2xl:justify-center items-center gap-8 p-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="flex flex-col gap-2">
     <img src= {contactImage} className="imagen w-60 h-60 "/>
     <p className="italic text-lg  dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 dark:text-white" >Contactanos</p>
      </div>
      <div>
    <form className="flex min-w-xl flex-col gap-4 relative z-50">

    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="asuntos">Selecciona un Asunto</Label>
      </div>
      <Select id="asuntos" required>
        <option>Demo de Producto</option>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </Select>
    </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email">E-mail*</Label>
        </div>
        <TextInput id="email" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Nombre*</Label>
        </div>
        <TextInput id="name" type="text" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="lastname">Apellidos</Label>
        </div>
        <TextInput id="lastname" type="text" required shadow />
      </div>

    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment">Mensaje</Label>
      </div>
      <Textarea id="comment" placeholder="Escriba su mensaje..." required rows={4} />
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
      <Button type="submit" className="w-20 h-10 text-black bg-white border border-gray-200 hover:bg-blue-700 hover:text-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"  >Enviar</Button>
    </form>
    </div>
    </div>
  );
}
