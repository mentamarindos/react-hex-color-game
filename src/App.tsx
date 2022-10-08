import ColorCanvas from "@/components/colorCanvas";
import { ButtonBoard} from "@/components/buttonBoard";
import { MainLayout } from '@/layouts';
import { tw } from "twind";

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