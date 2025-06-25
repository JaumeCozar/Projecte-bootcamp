
import { Button, Checkbox, Label, TextInput, Select, Textarea } from "flowbite-react";
import {Link} from "react-router-dom";
import contactImage from '../img/Contacto.png'
export function FormularioContacto() {
  return (
    <div className="containerForm">
      <div>
     <img src= {contactImage} className="imagen w-60 h-60"/>
      </div>
      <div>
    <form className="flex max-w-2xl flex-col gap-4 relative z-50">

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
          <Label htmlFor="name">Nombre</Label>
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
      <Button type="submit">Enviar</Button>
    </form>
    </div>
    </div>
  );
}
