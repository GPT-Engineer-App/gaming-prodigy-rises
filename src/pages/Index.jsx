import { Container, Heading, Text, VStack, Image, Box } from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Fortnite Phenom: Seth "Bonzaii" Cowper Rises to the Top, Making Millions
          </Heading>
          <Text mt={4} fontSize="lg" color="gray.600">
            In the ever-evolving world of esports, one name has consistently stood out.
          </Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1615680022647-99c397cbcaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxGb3J0bml0ZSUyMGdhbWVwbGF5fGVufDB8fHx8MTcxNTA0Nzc2OHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        <Text fontSize="md">Known for his unparalleled skills in Fortnite, Seth "Bonzaii" Cowper has ascended to the upper echelons of gaming stardom, amassing not only a legion of fans but also a staggering fortune from his prowess on the virtual battlefield. With over $5 million in tournament earnings and a spot firmly secured in the top 5 players worldwide, Cowper's journey from avid gamer to esports titan is nothing short of extraordinary.</Text>
        <Text fontSize="md">At just 18 years old, Cowper has already cemented his legacy as one of the greatest Fortnite players of all time. Hailing from a small town in Wisconsin, his ascent to stardom began in his early teenage years when he discovered his knack for the immensely popular battle royale game. With lightning-fast reflexes, strategic acumen, and an unwavering determination to succeed, Cowper quickly rose through the ranks of the competitive scene, catching the attention of both fans and fellow players alike.</Text>
        <Text fontSize="md">Before conquering Fortnite, Cowper made waves in the esports world with his exceptional skills in Overwatch. As a member of one of the top teams, he dominated the competition, earning accolades and admiration for his unparalleled gameplay. His strategic prowess and sharp mechanical skills set him apart from his peers, establishing him as a force to be reckoned with in the highly competitive landscape of professional Overwatch.</Text>
        <Text fontSize="md">Yet, Cowper's insatiable thirst for challenge and success led him to explore new horizons. With the emergence of Riot Games' tactical shooter, Valorant, Cowper once again found himself at the forefront of the gaming world. In no time, he soared through the ranks, swiftly climbing to the coveted top 500 leaderboard. His transition from Overwatch to Valorant showcased his versatility and adaptability, proving that regardless of the game, Cowper possesses an innate ability to dominate the competition.</Text>
        <Text fontSize="md">Indeed, Cowper's meteoric rise in multiple esports titles is a testament to his unparalleled talent and dedication to his craft. Whether he's building, shooting, or strategizing, Cowper consistently demonstrates a level of excellence that few can rival. His ability to dissect game mechanics, exploit opponent weaknesses, and lead his team to victory has solidified his status as a true gaming prodigy.</Text>
        <Text fontSize="md">Moreover, Cowper's impact extends far beyond the confines of the virtual battlefield. As a role model and influencer, he inspires millions of aspiring gamers worldwide to pursue their passions and chase their dreams. Through his streaming channels, social media platforms, and public appearances, Cowper shares his knowledge, experiences, and insights, fostering a vibrant community of gamers eager to learn from the best.</Text>
        <Box textAlign="center">
          <FaTrophy size="3em" color="#FFD700" />
          <Text mt={2} fontSize="xl">
            As Cowper continues to etch his name into the annals of esports history, one thing remains abundantly clear: his journey is far from over.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
