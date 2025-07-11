import CompanionsCard from "@/components/CompanionsCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilters from "@/components/SubjectFilters";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

async function CompaniansLibrary({ searchParams }: SearchParams) {
  const filters = await searchParams;
  const subject = filters.subject || "";
  const topic = filters.topic || "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companions Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilters />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionsCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
}

export default CompaniansLibrary;
