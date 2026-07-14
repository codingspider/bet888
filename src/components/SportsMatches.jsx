import { Box, Flex, Text, HStack, VStack } from '@chakra-ui/react'

const matches = [
  {
    league: 'One Day International',
    live: true,
    date: 'Jul 14, 2026 20:30:00',
    team1: { flag: '🏴', name: 'West Indies', score: '6/0', overs: '(0.5)' },
    team2: { flag: '🇳🇿', name: 'New Zealand', score: '0/0', overs: '(0)' },
  },
  {
    league: 'Bangladesh Cricket League',
    live: true,
    date: 'Jul 14, 2026 10:30:00',
    team1: { flag: '🇧🇩', name: 'Boost Defenders', score: '', overs: '' },
    team2: { flag: '🇧🇩', name: 'Speen Ghar Tigers', score: '', overs: '' },
  },
  {
    league: 'Bangladesh Cricket League',
    live: false,
    date: 'Jul 14, 2026 15:15:00',
    team1: { flag: '🇧🇩', name: 'Bund-e-Amir Dragons', score: '', overs: '' },
    team2: { flag: '🇧🇩', name: 'Minas Ainak Knights', score: '', overs: '' },
  },
  {
    league: 'One Day International',
    live: true,
    date: 'Jul 14, 2026 16:00:00',
    team1: { flag: '🏴', name: 'England', score: '', overs: '' },
    team2: { flag: '🇮🇳', name: 'India', score: '', overs: '' },
  },
  {
    league: 'One Day International Women',
    live: false,
    date: 'Jul 15, 2026 15:45:00',
    team1: { flag: '🇮🇪', name: 'Ireland W', score: '', overs: '' },
    team2: { flag: '🏴', name: 'West Indies W', score: '', overs: '' },
  },
]

export default function SportsMatches() {
  return (
    <Box bg="#111" py={4}>
      <Flex maxW="1200px" mx="auto" px={4}>
        <Flex
          gap={3}
          overflowX="auto"
          w="100%"
          pb={2}
          css={{
            '&::-webkit-scrollbar': { height: '4px' },
            '&::-webkit-scrollbar-track': { background: '#1a1a1a' },
            '&::-webkit-scrollbar-thumb': { background: '#FFD700', borderRadius: '4px' },
          }}
        >
          {matches.map((match, i) => (
            <Box
              key={i}
              minW="220px"
              bg="#1a1a1a"
              borderRadius="10px"
              p={3}
              borderLeft="3px solid #FFD700"
              flexShrink={0}
              _hover={{ bg: '#222' }}
              cursor="pointer"
            >
              {/* League Header */}
              <Flex align="center" gap={2} mb={1.5}>
                <Box
                  bg={match.live ? '#e74c3c' : '#FFD700'}
                  color="white"
                  fontSize="10px"
                  fontWeight="800"
                  px={2}
                  py={0.5}
                  borderRadius="3px"
                  whiteSpace="nowrap"
                >
                  {match.live ? '● LIVE' : 'UPCOMING'}
                </Box>
                <Text fontSize="11px" color="#FFD700" fontWeight="700" whiteSpace="nowrap">
                  {match.league}
                </Text>
              </Flex>

              {/* Date */}
              <Text fontSize="11px" color="#666" mb={2.5}>
                {match.date}
              </Text>

              {/* Teams */}
              <VStack gap={1.5} align="stretch">
                <Flex align="center" justify="space-between">
                  <HStack gap={1.5}>
                    <Text fontSize="14px">{match.team1.flag}</Text>
                    <Text fontSize="12px" color="white" fontWeight="600">
                      {match.team1.name}
                    </Text>
                  </HStack>
                  {match.team1.score && (
                    <Box as="span" fontSize="12px" color="#FFD700" fontWeight="700">
                      {match.team1.score} <Box as="span" color="#888" fontWeight="400">{match.team1.overs}</Box>
                    </Box>
                  )}
                </Flex>

                <Flex align="center" justify="space-between">
                  <HStack gap={1.5}>
                    <Text fontSize="14px">{match.team2.flag}</Text>
                    <Text fontSize="12px" color="white" fontWeight="600">
                      {match.team2.name}
                    </Text>
                  </HStack>
                  {match.team2.score && (
                    <Box as="span" fontSize="12px" color="#FFD700" fontWeight="700">
                      {match.team2.score} <Box as="span" color="#888" fontWeight="400">{match.team2.overs}</Box>
                    </Box>
                  )}
                </Flex>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
