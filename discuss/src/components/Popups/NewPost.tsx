"use client";
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
import { createPost } from "@/actions";

export default function NewPost({ topicId }: { topicId: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    slug: "",
    content: "",
    userId: "",
    topicId: topicId,
  });
  // COME BACK AND WRITE CONDITIONS BELOW
  const inValidTitle = false;
  const inValidDescription = false;
  const disabled = false;

  React.useEffect(() => {
    if (isOpen) {
      setFormData({
        slug: "",
        content: "",
        userId: "",
        topicId: topicId,
      });
    }
  }, [isOpen]);

  async function handleSubmit() {
    if (disabled) return;
    // CALL THE ENDPOINT TO CREATE A NEW TOPIC
    setLoading(true);
    await createPost(formData);
    setLoading(false);
    onOpenChange();
  }
  return (
    <>
      <Button onPress={onOpen} color="secondary" size="lg" className="w-full">
        New Post
      </Button>
      <Modal isOpen={isOpen} backdrop="blur" onClose={onOpenChange}>
        <ModalContent>
          <ModalHeader>Add Post</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              label="Title"
              value={formData.slug}
              isInvalid={inValidTitle}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              errorMessage={
                inValidTitle ? "Title must be longer than 3 characters" : ""
              }
            />
            <Textarea
              label="Content"
              value={formData.content}
              isInvalid={inValidDescription}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
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
              isLoading={loading}
              color={disabled ? "default" : "primary"}
              disabled={disabled || loading}
              onPress={handleSubmit}
            >
              {loading ? "" : "Create"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
