import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react"

export const NavBar = () => {
  return (
    <Box color={"white"} bg={"#D0A9F5"} p={4} display={"flex"}  justifyContent={"space-around"}>
      <Menu>
        <Stack spacing={3} direction={"row"}>
          <Button color="white" colorScheme="purple">
            Home
          </Button>
          <MenuButton as={Button} colorScheme="purple" >
            Categorías
          </MenuButton>
          <MenuList bg={"purple"}>
            <MenuItem bg={"purple"}>Calzados</MenuItem>
            <MenuItem bg={"purple"}>Ropa</MenuItem>
          </MenuList>
        </Stack>
      </Menu>
      
    </Box>
  )
}
