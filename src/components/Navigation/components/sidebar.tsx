import { Book, Clipboard, User } from "lucide-react";
import { Stack } from "../../Stack";

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
    return (
        <aside className="sidebar">
            <Stack align="center" gap={20}>
                <p>Bruno Dos Dos Santos</p> {/* Placeholder for user name */}

                {sidebarLinks.map(({ name, link, icon: Icon }) => (
                    <a href={link} key={name}>
                        <Stack direction="row" className="link-sidebar" align="center" gap={8}>
                            <Icon size={20} />
                            {name}
                        </Stack>
                    </a>
                ))}
            </Stack>
        </aside>
    );
};
