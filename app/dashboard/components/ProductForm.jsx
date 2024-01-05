"use client";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { enqueueSnackbar } from "notistack";
import { IoAdd } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import ImageUploading from "react-images-uploading";

import { useProducts } from "@/app/context/productContext";

import { handleUpload } from "@/app/lib/hooks";

export default function ProductForm({ children, existingProduct }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formRef = useRef(null);
  const [sizeVariants, setSizeVariants] = useState(new Set([]));
  const { uploadProduct, categories,editProductById } = useProducts();
  const [category, setCategory] = useState(null);
  const [images, setImages] = useState([]);
  const maxNumber = 4;
  const isEditMode = Boolean(existingProduct);

  useEffect(() => {
     if (isEditMode) {
      setSizeVariants(new Set(existingProduct.sizes || []));
      setCategory(existingProduct?.category?.id || null);
    }
  }, [existingProduct]);

  const fields = [
    { label: "Name", type: "text", name: "name", colSpan: "col-span-2" },
    {
      label: "Description",
      type: "textarea",
      name: "description",
      colSpan: "col-span-2",
    },
    { label: "Price", type: "number", name: "price", colSpan: "col-span-1" },
    { label: "Stock", type: "number", name: "stock", colSpan: "col-span-1" },
    {
      label: "Select Available Sizes",
      type: "select",
      name: "sizes",
      colSpan: "col-span-2",
    },
    {
      label: "Select Category",
      type: "select",
      name: "category",
      colSpan: "col-span-2",
    },
  ];

  const defaultSizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"];
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    fields.forEach((field) => {
      if (field.name === "sizes") {
        formData[field.name] = Array.from(sizeVariants);
      } else if (field.name === "category") {
        formData[field.name] = category;
      } else {
        formData[field.name] = formRef.current[field.name].value;
      }
    });

    if (isEditMode) {
      if (images[0]) {
        formData["thumbnail"] = await handleUpload(images[0]?.file);
      } else {
        formData["thumbnail"] = existingProduct.thumbnail;
      }
    } else {
      if (images[0]) {
        formData["thumbnail"] = await handleUpload(images[0]?.file);
      } else {
        enqueueSnackbar({
          message: "Please select an image",
          variant: "error",
        });
        return;
      }
    }

    if (isEditMode) {
      editProductById(existingProduct.id, formData).then(() => {
        onOpenChange(false);
      });
    } else {
      uploadProduct(formData).then(() => {
        onOpenChange(false);
        formRef.current.reset();
        setSizeVariants([]);
        setImages([]);
      });
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case "textarea":
        return renderTextarea(field);
      case "select":
        return renderSelect(field);
      default:
        return renderInput(field);
    }
  };

  const renderTextarea = (field) => (
    <Textarea
      key={field.name}
      isRequired
      label={field.label}
      variant="bordered"
      name={field.name}
      className={field.colSpan}
      defaultValue={existingProduct?.description || ""}
    />
  );

  const renderSelect = (field) => {
    if (field.name === "sizes") {
      return (
        <Select
          label={field.label}
          placeholder=""
          key={field.name}
          selectionMode="multiple"
          className={field.colSpan}
          variant="bordered"
          onSelectionChange={setSizeVariants}
          selectedKeys={
            isEditMode ? new Set(existingProduct.sizes) : sizeVariants
          }
        >
          {defaultSizes.map((size) => (
            <SelectItem key={size} value={size}>
              {size.toUpperCase()}
            </SelectItem>
          ))}
        </Select>
      );
    } else if (field.name === "category") {
      return (
        <Select
          label={field.label}
          placeholder=""
          key={field.name}
          className={field.colSpan}
          variant="bordered"
          onSelectionChange={(value) => {
            const selectedValue = Array.from(value)[0]; // Convierte el Set a un arreglo y toma el primer elemento
            console.log(selectedValue);
            setCategory(selectedValue);
          }}
          selectedKeys={isEditMode && [category]}
        >
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </Select>
      );
    }
  };

  const renderInput = (field) => (
    <Input
      key={field.name}
      isRequired
      type={field.type}
      label={field.label}
      variant="bordered"
      name={field.name}
      className={field.colSpan}
      defaultValue={existingProduct?.[field.name] || ""}
    />
  );

  return (
    <>
      <span onClick={onOpen}>{children}</span>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent className="max-w-4xl">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {!isEditMode ? "Upload Product" : "Editing Product"}
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 gap-4">
                  <ImageUploading
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      <div className="flex flex-col items-center">
                        {imageList.length == 0 && !isEditMode && (
                          <button
                            className={`w-full aspect-square py-2 px-4 border-2 border-dashed ${
                              isDragging ? "border-red-500" : "border-gray-300"
                            } rounded-lg cursor-pointer focus:outline-none`}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            Hacé click o arrastrá una imagen
                          </button>
                        )}
                        <div className="flex flex-wrap gap-4">
                          {(imageList[0] || isEditMode) && (
                            <div key={0} className="image-item">
                              <div className="flex flex-col">
                                <img
                                  src={
                                    imageList[0]
                                      ? imageList[0].dataURL
                                      : existingProduct?.thumbnail
                                  }
                                  alt="Upload Image Preview"
                                  className="aspect-square mx-auto w-1/2 sm:w-full object-cover rounded-lg border shadow"
                                />
                                <div className="w-full flex flex-row justify-center gap-2 my-2 sm:mb-0">
                                  <button
                                    className="py-1 px-3 bg-blue-500 text-white rounded-md focus:outline-none"
                                    onClick={() => onImageUpdate(0)}
                                  >
                                    Cambiar Imagen
                                  </button>
                                  {isEditMode && imageList[0] && (
                                    <button
                                      className="py-1 px-3 bg-red-500 text-white rounded-md focus:outline-none"
                                      onClick={onImageRemove}
                                    >
                                      Volver a la Original
                                    </button>
                                  )}

                                  {!isEditMode && imageList[0] && (
                                    <button
                                      className="py-1 px-3 bg-red-500 text-white rounded-md focus:outline-none"
                                      onClick={() => setImages([])  }
                                    >
                                      Eliminar
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </ImageUploading>
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="p-0 m-0"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {fields.map(renderField)}
                    </div>
                    <ModalFooter>
                      <Button
                        color="danger"
                        variant="flat"
                        onPress={() => onOpenChange(false)}
                      >
                        Cancel
                      </Button>
                      <Button color="primary" type="submit">
                        Upload
                      </Button>
                    </ModalFooter>
                  </form>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
