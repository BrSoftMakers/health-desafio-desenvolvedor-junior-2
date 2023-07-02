import { Navbar } from '../../NavBar';

interface PageProps {
  className?: string;
  children: React.ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <div className={`flex flex-col w-full bg-slate-50 h-screen ${props.className}`}>
      <Navbar />
      {props.children}
    </div>
  );
}
