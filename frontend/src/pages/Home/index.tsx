export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold text-center text-slate-900">
        Welcome to <span className="text-slate-500">Next.js</span> +{' '}
        <span className="text-slate-500">Tailwind CSS</span>!
      </h1>
      <p className="mt-4 text-xl text-center text-slate-700">
        This is a starter template for your next project.
      </p>
    </div>
  );
}
