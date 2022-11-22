export default function Container(props) {
  return (
    <main className="w-full h-full">
      {props.children}
    </main>
  )
}