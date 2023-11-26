import { Text, Card, CardBody, Flex, Heading, VStack, Center, useDisclosure } from "@chakra-ui/react";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../../Redux/notes/note.actions";
import {
  Button,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {  useState } from "react";

export default function NoteCard({ title, body, _id }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [tempTitle, setTempTitle] = useState(title);
  const [tempBody, setTempBody] = useState(body);

  const updateNote = async() => {
    dispatch(updateNotes(_id, { title: tempTitle, body: tempBody }));
    onClose();
  };

  return (
    <Center>
      <Card className="card" maxW="300px" borderWidth="1px">
        <CardBody>
          <VStack spacing={4}>
            <Heading size="md">{title}</Heading>
            <Text>{body}</Text>
            <Flex justifyContent="center">
              <Button onClick={onOpen}>Update</Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Note</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Input
                      value={tempTitle}
                      placeholder="Please enter title"
                      onChange={(e) => setTempTitle(e.target.value)}
                    />
                    <Textarea
                      value={tempBody}
                      placeholder="please enter description"
                      onChange={(e) => setTempBody(e.target.value)}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={updateNote}>
                      Update
                    </Button>
                    <Button variant="ghost" onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={() => dispatch(deleteNotes(_id))}>Delete</Button>
            </Flex>
          </VStack>
        </CardBody>
      </Card>
    </Center>
  );
}
