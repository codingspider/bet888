import { Box, Flex, Text, HStack, VStack } from '@chakra-ui/react'
import { FaFacebook, FaYoutube, FaInstagram, FaTelegram } from 'react-icons/fa'

const brandAmbassadors = [
  { name: 'Samira Mahi Khan', role: 'Brand Ambassador', emoji: '👩' },
  { name: 'Apu Bishwas', role: 'Brand Ambassador', emoji: '👩' },
]

const partners = [
  { name: 'Vegas Vikings', emoji: '⚔️', year: '2024/2025' },
  { name: 'Sudurpaschim Royals', emoji: '👑', year: '2024/2025' },
  { name: 'Telugu Warriors', emoji: '🛡️', year: '2024/2025' },
  { name: 'Colombo Strikers', emoji: '🏏', year: '2024/2025' },
  { name: 'Grand Cayman Jaguars', emoji: '🐆', year: '2024/2025' },
  { name: 'Montreal Tigers', emoji: '🐯', year: '2024/2025' },
  { name: 'Dambulla Aura', emoji: '✨', year: '2023/2024' },
  { name: 'Northern Warriors', emoji: '⚔️', year: '2023/2024' },
]

const paymentMethods = ['bKash', 'Nagad', 'Rocket', 'UPay']

export default function Footer() {
  return (
    <Box bg="#0a0a0a" pt={8} pb={4}>
      <Flex maxW="1200px" mx="auto" px={4} direction="column" gap={6}>
        {/* Brand Ambassadors */}
        <Box>
          <Text fontSize="14px" fontWeight="700" color="#FFD700" mb={3} letterSpacing="1px">
            Brand Ambassadors
          </Text>
          <Flex gap={5}>
            {brandAmbassadors.map((amb, i) => (
              <HStack key={i} gap={2}>
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="50%"
                  bg="#222"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="18px">{amb.emoji}</Text>
                </Box>
                <Box>
                  <Text fontSize="13px" fontWeight="600" color="white">{amb.name}</Text>
                  <Text fontSize="11px" color="#666">{amb.role}</Text>
                </Box>
              </HStack>
            ))}
          </Flex>
        </Box>

        <Box h="1px" bg="#222" />

        {/* Partners */}
        <Box>
          <Text fontSize="14px" fontWeight="700" color="#FFD700" mb={3} letterSpacing="1px">
            Partnerships
          </Text>
          <Flex gap={3} flexWrap="wrap">
            {partners.map((partner, i) => (
              <HStack key={i} gap={2} bg="#111" px={3} py={2} borderRadius="6px" border="1px solid #222">
                <Text fontSize="16px">{partner.emoji}</Text>
                <Box>
                  <Text fontSize="12px" fontWeight="600" color="white">{partner.name}</Text>
                  <Text fontSize="10px" color="#666">{partner.year}</Text>
                </Box>
              </HStack>
            ))}
          </Flex>
        </Box>

        <Box h="1px" bg="#222" />

        {/* Payment & Security */}
        <Flex gap={8}>
          <Box>
            <Text fontSize="14px" fontWeight="700" color="#FFD700" mb={3} letterSpacing="1px">
              Payment Methods
            </Text>
            <HStack gap={2}>
              {paymentMethods.map((method, i) => (
                <Box
                  key={i}
                  bg="#111"
                  px={4}
                  py={2}
                  borderRadius="4px"
                  border="1px solid #222"
                >
                  <Text fontSize="12px" color="#aaa">{method}</Text>
                </Box>
              ))}
            </HStack>
          </Box>

          <Box>
            <Text fontSize="14px" fontWeight="700" color="#FFD700" mb={3} letterSpacing="1px">
              Security Support
            </Text>
            <HStack gap={2}>
              <Box bg="#111" px={4} py={2} borderRadius="4px" border="1px solid #222" display="flex" alignItems="center" gap={1}>
                <Text fontSize="12px" color="#aaa" fontWeight="700">18+</Text>
              </Box>
              <Box bg="#111" px={4} py={2} borderRadius="4px" border="1px solid #222">
                <Text fontSize="12px" color="#aaa">GambleAware</Text>
              </Box>
            </HStack>
          </Box>
        </Flex>

        <Box h="1px" bg="#222" />

        {/* Bottom Section */}
        <Flex justify="space-between" align="flex-start">
          {/* Logo & Info */}
          <Box>
            <HStack gap={2} mb={1}>
              <Text
                fontSize="28px"
                fontWeight="900"
                color="#FFD700"
                fontStyle="italic"
                fontFamily="Poppins"
              >
                BET888
              </Text>
              <Text fontSize="13px" color="#FFD700" fontWeight="600">
                Official
              </Text>
            </HStack>
            <Text fontSize="12px" color="#666" lineHeight="1.6">
              Bangladesh's No.1 - The Biggest and Most Trusted
            </Text>
            <Text fontSize="12px" color="#666">
              Website in BD | © 2024 - All Rights Reserved
            </Text>
          </Box>

          {/* Social Links */}
          <Box>
            <Text fontSize="12px" color="#666" mb={2}>
              Follow Us
            </Text>
            <HStack gap={2}>
              {[FaFacebook, FaYoutube, FaInstagram, FaTelegram].map((Icon, i) => (
                <Box
                  key={i}
                  w="36px"
                  h="36px"
                  borderRadius="50%"
                  bg="#222"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  _hover={{ bg: '#FFD700' }}
                  transition="all 0.3s"
                >
                  <Icon size={16} color="#FFD700" />
                </Box>
              ))}
            </HStack>
          </Box>
        </Flex>

        {/* Disclaimer */}
        <Box bg="#0d0d0d" borderRadius="8px" p={4} border="1px solid #1a1a1a">
          <Box fontSize="11px" color="#555" lineHeight="1.7" as="p">
            <Box as="span" color="#FFD700" fontWeight="700">
              For all online casino and betting sites in Bangladesh:
            </Box>
            <br />
            BET888 is Bangladesh's biggest and most trusted online casino and betting platform.
            We provide the best gaming experience for our users. Please stay aware and
            play responsibly. Our platform is open to users aged 18+.
            Gambling can be addictive, please play consciously.
          </Box>
          <Text
            fontSize="11px"
            color="#FFD700"
            mt={2}
            cursor="pointer"
            textDecoration="underline"
            fontWeight="600"
          >
            See More
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
