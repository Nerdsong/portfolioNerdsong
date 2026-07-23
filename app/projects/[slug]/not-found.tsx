import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProjectNotFound() {
  return (
    <div className="section-spacing">
      <div className="site-container flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-muted">Proyecto no encontrado</p>
        <Button asChild>
          <Link href="/#projects">Volver a proyectos</Link>
        </Button>
      </div>
    </div>
  );
}
