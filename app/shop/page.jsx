import ProductList from "./components/ProductsList";
import Slidebar from "@/app/components/store/Slidebar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from "@nextui-org/react";
import { MdFilterAltOff } from "react-icons/md";
import StoreAccordion from "@/app/components/store/StoreAccordion";

export default function Shop() {
  return (
    <>
      <div className="mt-16">
          <div className="w-full p-4">
              <ProductList />
            </div>
      </div>
    </>
  );
}
