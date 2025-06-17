import { InputField } from "../../components/InputField"
import { Navbar } from "../../components/Navbar"

export const UploadPage = () => {
    return (
        <div className="w-full flex flex-col">
            <Navbar />

            <div className="w-full flex flex-col p-8">
                <section>
                    <form>
                        <InputField/>
                    </form>
                </section>
            </div>
        </div>
    )
}