
import { Card } from "flowbite-react";
import './card.css'
import testImage from '../img/test.jpg'

export function Carta() {
  return (
    <Card className="cartaComponente bg-gray-100/0 backdrop-blur-sm border-none" imgSrc={testImage} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, natus error suscipit atque animi sint nostrum itaque ex est ipsam alias culpa reprehenderit sunt impedit, velit, sequi soluta in eum?
        Porro, ea a explicabo impedit odio, accusamus optio rerum placeat est totam eligendi eius omnis ab vero illum! Odit, placeat corporis dolore minima repellat asperiores voluptate accusamus tempora ex praesentium.
        Nisi molestiae quasi commodi, corporis maxime voluptatibus at quisquam porro odit quo, maiores eligendi blanditiis deleniti aut saepe accusantium. Harum reiciendis itaque natus vero quas ea ab illum omnis aliquam!
        Ducimus voluptatem nihil odio quo obcaecati atque dolore quas nobis ea dolorum exercitationem rem, neque incidunt accusantium, eius cum corrupti ipsa perspiciatis quod magni minima mollitia a sint consequatur? Id?
        Iure mollitia reiciendis quo ex, asperiores doloremque officia, ea cumque vero tempore facere adipisci quidem cum corporis debitis non animi velit tenetur totam quasi! Laudantium earum reiciendis quae in quam.
      </p>
    </Card>
  );
}
