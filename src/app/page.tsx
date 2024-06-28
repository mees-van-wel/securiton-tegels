"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import { Group, Title, Text, Stack, Badge, Flex, List } from "@mantine/core";
import Image from "next/image";
import tegelGeel from "@/assets/tegel-geel.jpg";
import tegelZwart from "@/assets/tegel-zwart.jpg";
import { IconCheck } from "@tabler/icons-react";
import mkbTop from "@/assets/mkb-top.png";
import Link from "next/link";

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Stack p="xl" gap="4rem">
      <Stack gap="xl" maw={900}>
        <Group justify="space-between">
          <Badge
            leftSection={<IconCheck size="1rem" stroke={4} />}
            variant="outline"
            size="lg"
          >
            Duurzaam
          </Badge>
          <Badge
            leftSection={<IconCheck size="1rem" stroke={4} />}
            variant="outline"
            size="lg"
          >
            Betrouwbaar
          </Badge>
          <Badge
            leftSection={<IconCheck size="1rem" stroke={4} />}
            variant="outline"
            size="lg"
          >
            Onderhoudsvrij
          </Badge>
          <Badge
            leftSection={<IconCheck size="1rem" stroke={4} />}
            variant="outline"
            size="lg"
          >
            Veilig
          </Badge>
        </Group>
        <Title>Securiton rubberen tegels</Title>
        <Text className="text-pretty" w="100%">
          De openbare ruimte vereist in toenemende mate bijzondere aandacht. Dat
          geldt voor zowel de inrichting- als de te gebruiken materialen in
          Nederland en in België. Onze{" "}
          <Link href="/producten">rubberen tegels</Link> zijn speciaal ontworpen
          voor twee verschillende doelgroepen met ieder hun eigen toepassing in
          de openbare ruimte
        </Text>
      </Stack>
      <Carousel
        // plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideGap="md"
        loop
        draggable={false}
        withControls={false}
      >
        <Carousel.Slide>
          <Stack
            style={{
              background: "url('/bg.png')",
              backgroundSize: "contain",
            }}
            className="border-2 rounded-md border-[#8d93a8]"
            justify="space-between"
            gap={0}
          >
            <Flex p="md" className="bg-[#8d93a8]" justify="center" w="100%">
              <Image src={tegelGeel} alt="Tegel Geel" width={150} />
            </Flex>
            <Stack
              p="md"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <Title order={3}>Duurzaamheid</Title>
              <Text>
                Ondergronden in de openbare ruimte dienen over een lengte van
                jaren bestand te zijn tegen zware stedelijke belasting en
                extreme weersomstandigheden. Het materiaal moet ook bestendig
                zijn tegen slijtage. De Securiton combinatie van primaire rubber
                en beton geeft de beste garantie voor een duurzame ondergrond.
              </Text>
            </Stack>
          </Stack>
          {/* <Group
            className="border-2 rounded-md border-[#8d93a8]"
            justify="space-between"
            wrap="nowrap"
            gap="xl"
          >
            <Image src={tegelGeel} alt="Tegel Geel" width={150} />
            <Stack>
              <Title order={3}>Duurzaamheid</Title>
              <Text>
                Ondergronden in de openbare ruimte dienen over een lengte van
                jaren bestand te zijn tegen zware stedelijke belasting en
                extreme weersomstandigheden. Het materiaal moet ook bestendig
                zijn tegen slijtage. De Securiton combinatie van primaire rubber
                en beton geeft de beste garantie voor een duurzame ondergrond.
              </Text>
            </Stack>
            <Image src={tegelZwart} alt="Tegel Zwart" width={150} />
          </Group> */}
        </Carousel.Slide>
      </Carousel>
      <Stack>
        <Group align="stretch" wrap="nowrap">
          <div
            className="rounded-md"
            style={{
              minWidth: "2px",
              backgroundColor: "black",
            }}
          />
          <Title order={3}>
            Waarschuwings- en informatietegels voor mensen met een visuele
            beperking.
          </Title>
        </Group>
        <Text>
          Securiton levert hoogwaardige rubberen (noppen) tegels, die dienen als
          waarschuwingsmarkering, binnen geleidelijnen voor blinden en
          slechtzienden. Naast de voor Nederland unieke noppenstructuur heeft
          deze tegel ook holle ruimtes tussen beton en rubber, waardoor een
          ideaal klank kontrast ontstaat : de rubberen klanktegel.
        </Text>
        <Text>
          Daarnaast levert Securiton ook rubberen informatiemarkeringen, die de
          visueel gehandicapte attent maakt op:
        </Text>
        <List className="list-disc">
          <List.Item>Een verandering in de geleideroute</List.Item>
          <List.Item>
            Ter plekke aanwezige informatie via bijvoorbeeld een auditieve paal
          </List.Item>
          <List.Item>De aanwezigheid van een abri</List.Item>
          <List.Item>Etc.</List.Item>
        </List>
        <Text>
          Lees meer over noppen{" "}
          <Link href="/producten/waarschuwingstegels">waarschuwingstegels</Link>{" "}
          of <Link href="/producten/waarschuwingstegels">informatietegels</Link>
          .
        </Text>
        <Text>
          De Securiton rubber tegels voldoen aan de meest recente CROW normen,
          zoals de instapmarkering voor Halteplaatsen. Hierdoor worden blinden
          en slechtzienden in hun mobiliteit voorzien volgens de geldende CROW
          normen.
        </Text>
      </Stack>
      <Stack>
        <Group align="stretch" wrap="nowrap">
          <div
            className="rounded-md"
            style={{
              minWidth: "2px",
              backgroundColor: "black",
            }}
          />
          <Title order={3}>
            Valdempende veiligheidstegels voor Kinderen op Speelplaatsen
          </Title>
        </Group>
        {/* <Image src={} /> */}
        <Text>
          Securiton levert hoogwaardige rubberen veiligheidstegels die dienen
          als valdempende ondergrond voor speeltoestellen en speelplaatsen. Deze
          valdempende rubbertegels leveren een grote bijdrage aan de veiligheid
          van speeltoestellen.
        </Text>
        <Text>
          Lees meer over{" "}
          <Link href="/producten/veiligheidstegels">Veiligheidstegels</Link>
        </Text>
        <Text>
          De Securiton rubberen tegels kenmerken zich voorts door de speciale
          gepatenteerde verankering van het rubber in de beton en het speciaal
          ontworpen slipvrij- afwateringsprofiel, waardoor een duurzame – zich
          onderscheidende constructie met holle ruimtes - ontstaat.
        </Text>
        <Text>
          Securiton staat voor bodemmaterialen van de hoogste kwaliteit. Onder
          normale omstandigheden gaan de Securiton rubber tegels meer dan 15
          jaar mee, dus geen onderhoud of vervanging van versleten materiaal.
        </Text>
        <Text>
          De combinatie van beton met een dikke rubberen bovenlaag geeft
          bovendien de garantie dat over al deze jaren wordt voldaan aan
          wettelijke normen en richtlijnen
        </Text>
      </Stack>
      <Stack>
        <Group align="stretch" wrap="nowrap">
          <div
            className="rounded-md"
            style={{
              minWidth: "2px",
              backgroundColor: "black",
            }}
          />
          <Title order={3}>Securiton bestekservice</Title>
        </Group>
        <Text>
          De bestekomschrijvingen van de Securiton producten zijn online
          beschikbaar! Hierdoor kunt u als bestekschrijver, de
          bestekomschrijvingen direct inpassen uw bestekplan.
        </Text>
        <Text>
          Onze bestekservice omvat teksten in RAW, STABU en Spe-X (voor
          Nederland) en C3A (voor België).
        </Text>
        <Text>
          De Securiton tegels voldoen aan de meest recente CROW normen.
        </Text>
        <a
          href="https://www.kvkinnovatietop100.nl/site/Rubet-Securitontegels-klanktegel-visueel-gehandicapten"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Group wrap="nowrap">
            <Image alt="MKB Innovatie top 100 Badge" src={mkbTop} />
            <Text>Klanktegel Securiton in MKB Innovatie top 100</Text>
          </Group>
        </a>
      </Stack>
    </Stack>
  );
}
