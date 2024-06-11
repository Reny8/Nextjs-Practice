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
import { useSession } from "next-auth/react";

export default function NewPost({ topicId }: { topicId: string }) {
  const session = useSession();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    slug: "",
    content: "",
    userId: session.data?.user?.id || "",
    topicId: topicId,
  });
  const inValidDescription =
    formData.content !== "" && formData.content.length < 10;
  const inValidTitle = formData.slug !== "" && formData.slug.length < 3;
  const disabled =
    formData.content === "" ||
    formData.slug === "" ||
    inValidDescription ||
    inValidTitle;

  React.useEffect(() => {
    if (isOpen) {
      setFormData({
        slug: "",
        content: "",
        userId: session.data?.user?.id || "",
        topicId: topicId,
      });
    }
  }, [isOpen]);

  async function handleSubmit() {
    if (disabled) return;
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
            <Button onPress={onOpenChange} color="secondary" variant="bordered">
              Cancel
            </Button>
            <Button
              type="submit"
              isLoading={loading}
              color={disabled ? "default" : "secondary"}
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
