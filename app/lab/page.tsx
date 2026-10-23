
import LabIntro from "@/components/Lab/LabIntro";
import LabStatement from "@/components/Lab/LabStatement";
import LabProjects from "@/components/Lab/LabProjects";
import LabWorkInProgress from "@/components/Lab/LabWorkInProgress";

export default function LabPage() {
  return (
    <main>
      <LabIntro />
      <LabStatement />
      <LabProjects />
      <LabWorkInProgress />
    </main>
  );
}
