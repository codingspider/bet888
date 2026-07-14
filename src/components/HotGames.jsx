import { Box, Flex, Text, Grid, GridItem, Image } from '@chakra-ui/react'

const games = [
  { name: 'Fortune Garuda 500', provider: 'JILI', gradient: 'linear-gradient(135deg, #8B0000 0%, #B22222 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/zzggh2iutlUXBA48oMykK3xLWFZuT3L6xNNENHF9.png', hot: true, badge: '500x' },
  { name: '8888 Super Ace', provider: 'JILI', gradient: 'linear-gradient(135deg, #006400 0%, #228B22 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/BUWXD2442N7JCkKoSlvCtdMZdlh6AaYt008tCiI4.png', hot: true, badge: '1000x' },
  { name: 'Aviator', provider: 'AVIATOR STUDIO', gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/a3YvmxnDIz1VlNumJYIaIclSMY4sObYDSAo6wEkY.png', hot: false },
  { name: 'Super Ace', provider: 'JILI', gradient: 'linear-gradient(135deg, #000080 0%, #4169E1 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/a3YvmxnDIz1VlNumJYIaIclSMY4sObYDSAo6wEkY.png', hot: false },
  { name: 'Aviator', provider: 'SPRIBE', gradient: 'linear-gradient(135deg, #8B0000 0%, #CD5C5C 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/kyAe6CmlKOQQvSARzB6jJyIFTAuiXffqVavgIXCT.png', hot: false },
  { name: 'Fortune Gems 500', provider: 'JILI', gradient: 'linear-gradient(135deg, #4a0080 0%, #8B008B 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/fYyVJakEZWRoyjVptM1SuABMTy0VkaCUaUXEmvRs.png', hot: true, badge: '500x' },
  { name: 'Wild Bounty ShowDown', provider: 'PG SOFT', gradient: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/GdEFoX3ljSMUSS38e7vSoOtjDB6WqqugErp0yxsJ.png', hot: false },
  { name: 'Fruity Time', provider: 'EVOLUTION GAMING', gradient: 'linear-gradient(135deg, #006400 0%, #32CD32 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/WiM4HQZ7tASSxtngkMuoK6UEvd7efiebK10TcJIx.png', hot: false },
  { name: 'Crazy Time', provider: 'EVOLUTION GAMING', gradient: 'linear-gradient(135deg, #800080 0%, #DA70D6 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/k8LrPvNIrwPQp0VwggLsMu1ah36D7c1486ScETVe.png', hot: false },
  { name: 'Fortune Gems 2', provider: 'JILI', gradient: 'linear-gradient(135deg, #006400 0%, #00AA00 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/dxfG27fF5KnRocHuilqNSXBRXe6Jt9GBwbUPNlY8.png', hot: false },
  { name: 'Boxing King', provider: 'JILI', gradient: 'linear-gradient(135deg, #8B0000 0%, #FF4500 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/cgr6hONAOtrtfLnxpQIarDFXzBhj6ZIyVHWWyPqi.png', hot: false },
  { name: 'Super Ace Deluxe', provider: 'JILI', gradient: 'linear-gradient(135deg, #000080 0%, #0000CD 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/Ob4xMDFLb77cwpVuPSoaddLyBGnRo4tfREcRrvRn.png', hot: false },
  { name: 'Ice Fishing', provider: 'EVOLUTION GAMING', gradient: 'linear-gradient(135deg, #006994 0%, #40E0D0 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/EMA0uJbnFYC9Ym5f7thCyNvFIoWvgOjFNjgvhC9U.png', hot: false },
  { name: '7up7down', provider: 'JILI', gradient: 'linear-gradient(135deg, #006400 0%, #00FF7F 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/EMA0uJbnFYC9Ym5f7thCyNvFIoWvgOjFNjgvhC9U.png', hot: false },
  { name: 'Aviatrix', provider: 'AVIATRIX', gradient: 'linear-gradient(135deg, #4a0080 0%, #9932CC 100%)', img: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/games/vYE0FhoQMzYFLISmrfaHZ8pQxsJ405qul6D2RjzA.png', hot: true, badge: 'NEW' },
]

const GameCard = ({ game }) => {
  return (
    <Box
      bg="#1a1a1a"
      borderRadius="10px"
      overflow="hidden"
      cursor="pointer"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 25px rgba(255,215,0,0.15)' }}
      position="relative"
      border="1px solid #2a2a2a"
    >
      {/* Game Thumbnail */}
      <Box
        h="120px"
        bg={game.gradient}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
      >
        <Image
          src={game.img}
          alt={game.name}
          w="100%"
          h="100%"
          objectFit="cover"
          fallback={
            <Text fontSize="42px" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))">
              {game.name.includes('Aviator') || game.name.includes('Aviatrix') ? '✈️' :
                game.name.includes('Fortune') ? '💎' :
                  game.name.includes('Ace') ? '🃏' :
                    game.name.includes('Time') ? '🎡' :
                      game.name.includes('Boxing') ? '🥊' :
                        game.name.includes('Ice') ? '🧊' :
                          game.name.includes('7up') ? '🎲' : '🎰'}
            </Text>
          }
        />

        {/* Hot badge */}
        {game.hot && (
          <Box
            position="absolute"
            top={2}
            left={2}
            bg="red.600"
            color="white"
            fontSize="10px"
            fontWeight="800"
            px={2}
            py={0.5}
            borderRadius="3px"
            letterSpacing="0.5px"
          >
            HOT
          </Box>
        )}

        {/* Multiplier badge */}
        {game.badge && (
          <Box
            position="absolute"
            top={2}
            right={2}
            bg="orange.500"
            color="white"
            fontSize="10px"
            fontWeight="800"
            px={2}
            py={0.5}
            borderRadius="3px"
          >
            {game.badge}
          </Box>
        )}
      </Box>

      {/* Game Info */}
      <Box p={2}>
        <Text
          fontSize="13px"
          fontWeight="600"
          color="white"
          noOfLines={1}
          lineHeight="1.3"
        >
          {game.name}
        </Text>
        <Text
          fontSize="10px"
          color="#666"
          textTransform="uppercase"
          letterSpacing="0.5px"
          mt={0.5}
        >
          {game.provider}
        </Text>
      </Box>
    </Box>
  )
}

export default function HotGames() {
  return (
    <Box bg="#111" py={5}>
      <Flex maxW="1200px" mx="auto" px={4} direction="column">
        {/* Section Title */}
        <Box mb={4}>
          <Text
            fontSize="16px"
            fontWeight="800"
            color="#FFD700"
            pb={2}
            borderBottom="2px solid #FFD700"
            display="inline-block"
          >
            Hot Games
          </Text>
        </Box>

        {/* Games Grid - 5 columns */}
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={3}
        >
          {games.map((game, i) => (
            <GridItem key={i}>
              <GameCard game={game} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  )
}
