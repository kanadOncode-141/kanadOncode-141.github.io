import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import Githubcalendar from "react-github-calendar";
function Gitgraph(){

    return (
        <>
            <Box fontWeight={"bold"} >
                <Center p={"12"}>
                    <Heading size={"md"} >My GitHub Calender</Heading>
                </Center>
                <Githubcalendar
                    username="kanadOncode-141"
                    blockSize={18}
                    blockMargin={5}
                    fontSize={16}
                    color={"green"}
                />
            </Box>
        </>
    );
};

export default Gitgraph;