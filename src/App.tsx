import { MainLayout } from '@/layouts';
import { tw } from "twind";
import { ButtonBoard, ColorCanvas} from "@/components";

function App() {
  return (
    <MainLayout>
      <div className={tw`grid justify-center`}>
        <ColorCanvas/>
        <ButtonBoard/>
      </div>
    </MainLayout>
  )
}

export default App