import { Box, Flex, Text, Button, HStack } from '@chakra-ui/react'

export default function ReferFriends() {
  return (
    <Box bg="#111" py={5}>
      <Flex maxW="1200px" mx="auto" px={4} gap={4}>
        {/* Refer Friends Box */}
        <Box
          flex={1}
          bg="#1a1a1a"
          borderRadius="12px"
          border="1px solid #FFD700"
          p={5}
          position="relative"
          overflow="hidden"
        >
          <Text fontSize="18px" fontWeight="800" color="white" mb={2}>
            Refer friends and start earning
          </Text>

          <Text fontSize="13px" color="#999" lineHeight="1.8" mb={3}>
            Refer 5 friends and get 500 BDT bonus for each referral.
            Keep referring and keep earning!
          </Text>

          <HStack gap={3} mb={4}>
            {[
              { icon: '🎁', label: 'Get Bonus' },
              { icon: '💰', label: '500 BDT' },
              { icon: '⭐', label: 'Per Referral' },
            ].map((item, i) => (
              <HStack key={i} gap={1}>
                <Box w="36px" h="36px" borderRadius="50%" bg="#FFD700" display="flex" alignItems="center" justifyContent="center">
                  <Text fontSize="16px">{item.icon}</Text>
                </Box>
                <Text fontSize="12px" color="#FFD700" fontWeight="600">{item.label}</Text>
              </HStack>
            ))}
          </HStack>

          <Button
            bg="#FFD700"
            color="#000"
            fontWeight="800"
            fontSize="14px"
            borderRadius="8px"
            px={6}
            h="38px"
            _hover={{ bg: '#FFC107' }}
          >
            Refer Now
          </Button>
        </Box>

        {/* Exclusive Betting Pass */}
        <Box
          flex={1}
          bg="#1a1a1a"
          borderRadius="12px"
          border="1px solid #333"
          overflow="hidden"
          position="relative"
        >
          <Flex h="100%" minH="180px">
            {/* Left side */}
            <Box p={5} flex={1} display="flex" flexDirection="column" justifyContent="center">
              <Text
                fontSize="18px"
                fontWeight="900"
                color="#FFD700"
                fontStyle="italic"
                fontFamily="Poppins"
              >
                BET888
              </Text>
              <Text
                fontSize="20px"
                fontWeight="900"
                color="white"
                mt={1}
                lineHeight="1.2"
              >
                EXCLUSIVE
              </Text>
              <Text
                fontSize="20px"
                fontWeight="900"
                color="white"
                lineHeight="1.2"
              >
                BETTING PASS
              </Text>
              <Text fontSize="12px" color="#888" mt={2}>
                DEPOSIT, LEVEL UP AND
              </Text>
              <Text fontSize="12px" color="#888">
                UNLOCK REAL PRIZES!
              </Text>
            </Box>

            {/* Right side - Visual */}
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="linear-gradient(135deg, rgba(255,215,0,0.08) 0%, rgba(0,0,128,0.08) 100%)"
              position="relative"
            >
              <Text fontSize="60px" opacity={0.7}>🎁</Text>
              <Box position="absolute" top="10%" right="10%" w="8px" h="8px" borderRadius="full" bg="#FFD700" opacity={0.4} />
              <Box position="absolute" bottom="20%" right="20%" w="5px" h="5px" borderRadius="full" bg="#FFD700" opacity={0.3} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
