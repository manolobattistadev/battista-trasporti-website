import {PhoneIcon} from "@heroicons/react/16/solid";
import {cn} from "@/lib/utils";

export default function ContactUsFloatingBtn() {
    return (
        <a href="tel:+39335453733"
           title="Contattaci"
           aria-label="Contattaci"
           className="cursor-pointer flex gap-4">
            <div
                className={cn("z-10 shadow-xl cursor-pointer fixed top-8 right-0 bg-black p-2 px-4 rounded-tl-md rounded-bl-md text-white flex gap-2",
                    "transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-500")}>
                <PhoneIcon className="w-6"/>
                <div className="hidden sm:flex flex-col">
                    Richiedi preventivo
                    <p>+39 335453733</p>
                </div>
            </div>
        </a>
    )
}
