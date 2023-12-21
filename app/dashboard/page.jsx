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

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function Dashboard() {
  const { products } = useProducts();

  const router = useRouter();
  const renderCell = React.useCallback((product, columnKey) => {
    const cellValue = product[columnKey];

    switch (columnKey) {
      case "imageSrc":
        return (
          <Image
            width={64}
            height={96}
            alt="asdasd"
            className="!w-16"
            src={product.imageSrc}
          />
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {product.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[product.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            {/* <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <AiFillEye />
              </span>
            </Tooltip> */}
            <Tooltip content="Edit product">
              <span
                onClick={() => {
                  router.push(`/dashboard/p/${product.id}`);
                }}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
              >
                <AiFillEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete product">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <AiFillDelete />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const columns = [
    /* { name: "", uid: "imageSrc" }, */
    { name: "NAME", uid: "name" },
    { name: "SKU", uid: "sku" },
    { name: "PRICE", uid: "price" },
    { name: "BRAND", uid: "brand" },
    { name: "CATEGORY", uid: "category" },
    { name: "ACTIONS", uid: "actions" },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="mt-12 mb-4 ml-2">
          <Link
            href={"/dashboard/p/new"}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
          >
            Nuevo Producto
          </Link>
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
              <TableRow key={item.sku}>
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
