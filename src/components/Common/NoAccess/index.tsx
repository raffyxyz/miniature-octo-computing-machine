"use client";
import { useRouter } from "next/navigation";
import { Title, Text, Button, Container, Group } from "@mantine/core";
import classes from "./index.module.css";

export function NoAccess() {
  const router = useRouter();
  return (
    <Container className={classes.root}>
      <div className={classes.label}>Not Allowed</div>
      <Title className={classes.title}>
        You tried to access a protected page.
      </Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, you can&apos;t access this page due to user restriction.
        You may have mistyped the address, or the page has been moved to another
        URL.
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md" onClick={() => router.back()}>
          Take me back
        </Button>
      </Group>
    </Container>
  );
}
