import { Box, Flex, Text, Image, HStack } from '@chakra-ui/react'

export default function BrandAmbassador() {
  return (
    <Box bg="#1a1a1a" py={6}>
      <Flex maxW="1200px" mx="auto" px={4}>
        <Box
          w="100%"
          borderRadius="16px"
          overflow="hidden"
          position="relative"
          bg="linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
          border="1px solid #333"
        >
          <Flex minH="300px">
            {/* Left Side - Ambassador Image */}
            <Box
              flex={1}
              bg="linear-gradient(180deg, #2a1a0a 0%, #1a1a1a 100%)"
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              p={8}
              position="relative"
            >
              {/* Logo */}
              <Box position="absolute" top={4} left={4}>
                <HStack gap={1}>
                  <Text
                    fontSize="lg"
                    fontWeight="900"
                    color="#FFD700"
                    fontStyle="italic"
                    fontFamily="Poppins"
                  >
                    BET888
                  </Text>
                </HStack>
              </Box>

              <Box mt={8}>
                <Text fontSize="12px" color="#ccc" fontWeight="600" textTransform="uppercase" letterSpacing="2px">
                  OFFICIAL BRAND
                </Text>
                <Text fontSize="12px" color="#ccc" fontWeight="600" textTransform="uppercase" letterSpacing="2px">
                  AMBASSADOR 2025/2026
                </Text>
                <Text
                  fontSize="28px"
                  fontWeight="900"
                  color="#FFD700"
                  fontFamily="Poppins"
                  mt={2}
                >
                  SAMIRA KHAN MAHI
                </Text>

                {/* Signature */}
                <Box mt={2}>
                  <Text fontSize="sm" color="#FFD700" fontStyle="italic" opacity={0.7}>
                    ✍️
                  </Text>
                </Box>
              </Box>

              {/* Person silhouette placeholder */}
              <Box
                position="absolute"
                right={0}
                bottom={0}
                w="60%"
                h="100%"
                bg="linear-gradient(180deg, rgba(255,215,0,0.05) 0%, transparent 100%)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="8xl" opacity={0.3}>👩</Text>
              </Box>
            </Box>

            {/* Right Side - Video/Content */}
            <Box
              flex={1}
              bg="#111"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              p={8}
              position="relative"
            >
              {/* BET888 SPORTS Logo */}
              <Box position="absolute" top={4} right={4}>
                <Text
                  fontSize="12px"
                  fontWeight="800"
                  color="#FFD700"
                  fontFamily="Poppins"
                  fontStyle="italic"
                >
                  BET888 SPORTS
                </Text>
              </Box>

              {/* Play Button */}
              <Box
                w="60px"
                h="60px"
                borderRadius="50%"
                bg="rgba(255,215,0,0.2)"
                border="2px solid #FFD700"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                mb={6}
                _hover={{ bg: 'rgba(255,215,0,0.3)' }}
              >
                <Text fontSize="xl" color="#FFD700">▶</Text>
              </Box>

              <Text fontSize="14px" color="#ccc" lineHeight="1.8">
                Did you see that? This isn't just acting, it's an emotion.
              </Text>
              <Text fontSize="12px" color="#888" fontStyle="italic" mt={2}>
                This isn't just acting, it's an emotion.
              </Text>

              {/* Video dots navigation */}
              <Flex gap={2} mt={6}>
                {[1, 2, 3, 4, 5].map((dot) => (
                  <Box
                    key={dot}
                    w="8px"
                    h="8px"
                    borderRadius="full"
                    bg={dot === 1 ? '#FFD700' : '#444'}
                    cursor="pointer"
                  />
                ))}
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
