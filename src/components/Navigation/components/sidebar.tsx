import { Book, Clipboard, User } from "lucide";

const sidebarLinks = [
    {
        name: "Cursos",
        link: "courses",
        icon: Book,
    },
    {
        name: "Usuários",
        link: "users",
        icon: User,
    },
    {
        name: "Matrículas",
        link: "enrollments",
        icon: Clipboard,
    },
];
export const Siderbar = () => {
    return <aside className="sidebar">

    </aside>;
};
