import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  import Swal from 'sweetalert2'
export default function Navbar() {
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    const requestLogout = async ()=>{
      try {
        Swal.fire(
          '',
          'Berhasil logout',
          'success'
      ).then(function(){
        window.location = "/"
      })
      } catch (error) {
        
      }
    }
    return(<Box as="section" pb={{ base: '12', md: '24' }}>
    <Box as="nav" bg="bg-surface" boxShadow="sm">
      <Container py={{ base: '4', lg: '5' }}>
        <HStack spacing="10" justify="space-between">
          
          {isDesktop ? (
            <Flex justify="space-between" flex="1">
              <ButtonGroup variant="link" spacing="8">
                  <Button onClick={()=>{window.location="/profile-edit"}} > Profile</Button>
                  <Button onClick={()=>{window.location="/"}} > Upload</Button>
              </ButtonGroup>
              <HStack spacing="3">
                <Button  colorScheme='teal' onClick={requestLogout}>Logout</Button>
              </HStack>
            </Flex>
          ) : (
            <IconButton
              variant="ghost"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
          )}
        </HStack>
      </Container>
    </Box>
  </Box>
  )
}
