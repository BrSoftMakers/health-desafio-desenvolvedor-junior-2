interface PageProps {
  className?: string;
  children: React.ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <div className={`w-full bg-slate-50 h-screen ${props.className}`}>
      {props.children}
    </div>
  );
}
