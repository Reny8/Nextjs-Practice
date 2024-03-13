import React from "react";
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
} from "@nextui-org/react";

export default function NewTopic() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} color="primary" size="lg">
        New Topic
      </Button>
      <Modal isOpen={isOpen} onClose={onOpenChange}>
        <ModalContent>
          <ModalHeader>New Topic</ModalHeader>
          <ModalBody>
            <Input type="text" label="Title" />
            <Textarea  label="Description" />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
