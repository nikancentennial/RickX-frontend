import { Box, Grid, IconButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNotes, getNotes, updateNotes } from "../Redux/notes/note.actions"; // Import updateNotes
import NoteCard from "../components/Homepage/Notespage/NoteCard/NoteCard";
import { GrAdd } from "react-icons/gr";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function NotesPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.noteReducer);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  useEffect(() => {
    setNotes(data);
  }, [data]);

  const createNote = () => {
    dispatch(createNotes({ title, body }));
    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateNote = (_id, newTitle, newBody) => {
    dispatch(updateNotes(_id, { title: newTitle, body: newBody }));
  };

  return (
    <Box mt={20} padding={8}>
      <Grid w={"100%"} margin={"auto"} gridTemplateColumns={"repeat(4, 1fr)"} gap={4}>
        {notes?.map((el) => (
          <NoteCard
            key={el.id}
            {...el}
            updateNote={updateNote} // Pass the updateNote function as a prop to NoteCard
          />
        ))}
      </Grid>

      <IconButton
        position={"fixed"}
        borderRadius={50}
        bg={"grey"}
        bottom={0}
        right={0}
        margin={16}
        onClick={onOpen}
        icon={<GrAdd />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={title} placeholder="Please enter title" onChange={(e) => setTitle(e.target.value)} />
            <Textarea value={body} placeholder="please enter description" onChange={(e) => setBody(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={createNote}>
              Create
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
