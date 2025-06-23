import CompanionsCard from "@/components/CompanionsCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/Cta";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl ">Popular Companions</h1>
      <section className="home-section">
        <CompanionsCard
          id="1"
          title="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          color="#ffda6e"
          duration={45}
        />
        <CompanionsCard
          id="2"
          title="Countsy the Number Wizard"
          topic=" Derivatives & Integrals"
          subject="Maths"
          color="#e5d0ff"
          duration={30}
        />
        <CompanionsCard
          id="3"
          title="Verba the Vocabulary Builder"
          topic="English Literature "
          subject="Language"
          color="#dbe7ff"
          duration={30}
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />

        <Cta />
      </section>
    </main>
  );
};

export default Page;
