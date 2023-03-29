import { Box, Button, Flex, Grid, GridItem, Heading, Image, Spacer, Text, VStack } from "@chakra-ui/react"

function Home(){
    return(
        <>
            <Box
                bgPosition="center"
                bgSize="contain"
                bgRepeat="no-repeat"
                h="100%"
                w="100%"
                mt={"4vh"}
                cursor="pointer"
                border={"1px solid black"}
            >
                <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1920/v1677857264/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/BPS_Homepage_SFC_v2.png" /> 
            </Box>
            <Box mt="5vh"  cursor="pointer">
                <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1920/v1675793769/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/CLUB-Homepage_Banner.png" h="30vh"
                w="100%" />
                <Button bgColor={"white"} color="black" size={"md"} pos="relative" bottom={"7vh"} right="5px">SHOP NOW</Button>
            </Box>
            <Flex height={"65vh"} width={"100%"} mt={"1vh"}>
                <Box
                h="100%"
                w="100%"
                width={"49vw"}
                cursor="pointer"
                >
                    <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1677858198/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/sfc_homepage_sub_tradein.png" />
                    <VStack spacing={4} color={"white"} pos={"relative"} bottom="50vh">
                    <Text fontWeight={"bold"} fontSize={"2xl"}>--SPRING--</Text>
                        <Heading fontWeight={"bold"} size={"2xl"}>ROD AND REEL</Heading>
                        <Heading fontWeight={"bold"} size={"2xl"}>TREAD-IN</Heading>
                        <Text fontSize={"2xl"}>SAVE UPTO $100 | IN-STORE ONLY</Text>
                        <Button pos={"relative"} top="1vh" bgColor={"white"} color="black" size={"lg"}>SHOP NOW</Button>
                    </VStack>
                </Box>
                <Spacer />
                <Box
                h="100%"
                w="100%"
                width={"49vw"}
                cursor="pointer"
                >
                    <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1677858198/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/sfc_homepage_sub_rodreels_bps.png" />
                    <VStack color={"white"} pos={"relative"} bottom="35vh">
                        <Heading fontWeight={"bold"} size={"2xl"}>JOHNNY MORRIS</Heading>
                        <Heading fontWeight={"bold"} size={"2xl"}>RODS & REELS</Heading>
                        <Button bgColor={"white"} color="black" pos={"relative"} top="3vh" size={"lg"}>SHOP NOW</Button>
                    </VStack>
                </Box>
            </Flex>
            <Flex height={"45vh"} width={"100%"} mt={"1vh"}>
                <Box
                h="100%"
                w="100%"
                width={"50vw"}
                cursor="pointer"
                >
                    <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_930/v1678485795/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/tracker-left.png" />
                </Box>
                <Spacer />
                <Box
                h="100%"
                w="100%"
                width={"50vw"}
                cursor="pointer"
                >
                    <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_930/v1678485795/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/tracker-right.png" />
                </Box>
            </Flex>
            <Box mt={"3vh"} width={"100%"} height="55vh">
                <Text fontSize={"4xl"} fontWeight="bold">SHOP BY CATEGORIES</Text>
                <Grid mt={"4vh"} gridTemplateColumns={"repeat(5,1fr)"} gap="10px">
                    <GridItem cursor="pointer">
                        <VStack>
                            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-marine.png" />
                            <Text fontSize={"2xl"} fontWeight="semibold"> MARINE ELECTRONICS</Text>
                        </VStack>
                    </GridItem>
                    <GridItem cursor="pointer">
                        <VStack>
                            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-reel.png" />
                            <Text fontSize={"2xl"} fontWeight="semibold">FISHING REELS</Text>
                        </VStack>
                    </GridItem>
                    <GridItem cursor="pointer">
                        <VStack>
                            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-trolling-motor.png" />
                            <Text fontSize={"2xl"} fontWeight="semibold"> TROLLING MOTORS</Text>
                        </VStack>
                    </GridItem>
                    <GridItem cursor="pointer">
                        <VStack>
                            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-jigs.png" />
                            <Text fontSize={"2xl"} fontWeight="semibold"> JIGS</Text>
                        </VStack>
                    </GridItem>
                    <GridItem cursor="pointer">
                        <VStack>
                            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1677080754/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-fishing-clothing.png" />
                            <Text fontSize={"2xl"} fontWeight="semibold">FISHING CLOTHING</Text>
                        </VStack>
                    </GridItem>
                </Grid>
            </Box>
        </>
    )
}

export default Home