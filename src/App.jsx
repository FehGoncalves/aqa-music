import { Button } from "./components/Button";



const App = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-[#2C2C2C] px-8">
      <figure className="flex items-center">
        <img src='./Logo-2.png' alt="" width={200} height={200} />
      </figure>

      <div className="my-10 w-full flex justify-center">
        <Button>Entrar</Button>
      </div>

      <article className="flex flex-col w-full items-center gap-2">
        <p className="text-[#F1F1F1]">se não tem uma conta, cadastre-se já!</p>

        <Button >Cadastre-se</Button>
      </article>



    </div>
  );
}

export default App;
