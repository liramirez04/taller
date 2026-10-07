import ProgressBar from "@/components/progress/Progress";
import Form from "@/components/form/Form"
import Timer from "@/components/timer/Timer"

export default function Home() {
  return (
    <main>
      <ProgressBar />
      <Form/>
      <Timer/>
    </main>
  );
}