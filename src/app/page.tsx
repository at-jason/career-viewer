// src/app/page.tsx
import { CareerViewer } from '../components/CareerViewer.tsx';

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#17212B]">
  <CareerViewer />
</main>
  );
}
