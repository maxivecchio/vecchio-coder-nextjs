"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useProducts } from "@/app/context/productContext";
import NewProduct from "@/app/dashboard/components/NewProduct";
import DeleteProduct from "@/app/dashboard/components/DeleteProduct";
import EditProduct from "@/app/dashboard/components/EditProduct";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function Dashboard() {
  const { products, uploadProduct, deleteProduct } = useProducts();
  
  const router = useRouter();
  const renderCell = React.useCallback((product, columnKey) => {
    let cellValue = product[columnKey];
    if (columnKey === 'category') {
      cellValue = product[columnKey].name;
    }

    switch (columnKey) {
      case "thumbnail":
        return (
          <Image
            width={64}
            height={96}
            alt="asdasd"
            src={product.thumbnail}
          />
        );
      case "name":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-tiny lowercase text-default-400">
              {product.slug}
            </p>
          </div>
        );
      case "category":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-tiny lowercase text-default-400">
              {product.category.slug}
            </p>
          </div>
        );
      case "slug":
        return (
          <Chip
            color={statusColorMap[product.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
        case "sizes":
          return (
            product.sizes.map(size => (
              <Chip
                key={size}
                variant="flat"
                className="mr-2"
              >
                {size}
              </Chip>
            ))
          );
        
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <EditProduct productSlug={product.slug}>
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <AiFillEdit />
              </span>
            </EditProduct>
            <DeleteProduct product={product} deleteProduct={deleteProduct}>
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <AiFillDelete />
              </span>
            </DeleteProduct>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const columns = [
    { name: "", uid: "thumbnail" },
    { name: "NAME", uid: "name" },
    { name: "CATEGORY", uid: "category" },
    { name: "SIZES", uid: "sizes" },
    { name: "PRICE", uid: "price" },
    { name: "ACTIONS", uid: "actions" },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="mt-12 mb-4 ml-2">
          <NewProduct uploadProduct={uploadProduct} />
        </div>
        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={products}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
