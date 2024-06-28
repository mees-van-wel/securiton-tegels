"use client";

import Image from "next/image";
import logo from "@/assets/logo.jpg";
import { Button, Drawer, Group, NavLink, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconTags,
  IconMenu2,
  IconShieldCheck,
  IconAccessible,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const url = usePathname();
  const pathname = useMemo(() => `/${url.split("/")[1]}`, [url]);

  return (
    <header className="w-full flex bg-[#191d1e] text-white items-center justify-between gap-4 p-4 shadow-md">
      <Image src={logo} alt="Logo" height={75} className="h-14 w-auto" />
      <Button className="w-10 h-10 p-0" variant="outline">
        <IconMenu2 onClick={open} />
      </Button>
      <Drawer
        opened={opened}
        onClose={close}
        title={<Title>Securiton</Title>}
        classNames={{
          header: "bg-stone-800 text-white",
          content: "bg-stone-800 text-white",
        }}
      >
        <nav>
          <Stack>
            <Stack gap={0}>
              <NavLink
                className="rounded-t-md"
                component={Link}
                onClick={close}
                href="/"
                variant={pathname === "/" ? "filled" : undefined}
                label="Home"
                leftSection="-"
                active
              />
              <NavLink
                component={Link}
                onClick={close}
                href="/innovatie"
                variant={pathname === "/innovatie" ? "filled" : undefined}
                label="Innovatie"
                leftSection="-"
                active
              />
              <NavLink
                component={Link}
                onClick={close}
                href="/verkoop-en-distributie"
                variant={
                  pathname === "/verkoop-en-distributie" ? "filled" : undefined
                }
                label="Verkoop en distributie"
                leftSection="-"
                active
              />
              <NavLink
                component={Link}
                onClick={close}
                href="/contact"
                variant={pathname === "/contact" ? "filled" : undefined}
                label="Contact"
                leftSection="-"
                active
              />
              <NavLink
                component={Link}
                onClick={close}
                href="/nieuws-en-persberichten"
                variant={
                  pathname === "/nieuws-en-persberichten" ? "filled" : undefined
                }
                label="Nieuws en persberichten"
                leftSection="-"
                active
              />
              <NavLink
                className="rounded-b-md"
                component={Link}
                onClick={close}
                href="/projecten"
                variant={pathname === "/projecten" ? "filled" : undefined}
                label="Projecten"
                leftSection="-"
                active
              />
            </Stack>
            <Stack gap={0}>
              <Group gap="sm" mb="sm">
                <IconShieldCheck size="1.5rem" />
                <Title order={3}>Veiligheid</Title>
              </Group>
              <NavLink
                component={Link}
                onClick={close}
                className="rounded-t-md"
                href="/problematiek"
                variant={pathname === "/problematiek" ? "filled" : undefined}
                label="Problematiek"
                leftSection="-"
                active
              />
              <NavLink
                component={Link}
                onClick={close}
                href="/valdemping"
                variant={pathname === "/valdemping" ? "filled" : undefined}
                label="Valdemping"
                leftSection="-"
                active
              />
              <NavLink
                component={Link}
                onClick={close}
                className="rounded-b-md"
                href="/oplossing"
                variant={pathname === "/oplossing" ? "filled" : undefined}
                label="Oplossing"
                leftSection="-"
                active
              />
            </Stack>
            <Stack gap={0}>
              <Group gap="sm" mb="sm">
                <IconAccessible size="1.5rem" />
                <Title order={3}>Toegankelijkheid</Title>
              </Group>
              <NavLink
                component={Link}
                onClick={close}
                className="rounded-t-md"
                href="/doelgroep"
                variant={pathname === "/doelgroep" ? "filled" : undefined}
                label="Doelgroep"
                leftSection="-"
                active
              />
              <NavLink
                component={Link}
                onClick={close}
                href="/mobiliteit"
                variant={pathname === "/mobiliteit" ? "filled" : undefined}
                label="Mobiliteit"
                leftSection="-"
                active
              />
              <NavLink
                component={Link}
                onClick={close}
                className="rounded-b-md"
                href="/oplossingen"
                variant={pathname === "/oplossingen" ? "filled" : undefined}
                label="Oplossingen"
                leftSection="-"
                active
              />
            </Stack>
            <Stack gap={0}>
              <Group gap="sm" mb="sm">
                <IconTags size="1.5rem" />
                <Title order={3}>Producten</Title>
              </Group>
              <NavLink
                component={Link}
                onClick={close}
                className="rounded-t-md"
                href="/overzicht"
                variant={pathname === "/overzicht" ? "filled" : undefined}
                label="Overzicht"
                leftSection="-"
                active
              />
              <NavLink
                component={Link}
                onClick={close}
                href="/veiligheidstegels"
                variant={
                  pathname === "/veiligheidstegels" ? "filled" : undefined
                }
                label="Veiligheidstegels"
                leftSection="-"
                active
              />
              <NavLink
                component={Link}
                onClick={close}
                className="rounded-b-md"
                href="/oplossingen"
                variant={pathname === "/oplossingen" ? "filled" : undefined}
                label="Oplossingen"
                leftSection="-"
                active
              />
            </Stack>
          </Stack>
        </nav>
      </Drawer>
    </header>
  );
};
