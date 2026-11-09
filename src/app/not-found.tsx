import type { Metadata } from "next";
import { BookingButton, Container, CtaRow, TextLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="text-7xl text-brand">404</p>
      <h1 className="enbi-h2 mt-6">No encontramos esta página</h1>
      <p className="mt-3 text-lg text-black/60">Puede que se haya movido o que el enlace esté mal escrito.</p>
      <CtaRow>
        <BookingButton>Agendar reunión</BookingButton>
      </CtaRow>
      <p className="mt-8">
        <TextLink href="/">Volver al inicio</TextLink>
      </p>
    </Container>
  );
}
