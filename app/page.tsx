import CompanionCard from "@/components/CompanionCard"
import CompanionList from "@/components/CompanionList"
import Cta from "@/components/CTA"

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>


      <section className="home-section">
        <CompanionCard 
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration= {45}
          color="#ffda6e"
        />
        <CompanionCard
        id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration= {30}
          color="#e5d0ff"

        />
        <CompanionCard 
        id="789"
          name="Verba the Vocabulary Builder"
          topic="Language"
          subject="English Literature"
          duration= {45}
          color="#BDE7FF"
        
        />
      </section>

      <section className="home-section">
        <CompanionList />
        <Cta />
      </section>
    </main>
  )
}

export default Page