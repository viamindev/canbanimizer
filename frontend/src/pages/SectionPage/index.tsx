import { useParams } from "react-router-dom";

export function SectionPage() {
  const {
    projectId,
    sectionId,
  } = useParams<{
    projectId: string;
    sectionId: string;
  }>();

  return (
    <main>
      <h1>Section</h1>
      <p>Project: {projectId}</p>
      <p>Section: {sectionId}</p>
    </main>
  );
}
