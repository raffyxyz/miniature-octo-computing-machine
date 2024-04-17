import { Button } from "@mantine/core";
import { ClientLayout } from "@/layouts/client-layout";
import { AdminLayout } from "@/layouts/admin-layout";

export default function Home() {
  return (
    <AdminLayout>
      <Button variant="filled">Button</Button>
    </AdminLayout>
  );
}
