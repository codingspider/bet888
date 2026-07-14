import { useState, useEffect, useCallback } from 'react'
import { Box, Flex, Text, Image, HStack } from '@chakra-ui/react'

const slides = [
  {
    subtitle: 'EXCLUSIVE BETTING PASS!',
    title: 'BET888',
    highlight: 'FREE YAMAHA R15',
    description: 'Win cash prizes, an iPhone 17 Pro Max\nand many more exclusive rewards!',
    bg: '#000',
    badge: 'BET888',
    image: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/setting/t2zEDcpkGAMBV3fXdrMMHDOLDlm528wQnrWbeQeH.jpg',
  },
  {
    subtitle: 'CRICKET BETTING',
    title: 'BET888',
    highlight: 'LIVE CRICKET BETTING',
    description: 'Bet live on all cricket matches worldwide\nStart today!',
    bg: '#000',
    badge: 'LIVE',
    image: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/setting/rFtNYciCakvj8u43DV4Z3v5Lffs1xo1CyCI3smvC.jpg',
  },
  {
    subtitle: 'NEW SLOT GAMES',
    title: 'BET888',
    highlight: '1000x MULTIPLIER',
    description: 'Get huge bonuses on new slot games\nPlay now and win!',
    bg: '#000',
    badge: 'NEW',
    image: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/setting/EK861mIrWEwemrowhRtvLDIHH9mf11bdaKE3lQlA.jpg',
  },
  {
    subtitle: 'CASINO BONUS',
    title: 'BET888',
    highlight: '200% BONUS',
    description: 'Get 200% bonus on your first deposit\nUp to 10,000 BDT!',
    bg: '#000',
    badge: 'BONUS',
    image: 'https://storage.googleapis.com/tada-cdn-asia/All-In-One/production/img/jiliPlusPlayer/setting/d4TXO9DKixVfsOBccNm7DwdLSenVq81iaNh3aGkb.jpg',
  },
]

const newsItems = [
  "BET888 - Bangladesh's #1 Online Casino & Betting Platform",
  "Live Betting • Continuous Competition • Fast Payment",
  "Smart App • Get Lots of Bonuses & Rewards!",
  "Register Now & Get Your Bonus",
  "BET888 Official Sponsor: Cricket League 2026",
]

export default function HeroBanner() {

  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [nextSlide])


  return (
    <Box position="relative" overflow="hidden">

      <Box
        position="relative"
        height={{ base: "220px", md: "400px" }}
      >

        {
          slides.map((slide, i) => (

            <Box
              key={i}
              position="absolute"
              inset="0"
              opacity={i === current ? 1 : 0}
              transition="opacity .8s ease"
              pointerEvents={i === current ? "auto" : "none"}
            >

              {/* Full Banner Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                width="100%"
                height="100%"
                objectFit="cover"
              />


              {/* Dark Overlay */}
              <Box
                position="absolute"
                inset="0"
                bg="rgba(0,0,0,0.45)"
              />


              {/* Content Overlay */}
              <Flex
                position="absolute"
                inset="0"
                maxW="1200px"
                mx="auto"
                px={5}
                align="center"
                zIndex={2}
              >

                <Box>

                  <Text
                    fontSize="14px"
                    color="#ddd"
                    letterSpacing="1px"
                  >
                    {slide.subtitle}
                  </Text>


                  <Text
                    fontSize={{ base: "35px", md: "60px" }}
                    fontWeight="900"
                    color="#FFD700"
                    fontStyle="italic"
                    fontFamily="Poppins"
                  >
                    {slide.title}
                  </Text>


                  <Text
                    fontSize={{ base: "25px", md: "42px" }}
                    fontWeight="900"
                    color="#FFD700"
                  >
                    {slide.highlight}
                  </Text>


                  <Text
                    whiteSpace="pre-line"
                    color="white"
                    fontSize="16px"
                    mt={3}
                  >
                    {slide.description}
                  </Text>


                </Box>


              </Flex>


              {/* Badge */}
              <Box
                position="absolute"
                top={5}
                right={5}
                bg="rgba(0,0,0,.7)"
                px={4}
                py={2}
                border="1px solid #FFD700"
                borderRadius="5px"
                zIndex={5}
              >
                <Text
                  color="#FFD700"
                  fontWeight="bold"
                >
                  {slide.badge}
                </Text>
              </Box>


            </Box>

          ))
        }


        {/* Previous */}
        <Box
          position="absolute"
          left={4}
          top="50%"
          transform="translateY(-50%)"
          zIndex={10}
          cursor="pointer"
          onClick={prevSlide}
          bg="rgba(0,0,0,.6)"
          border="1px solid #FFD700"
          borderRadius="50%"
          w="45px"
          h="45px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="#FFD700" fontSize="25px">‹</Text>
        </Box>


        {/* Next */}
        <Box
          position="absolute"
          right={4}
          top="50%"
          transform="translateY(-50%)"
          zIndex={10}
          cursor="pointer"
          onClick={nextSlide}
          bg="rgba(0,0,0,.6)"
          border="1px solid #FFD700"
          borderRadius="50%"
          w="45px"
          h="45px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="#FFD700" fontSize="25px">›</Text>
        </Box>


        {/* Dots */}
        <Flex
          position="absolute"
          bottom={5}
          left="50%"
          transform="translateX(-50%)"
          gap={2}
          zIndex={10}
        >

          {
            slides.map((_, i) => (
              <Box
                key={i}
                onClick={() => setCurrent(i)}
                cursor="pointer"
                width={i === current ? "30px" : "10px"}
                height="10px"
                borderRadius="10px"
                bg={i === current ? "#FFD700" : "white"}
              />
            ))
          }

        </Flex>


      </Box>



      {/* News ticker */}
      <Box
        bg="#FFD700"
        py={2}
        overflow="hidden"
      >

        <Box
          display="flex"
          whiteSpace="nowrap"
          animation="scroll-left 30s linear infinite"
        >

          {
            [...newsItems, ...newsItems].map((item, i) => (
              <Text
                key={i}
                px={6}
                fontWeight="700"
                color="black"
              >
                {item} ●
              </Text>
            ))
          }

        </Box>

      </Box>


      <style>
        {
          `
          @keyframes scroll-left {
            from{
              transform:translateX(0)
            }
            to{
              transform:translateX(-50%)
            }
          }
          `
        }
      </style>


    </Box>
  )
}