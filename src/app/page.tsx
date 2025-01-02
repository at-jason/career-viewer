// src/app/page.tsx
import { CareerViewer } from '../components/CareerViewer.tsx';

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col items-center justify-between px-4 md:p-24">
  <CareerViewer />
</main>
  );
}
