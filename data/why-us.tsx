import { BadgeCheck, Lock, Truck } from "lucide-react";

export const whyUs = [
    {
        id: 1,
        name: "Najwyższa Jakość",
        description: "Tylko sprawdzone marki i naturalne materiały bezpieczne dla Twojego pupila.",
        icon:<BadgeCheck className="size-10" />,
    },
    {
        id: 2,
        name: "Szybka Wysyłka",
        description: "Twoje zamówienie wyślemy w ciągu 24h, aby radość nie musiała czekać.",
        icon:<Truck className="size-10" />,
    },
    {
        id: 3,
        name: "Bezpieczne Płatności",
        description: "Szyfrowane połączenia i najpopularniejsze metody płatności online.",
        icon:<Lock className="size-10" />,
    }
];