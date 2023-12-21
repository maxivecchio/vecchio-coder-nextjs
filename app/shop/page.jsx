import BreadCrumb from "../components/BreadCrum";
import SlideBar from "./components/SlideBar";
import Select from "./components/Select";
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
        <div className="flex">
          <div className="hidden md:flex">
            <Slidebar />
          </div>

          <div className="w-full p-4">
              <div className="mb-3 mr-3 md:mr-0 flex justify-end md:hidden">
                <Popover placement="bottom" showArrow offset={10}>
                  <PopoverTrigger>
                    <Button color="primary">
                      Filters <MdFilterAltOff className="ml-2" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[240px]">
                    <StoreAccordion />
                  </PopoverContent>
                </Popover>
              </div>
              <ProductList />
            </div>
        </div>
      </div>
    </>
  );
}
