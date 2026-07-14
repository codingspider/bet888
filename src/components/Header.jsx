import { Box, Flex, Text, Button, HStack, Spacer, Image } from '@chakra-ui/react'

const navItems = [
  { label: 'Live Game', badge: false },
  { label: 'Casino', badge: false },
  { label: 'Slots', badge: false },
  { label: 'Cricket', badge: false },
  { label: 'Live Game', badge: false },
  { label: 'Table', badge: false },
  { label: 'Fishing', badge: false },
  { label: 'Sports', badge: false },
  { label: 'Tournament', badge: true },
  { label: 'Bonus Shop', badge: true },
  { label: 'VIP', badge: true },
  { label: 'Affiliate', badge: false },
  { label: 'Benefits', badge: false },
  { label: 'Notice', badge: false },
]

export default function Header() {
  return (
    <Box bg="#0d0d0d" position="sticky" top={0} zIndex={100}>
      {/* Top Bar */}
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        py={2}
        align="center"
        gap={3}
      >
        {/* Logo from BET888.gold */}
        <HStack gap={2} mr={4}>
          <Image
            src="https://BET888.gold/static/svg/bb88_logo_w_sponsor.svg"
            alt="BET888"
            h="28px"
            fallback={
              <Text
                fontSize="26px"
                fontWeight="900"
                color="#FFD700"
                fontStyle="italic"
                letterSpacing="-1.5px"
                fontFamily="Poppins, sans-serif"
              >
                BET888
              </Text>
            }
          />
          <Box
            w="32px"
            h="32px"
            borderRadius="50%"
            bg="linear-gradient(135deg, #FFD700 0%, #B8860B 100%)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="2px solid #FFD700"
            fontSize="14px"
          >
            👑
          </Box>
        </HStack>

        <Spacer />

        {/* Right Side Buttons */}
        <HStack gap={2}>
          <Button
            size="sm"
            bg="#FFD700"
            color="#000"
            fontWeight="800"
            borderRadius="6px"
            _hover={{ bg: '#FFC107' }}
            fontSize="13px"
            px={4}
            h="34px"
          >
            Refer Now
          </Button>
          <Button
            size="sm"
            bg="transparent"
            color="#FFD700"
            fontWeight="800"
            borderRadius="6px"
            border="1px solid #FFD700"
            _hover={{ bg: 'rgba(255,215,0,0.1)' }}
            fontSize="13px"
            px={4}
            h="34px"
          >
            Switch Account
          </Button>
          <Box
            w="32px"
            h="32px"
            borderRadius="50%"
            bg="#FFD700"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            <Box
              w="28px"
              h="28px"
              borderRadius="50%"
              bg="#000"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="12px"
            >
              🌐
            </Box>
          </Box>
        </HStack>
      </Flex>

      {/* Navigation Bar */}
      <Box bg="#000" borderTop="1px solid #222">
        <Flex
          maxW="1200px"
          mx="auto"
          px={2}
          overflowX="auto"
          css={{
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          {navItems.map((item, i) => (
            <Box
              key={i}
              px={4}
              py={3}
              whiteSpace="nowrap"
              cursor="pointer"
              position="relative"
              borderRight="1px solid #222"
              _last={{ borderRight: 'none' }}
              _hover={{ bg: 'rgba(255,215,0,0.05)' }}
            >
              <Text
                fontSize="14px"
                fontWeight="600"
                color="#aaa"
                _hover={{ color: '#FFD700' }}
              >
                {item.label}
              </Text>
              {item.badge && (
                <Box
                  position="absolute"
                  top={1}
                  right={2}
                  w="7px"
                  h="7px"
                  bg="#4CAF50"
                  borderRadius="full"
                />
              )}
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

// test