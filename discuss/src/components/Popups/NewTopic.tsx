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
import { createTopic } from "@/actions";

export default function NewTopic() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const inValidTitle = title !== "" && title.length < 3;
  const inValidDescription = description !== "" && description.length < 10;
  const disabled = title.length < 3 || description.length < 10;
  React.useEffect(() => {
    if (isOpen) {
      setTitle("");
      setDescription("");
    }
  }, [isOpen]);

  function handleSubmit() {
    if (disabled) return;
    // CALL THE ENDPOINT TO CREATE A NEW TOPIC
    onOpenChange();
  }
  return (
    <>
      <Button onPress={onOpen} color="primary" size="lg" className="w-full">
        New Topic
      </Button>
      <Modal isOpen={isOpen} backdrop="blur" onClose={onOpenChange}>
        <ModalContent>
          <ModalHeader>New Topic</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              label="Title"
              value={title}
              isInvalid={inValidTitle}
              onChange={(e) => setTitle(e.target.value)}
              errorMessage={
                inValidTitle ? "Title must be longer than 3 characters" : ""
              }
            />
            <Textarea
              label="Description"
              value={description}
              isInvalid={inValidDescription}
              onChange={(e) => setDescription(e.target.value)}
              errorMessage={
                inValidDescription
                  ? "Description must be longer than 10 characters"
                  : ""
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button onPress={onOpenChange} color="primary" variant="bordered">
              Cancel
            </Button>
            <Button
              type="submit"
              color={disabled ? "default" : "primary"}
              disabled={disabled}
              onPress={handleSubmit}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
