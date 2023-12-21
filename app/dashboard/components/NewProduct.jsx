'use client'
import React, { useRef, useState } from 'react';
import axios from 'axios';
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
} from '@nextui-org/react';
import { enqueueSnackbar } from 'notistack';
import { IoAdd } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

export default function NewProduct() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formRef = useRef(null);
  const [sizeVariants, setSizeVariants] = useState(['']);

  const fields = [
    { label: 'Name', type: 'text', name: 'name', colSpan: 'col-span-2'},
    { label: 'Slug', type: 'text', name: 'slug', colSpan: 'col-span-1' },
    { label: 'SKU', type: 'text', name: 'sku', colSpan: 'col-span-1' },
    { label: 'Description', type: 'textarea', name: 'description', colSpan: 'col-span-2' },
    { label: 'Price', type: 'number', name: 'price', colSpan: 'col-span-1' },
    { label: 'Stock', type: 'number', name: 'stock', colSpan: 'col-span-1' },
  ];

  const addSizeVariant = () => {
    setSizeVariants([...sizeVariants, '']);
  };

  const removeSizeVariant = index => {
    setSizeVariants(sizeVariants.filter((_, i) => i !== index));
  };

  const handleSizeVariantChange = (index, value) => {
    const newVariants = [...sizeVariants];
    newVariants[index] = value;
    setSizeVariants(newVariants);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    fields.forEach(field => {
      formData[field.name] = formRef.current[field.name].value;
    });
    formData['sizeVariants'] = sizeVariants;

    try {
      const response = await axios.post(
        'http://localhost:3022/api/products',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Asegúrate de que el token esté definido
          },
        }
      );
      enqueueSnackbar({
        message: 'Product Uploaded Successfully',
        variant: 'success',
      });
      onOpenChange(false);
      formRef.current.reset();
      setSizeVariants(['']); // Restablecer variantes de tallas
    } catch (error) {
      console.error('Error uploading product:', error.message);
    }
  };

  return (
    <>
      <Button onPress={onOpen} variant="flat">
        Upload Product
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Upload Product
              </ModalHeader>
              <form ref={formRef} onSubmit={handleSubmit}>
                <ModalBody>
                  <div className="grid grid-cols-2 gap-4">
                  {fields.map((field) =>
                    field.type === 'textarea' ? (
                      <Textarea
                      key={field.name}
                      isRequired
                      label={field.label}
                      variant="bordered"
                      name={field.name}
                      className={field.colSpan}
                      />
                    ) : (
                      <Input
                      key={field.name}
                      isRequired
                      type={field.type}
                      label={field.label}
                      variant="bordered"
                      name={field.name}
                      className={field.colSpan}
                      />
                    )
                  )}
                      </div>
                  <div>
                  <div className="flex-1 min-w-0">
                    <label>Size Variants:</label>
                  </div>
                  <div className="grid grid-cols-6 gap-2 items-center">
                    {sizeVariants.map((variant, index) => (
                      <div>
                      <div key={index} className="flex-1 min-w-0">
                        <Input
                          fullWidth
                          value={variant}
                          onChange={(e) => handleSizeVariantChange(index, e.target.value)}
                          />
                      </div>
                        <div key={index} onClick={() => removeSizeVariant(index)}>
                          <TiDeleteOutline className="mx-auto text-xl mt-2" />
                        </div>
                          </div>
                    ))}
                  </div>


                  </div>
                    <Button className="w-auto" onClick={addSizeVariant}>
                      Add new variant
                    </Button>
                </ModalBody>
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
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
