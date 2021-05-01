import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
  return (
    <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>André Torquato</Text>
            <Text color="gray.300" fontSize="small">
              ats.torquato1@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="André Torquato"
            src="https://github.com/andretorquato.png"
          ></Avatar>
        </Flex>
  );
}