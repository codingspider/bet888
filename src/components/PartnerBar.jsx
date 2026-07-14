import { Box, Flex, Text, HStack } from '@chakra-ui/react'

export default function PartnerBar() {
  return (
    <Box bg="#111" py={4}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        borderRadius="12px"
        overflow="hidden"
        border="1px solid #333"
      >
        {/* Left Section - Yellow */}
        <Box
          bg="#FFD700"
          p={5}
          flex={1}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          minH="100px"
        >
          <Text fontSize="12px" color="#333" fontWeight="700" mb={1}>
            Join us as an affiliate
          </Text>
          <Text fontSize="18px" fontWeight="900" color="#000" lineHeight="1.2">
            And join now
          </Text>
          <Text fontSize="28px" fontWeight="900" color="#000" lineHeight="1">
            NO.1 Partner
          </Text>

          {/* Profile */}
          <Box
            position="absolute"
            right={5}
            top="50%"
            transform="translateY(-50%)"
            w="55px"
            h="55px"
            borderRadius="50%"
            bg="#e8d5a0"
            overflow="hidden"
            border="2px solid #fff"
          >
            <Text fontSize="28px" textAlign="center" lineHeight="55px">👩</Text>
          </Box>

          {/* Small logo */}
          <Box position="absolute" right={16} top={3}>
            <Text fontSize="9px" fontWeight="800" color="#333" fontStyle="italic" fontFamily="Poppins">
              BET888
            </Text>
          </Box>
        </Box>

        {/* Right Section - Stats */}
        <Flex
          flex={1.5}
          align="center"
          justify="space-around"
          p={5}
          bg="#1a1a1a"
          gap={2}
        >
          {[
            { icon: '💰', text: 'Join Now' },
            { icon: '🎁', text: '20% Bonus', highlight: true },
            { icon: '⭐', text: '20% Commission', highlight: true },
            { icon: '💎', text: 'Get Cashback', highlight: true },
          ].map((item, i) => (
            <Flex key={i} direction="column" align="center" gap={2}>
              <Box
                bg={item.highlight ? '#FFD700' : 'rgba(255,215,0,0.2)'}
                borderRadius="8px"
                px={4}
                py={2}
                display="flex"
                alignItems="center"
                gap={1}
                minH="44px"
              >
                <Text fontSize="18px">{item.icon}</Text>
                {item.highlight && (
                  <Text fontSize="13px" fontWeight="800" color="#000">20%</Text>
                )}
              </Box>
              <Text fontSize="11px" color="#999" textAlign="center" whiteSpace="nowrap">
                {item.text}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
