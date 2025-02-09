import WhatsappIcon from "@/components/whatsapp-icon";
import {cn} from "@/lib/utils";

export default function WhatsappFloatingBtn(){
    return (
        <div
            className={cn("shadow-xl cursor-pointer fixed bottom-3 right-16 bg-black p-2 px-4 rounded-full text-white flex gap-2",
                "transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#01a799]")}>
            <a
                title="Contattaci su whatsapp"
                aria-label="Contattaci su whatsapp"
                href="https://wa.me/+39335453733" className="flex gap-4" target="_blank">
                <WhatsappIcon/>
            </a>
        </div>
    )
}
