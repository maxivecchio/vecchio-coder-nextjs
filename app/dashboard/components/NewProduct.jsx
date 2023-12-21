import React, { useRef } from 'react';
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

export default function NewProduct() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formRef = useRef(null);

  const fields = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Slug', type: 'text', name: 'slug' },
    { label: 'Description', type: 'textarea', name: 'description' },
    { label: 'Price', type: 'number', name: 'price' },
    { label: 'Stock', type: 'number', name: 'stock' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    fields.forEach(field => {
      formData[field.name] = formRef.current[field.name].value;
    });

    try {
      const response = await axios.post(
        'http://localhost:3022/api/products',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      enqueueSnackbar({
        message: 'Product Uploaded Successfully',
        variant: 'success',
      });
      onOpenChange(false);
      formRef.current.reset();
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
                  {fields.map((field) =>
                    field.type === 'textarea' ? (
                      <Textarea
                        key={field.name}
                        isRequired
                        label={field.label}
                        variant="bordered"
                        name={field.name}
                      />
                    ) : (
                      <Input
                        key={field.name}
                        isRequired
                        type={field.type}
                        label={field.label}
                        variant="bordered"
                        name={field.name}
                      />
                    )
                  )}
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
