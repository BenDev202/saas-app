import CompanionCard from "@/components/CompanionCard"
import CompanionList from "@/components/CompanionList"
import Cta from "@/components/CTA"

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>


      <section className="home-section">
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>

      <section className="home-section">
        <CompanionList />
        <Cta />
      </section>
    </main>
  )
}

export default Page