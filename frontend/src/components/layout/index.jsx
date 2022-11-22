import Header from "../header";
import Container from "../container";
import Footer from "../footer";


export default function Layout(props){
  return (
    <div className="font-sans">
      <Header/>
      <Container>

        {props.children}
        
      </Container>
      <Footer />
    </div>
      
    
  )
}