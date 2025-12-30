import { LayoutDashboard, User, BarChart3, Settings } from 'lucide-react';

const AdminData = {
    adminSidebarLinks: [
        {
            id: 1,
            label: "Dashboard",
            icon: LayoutDashboard,
        },
        {
            id: 2,
            label: "Profile",
            icon: User,
        },
        {
            id: 3,
            label: "Analytics",
            icon: BarChart3,
        },
        {
            id: 4,
            label: "Setting",
            icon: Settings,
        },
    ]
}

export { AdminData }