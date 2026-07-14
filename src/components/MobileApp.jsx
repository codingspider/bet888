import { Box, Flex, Text, Button, HStack } from '@chakra-ui/react'

export default function MobileApp() {
  return (
    <Box bg="#111" py={10}>
      <Flex maxW="1200px" mx="auto" px={4} align="center" gap={8}>
        {/* Left Content */}
        <Box flex={1}>
          <Text fontSize="24px" fontWeight="800" color="white" mb={2} lineHeight="1.4">
            Official BET888 Mobile App Coming Soon!
          </Text>
          <Text fontSize="15px" color="#ccc" lineHeight="1.6" mb={2}>
            Enjoy uninterrupted entertainment on the go!
          </Text>
          <Text fontSize="14px" color="#888" mb={6}>
            Download now and enjoy the best gaming experience!
          </Text>

          <HStack gap={3}>
            <Button
              bg="#FFD700"
              color="#000"
              fontWeight="800"
              fontSize="14px"
              borderRadius="8px"
              px={6}
              h="40px"
              _hover={{ bg: '#FFC107' }}
              gap={2}
            >
              Download Now
            </Button>
            <Button
              bg="transparent"
              border="1px solid #FFD700"
              color="#FFD700"
              fontWeight="700"
              fontSize="14px"
              borderRadius="8px"
              px={6}
              h="40px"
              _hover={{ bg: 'rgba(255,215,0,0.1)' }}
              gap={2}
            >
              📱 Android
            </Button>
          </HStack>
        </Box>

        {/* Right - Phone Mockups */}
        <Box flex={1} position="relative" h="340px" display="flex" alignItems="flex-end" justifyContent="center">
          {/* Phone 1 - Main (left) */}
          <Box
            position="absolute"
            left="10%"
            bottom={0}
            w="150px"
            h="280px"
            bg="#0a0a0a"
            borderRadius="18px"
            border="2px solid #333"
            overflow="hidden"
            boxShadow="0 10px 40px rgba(0,0,0,0.6)"
            transform="rotate(-3deg)"
            zIndex={3}
          >
            <Box h="18px" bg="#000" display="flex" alignItems="center" justifyContent="center">
              <Box w="40px" h="4px" bg="#222" borderRadius="2px" />
            </Box>
            <Box
              bg="linear-gradient(180deg, #FFD700 0%, #B8860B 100%)"
              h="calc(100% - 18px)"
              display="flex"
              flexDirection="column"
              alignItems="center"
              p={2}
              gap={2}
            >
              <Text fontSize="10px" fontWeight="900" color="#000" fontStyle="italic" fontFamily="Poppins">BET888</Text>
              <Text fontSize="8px" color="#333" fontWeight="700">BETTING PASS</Text>
              <Box w="90%" h="40px" bg="rgba(0,0,0,0.15)" borderRadius="6px" />
              <Flex gap={1} w="90%">
                {[1, 2, 3, 4].map(i => (
                  <Box key={i} flex={1} h="30px" bg="rgba(0,0,0,0.15)" borderRadius="4px" />
                ))}
              </Flex>
              <Flex gap={1} w="90%">
                {[1, 2, 3, 4].map(i => (
                  <Box key={i} flex={1} h="30px" bg="rgba(0,0,0,0.15)" borderRadius="4px" />
                ))}
              </Flex>
            </Box>
          </Box>

          {/* Phone 2 - Right */}
          <Box
            position="absolute"
            right="5%"
            bottom={20}
            w="130px"
            h="240px"
            bg="#0a0a0a"
            borderRadius="16px"
            border="2px solid #333"
            overflow="hidden"
            boxShadow="0 10px 40px rgba(0,0,0,0.6)"
            transform="rotate(4deg)"
            zIndex={2}
          >
            <Box h="16px" bg="#000" display="flex" alignItems="center" justifyContent="center">
              <Box w="30px" h="3px" bg="#222" borderRadius="2px" />
            </Box>
            <Box
              bg="#111"
              h="calc(100% - 16px)"
              display="flex"
              flexDirection="column"
              p={1.5}
              gap={1.5}
            >
              {[1, 2, 3, 4, 5, 6].map(i => (
                <Box key={i} flex={1} bg="#222" borderRadius="4px" />
              ))}
            </Box>
          </Box>

          {/* Floating casino elements */}
          <Box
            position="absolute"
            top="5%"
            right="0"
            w="40px"
            h="40px"
            bg="rgba(255,215,0,0.15)"
            borderRadius="10px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={4}
            border="1px solid rgba(255,215,0,0.2)"
          >
            <Text fontSize="18px">🎰</Text>
          </Box>
          <Box
            position="absolute"
            top="25%"
            right="30%"
            w="30px"
            h="30px"
            bg="rgba(255,215,0,0.1)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={4}
          >
            <Text fontSize="14px">🎲</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
