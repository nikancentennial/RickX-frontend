import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import wallpaper from "../assets/wallpaper.jpg";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box flex="1">
          <Heading mt={16} textAlign="start" size="4xl">
            Rick X
          </Heading>
          <Text mt={8} maxW="50%" textAlign="justify">
            Rick X simplifies note-taking with a versatile, user-friendly
            interface. Capture thoughts in various formats—text, images, audio—
            and organize effortlessly.
            <br />
            <br />
            Key features:
            <br />
            - Multi-format Notes: Text, images, audio, and checklists within a
            single note for versatile organization.
            <br />
            - Intelligent Organization: Categorize and tag notes with
            customizable labels and folders.
            <br />
            - Sync Across Devices: Access notes seamlessly from multiple devices
            for uninterrupted productivity.
            <br />
            - Advanced Search: Instantly find specific notes with a powerful
            search feature.
            <br />
            - Customizable Interface: Personalize themes and layouts for a
            tailored experience.
            <br />
            - Security and Privacy: Robust encryption ensures data safety and
            peace of mind.
            <br />
            <br />
            Rick X is the go-to digital companion for efficient note management
            in personal, work, or creative spheres. Simplify note-taking and
            stay organized with Rick X.
          </Text>
        </Box>
        <Box ml={8}>
          <img width={500} src={wallpaper} alt="" />
        </Box>
      </Flex>
    </Box>
  );
}
