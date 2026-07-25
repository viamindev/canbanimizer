import { useParams } from "react-router-dom";

export function ProjectPage() {
  const { projectId } = useParams<{
    projectId: string;
  }>();

  return (
    <main>
      <h1>Project</h1>
      <p>{projectId}</p>
    </main>
  );
}
