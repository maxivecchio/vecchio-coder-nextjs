"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const StoreAccordion = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  return (
    <div className="mx-3 w-full">
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <AccordionItem key="1" aria-label="Genero" title="Genero">
          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox1" name="checkbox1" />
            <label htmlFor="checkbox1">Opción 1</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox2" name="checkbox2" />
            <label htmlFor="checkbox2">Opción 2</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox3" name="checkbox3" />
            <label htmlFor="checkbox3">Opción 3</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox4" name="checkbox4" />
            <label htmlFor="checkbox4">Opción 4</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox5" name="checkbox5" />
            <label htmlFor="checkbox5">Opción 5</label>
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox1" name="checkbox1" />
            <label htmlFor="checkbox1">Opción 1</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox2" name="checkbox2" />
            <label htmlFor="checkbox2">Opción 2</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox3" name="checkbox3" />
            <label htmlFor="checkbox3">Opción 3</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox4" name="checkbox4" />
            <label htmlFor="checkbox4">Opción 4</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox5" name="checkbox5" />
            <label htmlFor="checkbox5">Opción 5</label>
          </div>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox1" name="checkbox1" />
            <label htmlFor="checkbox1">Opción 1</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox2" name="checkbox2" />
            <label htmlFor="checkbox2">Opción 2</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox3" name="checkbox3" />
            <label htmlFor="checkbox3">Opción 3</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox4" name="checkbox4" />
            <label htmlFor="checkbox4">Opción 4</label>
          </div>

          <div className="space-x-3 items-center my-3 text-base">
            <input type="checkbox" id="checkbox5" name="checkbox5" />
            <label htmlFor="checkbox5">Opción 5</label>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default StoreAccordion;
